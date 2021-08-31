# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot
![Frontend Mentor  Room homepage](https://user-images.githubusercontent.com/44214523/131536310-ac9b3697-4e68-4f06-9273-c4413f577b6d.png)

### Links

- Solution URL: [view codes](https://www.frontendmentor.io/solutions/responsive-room-homepage-using-css-flexbox-and-vanilla-javascript-kB11NzD5N)
- Live Site URL: [Go live](https://vigorous-noether-686b27.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- vanilla Javascript

### What I learned

## HTML 
- How to structure markup for pages
- How to structure for mobile first responsiveness
- How to use responsive images with srcset
- when to use css back ground images versus markup img tags

## Css
- Group elements together with classes
- Write css media query for larger screens
- Interpret png designs into live web pages
- Remove extra margin in images by setting display to block
- using css transitions to control navigation display
- how to display text or images over images

```css
...
*::before {
    box-sizing: border-box;
}

:root {
    --color-white: hsl(0, 0%, 100%);
    --color-black: hsl(0, 0%, 0%);
    --
...
```
## Javascript
- Hiding and showing css classes
- toggling css classes
- setting html body to fixed when there is popup
- implement carousel with responsive images using data attributes
- using data attributes to store data like javascript data structures.

```js
    ...
      const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    })

    navOpen.addEventListener('click', () => {
       
    ...


    ...
        
    let mobileImages = 
    header.querySelector('.header__img img').getAttribute('data-carousel-mobile'),
    desktopImages = header.querySelector('.header__img img').getAttribute('data-carousel-desktop'),
    index = 0;

    //convert to array
    mobileImages = mobileImages.split(',');
    desktopImages = desktopImages.split(',');
    
    //activate carousels
    nextBtn.
    ...
```
### Continued development

- build more pages with css flexbox
- structure more advanced templates / layouts
- responsive design
- advanced dom manipulations
- basic Javascript aapplications


## Author

- Website - [Johnpaul Attamah](https://github.com/Johnpaul-Attamah)
- Frontend Mentor - [Johnpaul-Attamah](https://www.frontendmentor.io/profile/Johnpaul-Attamah)
- LinkedIn - [Johnpaul](https://www.linkedin.com/in/johnpaul-attamah-4b265983/)

