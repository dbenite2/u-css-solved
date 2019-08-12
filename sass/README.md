# Lesson 12: Sass: Syntactically Awesome Style Sheets

## Before                      
You should read about Sass Documentation here:

1. [Sass Basics][1]

## To Do


Using Sass (Variables, Nesting, Partials, Import, Mixins, Extend/Inheritance and Operators) follow the next steps:

1st. Add the next partial files in app/scss:
```
_variables.scss
_mixins.scss
_commons.scss
_footer.scss
_header.scc
_section.scss
```

2nd. Import in index.scss the next files:

```
_normalize.scss
_variables.scss
_mixins.scss
```

 
2nd. Create the next variables (_variables.scss):
```
Font: Helvetica, sans-serif
Base font size: 10px / 16px * 100%
Full height: 100%
Full width: 100%
Footer height: 50px
Light color: #fff
Dark color: #000
First Background: "../assets/background1.png"
Second Background: "../assets/background2.png"
Third Background: "../assets/background3.png"
 ```
 
3rd. In the mixins files add the next mixins:

- Font size mixing:
```
@mixin font-size ($sizeValue: 1.4) {
  font-size: ($sizeValue * 10) + px;
  font-size: $sizeValue + rem;
}
```

- Keyframes mixing:
```
@mixin keyframes($animation-name) {
  @keyframes #{$animation-name} {
    @content;
  }
}

@include keyframes(fade) {
  0%     { opacity: 1; }
  12.5%  { opacity: 1; }
  25%    { opacity: 1; }
  37.5%  { opacity: 0; }
  50%    { opacity: 0; }
  62.5%  { opacity: 0; }
  75%    { opacity: 0; }
  87.5%  { opacity: 0; }
  100%   { opacity: 1; }
}
```

- Delay mixin:
 ```
 @mixin delay($str) {
   animation-delay: #{$str};
 }
 ```
 
 - Delay animation:
```
@mixin animation($str) {
  animation: #{$str};
}
```

4th. Create two placeholder classes:
- general background header: include the animation mixin (fade 15s ease infinite), full height, full width.
- general gradient : background image linear-gradient(to right, $dark, transparent). 


5th. Add the next general styles:
- html: the font family, the base font size and the full height defined in variables files.
- body: use the font size mixin (1.6), background color light, color light, font weight 100, full height and lines height 1.5.
- main: display flex, flex direction column and full height.
- a: color light, text decoration none.
- ul: no margin and padding.

6th. The footer should have the next styles:
 - background: dark, 0.7 of opacity.
 - position: absolute in the bottom.
 - text alight right and centered vertically.
 - padding left and right of 10px.
 - full width.
 

7th. The header should have the next styles:
- full height.
- the logo should have 250px of width.
- the navigation links should have the a 0.7 of opacity on hover, and padding left and right of 10px.
- each background should extend from background placeholder class and before of each background extend from gradient placeholder class.
- background1: background1 defined in variables files, no reppeat, center and cover. Include the delay mixin (10s).
- background2: background2 defined in variables files, no reppeat, center and cover. Include the delay mixin (5s).
- background3: background3 defined in variables files, no reppeat, center and cover. Include the delay mixin (0s).


8th. The text section should have the next styles:
- width 40%, in the left side, centered vertically, padding left of 30px.


[1]: https://sass-lang.com/guide
