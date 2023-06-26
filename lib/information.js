const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


// const { join } = require('path');
// const { writeFile } = require('fs/promises');
// const { createDocument } = require('./document');

class INFO {
//   constructor() {
//     this.title = '';

//     // Array of task objects e.g. [{ text: string, priority: bool }, ...]
//     this.tasks = [];
//   }
//   run() {
//     return inquirer
//       .prompt([
//         {
//           type: 'input',
//           name: 'name',
//           message: 'Please enter your name',
//         },
//       ])
//       .then(({ name }) => {
//         this.title = `${name}'s Tasks`;
//         return this.logoInfo();
//       })
//       .then(() => {
//         // sort by priority so that priority tasks come before non-priority tasks
//         this.tasks.sort((a, b) =>
//           a.priority === b.priority ? 0 : a.priority && !b.priority ? -1 : 1
//         );
//         return writeFile(
//           join(__dirname, '..', 'output', 'tasks.html'),
//           createDocument(this.title, this.tasks)
//         );
//       })
//       .then(() => console.log('Created tasks.html'))
//       .catch((err) => {
//         console.log(err);
//         console.log('Oops. Something went wrong.');
//       });
//   }

  logoInfo() {
    return inquirer
      .prompt([
        {
          type: 'maxlenght-input',
          name: 'text',
          message: 'Please enter up to three letters for your logo.',
          maxLength: 3
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
    //   .then(({ text, priority, confirmlogoInfo }) => {
    //     this.tasks.push({ text, priority });
    //     if (confirmlogoInfo) {
    //       return this.logoInfo();
    //     }
    //   });
  }
}

module.exports = INFO;
