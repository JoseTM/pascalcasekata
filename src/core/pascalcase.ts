export function topascalcase(inputString: string): string {
  if (!inputString) {
    return inputString;
  }

  let resultArray = inputString.split(/[-_ ]+/);

  resultArray = resultArray.map((word) => word[0].toUpperCase() + word.slice(1, inputString.length));

  return resultArray.join('');
}