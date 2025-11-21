<div align="center">
  <br />
    <a href="https://github.com/Itssanthoshhere/FigPro" target="_blank">
      <img src="https://github.com/JavaScript-Mastery-Pro/figma-ts/assets/151519281/e03dc22d-0f45-464b-9dc3-f01f07906bee" alt="Project Banner">
    </a>
  <br />
<!-- Tech Stack Badges -->

<div>

<img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/-Liveblocks-000000?style=for-the-badge&logo=liveblocks&logoColor=white"/>
<img src="https://img.shields.io/badge/-Fabric.js-FF6D00?style=for-the-badge&logoColor=white"/>
<img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
<img src="https://img.shields.io/badge/-Shadcn/UI-000000?style=for-the-badge&logoColor=white"/>
</div>

<h3>🎨 FigPro – A Real-Time Figma-Style Collaborative Design App</h3>

<b>A fully interactive, real-time canvas-based design platform</b> built using <b>Next.js + Fabric.js + Liveblocks</b> — supporting live cursors, drawing, shapes, comments, reactions, history, and multi-user collaboration.<br/> <i>Designed to feel like Figma, built for the web.</i>

  <a href="https://quick-show-ticketbooking.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-brightgreen?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</div>

---

# 📋 **Table of Contents**

- [✨ Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
- [🎨 Core Features](#-core-features)
- [🤸 Quick Start](#-quick-start)
- [🧱 Project Structure](#-project-structure)
- [🧠 Architecture Overview](#-architecture-overview)
- [🚀 Future Enhancements](#-future-enhancements)
- [🤝 Contribution](#-contribution)
- [🔗 Contacts](#-contacts)
- [📄 License](#-license)
- [🙏 Acknowledgements](#-acknowledgements)
- [⭐ Show Your Support](#-show-your-support)

---

# ✨ **Introduction**

**FigPro** is a **real-time collaborative design tool** inspired by Figma.

It supports:

- Real-time drawing
- Shape creation & editing
- Image upload
- Multi-user cursors & cursor chat
- Comment threads
- Reactions
- Undo/Redo
- Canvas history tracking
- Exporting designs

All backed by **Liveblocks** for real-time communication and **Fabric.js** for canvas rendering.

This project showcases:

- Advanced React hooks
- Canvas rendering logic
- Real-time state syncing
- Design tooling architecture

---

# ⚙️ **Tech Stack**

### 🖥️ Frontend

- **Next.js** – App Router + SSR/CSR
- **TypeScript** – Strict type safety
- **Fabric.js** – Canvas engine
- **Tailwind CSS** – Styling
- **Shadcn/UI** – Accessible UI components
- **Radix UI** – Low-level UI primitives

### 🔗 Real-Time Layer

- **Liveblocks**

  - Presence (cursors, chat)
  - Storage (canvas objects)
  - Broadcast events
  - Comments & threads

### 📦 Additional Tools

- **UUID** – Unique object IDs
- **JSPDF** – Export canvas to PDF

---

# 🔋 **Core Features**

### 🖱️ **1. Multi-User Live Cursors**

- Each user sees real-time cursor positions of others
- Includes cursor chat bubbles

### 💬 **2. Comment Threads**

- Pin comments anywhere on the canvas
- Threaded conversations
- Resolved/unresolved states

### 😀 **3. Reactions**

- Floating emoji reactions
- Real-time broadcasts

### ✏️ **4. Drawing Tools**

- Freeform drawing (path creation)
- Real-time syncing of generated paths
- Brush styling support

### 🟦 **5. Shapes**

- Rectangle
- Circle
- Line
- Triangle
- Customizable using the side panel:

  - Color
  - Width & height
  - Stroke
  - Font properties (for text)

### 🖼️ **6. Image Upload**

- Upload PNG/JPG to canvas
- Resize, move, modify

### 🎛️ **7. Properties Panel**

- Live object selection
- Edit:

  - Dimensions
  - Colors
  - Fonts
  - Stroke
  - Z-index

### 🔁 **8. Undo / Redo**

- Full undo/redo support using Liveblocks history

### ⌨️ **9. Keyboard Shortcuts**

- Copy
- Paste
- Delete
- Undo
- Redo
- Trigger chat / reaction menus

### 💾 **10. Export**

- Export entire canvas as a PDF or image

### 🗂️ **11. Canvas History**

- Track all actions
- Cleanup/reset the board

And many more advanced features built with a clean, scalable architecture.

---

# 🤸 **Quick Start**

### **Prerequisites**

Make sure the following are installed:

- **Git**
- **Node.js**
- **npm / yarn / pnpm**

---

### **1️⃣ Clone Repository**

```bash
git clone https://github.com/Itssanthoshhere/FigPro.git
cd FigPro
```

---

### **2️⃣ Install Dependencies**

```
npm install
```

---

### **3️⃣ Configure Environment Variables**

Create `.env.local`:

```
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
```

Get your key from **[https://liveblocks.io](https://liveblocks.io)**

---

### **4️⃣ Run the App**

```
npm run dev
```

Visit: **[http://localhost:3000](http://localhost:3000)**

---

# 🧱 **Project Structure**

```
FigPro/
│── app/
│   ├── page.tsx
│   ├── Room.tsx
│   ├── CollaborativeApp.tsx
│   └── layout.tsx
│
│── components/
│   ├── canvas/
│   ├── comments/
│   ├── cursor/
│   ├── reaction/
│   ├── settings/
│   ├── ui/
│   ├── users/
│   ├── LeftSidebar.tsx
│   ├── RightSidebar.tsx
│   └── Navbar.tsx
│
│── lib/
│   ├── canvas.ts
│   ├── shapes.ts
│   ├── key-events.ts
│   ├── utils.ts
│   └── useMaxZIndex.ts
│
│── liveblocks.config.ts
│── package.json
│── tailwind.config.js
└── README.md
```

---

# 🧠 **Architecture Overview**

### **Canvas Engine (Fabric.js)**

Handles:

- Object creation
- Rendering
- Selections
- Transformations
- Events (path:created, object:modified, scaling, movement)

### **Real-Time Sync Layer (Liveblocks)**

Handles:

- Presence (`cursor`, `message`)
- Storage (`LiveMap` of canvas objects)
- Events (reactions)
- Comments & threads

### **UI Layer**

- Shadcn for components
- Tailwind for layout/styling
- Custom panels for shapes and attributes

---

# 🚀 **Future Enhancements**

- 🧩 Add grouping/ungrouping support
- 📐 Add advanced pen tool
- 🌗 Add dark/light theme toggle
- 🎞️ Add multi-page canvases
- 📦 Integrate cloud exports
- 🤝 Add collaboration permissions

---

# 🤝 **Contribution**

Contributions are welcome!

```bash
git checkout -b feature/my-feature
git commit -m "feat: add awesome feature"
git push origin feature/my-feature
```

Submit a pull request 🚀

---

# 🔗 **Contacts**

- **GitHub:** [Itssanthoshhere](https://github.com/Itssanthoshhere)
- **LinkedIn:** [Santhosh VS](https://www.linkedin.com/in/thesanthoshvs/)

---

# 📄 **License**

This project is for **educational, learning, and portfolio purposes only.**

---

# 🙏 **Acknowledgements**

- **Liveblocks** – Collaboration API
- **Fabric.js** – Canvas framework
- **Shadcn/UI** – UI toolkit
- **Next.js** – React framework

---

# ⭐ **Show Your Support**

If you found this project helpful or inspiring —
**please give it a ⭐ on GitHub!**

---
