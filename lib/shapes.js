const INFO = require('./information');


class SHAPE {
    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color = color
    }
}

class CIRCLE extends SHAPE {
    render() {
        return `<circle cx="25" cy="75" r="20" fill ="${this.color}"/>`
    }
}

class SQUARE extends SHAPE {
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill ="${this.color}"/>`
    }
}

class TRIANGLE extends SHAPE {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill ="${this.color}"/>`
    }
}

module.exports = {CIRCLE, SQUARE, TRIANGLE}


// class SHAPE {
//     constructor(shape) {
//       this.shape = shape;
//     };

//     getInfo() {
//         const info = new INFO;
//         info.run();
//     }

//     shapeTest(({shape, text, textColor, shapeColor}) => {
//         let shapeChoise;
//         if (shape == "square") {
//             shapeChoise = 'rect x="10" y="10" width="30" height="30"';
//             console.log("It's a square!");
//         } else if (shape == "triangle") {
//             shapeChoise = 'polygon points="150, 18 244, 182 56, 182"';
//             console.log("It's a triangle!");
//         } else if (shape == "circle") {
//             shapeChoise = 'circle cx="25" cy="75" r="20"';
//             console.log("It's a circle!");
//             console.log(text, textColor, shapeColor, shapeChoise);
//         } else {
//           console.log(shape);
//             console.log("There was an error determining the shape. Please try agin.");
//         };
//       })
// }

// const shapeTest = ((answers) => {
//     // let shapeChoise;
//     // const shape = INFO.shape;
//     if (shape == "square") {
//         shapeChoise = 'rect x="10" y="10" width="30" height="30"';
//         console.log("It's a square!");
//     } else if (shape == "triangle") {
//         shapeChoise = 'polygon points="150, 18 244, 182 56, 182"';
//         console.log("It's a triangle!");
//     } else if (shape == "circle") {
//         shapeChoise = 'circle cx="25" cy="75" r="20"';
//         console.log("It's a circle!");
//     } else {
//         console.log(shape);
//         console.log("There was an error determining the shape. Please try agin.");
//     };
//   })
  
// module.exports = { shapeTest };



// <?xml version="1.0" standalone="no"?>
// <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

//   <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
//   <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

//   <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
//   <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

//   <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
//   <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
//       stroke="orange" fill="transparent" stroke-width="5"/>

//   <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
//       stroke="green" fill="transparent" stroke-width="5"/>

//   <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
// </svg>

