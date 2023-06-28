const INFO = require('./information');
const SHAPE = require('./shapes');

const generateSVG = ({}) =>
`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<${shapeChoise} fill="${shapeColor}"/>
<text>
  <textPath xmlns:xlink="http://www.w3.org/1999/xlink">
    ${INFO.text}
  </textPath>
</text>

<style>
  <![CDATA[
    text{
      font: 28px Verdana, Helvetica, Arial, sans-serif;
      color: ${INFO.textColor};
    }
  ]]>
</style>
</svg>
`;