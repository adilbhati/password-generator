// utils/passwordGenerator.js
export function generatePassword(length, options) {
  const charset = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    digits: "0123456789",
    symbols: "!@#$%^&*()_-+=<>?/{}[]|"
  };

  let characters = "";
  let firstThreeChars = "";
  const lowerUpperChars = charset.lower + charset.upper;

  // Ensure the first three characters are either lowercase or uppercase
  for (let i = 0; i < Math.min(3, length); i++) {
    const randomIndex = Math.floor(Math.random() * lowerUpperChars.length);
    firstThreeChars += lowerUpperChars[randomIndex];
  }

  if (options.lower) characters += charset.lower;
  if (options.upper) characters += charset.upper;
  if (options.digits) characters += charset.digits;
  if (options.symbols) characters += charset.symbols;

  let password = firstThreeChars;
  for (let i = 3; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}
  