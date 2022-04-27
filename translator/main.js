
const morseDictionary = {
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
  "#": "     ",
  "##": "#", // catch all
};
const germanDictionary = {
  GOODBYE: "AUF WIEDERSEHEN",
  MY: "MEIN",
  FRIEND: "FREUNDIN",
  COME: "KOMMEN SIE",
  GO: "GEHEN",
  "##": "WHY", // catch all
};

class Translator {
  constructor(inputLanguage, outputLanguage) {
    this.inputLanguage = inputLanguage;
    this.outputLanguage = outputLanguage;
    this.inputText = "";
    this.outputText = "";
  }

    // translateLong (inputArr, dictionary) {
    //     this.outputText = inputArr.map(wordOrChar =>  {
    //         if (dictionary[wordOrChar]) return dictionary[wordOrChar]
    //         else return "##"
    //     }).join(' ')
    // }

    // translateBetter (inputArr, dictionary) {
    //   this.outputText = inputArr
    //   .map(wordOrChar =>  dictionary[wordOrChar] ? dictionary[wordOrChar]: dictionary["##"])
    //   .join(' ')
    // }

  translate(inputArr, dictionary) {
    this.outputText = inputArr
      .map((wordOrChar) => dictionary[wordOrChar] || dictionary["##"])
      .join(" ");
  }
}

class Morse extends Translator {
  constructor() {
    super("english", "morse");
    this.dictionary = morseDictionary;
  }

  translate(inputText) {
    const inputArr = [...inputText.toUpperCase()
        .split(" ")
        .join("#")];
    super.translate(inputArr, this.dictionary);
  }
}

class German extends Translator {
  constructor() {
    super("english", "german");
    this.dictionary = germanDictionary;
  }

  translate(inputText) {
    const inputArr = inputText.toUpperCase()
    .split(" ");
    super.translate(inputArr, this.dictionary);
  }
}

const morseTranslator = new Morse();
const germanTranslator = new German();

let currentTranslator = morseTranslator;

const button = document.getElementById("translate-btn");
button.addEventListener("click", () => {
  const textToTranslate = document.getElementById("text-to-translate").value;

  const translatedText = document.getElementById("translated-text");
  currentTranslator.translate(textToTranslate);
  translatedText.innerHTML = currentTranslator.outputText;
});

const changeOption = document.getElementById("select-option");
changeOption.addEventListener("change", (e) => {
  const chooseOption = e.target.value;
  if (chooseOption === "0") {
    currentTranslator = morseTranslator;
  } else if (chooseOption === "1") 
    currentTranslator = germanTranslator;
});
