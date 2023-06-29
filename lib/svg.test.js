const SVG = require('./svg');

describe('SVG', () => {

    it('should render a shape (circle), text (slr), and text color (yellow)', () => {
        const svg = new SVG();
        svg.setShape("circle");
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

});