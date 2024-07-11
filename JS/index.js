var currentPage = 1;
    var form = document.getElementById('multi-page-form');
    var pages = form.getElementsByClassName('page');

    function showPage(pageNumber) {
      for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
      }
      pages[pageNumber - 1].classList.add('active');
    }

    function nextPage() {
      if (currentPage < pages.length) {
        currentPage++;
        showPage(currentPage);
      }
    }

    function previousPage() {
      if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
      }
    }

    
function updateSecondSelect() {
  var firstSelect = document.getElementById("cota");
  var radioInputs = document.getElementsByName("food");
  var secondSelect = document.getElementById("metragem");
  var selectedValue = firstSelect.value;
  var answer = "";

  // Find the selected radio input value
  for (var i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      answer = radioInputs[i].value;
      break;
    }
  }

  // Clear existing options
  secondSelect.innerHTML = "";

  // Add options based on the selected value and answer
  if (selectedValue === "bronze") {
    if (answer === "Não") {
      secondSelect.setAttribute('disabled', 'disabled');
      secondSelect.innerHTML += "<option value='3m x 2m [6m² de área]'>3m x 2m [6m² de área] (2 metros de Frente) </option>";
    } else if (answer === "Sim") {
      secondSelect.setAttribute('disabled', 'disabled');
      secondSelect.innerHTML += "<option value='2m x 2m [4m² de área]'>2m x 2m [4m² de área] (2 metros de Frente) </option>";
    }
  } if (selectedValue === "diamante") {
      secondSelect.innerHTML += "<option value='4m x 5m [20m² de área]'>4m x 5m [20m² de área] (4 metros de Frente)</option>";
    } if (selectedValue === "elite") {
      secondSelect.innerHTML += "<option value='5m x 10m [50m² de área]'>5m x 10m [50m² de área] (5 metros de Frente)</option>";
    } if (selectedValue === "ilha") {
      secondSelect.innerHTML += "<option value='10m x 10m [100m² de área]'>10m x 10m [100m² de área] (10 metros de Frente)</option>";
    } if (selectedValue === "presidencial") {
      secondSelect.innerHTML += "<option value='5m x 5m [15m² de área]'>5m x 5m [15m² de área] (5 metros de Frente)</option>";
    } if (selectedValue === "master") {
      secondSelect.innerHTML += "<option value='6.5m x 5m [32.5m² de área]'>6.5m x 5m [32.5m² de área] (6.5 metros de Frente)</option>";
    } else if (selectedValue === "prata") {
    if (answer === "Não") {
      secondSelect.innerHTML += "<option value='4m x 3m [12m² de área]'>4m x 3m [12m² de área] (3 metros de Frente)</option>";
    } else if (answer === "Sim") {
      secondSelect.innerHTML += "<option value='2.5m x 2.5m [6.25m² de área]'>2.5m x 2.5m [6.25m² de área] (2.5 metros de Frente)</option>";
    }
  } else if (selectedValue === "ouro") {
    if (answer === "Não") {
      secondSelect.innerHTML += "<option value='3m x 5m [15m² de área]'>3m x 5m [15m² de área] (3 metros de Frente)</option>";
    } else if (answer === "Sim") {
      secondSelect.innerHTML += "<option value='4.5m x 2.5m [11.25m² de área]'>4.5m x 2.5m [11.25m² de área] (4.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='4m x 3m [12² de área]'>4m x 3m [12² de área] (4 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='4.5m x 2.5m - Área Food Truck [11.25m² de área]'>4.5m x 2.5m - Área Food Truck [11.25m² de área] (4.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='2.5m x 2.5m - Área Food Truck [6.25m² de área]'>2.5m x 2.5m - Área Food Truck [6.25m² de área] (2.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='3m x 5m - Área Food Truck [15m² de área]'>3m x 5m - Área Food Truck [15m² de área] (3 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='4.5m x 2m - Área Food Truck [9m² de área]'>4.5m x 2m - Área Food Truck [9m² de área] (4.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='2.25m x 7m - Área Food Truck [15.75m² de área]'>2.25m x 7m - Área Food Truck [15.75m² de área] (2.5 metros de Frente)</option>";
    }
  } else if (selectedValue === "vila") {
    secondSelect.setAttribute('disabled', 'disabled');
    secondSelect.innerHTML += "<option value='2m x 2m [4m² de área]'>2m x 2m [4m² de área] (2 metros de Frente) </option>";
  }
 // Trigger update for the text input
  updateTextInput();
}

const selectElement = document.getElementById('cota');
const radioInput = document.getElementById('foodRadio');

selectElement.addEventListener('change', function() {
  if (selectElement.value === 'bronze' || selectElement.value === 'prata' || selectElement.value === 'ouro') {
    radioInput.style.display = 'block';
  } else {
    radioInput.style.display = 'none';
  }
});

const conRadioInputs = document.querySelectorAll('input[name="confirm"]');
const hiddenField = document.getElementById('neoAutent');

conRadioInputs.forEach(function(conRadioInputs) {
  conRadioInputs.addEventListener('change', function() {
    if (conRadioInputs.value === 'Não' && conRadioInputs.checked) {
      hiddenField.style.display = 'block';
    } else {
      hiddenField.style.display = 'none';
    }
  });
});

const priceMap = {
  "3m x 2m [6m² de área]": {
    price: 11155,
    text: "R$ 11.155,00 (onze mil, cento e quinze reais)"
  },
  "2m x 2m [4m² de área]": {
    price: 3680,
    text: "R$ 3.680,00 (três mil, seiscentos e oitenta reais)"
  },
  "4m x 3m [12m² de área]": {
    price: 20355,
    text: "R$ 20.355,00 (vinte mil, trezentos e cinquenta e cinco reais)"
  },
  "2.5m x 2.5m [6.25m² de área]": {
    price: 4600,
    text: "R$ 4.600,00 (quatro mil e seiscentos reais)"
  },
  "4m x 5m [20m² de área]": {
    price: 34558,
    text: "R$ 34.558,00 (trinta e quatro mil, quinhentos e cinquenta e oito reais)"
  },
  "5m x 5m [15m² de área]": {
    price: 42608,
    text: "R$ 42.608,00 (quarenta e dois mil, seiscentos e oito reais)"
  },
  "6.5m x 5m [32.5m² de área]": {
    price: 56810,
    text: "R$ 56.810,00 (cinquenta e seis mil, oitocentos e dez reais)"
  },
  "5m x 10m [50m² de área]": {
    price: 77913,
    text: "R$ 77.913,00 (setenta e sete mil, novecentos e treze reais)"
  },
  "10m x 10m [100m² de área]": {
    price: 141163,
    text: "R$ 141.163,00 (cento e quarenta e um mil, cento e sessenta e três reais)"
  },
  "3m x 5m [15m² de área]": {
    price: 26105,
    text: "R$ 26.105,00 (vinte e seis mil, cento e cinco reais)"
  },
  "4.5m x 2.5m [11.25m² de área]": {
    price: 10120,
    text: "R$ 10.120,00 (dez mil, cento e vinte reais)"
  },
  "4m x 3m [12² de área]": {
    price: 10120,
    text: "R$ 10.120,00 (dez mil, cento e vinte reais)"
  },
  "4.5m x 2.5m - Área Food Truck [11.25m² de área]": {
    price: 9200,
    text: "R$ 9.200,00 (nove mil e duzentos reais)"
  },
  "3m x 5m - Área Food Truck [15m² de área]": {
    price: 9200,
    text: "R$ 9.200,00 (nove mil e duzentos reais)"
  },
  "2.25m x 7m - Área Food Truck [15.75m² de área]": {
    price: 9200,
    text: "R$ 9.200,00 (nove mil e duzentos reais)"
  },
  "2.5m x 2.5m - Área Food Truck [6.25m² de área]": {
    price: 6900,
    text: "R$ 6.900,00 (seis mil e novecentos reais)"
  },
  "4.5m x 2m - Área Food Truck [9m² de área]": {
    price: 8050,
    text: "R$ 8.050,00 (oito mil e cinquenta reais)"
  }
};

function updateTextInput() {
  const meticSelect = document.getElementById("metragem");
  const textInput = document.getElementById("valor");
  const selectedValue = meticSelect.value;

  // Check if the selected value exists in the price map
  if (priceMap.hasOwnProperty(selectedValue)) {
    const originalText = priceMap[selectedValue].text;
    textInput.value = originalText;
  } else {
    textInput.value = ""; // Reset the text input if the selected value is not found
  }
}

// Get references to the radio input and select tags
const pagRadioInput = document.getElementsByName("forma");
const select2 = document.getElementById("pay");
const divSel2 = document.getElementById("pay1");

// Function to handle radio input changes
function handleRadioChange() {
  const originalField = document.getElementById("originalField");
  const originalField2 = document.getElementById("originalField2");

  switch (this.value) {
    case "vista":
      select2.innerHTML = ""; // Clear the options in select2
      const originalPrice = priceMap[meticSelect.value].price;
      const modifiedPrice = originalPrice - (originalPrice * 0.1); // Reduce the price by 10%
      select2.innerHTML = `<option value="only" id="originalField">${originalField.textContent}</option>`;
      break;
    case "parcelado":
      select2.innerHTML = `<option value="padrao" id="originalField2">${originalField2.textContent}</option>`;
      break;
  }
  updateTextInput();
}

function modifyField() {
  const myField = document.getElementById("originalField2") && document.getElementById("originalField"); // Substitua "originalField" pelo ID real do campo


  const today = new Date();
  const firstDueDate = new Date(today); // Data da primeira parcela é hoje

  // Define a primeira parcela para o próximo dia útil (exceto sábado e domingo)
  while (firstDueDate.getDay() === 0 || firstDueDate.getDay() === 6) {
    firstDueDate.setDate(firstDueDate.getDate() + 1);
  }

  // Add seven days to the first installment date
  firstDueDate.setDate(firstDueDate.getDate() + 7);

  // Formata a data para o formato dd/mm/aaaa
  const formattedFirstDueDate = `${firstDueDate.getDate().toString().padStart(2, '0')}/${(firstDueDate.getMonth() + 1).toString().padStart(2, '0')}/${firstDueDate.getFullYear()}`;

  // Cálculo das parcelas subsequentes (até dezembro de 2024)
  let dueDates = [formattedFirstDueDate];
  for (let i = 1; i < 6; i++) {
    const nextDueDate = new Date(firstDueDate);
    nextDueDate.setMonth(nextDueDate.getMonth() + i);
    if (nextDueDate.getMonth() > 11) break; // Para em dezembro
    const formattedNextDueDate = `${nextDueDate.getDate().toString().padStart(2, '0')}/${(nextDueDate.getMonth() + 1).toString().padStart(2, '0')}/${nextDueDate.getFullYear()}`;
    dueDates.push(formattedNextDueDate);
  }
  const dueDatesString = dueDates.join(', ');
  

  // Monta a string final com a data dinâmica
  if (myField.value == "only" ) {
    myField.value = `Boleto Bancário em 6 parcelas sendo a primeira para ${dueDatesString} e as demais subsequentes até o mês de dezembro de 2024`;
  }else {
    myField.value = `Boleto Bancário em 1 parcela sendo o pagamento para ${dueDatesString}`;
  }
}

form.addEventListener("submit", (event) => {
  modifyField();
  // (Opcional) setTimeout() se precisar de um atraso
});

// Add event listeners to the radio inputs
Array.from(pagRadioInput).forEach(radio => {
  radio.addEventListener("change", handleRadioChange);
});