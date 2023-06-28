const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

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
      .then(({ text, textColor, shape, shapeColor }) => {
        if (confirmlogoInfo) {
          return this.logoInfo();
        }
      });
  }
}

const info = new INFO;
info.run();

module.exports = INFO;
