export function topascalcase(inputString: string): string {
  if (!inputString) {
    return inputString;
  }

  let resultArray = inputString.split(/[-_ ]+/);
  resultArray = resultArray.map((word) => Capitalize(word, inputString));

  return resultArray.join('');
}

function Capitalize(word: string, inputString: string) {
  return word[0].toUpperCase() + word.slice(1, inputString.length);
}
