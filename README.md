<div align="center">

<br />

# ✦ Focus
### A minimal, priority-driven task manager built with React

<br />

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

<br />

**[🚀 Live Demo](https://vercel.com/gwdev904s-projects/focus-task-manager)** &nbsp;&nbsp;·&nbsp;&nbsp; **[View Code](https://github.com/GWDev904/focus-task-manager)**

<br />

![Focus Task Manager Preview](https://placehold.co/800x450/0f0f13/7c6af5?text=Focus+—+Task+Manager&font=raleway)

<br />

</div>

---

## Overview

Focus is a clean, dark-themed task manager that lets you organize your work by priority, track your progress with a live stats bar, and persist everything automatically to localStorage — no backend, no account, no friction.

Built as part of a 3-project React portfolio to demonstrate core React fundamentals including component architecture, hooks, controlled inputs, and derived state.

---

## Features

| | Feature |
|---|---|
| ✅ | Add tasks with **low / medium / high** priority labels |
| 🔍 | Filter view by **All · Active · Completed** |
| 📊 | Live **progress bar** and active/done counters |
| 💾 | **localStorage** persistence — survives page refresh |
| 🗑️ | Delete tasks individually or **clear all completed** |
| ✨ | Smooth slide-in animations on task entry |

---

## Tech Stack

| Technology | Role |
|---|---|
| **React 18** | UI framework |
| **useState / useEffect** | State management & side effects |
| **localStorage** | Client-side data persistence |
| **CSS Custom Properties** | Design tokens & theming |
| **Vite** | Dev server & build tool |

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/GWDev904/focus-task-manager.git
cd focus-task-manager

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
focus-task-manager/
├── index.html
├── vite.config.js
└── src/
    ├── App.jsx              ← Root component & state
    ├── index.css            ← Global styles & design tokens
    └── components/
        ├── TaskInput.jsx    ← Add task form + priority selector
        ├── TaskList.jsx     ← Renders list or empty state
        ├── TaskItem.jsx     ← Individual task row
        ├── FilterBar.jsx    ← All / Active / Completed tabs
        └── StatsBar.jsx     ← Progress bar & counters
```

---

## React Concepts Demonstrated

- **Functional components** with hooks (`useState`, `useEffect`)
- **Controlled inputs** — form state fully driven by React
- **Derived state** — filter applied at render time, not duplicated in state
- **Side effects** — `useEffect` syncs state to localStorage on every change
- **Props & component composition** — logic in `App`, display in child components
- **Conditional rendering** — empty state and clear button appear contextually
- **List rendering** — stable `key` props on every mapped element

---

## Part of a 3-Project React Portfolio

| Project | Description | Demo |
|---|---|---|
| **✦ Focus** *(this repo)* | Task manager — hooks, localStorage | [Live](#) |
| **◈ Ledger** | Finance dashboard — useMemo, data viz | [Live](#) |
| **⬡ Nexus** | Community feed — Context API, useReducer | [Live](#) |

---

<div align="center">

Built by **[Garrett Walker](https://github.com/GWDev904)** &nbsp;·&nbsp; [LinkedIn](https://www.linkedin.com/in/gwdev904/)

</div>
