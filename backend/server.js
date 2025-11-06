
import express from "express";
import cors from "cors";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

const app = express();
app.use(cors());
app.use(express.json());

const portPath = "/dev/ttyACM0"; 
const arduino = new SerialPort({ path: portPath, baudRate: 9600 });
const parser = arduino.pipe(new ReadlineParser({ delimiter: "\n" }));

let lastStatus = "LED_OFF";

parser.on("data", (data) => {
  const trimmed = data.trim();
  console.log("Arduino says:", trimmed);
  lastStatus = trimmed;
});

app.post("/device", async (req, res) => {
  const { command } = req.body;

  if (command !== "ON" && command !== "OFF") {
    return res.status(400).json({ error: "Invalid command" });
  }

  try {
    console.log(`Sending command: ${command}`);
    arduino.write(`${command}\n`);

    const status = await new Promise((resolve) => {
      parser.once("data", (data) => resolve(data.trim()));
    });

    lastStatus = status;
    res.json({ status });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to send command" });
  }
});

app.get("/status", (req, res) => {
  res.json({ status: lastStatus });
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
