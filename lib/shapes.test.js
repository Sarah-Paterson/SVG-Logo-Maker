const SHAPE = require('./shapes');

describe('SHAPE', () => {

    describe('CIRCLE', () => {
      it('should create a circle that is blue', () => {
        const shape = new SHAPE.CIRCLE();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill ="blue"/>');
      });
    });

    describe('SQUARE', () => {
        it('should create a square that is blue', () => {
          const shape = new SHAPE.SQUARE();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<rect x="75" y="20" width="150" height="150" fill ="blue"/>');
        });
    });

    describe('TRIANGLE', () => {
        it('should create a triangle that is blue', () => {
          const shape = new SHAPE.TRIANGLE();
          shape.setColor("blue");
          expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill ="blue"/>');
        });
      });
      
});