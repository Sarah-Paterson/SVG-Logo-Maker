const SVG = require('./svg');

describe('SVG', () => {

    it('should render a shape (circle), text (slr), and text color (yellow)', () => {
        const svg = new SVG();
        svg.setShape('<circle cx="150" cy="100" r="80" fill ="blue"/>');
        svg.setText("slr", "yellow")
        expect(svg.render()).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill ="blue"/>
    <text x="88" y ="150" fill = "yellow" xmlns:xlink="http://www.w3.org/1999/xlink"> slr </text>
    <style>
      <![CDATA[
        text{
          font: 100px Verdana, Helvetica, Arial, sans-serif;
        }
      ]]>
    </style>
    </svg>`);
    });

    it('should render a shape (square), text (slr), and text color (yellow)', () => {
        const svg = new SVG();
        svg.setShape('<rect x="75" y="20" width="150" height="150" fill ="blue"/>');
        svg.setText("slr", "yellow")
        expect(svg.render()).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="20" width="150" height="150" fill ="blue"/>
    <text x="88" y ="150" fill = "yellow" xmlns:xlink="http://www.w3.org/1999/xlink"> slr </text>
    <style>
      <![CDATA[
        text{
          font: 100px Verdana, Helvetica, Arial, sans-serif;
        }
      ]]>
    </style>
    </svg>`);
    });

    it('should render a shape (triangle), text (slr), and text color (yellow)', () => {
        const svg = new SVG();
        svg.setShape('<polygon points="150, 18 244, 182 56, 182" fill ="blue"/>');
        svg.setText("slr", "yellow")
        expect(svg.render()).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill ="blue"/>
    <text x="88" y ="150" fill = "yellow" xmlns:xlink="http://www.w3.org/1999/xlink"> slr </text>
    <style>
      <![CDATA[
        text{
          font: 100px Verdana, Helvetica, Arial, sans-serif;
        }
      ]]>
    </style>
    </svg>`);
    });

});