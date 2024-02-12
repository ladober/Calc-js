const calcBtnList = document.querySelectorAll(".numbers");

let calcSum = document.querySelector(".js-screen");

const sum = document.querySelector(".result");

const reset = document.querySelector(".reset");

const percent = document.querySelector(".percent");

const del = document.querySelector(".delete");

const x2 = document.querySelector(".x2");

for (let i = 0; i < calcBtnList.length; i++) {
  calcBtnList[i].addEventListener("click", () => {
    calcSum.textContent += calcBtnList[i].textContent;
  });
}

sum.addEventListener("click", () => {
  calcSum.textContent = eval(calcSum.textContent);
});

reset.addEventListener("click", () => {
  calcSum.textContent = "";
});

percent.addEventListener("click", () => {
  if (calcSum.textContent === "") {
    calcSum.textContent = "input number";
  }
  calcSum.textContent = eval(calcSum.textContent) / 100;
});

del.addEventListener("click", () => {
  let newCalSum = calcSum.textContent;
  newCalSum = newCalSum.substring(0, newCalSum.length - 1);
  calcSum.textContent = newCalSum;
});

x2.addEventListener("click", () => {
  let result = eval(calcSum.textContent * calcSum.textContent);
  calcSum.textContent = result;
});
