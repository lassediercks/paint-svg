# paint-svg

Create a svg in node

## Example

```js

var paintSvg = require('paint-svg')

var name = 'paint-svg';
paintSvg(
  name,
  "width='200' height='200'",
  ' <circle fill="#232021" cx="100" cy="100" r="88"/>\
    <text transform="matrix(1 0 0 1 49.5848 89.9571)">\
      <tspan x="0" y="0" fill="#FFFFFF" font-family="Baskerville" font-size="34">PAINT</tspan>\
      <tspan x="0" y="40" fill="#FFFFFF" font-family="Baskerville-Bold" font-size="50">SVG</tspan>\
    </text>',
  console.log("Created " + name)
);



);


```

## Installation

`npm install paint-svg`

## MIT Licenced