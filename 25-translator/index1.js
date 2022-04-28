const morseCodeMapping = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
};
// translation
console.log(morseCodeMapping.B);

class Translator {
  constructor(alphanumeric) {
    this.alphanumeric = alphanumeric;
  }
}
translation(inputText);
{
  const convertToMorse = () => {
    const inputText = document.getElementById("input").value.toUpperCase();
    // inputText = input.toUpperCase();
    const arraySplit = inputText.split(" "); // Transform the string into an array:
    const arrayMap = arraySplit.map((a) => {
      // Replace each character with a morse "letter"
      if (morseCodeMapping[a]) {
        return morseCodeMapping[a];
      } else {
        return a;
      }
    });
    const morseCode = arrayMap.join(" "); // Convert the array back to a string
    document.getElementById("output").value = morseCode;
  };
}

class MorseTranslator extends Translator {
  constructor(englishToMorse) {
    super(englishToMorse);
    this.englishToMorse = englishToMorse;
  }
}
// create a instance of a class
const MorseTranslator1 = new MorseTranslator(morseCodeMapping);
//  MorseTranslator.morseCode()
