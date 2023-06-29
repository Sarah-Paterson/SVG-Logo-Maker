// const INFO = require('./information');
// const {CIRCLE, SQUARE, TRIANGLE} = require('./shapes');
// const inquirer = require('inquirer');
// const fs = require('fs');
// const { error } = require('console');
// const { throwError } = require('rxjs');

class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }

  setShape(shape) {
    this.shape = shape.render()
  }

  setText(text, color) {
    if (text.length > 3) {
      throw new Error ("Too many letters, please retry.")
    }
    this.text = `<text x="88" y ="150" fill = "${color}" xmlns:xlink="http://www.w3.org/1999/xlink"> ${text} </text>`
  }

  render() {
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shape}
    ${this.text}
    <style>
      <![CDATA[
        text{
          font: 100px Verdana, Helvetica, Arial, sans-serif;
        }
      ]]>
    </style>
    </svg>`
  }
}

module.exports = SVG;



// const generateSVG = (text, textColor, shapeColor, shapeChoise) => 
//   `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <${shapeChoise} fill="${shapeColor}"/>
//   <text>
//     <textPath xmlns:xlink="http://www.w3.org/1999/xlink">
//       ${text}
//     </textPath>
//   </text>
  
//   <style>
//     <![CDATA[
//       text{
//         font: 28px Verdana, Helvetica, Arial, sans-serif;
//         color: ${textColor};
//       }
//     ]]>
//   </style>
//   </svg>
//   `;

// module.exports = { generateSVG };