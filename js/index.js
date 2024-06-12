// Select fruit
let fruit = document.querySelectorAll(`.select`);

fruit.forEach((e) => {
  e.addEventListener(`click`, () => {
    fruit.forEach((el) => {
      el.classList.remove(`active`);
    });
    e.classList.add(`active`);
    document
      .querySelector(`.note-thanks`)
      .classList.replace(`d-none`, `d-block`);
    document.querySelector(`.type-fruit`).textContent = `${e.dataset.type}`;
  });
});

// Buy fruit Select

let btnBuy = document.querySelector(`.calc`);

btnBuy.addEventListener(`click`, () => {
  let numWeight = +document.querySelector(`#num`).value;
  if (numWeight <= 0) {
    document.querySelector(".text-error").innerHTML = "Input Wight Error";
    return;
  }
  let numPrice = +document.querySelector(`#price`).value;
  if (numPrice <= 0) {
    document.querySelector(".text-error").innerHTML = "Input Price Error";
    return
  }
  document.querySelector(".text-error").innerHTML = "";
  document.querySelector(`.price`).textContent = `السعر ${
    numPrice * numWeight
  } ريال`;
  document.querySelector(
    `.note`
  ).textContent = ` يسرنا أن تتعامل${fruitSelect.dataset.type} معنا`;
});
