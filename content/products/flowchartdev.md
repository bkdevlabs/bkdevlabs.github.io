---
title: "Flowchart.dev"
date: 2025-06-08T10:00:00-05:00
draft: false
featured: true
description: "A modern web-based flowchart drawing application. Create, share, and collaborate on flowcharts with ease."
version: "1.0"
status: "Production Ready"
pricing: "Free"
features: ["Intuitive Drag-and-Drop Editor", "Export as PNG", "Embed as code", "Keyboard Shortcuts"]
github_link: "https://github.com/bkdevlabs/flowchart.dev"
product_link: "https://flowchart.dev/"
documentation_link: "https://github.com/bkdevlabs/flowchart.dev/blob/main/README.md"
icon: "/assets/images/icons/flowchartdev.svg"
---

## Flowchart.dev

Flowchart.dev is a modern, web-based flowchart drawing application that allows users to create professional diagrams using ANSI standard flowchart symbols. Built with vanilla JavaScript and HTML5 Canvas, it offers a clean, intuitive interface with powerful features like zoom controls, undo/redo functionality, and multiple export options.

## Why?

I am a great fan of draw.io and diagrams.net and this is inspired by those tools. I wanted to create a flowchart tool that is simple, fast, and easy to use, while still being powerful enough for complex diagrams. Flowchart.dev is designed to be lightweight and efficient, making it perfect for quick diagramming tasks without the bloat of larger applications.

## Features

### 🎨 ANSI Standard Flowchart Symbols
- **Process** - Rectangle for general processing steps
- **Decision** - Diamond for decision points and conditionals
- **Terminal** - Rounded rectangle for start/end points
- **Input/Output** - Parallelogram for data input/output operations
- **Document** - Document shape with wavy bottom
- **Data** - Parallelogram skewed right for data storage
- **Predefined Process** - Rectangle with vertical lines for subroutines
- **Connector** - Circle for connecting flow between pages

### 🔧 Core Functionality
- **Drag & Drop Interface** - Simply drag symbols from the toolbar onto the canvas
- **Smart Connectors** - Draw arrows and lines between shapes with automatic attachment points
- **Property Editor** - Customize colors, text, and dimensions for each element
- **Zoom Controls** - Zoom in/out up to 300% with mouse wheel or buttons
- **Pan Navigation** - Navigate large diagrams with Shift+drag or middle mouse button
- **Undo/Redo** - Up to 50 levels of undo/redo history
- **Auto-Save History** - Never lose your work with automatic state management

### 📤 Export & Sharing Options
- **PNG Export** - Download your flowchart as a high-quality PNG image
- **Embed Code** - Generate HTML, Base64, or Markdown embed codes
- **Clean Export** - Exports without UI elements or selection highlights

## Usage Guide

### Creating a Flowchart

1. **Add Shapes**
   - Drag any symbol from the left toolbar onto the canvas
   - Shapes will snap to a grid for easy alignment

2. **Connect Shapes**
   - Click the "Draw Arrow" or "Draw Line" button in the toolbar
   - Click on the starting shape (connection points will appear)
   - Click on the ending shape to create a connection

3. **Edit Elements**
   - Click any shape to select it
   - Use the properties panel on the right to modify:
     - Text content
     - Fill color
     - Stroke color
     - Text color
     - Width and height
   - Double-click shapes to quickly edit text

4. **Navigate the Canvas**
   - **Zoom**: Ctrl/Cmd + Mouse wheel, or use zoom buttons
   - **Pan**: Shift + drag, or middle mouse button
   - **Reset View**: Click "Reset" in zoom controls

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Delete` / `Backspace` | Delete selected element |
| `Ctrl/Cmd + Z` | Undo |
| `Ctrl/Cmd + Y` | Redo |
| `Ctrl/Cmd + Shift + Z` | Redo (alternative) |
| `Ctrl/Cmd + E` | Export as PNG |
| `Ctrl/Cmd + Plus` | Zoom in |
| `Ctrl/Cmd + Minus` | Zoom out |
| `Ctrl/Cmd + 0` | Reset zoom to 100% |
| `Escape` | Cancel connector drawing / Close modal |

### Exporting Your Flowchart

#### As PNG Image
1. Click the "Export as PNG" button
2. The flowchart will be downloaded with a timestamp filename

#### For Web Embedding
1. Click the "Embed Code" button
2. Choose your preferred format:
   - **HTML**: Complete `<img>` tag with embedded base64 data
   - **Base64**: Raw base64 data URL for custom implementations
   - **Markdown**: Markdown syntax for documentation
3. Click "Copy" to copy the code to clipboard
4. Paste into your website, documentation, or application

## Technical Details

### Browser Requirements
- All modern browsers supported (Chrome, Firefox, Safari, Edge)
- Canvas API support required

### Architecture
- **No Dependencies**: Pure vanilla JavaScript implementation
- **Modular Design**: Separated into logical modules for maintainability
- **Canvas-Based**: Leverages HTML5 Canvas for smooth rendering
- **State Management**: Centralized state with history tracking


Flowchart.dev is built with the goal of making flowchart creation simple, intuitive, and powerful. Happy flowcharting!  🚀