export function camelcase(inputString: string): string {
  const words = inputString.split(/[^a-zA-Z0-9]+/);

  const camelCasedWords = words.map((word) => {
    const sanitizedWord = word.replace(/[^a-zA-Z0-9]/g, "");
    return sanitizedWord.charAt(0).toUpperCase() + sanitizedWord.slice(1).toLowerCase();
  });

  return camelCasedWords.join("");
}
