import { describe, test } from '@jest/globals';


export const testers = () => {

    function isEven(number : number) {
        return number % 2 === 0;
      }

describe('sum function', () => {
    
    it('adds 1 + 2 to equal 3', () => {
      expect(1 + 2).toBe(3);
    });
  });

  
   
  describe('isEven function', () => {
    it('returns true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(4)).toBe(true);
    });
  
    it('returns false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
    });
  });

  
}



















