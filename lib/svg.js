const INFO = require('./information');
const inquirer = require('inquirer');
const fs = require('fs');

class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }
}



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