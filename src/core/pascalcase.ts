export function topascalcase(inputString: string): string {
  if (!inputString) {
    return inputString;
  }

  let resultArray = inputString.split(/[-_ ]+/);
  resultArray = resultArray.map((word) => Capitalize(word));

  return resultArray.join('');
}

function Capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1, word.length);
}
