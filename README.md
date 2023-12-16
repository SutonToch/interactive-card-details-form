
# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [Potential further development](#potential-further-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

TODO
![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://sutontoch.github.io/interactive-card-details-form/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- CSS Grid
- [Vite](https://vitejs.dev/) - local development server
- [React](https://reactjs.org/) - JS library

### What I learned

Deepened my understanding of:
- REGEX
- Manipulation of Objects within Objects
- Form Validation in general

Learned:
- border-color can't have linear-gradient() since it's not a background
- border-image exists and can't have border-radius since it's not a border

### Potential further development

- Clean up SCSS and add maybe add more variables
- Rethink naming pattern (a-b, aB, a_b). The way it is now, makes sense to me but probably nobody else.
- Maybe redo the positioning, such that the background image has 'position: absolute;' instead of the cards.

### Useful resources

- [regex101](https://regex101.com/) - This helped me building the regex for the form.

## Author

- Frontend Mentor - [@SutonToch](https://www.frontendmentor.io/profile/SutonToch)
