

let count = 0;
document.getElementById("trianlge-btn").addEventListener("click", function (e) {
  count++;
  const inputObject = getInputValueById("traingle-input1", "traingle-input2");
  const inputFirstIdValue = inputObject.inputFirstIdValue;
  const inputSecondIdValue = inputObject.inputSecondIdValue;

  const area = 0.5 * inputFirstIdValue * inputSecondIdValue;
  const name = e.target.parentNode.parentNode.childNodes[1].innerText;
  setCalculateItem(count, name, area);
  converterCmToMeter(area);
});

document.getElementById("rectangle-btn").addEventListener("click", function (e) {
  count++;
  const inputObject = getInputValueById("rectangle-input1", "rectangle-input2");
  const inputFirstIdValue = inputObject.inputFirstIdValue;
  const inputSecondIdValue = inputObject.inputSecondIdValue;

  const area = inputFirstIdValue * inputSecondIdValue;
  const name = e.target.parentNode.parentNode.childNodes[1].innerText;
  setCalculateItem(count, name, area);
  converterCmToMeter(area);
});


