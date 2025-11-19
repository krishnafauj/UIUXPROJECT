# 🚀 YONO SBI – Modern UI/UX (React Native + Expo)

A modern, beautifully redesigned **YONO SBI mobile experience** built using **React Native**, **Expo**, and **EAS Build**.  
This project focuses heavily on **UI/UX design**, clean animations, smooth navigation, and production-ready component architecture — all inspired by SBI’s design language.

> **Note:** This is *not* an official SBI application.  
> It is a personal UI/UX project created to demonstrate frontend skills.

---

## 📱 Features

### 🔵 SBI-Themed UI System
- Clean blue header with modern rounded shapes  
- SBI-inspired color palette  
- Modern typography & icons  
- Consistent spacing, shadows, and visual hierarchy  

### 👤 Authentication Screens
- Login using **MPIN**  
- Login using **Username**  
- Quick Pay shortcuts  

### 🏠 Home Dashboard
- Collapsible groups: **Banking**, **Payments**, **Lifestyle**  
- Horizontal quick actions  
- Recent transactions  
- Full SBI branding  

### 🔍 Explore / Register Flow
- Custom onboarding screens  
- New user registration flow  

### 👤 Profile Screen
- Editable profile  
- Settings option  
- KYC-style information layout (DOB, Aadhaar, PAN, Address, etc.)

### 📂 Drawer Navigation
- Custom animated sidebar  
- Smooth open + close interactions  

### 🏗 Expo + EAS Compatible
- Custom Splash Screen  
- App Icon  
- File-based routing (Expo Router)  
- APK-ready using EAS Build  

---

## 📁 Project Structure

```bash
app/
  (tabs)/
    Home.tsx
    Explore.tsx
    Profile.tsx
  components/
    SideDrawer.tsx

assets/
  images/
    sbi.png
    logo.png
    splash-icon.png

app.json
eas.json
README.md
🛠 Getting Started
1️⃣ Install Dependencies
npm install

2️⃣ Start the App
npx expo start


You can open the application in:

Android Emulator

iOS Simulator

Expo Go (limited)

Expo Development Build

🧪 Health Check Before Building

Run Expo Doctor:

npx expo-doctor


Automatically fix dependency issues:

npx expo install

📦 Build the APK
☁️ Cloud APK (Recommended)
eas build -p android --profile preview

💻 Local APK (Requires Android SDK)
eas build -p android --profile preview --local

🖼 Screenshots

Upload your screenshots to a folder named /screenshots.

🔷 Home Screen
./screenshots/home.png

🔷 Profile Screen
./screenshots/profile.png

🔷 Login Screen
./screenshots/login.png

📝 About This Project

This project is a complete UI/UX redesign of the YONO SBI app, built to showcase modern React Native development practices.

It demonstrates:

✔ Clean UI architecture
✔ Smooth animations
✔ Modular React Native components
✔ Navigation using Expo Router
✔ Custom drawer + action cards
✔ Consistent theme system
✔ EAS Build integration

Ideal For:

UI/UX case studies

React Native portfolios

Developer job applications

Design/engineering demonstrations

🧑‍💻 Author
Krishna Faujdar

React Native Developer & UI/UX Designer

Feel free to connect & collaborate!