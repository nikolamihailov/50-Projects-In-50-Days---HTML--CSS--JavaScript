const passwordEl = document.querySelector(".result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");


const randomFunction = {
    uppercase: getRandomUppercaseLetter,
    lowercase: getRandomLowercaseLetter,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

generateBtn.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasUpperChecked = uppercaseEl.checked;
    const hasLowerChecked = lowercaseEl.checked;
    const hasNumberChecked = numberEl.checked;
    const hasSymbolChecked = symbolEl.checked;

    passwordEl.innerText = generatePassword(hasUpperChecked, hasLowerChecked, hasNumberChecked, hasSymbolChecked, length);



})

function generatePassword(uppercase, lowercase, number, symbol, length) {
    let generatedPassword = "";
    const typesCheckedCount = uppercase + lowercase + number + symbol;

    const typesCheckedArray = [{ uppercase }, { lowercase }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCheckedCount == 0) {
        return ''
    }

    for (i = 0; i < length; i += typesCheckedCount) {
        typesCheckedArray.forEach(type => {
            const funcName = Object.keys(type)[0];


            generatedPassword += randomFunction[funcName]();

        })

    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;



};

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = passwordEl.innerText;

    if (!password) {
        return
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});


function getRandomNumber() {
    return String.fromCharCode(Math.floor(getRndInteger(48, 57)));
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function getRandomUppercaseLetter() {
    return String.fromCharCode(Math.floor(getRndInteger(65, 90)));
}

function getRandomLowercaseLetter() {
    return String.fromCharCode(Math.floor(getRndInteger(97, 122)));
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



