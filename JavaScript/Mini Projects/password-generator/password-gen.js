let passwordDisplay = document.querySelector("#passwordDisplay");
let copyBtn = document.querySelector("#copyBtn");
let strengthText = document.querySelector("#strengthText");
let strengthBar = document.querySelector(".strength-bar");
let lengthValue = document.querySelector("#lengthValue");
let plength = document.querySelector("#length");
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let generateBtn = document.querySelector("#generateBtn");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberVariables = "0123456789";
const symbolVariables = "!@#$%^&*";

function generatePassword() {
  let password = "";
  let res = optionSelection();
  if (res === "") {
    alert("Please check atleast one checkbox!");
    return;
  }
  let len = plength.value;
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * res.length);
    let randomChar = res[randomIndex];
    password += randomChar;
  }
  passwordDisplay.value = password;
  calculatePasswordStrength(password, res);
}

async function copyToClipboard() {
  let pwd = passwordDisplay.value.trim();
  const original = copyBtn.textContent;
  try {
    if (pwd !== "") {
      await navigator.clipboard.writeText(pwd);
      copyBtn.textContent = "Copied!";
    } else {
      copyBtn.innerHTML = "Nothing to copy! Generate key first!";
    }
    copyBtn.disabled = true;
    setTimeout(() => {
      copyBtn.textContent = original; // or "📋"
      copyBtn.disabled = false;
    }, 2000);
  } catch (err) {
    alert(err);
  }
}

function calculatePasswordStrength(password, res) {
  let len = password.length;

  let types = 0;
  if (uppercase.checked) {
    types++;
  }
  if (lowercase.checked) {
    types++;
  }
  if (numbers.checked) {
    types++;
  }
  if (symbols.checked) {
    types++;
  }
  strengthBar.classList.remove("weak", "medium", "strong");

  if (len <= 10 || types === 1) {
    strengthText.textContent = "Weak";
    strengthBar.classList.add("weak");
  } else if (len > 10 && len < 14) {
    strengthText.textContent = "Medium";
    strengthBar.classList.add("medium");
  } else if (len >= 14 && types >= 3) {
    strengthText.textContent = "Strong";
    strengthBar.classList.add("strong");
  } else {
    strengthText.textContent = "Medium";
    strengthBar.classList.add("medium");
  }
}

function updatePasswordLength() {
  let len = plength.value;
  lengthValue.innerHTML = len;
}

function optionSelection() {
  let res = "";
  if (uppercase.checked) {
    res += uppercaseLetters;
  }
  if (lowercase.checked) {
    res += lowercaseLetters;
  }
  if (numbers.checked) {
    res += numberVariables;
  }
  if (symbols.checked) {
    res += symbolVariables;
  }
  return res;
}

plength.addEventListener("input", updatePasswordLength);
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);
