# 🔧 Automated Device Control System

A full-stack IoT project that allows users to remotely **control an Arduino-connected LED** using a **modern web dashboard** built with **React (Vite + Tailwind CSS)** and a **Node.js + Express backend**.  
This project demonstrates integration between hardware (Arduino) and software (web technologies) — perfect for showcasing full-stack and IoT skills.

---

## 🚀 Features

- 🌐 **Web Dashboard** built with React + TailwindCSS  
- ⚡ **Instant Communication** between frontend, backend, and Arduino  
- 💡 Control LED **ON / OFF** in real-time  
- 🔄 **Live Status Updates** displayed on the UI  
- 🧱 Modular backend using Express + SerialPort  
- 🛠️ Works on Linux, Windows, and macOS  

---

## 🧠 Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS (modern `@tailwindcss/vite` plugin)
- Fetch API

**Backend**
- Node.js + Express
- SerialPort (`@serialport`)
- CORS middleware

**Hardware**
- Arduino Uno / Nano
- LED (with 220Ω resistor)
- USB serial communication

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Caren-Mwaka/automated-device-control.git
cd automated-device-control
