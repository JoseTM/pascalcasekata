export function topascalcase(inputString: string): string {
  if (!inputString) {
    return inputString;
  }
  if (inputString[0] === inputString[0].toLowerCase()) {
    return inputString[0].toUpperCase() + inputString.slice(1, inputString.length);
  }

  return inputString.split(' ').join('').split('-').join('').split('_').join('');
}