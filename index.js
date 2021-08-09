const dateSelector = document.getElementById("birth_date");
const luckNoSelector = document.getElementById("lucky_no");
const submitButton = document.getElementById("submit");
const invalid = document.getElementById("invalid-input");
const rAnswer = document.getElementById("r-answer");
const wAnswer = document.getElementById("w-answer");

dateSelector.valueAsDate = new Date();

const sumOfDigits = (dateString) => {
  let sum = 0;
  for (const x of dateString.split("")) sum += Number.parseInt(x, 10);
  return sum;
};

submitButton.addEventListener("click", () => {
  invalid.style.display = "none";
  rAnswer.style.display = "none";
  wAnswer.style.display = "none";

  /** @type {Date} */
  const birthDate = dateSelector.valueAsDate;
  const luckNo = luckNoSelector.value;

  if (luckNo === undefined || isNaN(luckNo) || luckNo === "") {
    invalid.style.display = "block";
    return;
  }

  const dateStr = `${birthDate.getDate()}${
    birthDate.getMonth() + 1
  }${birthDate.getFullYear()}`;

  if (sumOfDigits(dateStr) % luckNo === 0) {
    rAnswer.style.backgroundColor = "green";
    rAnswer.style.display = "flex";
  } else {
    wAnswer.style.backgroundColor = "red";
    wAnswer.style.display = "flex";
  }
});
