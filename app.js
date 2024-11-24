const allButtons = document.querySelectorAll(".btn");
const form = document.querySelector("#form");
const allInputs = document.querySelectorAll("#form input");
const allResultPlace = document.querySelectorAll(".result-place h2");
const nameResultPlace = document.querySelector("#NAME");
const financeResultPlace = document.querySelector("#FINANCE");
const energyResultPlace = document.querySelector("#ENERGY");
const userNameInput = document.querySelector("#your-name");
const userMotherNameInput = document.querySelector("#mother-name");
const userFatherNameInput = document.querySelector("#father-name");
let userName, userMotherName, userFatherName;
let formState = "ALL";
const abjadList = {
  ا: 1,
  آ: 1,
  ب: 2,
  پ: 2,
  ج: 3,
  چ: 3,
  د: 4,
  ه: 5,
  و: 6,
  ز: 7,
  ژ: 7,
  ح: 8,
  ط: 9,
  ی: 10,
  ک: 20,
  گ: 20,
  ل: 30,
  م: 40,
  ن: 50,
  س: 60,
  ع: 70,
  ف: 80,
  ص: 90,
  ق: 100,
  ر: 200,
  ش: 300,
  ت: 400,
  ث: 500,
  خ: 600,
  ذ: 700,
  ض: 800,
  ظ: 900,
  غ: 1000,
};

// active button handler
allButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    allButtons.forEach((i) => i.classList.remove("active"));
    e.target.classList.add("active");
    formState = e.target.dataset.type;

    if (formState === "ALL") {
      allResultPlace.forEach((i) => (i.textContent = ""));
      allInputs.forEach((i) => (i.style.display = "block"));
      userFatherNameInput.setAttribute("required", true);
      userMotherNameInput.setAttribute("required", true);
    }
    if (formState === "NAME") {
      allResultPlace.forEach((i) => (i.textContent = ""));
      allInputs.forEach((i) => (i.style.display = "block"));
      userFatherNameInput.style.display = "none";
      userFatherNameInput.removeAttribute("required");
    }
    if (formState === "FINANCE") {
      allResultPlace.forEach((i) => (i.textContent = ""));
      allInputs.forEach((i) => (i.style.display = "block"));
      userFatherNameInput.style.display = "none";
      userFatherNameInput.removeAttribute("required");
    }
    if (formState === "ENERGY") {
      allResultPlace.forEach((i) => (i.textContent = ""));
      allInputs.forEach((i) => (i.style.display = "block"));
      userMotherNameInput.style.display = "none";
      userMotherNameInput.removeAttribute("required");
    }
  });
});
// resetInput
const resetInputValue = (element) => {
  element.value = null;
};
// show on dom
const showOnDom = (place, text) => {
  place.textContent = text;
};
// name calculator
const nameCalculator = (yourName, motherName) => {
  let nameCalc = (yourName + motherName) / 4;
  if (Number.isInteger(nameCalc)) {
    return "اشرافی";
  } else {
    let typeName = nameCalc.toString().split(".")[1].slice(0, 2);

    if (Number(typeName) === 75) {
      return "عرفانی";
    }
    if (Number(typeName) === 5) {
      return "کم درآمد";
    }
    if (Number(typeName) === 25) {
      return "حادثه آفرین";
    }
  }
};
// finance calculator
const financeCalculator = (yourName, motherName) => {
  let nameCalc = (yourName + motherName) / 3;
  if (Number.isInteger(nameCalc)) {
    return "معمولی";
  } else {
    let typefinance = nameCalc.toString().split(".")[1].slice(0, 2);
    if (Number(typefinance) === 33) {
      return "متضضر";
    }
    if (Number(typefinance) === 66) {
      return "عالی";
    }
  }
};
// energy calculator
const energyCalculator = (yourName, fatherName) => {
  let nameCalc = (yourName + fatherName) / 3;
  if (Number.isInteger(nameCalc)) {
    return "خنثی";
  } else {
    let typeEnergy = nameCalc.toString().split(".")[1].slice(0, 2);
    if (Number(typeEnergy) === 33) {
      return "بد قدم";
    }
    if (Number(typeEnergy) === 66) {
      return "خوش قدم";
    }
  }
};
// abjad calculator
const abjadCalculator = (text) => {
  return text.reduce((acc, curr) => acc + abjadList[curr], 0);
};
// calculate all types
const allTypesFunction = (userName, motherName, fatherName) => {
  let userNameSeparated = userName.split("").filter(letter => letter !== " ");
  let userMotherNameSeparated = motherName.split("").filter(letter => letter !== " ");
  let userFatherSeparated = fatherName.split("").filter(letter => letter !== " ");
  console.log(userMotherNameSeparated);
  let userNameAbjad = abjadCalculator(userNameSeparated);
  let userMotherNameAbjad = abjadCalculator(userMotherNameSeparated);
  let userFatherNameAbjad = abjadCalculator(userFatherSeparated);
  let nameOutput = nameCalculator(userNameAbjad, userMotherNameAbjad);
  let financeOutput = financeCalculator(userNameAbjad, userMotherNameAbjad);
  let energyOutput = energyCalculator(userNameAbjad, userFatherNameAbjad);

  showOnDom(nameResultPlace, nameOutput);
  showOnDom(financeResultPlace, financeOutput);
  showOnDom(energyResultPlace, energyOutput);
};
// form types
const formTypes = (type) => {
  switch (type) {
    case "ALL": {
      userName = userNameInput.value.trim();
      userMotherName = userMotherNameInput.value.trim();
      userFatherName = userFatherNameInput.value.trim();

      allTypesFunction(userName, userMotherName, userFatherName);

      resetInputValue(userNameInput);
      resetInputValue(userMotherNameInput);
      resetInputValue(userFatherNameInput);
      break;
    }
    case "NAME": {
      userName = userNameInput.value.trim();
      userMotherName = userMotherNameInput.value.trim();
      let userNameSeparated = userName.split("").filter(letter => letter !== " ");
      let userMotherNameSeparated = userMotherName.split("").filter(letter => letter !== " ");
      let userNameAbjad = abjadCalculator(userNameSeparated);
      let userMotherNameAbjad = abjadCalculator(userMotherNameSeparated);

      showOnDom(
        nameResultPlace,
        nameCalculator(userNameAbjad, userMotherNameAbjad)
      );

      resetInputValue(userNameInput);
      resetInputValue(userMotherNameInput);
      break;
    }
    case "FINANCE": {
      userName = userNameInput.value.trim();
      userMotherName = userMotherNameInput.value.trim();
      let userNameSeparated = userName.split("").filter(letter => letter !== " ");
      let userMotherNameSeparated = userMotherName.split("").filter(letter => letter !== " ");
      let userNameAbjad = abjadCalculator(userNameSeparated);
      let userMotherNameAbjad = abjadCalculator(userMotherNameSeparated);

      showOnDom(
        financeResultPlace,
        financeCalculator(userNameAbjad, userMotherNameAbjad)
      );

      resetInputValue(userNameInput);
      resetInputValue(userMotherNameInput);
      break;
    }
    case "ENERGY": {
      userName = userNameInput.value.trim();
      userFatherName = userFatherNameInput.value.trim();
      let userNameSeparated = userName.split("").filter(letter => letter !== " ");
      let userMotherNameSeparated = userFatherName.split("").filter(letter => letter !== " ");
      let userNameAbjad = abjadCalculator(userNameSeparated);
      let userMotherNameAbjad = abjadCalculator(userMotherNameSeparated);

      showOnDom(energyResultPlace, energyCalculator(userNameAbjad, userMotherNameAbjad));

      resetInputValue(userNameInput);
      resetInputValue(userFatherNameInput);
      break;
    }
    default: {
      throw new Error("invalid type");
    }
  }
};
// form handler
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formTypes(formState);
});
