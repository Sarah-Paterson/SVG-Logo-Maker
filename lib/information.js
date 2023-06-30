const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const SVG = require("./svg");
const {CIRCLE, SQUARE, TRIANGLE} = require("./shapes");

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
      .then (({text, textColor, shape, shapeColor}) => {
        let newShape;
        console.log(shape);
        switch (shape) {
          case 'circle':
            newShape = new CIRCLE();
            break;
          case 'square':
            newShape = new SQUARE();
            break;
          default:
            newShape = new TRIANGLE();
            break;
        }

        newShape.setColor(shapeColor);

        const svg = new SVG();

        svg.setShape(newShape.render());
        svg.setText(text, textColor);

        return writeFile("logo.svg", svg.render());
      })
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = INFO;
