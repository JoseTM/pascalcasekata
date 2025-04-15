import { topascalcase } from '../core/pascalcase';

describe('pascalcase should', () => {
  it('retrieve empty string at emptyString input', () => {
    const result = topascalcase('');
    const expected = '';
    expect(result).toBe(expected);
  });
  it('a Pascal Case word must be no altered by translating', () => {
    const result = topascalcase('Fizz');
    const expected = 'Fizz';
    expect(result).toBe(expected);
  });
  it('one word must be tranlated to PascalCase', () => {
    const result = topascalcase('fizz');
    const expected = 'Fizz';
    expect(result).toBe(expected);
  });
  it('two word in pascal case delimited by space must be retrieved without spaces', () => {
    const result = topascalcase('Fizz Buzz');
    const expected = 'FizzBuzz';
    expect(result).toBe(expected);
  });
  it('two word in pascal case delimited by space must be retrieved without spaces', () => {
    const result = topascalcase('Fizz_Buzz');
    const expected = 'FizzBuzz';
    expect(result).toBe(expected);
  });
  it('two word in pascal case delimited by space must be retrieved without spaces', () => {
    const result = topascalcase('Fizz-Buzz');
    const expected = 'FizzBuzz';
    expect(result).toBe(expected);
  });
  it('words delimited by space must by translated to PascalCase', ()=> {
    const result = topascalcase('fizz buzz fizz');
    const expected = 'FizzBuzzFizz';
    expect(result).toBe(expected);
  });
  it('words delimited by hyphen must by translated to PascalCase', ()=> {
    const result = topascalcase('fizz_buzz_fizz');
    const expected = 'FizzBuzzFizz';
    expect(result).toBe(expected);
  });
  it('words delimited by underscore must by translated to PascalCase', ()=> {
    const result = topascalcase('fizz-buzz-fizz');
    const expected = 'FizzBuzzFizz';
    expect(result).toBe(expected);
  });
  it('translate a string with combined underscore, hyphen and space', ()=> {
    const result = topascalcase('fizz-buzz-fizz');
    const expected = 'FizzBuzzFizz';
    expect(result).toBe(expected);
  });
});
