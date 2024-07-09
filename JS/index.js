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
      secondSelect.innerHTML += "<option value='bronzem2'>3m x 2m [6m² de área] (2 metros de Frente) </option>";
    } else if (answer === "Sim") {
      secondSelect.setAttribute('disabled', 'disabled');
      secondSelect.innerHTML += "<option value='bronzeFoodm2'>2m x 2m [4m² de área] (2 metros de Frente) </option>";
    }
  } if (selectedValue === "diamante") {
      secondSelect.innerHTML += "<option value='diamantem2'>4m x 5m [20m² de área] (4 metros de Frente)</option>";
    } if (selectedValue === "elite") {
      secondSelect.innerHTML += "<option value='elitem2'>5m x 10m [50m² de área] (5 metros de Frente)</option>";
    } if (selectedValue === "ilha") {
      secondSelect.innerHTML += "<option value='ilham2'>10m x 10m [100m² de área] (10 metros de Frente)</option>";
    } if (selectedValue === "presidencial") {
      secondSelect.innerHTML += "<option value='presidencialm2'>5m x 5m [15m² de área] (5 metros de Frente)</option>";
    } if (selectedValue === "master") {
      secondSelect.innerHTML += "<option value='masterm2'>6.5m x 5m [32.5m² de área] (6.5 metros de Frente)</option>";
    } else if (selectedValue === "prata") {
    if (answer === "Não") {
      secondSelect.innerHTML += "<option value='pratam2'>4m x 3m [12m² de área] (3 metros de Frente)</option>";
    } else if (answer === "Sim") {
      secondSelect.innerHTML += "<option value='prataFoodm2'>2.5m x 2.5m [6.25m² de área] (2.5 metros de Frente)</option>";
    }
  } else if (selectedValue === "ouro") {
    if (answer === "Não") {
      secondSelect.innerHTML += "<option value='ourom2'>3m x 5m [15m² de área] (3 metros de Frente)</option>";
    } else if (answer === "Sim") {
      secondSelect.innerHTML += "<option value='ouroFoodm21'>4.5m x 2.5m [11.25m² de área] (4.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='ouroFoodm22'>4m x 3m [12² de área] (4 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='ouroFoodm23'>4.5m x 2.5m - Área Food Truck [11.25m² de área] (4.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='ouroFoodm24'>2.5m x 2.5m - Área Food Truck [6.25m² de área] (2.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='ouroFoodm25'>3m x 5m - Área Food Truck [15m² de área] (3 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='ouroFoodm26'>4.5m x 2m - Área Food Truck [9m² de área] (4.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='ouroFoodm27'>2.25m x 7m - Área Food Truck [15.75m² de área] (2.5 metros de Frente)</option>";
    }
  }
/*   if (selectedValue === "vila") {
    secondSelect.setAttribute('disabled', 'disabled');
    secondSelect.innerHTML += "<option value='bronzem2'>3m x 2m [6m² de área] (2 metros de Frente) </option>";
  } */
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

function updateTextInput() {
  var firstSelect = document.getElementById("metragem");
  var textInput = document.getElementById("valor");
  var selectedValue = firstSelect.value;

  // Update the text input based on the selected value
  if (selectedValue === "bronzem2") {
    textInput.value = "R$ 11.155,00 (onze mil, cento e quinze reais)";
  } else if (selectedValue === "bronzeFoodm2") {
    textInput.value = "R$ 3.680,00 (onze mil, cento e quinze reais)";
  } else if (selectedValue === "pratam2") {
    textInput.value = "R$ 20.355,00 (vinte mil, trezentos e cinquenta e cinco reais)";
  } else if (selectedValue === "prataFoodm2") {
    textInput.value = "R$ 4.600,00 (quatro mil, e seiscentos reais)";
  } else if (selectedValue === "diamantem2") {
    textInput.value = "R$ 34.558,00 (trinta e quatro mil, quinhetos e cinquenta e oito reais)";
  } else if (selectedValue === "presidencialm2") {
    textInput.value = "R$ 42.608,00 (quarenta e dois mil, seiscentos e oito reais)";
  } else if (selectedValue === "masterm2") {
    textInput.value = "R$ 56.810,00 (cinquenta e seis mil, oitocentos e dez reais)";
  } else if (selectedValue === "elitem2") {
    textInput.value = "R$ 77.913,00 (setenta e sete mil, novecentos e treze reais)";
  } else if (selectedValue === "ilham2") {
    textInput.value = "R$ 141.163,00 (cento e quarenta e um mil, cento e sessenta e três reais)";
  } else if (selectedValue === "ourom2") {
    textInput.value = "R$ 26.105,00 (vinte e seis mil, cento e cinco reais)";
  } else if (selectedValue === "ourom21" || selectedValue === "ourom22") {
    textInput.value = "R$ 10.120,00 (dez mil, cento e vinte reais)";
  } else if (selectedValue === "ourom23" || selectedValue === "ourom25" || selectedValue === "ourom27") {
    textInput.value = "R$ 9.200,00 (nove mil e duzentos reais)";
  } else if (selectedValue === "ourom24") {
    textInput.value = "R$ 6.900,00 (seis mil e novecentos reais)";
  } else if (selectedValue === "ourom26") {
    textInput.value = "R$ 8.050,00 (oito mil e cinquenta reais)";
  }
}

// Get references to the radio input and select tags
const pagRadioInput = document.getElementsByName("forma");
const select1 = document.getElementById("represent");
const select2 = document.getElementById("pay");
const divSel1 = document.getElementById("represent1");
const divSel2 = document.getElementById("pay1");

// Function to update select2 based on select1 value
function updateSelect2() {
  if (select1.value === "yah") {
    select2.innerHTML = "<option value='comission'>Comissão</option>";
  } else if (select1.value === "No") {
    select2.innerHTML = "<option value='padrao'>1 + 5 Parcelas</option>";
  } else {
    select2.innerHTML = ""; // Clear options if no matching value
  }
}

// Function to handle radio input changes
function handleRadioChange() {
  switch (this.value) {
    case "vista":
      select2.innerHTML = ""; // Clear the options in select2
      divSel1.style.display = "none"; // Hide select1
      divSel2.style.display = "none"; // Hide select2
      break;
    case "parcelado":
      divSel1.style.display = "block"; // Show select1
      divSel2.style.display = "block"; // Show select2
      updateSelect2(); // Update select2 options based on select1 value
      break;
  }
  updateTextInput();
}

// Add event listeners to the radio inputs
Array.from(pagRadioInput).forEach(radio => {
  radio.addEventListener("change", handleRadioChange);
});

// Add event listener to select1 to update select2 dynamically
select1.addEventListener("change", updateSelect2);
