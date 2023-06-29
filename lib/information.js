const inquirer = require('inquirer');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { generateSVG } = require('./svg');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

class INFO {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'maxlength-input',
          name: 'text',
          message: 'Please enter up to three letters for your logo.',
          maxLength: 3,
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Please enter a color keyword or a hexadecimal number for the text color.',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Which shape would you like your logo?',
          choices: [
            'circle',
            'triangle',
            'square',
          ]
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color keyword or a hexadecimal number for the shape color.',
          },
      ])
      .then(({shape, text, textColor, shapeColor}) => {
        let shapeChoise;
        if (shape == "square") {
            shapeChoise = 'rect x="10" y="10" width="30" height="30"';
            console.log("It's a square!");
        } else if (shape == "triangle") {
            shapeChoise = 'polygon points="150, 18 244, 182 56, 182"';
            console.log("It's a triangle!");
        } else if (shape == "circle") {
            shapeChoise = 'circle cx="25" cy="75" r="20"';
            console.log("It's a circle!");
        } else {
          console.log(shape);
            console.log("There was an error determining the shape. Please try agin.");
        };

        console.log(text, textColor, shapeColor, shapeChoise);
        const newSVG = generateSVG(text, textColor, shapeColor, shapeChoise);
    
        fs.writeFile('logo.svg', newSVG, (err) =>
          err ? console.log(err) : console.log('Successfully created logo.svg!')
        );
      })
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = INFO;
