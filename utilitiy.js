function getInputValueById(inputId1, inputId2) {
    const inputFirstId = document.getElementById(inputId1);
    const inputFirstIdValue = parseFloat(inputFirstId.value);
    const inputSecondId = document.getElementById(inputId2);
    const inputSecondIdValue = parseFloat(inputSecondId.value);
  
    const result = {
      inputFirstIdValue: inputFirstIdValue,
      inputSecondIdValue: inputSecondIdValue,
    };
    return result;
  }
  
  function setCalculateItem(count, name, area) {
    const calculatorContainer = document.getElementById("calculator-container");
    const div = document.createElement("div");
    div.classList.add("flex", "justify-between", "items-center", "pb-5");
    div.setAttribute("id", "calculate-item");
    div.innerHTML = `
      <span>${count}. </span>
      <p>${name}</p>
      <p><span id="final-result">${area}</span><span id="cm">cm</span><sup>2</sup></p>
      <button class="btn btn-primary lowercase converter" id="cm-to-m-btn">Convert to m<sup>2</sup></button>
      `;
  
    calculatorContainer.appendChild(div);
  }
  
  function converterCmToMeter(area) {
    const converters = document.querySelectorAll(".converter");
    for (const converter of converters) {
      converter.addEventListener("click", function (e) {
        e.stopImmediatePropagation();
        const newArea = area / 100;
        e.target.parentNode.childNodes[5].innerHTML = newArea + `m<sup>2</sup>`;
      });
    }
  }
  
