# HTML AND CSS REVIEW

## HTML

```html
<html> </html>
```

- elements are the opening and closing tags

```html
<html lang="eng">
```
- attributes are specifics of tags
- syntax is name and value used with = and ""

```html
<head> </head>
```
- describes what is going to be in the html file


 ```html
 <meta charset="utf-8">
 ```
- tells browser how to read
- in head tag

```html
meta name="description" content="blah blah"
```
- gives a description of site on browsers
- in head tag

```html
<body> </body>
```
- what is shown on the page

```html
<nav>
  <a href="about.html">about</a>
</nav>
```
- nav is parent tag a is chila

## CSS

```html
<link rel="stylesheet" href="styles.css">
```
- links to a style sheet in html
- put in head tag

```css
a {
  color:red;
  font-family:fantasy;
}
```
- a is a css selector
- characteristics in brackets
- syntax name and value used with : ;

```html
<a style="color:blue">
```
- overrides css in html for unique style

```css
.red-fantasy{
  color: red;
  font-family: red;
}
<a class="red-fantasy">
```
- this is a class to apply to multiple elements
- add class attribute to html tags

```css
a:hover {
  color:purple;
}
```
- applies the characteristics only in certain situations

```css
#top{
  background-color:#ccc;
}

<header id="top">
```
- ids are for one element only

Block elements will take up whole width of page
inline elements will be stacked around each other
