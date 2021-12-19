# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Light red (CTA text): hsl(356, 100%, 66%)
- Very light red (CTA hover background): hsl(355, 100%, 74%)
- Very dark blue (headings): hsl(208, 49%, 24%)

### Neutral

- White (text): hsl(0, 0%, 100%)
- Grayish blue (footer text): hsl(240, 2%, 79%)
- Very dark grayish blue (body copy): hsl(207, 13%, 34%)
- Very dark black blue (footer background): hsl(240, 10%, 16%)

### Gradient

Background gradient - Intro/CTA mobile nav:

- Very light red: hsl(13, 100%, 72%)
- Light red: hsl(353, 100%, 62%)

Background gradient - body:

- Very dark gray blue: hsl(237, 17%, 21%)
- Very dark desaturated blue: hsl(237, 23%, 32%)

## Typography

### Body Copy

- Font size: 16px

### Fonts

- Family: [Overpass](https://fonts.google.com/specimen/Overpass?preview.text_type=custom)
- Weights: 300, 600

- Family: [Ubuntu](https://fonts.google.com/specimen/Ubuntu?preview.text_type=custom)
- Weights: 400, 500, 700

.btn1{
      background: none;
      border: none;
      color: #fff;
      display: inline;
      font-size: 16px;
      font-family: 'Overpass', sans-serif;

    }
    .btn1:hover{
      border-bottom: 1px solid white;
      transition: .5s;
    }
    .nav-content a{
      text-decoration: none;
      color: #000;
      display: block;
      width: 70px;
      line-height: 25pt;
      font-weight: 300;
    }
    .nav-content a:hover{
      font-weight: 600;
    }
    .nav-content{
      visibility: hidden;
      background: white;
      width: 110px;
      height: 160px;
      border-radius: 5px;
      padding-top:  20px ;
      padding-left: 15px;
      padding-bottom: 20px;
      margin-top: 10px;
    }
    .sub-nav:hover .nav-content{
      visibility: visible;
    }