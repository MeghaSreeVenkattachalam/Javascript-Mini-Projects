# 🕉️ Varanasi Tourism Tabs

A dynamic, tab-based information portal about Varanasi, showcasing the city's history, best travel times, and top attractions using interactive UI components.

## 🔗 Live Demo
👉 [https://your-varanasi-tabs.ccbp.tech](https://mgvaranasitabs.ccbp.tech)

## 🚀 Features
- **Tabbed Navigation:** Switch between "About", "Time to Visit", and "Attractions" without reloading the page.
- **Dynamic Content Toggling:** Uses JavaScript to show and hide specific content sections seamlessly.
- **Active State Styling:** The selected tab is visually highlighted to improve user experience.
- **Responsive Layout:** Optimized for all screen sizes using Bootstrap's grid system and flexbox.

## 🛠 Technologies Used
- **HTML5:** Semantic structure for travel information.
- **CSS3:** Custom styling for tabs, containers, and typography (Roboto).
- **Bootstrap 4.5:** Responsive utility classes (`d-none`, `d-block`, `d-flex`).
- **JavaScript (ES6):** Logic for event listeners and CSS class manipulation.

## 📚 What I Learned
- **CSS Class Toggling:** Using `classList.add()` and `classList.remove()` to control visibility via `d-none`.
- **UI State Management:** Manually updating button styles to reflect the "active" or "selected" state.
- **Bootstrap Grid:** Creating a layout where an image and text content sit side-by-side on large screens but stack on mobile.
- **Event Handling:** Linking multiple buttons to specific functions to update the DOM.

## 🖥️ Project Structure
```text
├── index.html   # HTML structure with Bootstrap integration
├── style.css    # Custom styling for tab containers and buttons
└── script.js   # Tab switching logic and class manipulation
