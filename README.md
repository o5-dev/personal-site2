<h1 align="center">Personal Site</h1>

<p align="center">
  <em>i make things &amp; break them</em>
</p>

<p align="center">
  <a href="https://o5-dev.github.io/personal-site/"><img src="https://img.shields.io/badge/Open_the_site-Personal_site-2563eb?style=for-the-badge" alt="Open the site"></a>
  <a href="https://stardance.hackclub.com/projects/71223"><img src="https://img.shields.io/badge/Stardance-Hack_Club_listing-ec3750?style=for-the-badge" alt="Project listing on Stardance by Hack Club"></a>
</p>

A single-page personal site for my maker projects. It covers who I am, what I build, a playable Snake game I wrote from scratch, and how to reach me. I designed the whole thing in Figma first and then built it by hand in plain HTML, CSS and JavaScript.

Made for [Hack Club Stardance](https://stardance.hackclub.com/projects/71223).

## Table of contents

- [Why I made it](#why-i-made-it)
- [Sections](#sections)
- [Features](#features)
- [Snake game](#snake-game)
- [Design](#design)
- [Built with](#built-with)
- [Project structure](#project-structure)
- [Deployment](#deployment)
- [What I learned](#what-i-learned)
- [Possible future work](#possible-future-work)


## Why I made it

I build a lot of hardware and software projects (ESP32 gadgets, CNC and plotter machines, web apps), but they were scattered across repos and chats. I wanted one place that shows who I am and what I make, and a small project where every line of code is mine.

## Sections

1. **Hero**: my name, the tagline and quick links.
2. **About**: a short intro about me and what I like building.
3. **Projects**: a selection of things I have made.
4. **Snake**: a playable game embedded right in the page.
5. **Contact**: icon buttons linking to where you can find me.

## Features

- Smooth scrolling between sections
- Snake game written in plain JavaScript: movement, food, score, wall collisions and restart
- Icon buttons using Bootstrap Icons, wrapping onto new rows on narrow screens
- Centered, responsive single-column layout with consistent spacing
- Works on desktop and mobile, no horizontal scrolling
- No frameworks, no build step, no dependencies to install
- Fast load: a handful of static files and one web font

## Snake game

The game is a from-scratch implementation, not a library.

- **Controls:** arrow keys (or WASD) to steer
- **Goal:** eat food to grow and raise your score
- **Game over:** hitting a wall (or yourself) ends the round
- **Restart:** press the restart button to play again
- **How it works:** the game keeps the snake as an array of grid cells and advances it on a fixed timer. Each tick it moves the head, checks for food and collisions, and redraws the board.

## Design

The layout and visuals were designed by me in Figma before any code was written. The goals were a clean, centered look, plenty of spacing, readable type and a single accent colour so the page feels consistent from top to bottom.

## Built with

- **HTML**, **CSS** and **JavaScript**
- [Bootstrap Icons](https://icons.getbootstrap.com/) for the button icons
- [Google Fonts: Inter](https://fonts.google.com/specimen/Inter) for typography
- **Figma** for the design
- **GitHub Pages** for hosting

## Project structure

```
personal-site/
├── index.html     # page structure and content
├── style.css      # layout, colours, responsive rules
├── script.js      # smooth scrolling and the Snake game
└── README.md
```

## Deployment

The site is hosted on GitHub Pages and updates every time I push to the main branch: https://o5-dev.github.io/personal-site/

## What I learned

- Turning a Figma design into responsive HTML and CSS
- Making a layout that wraps cleanly on narrow screens
- Building a game loop, input handling and collision detection in plain JavaScript
- Keeping a project simple by using no framework

## Possible future work

- High score saved in `localStorage`
- Touch / swipe controls for Snake on phones
- Light and dark theme toggle
- More project pages with photos and write-ups
- Difficulty levels (snake speed) for the game
