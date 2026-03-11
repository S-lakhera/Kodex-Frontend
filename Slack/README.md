# Slack Clone - AI Work Platform & Productivity Tools

A high-fidelity frontend clone of the Slack landing page, built during the **Kodex Bootcamp (Sheriyansh Coding School)**. This project demonstrates the transition from static layout design to dynamic, user-centric web engineering.

## Overview
This project is part of a 21-day coding challenge. While the initial focus was on mastering **Tailwind CSS v4**, the project evolved into a deep dive into **Vanilla JavaScript** and **DOM Manipulation** to replicate Slack's premium user experience.

## Tech Stack
- **HTML5**
- **Tailwind CSS v4** (Utility-first styling)
- **Vanilla JavaScript** (DOM API & Event Handling)
- **Remix Icons** (Iconography)

## Key Features
- **Smart Navigation:** A scroll-aware sticky navbar that hides on scroll-down and reveals on scroll-up to optimize screen real estate.
- **Mega Menus:** Dynamic, hover-triggered navigation menus for Features, Solutions, and Resources with synchronized icon rotations.
- **Tabbed Content Switcher:** A functional "Plan Launches" gallery using Data-Attributes and State Management logic.
- **Interactive Modal:** A "Get Started" lead-generation modal implemented via Event Delegation.
- **Dynamic Accordion:** Footnotes/Sources section using `scrollHeight` for smooth, non-fixed-height animations.
- **Fully Responsive:** Optimized for all screen sizes (Mobile, Tablet, Desktop) using Tailwind’s mobile-first breakpoints.

##  Engineering Highlights
- **Event Delegation:** Optimized the Modal trigger to listen at the document level, reducing memory overhead.
- **DOM Performance:** Leveraged `IntersectionObserver` logic and class toggling over inline styling for better performance.
- **Responsive Architecture:** Implemented a custom mobile navigation drawer for seamless small-screen browsing.


##  Setup
1. Clone the repository: `git clone https://github.com/your-username/slack-clone.git`
2. Open `index.html` in your browser (Live Server recommended).