const meticSelect = document.getElementById("metragem");
const textInput = document.getElementById("valor");

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
  var credentials = document.getElementById("credencial");
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
  credentials.innerHTML = "";

    const setCreds = (n) => {
    credentials.innerHTML = `<option value='${n} pessoas'>${n} Credenciais</option>`;
    };

  // Add options based on the selected value and answer
  if (selectedValue === "bronze") {
    if (answer === "Não") {
      secondSelect.setAttribute('disabled', 'disabled');
      secondSelect.innerHTML += "<option value='3m x 2m [6m² de área]'>3m x 2m [6m² de área] (2 metros de Frente) </option>";
      setCreds(2);
    } else if (answer === "Sim") {
      secondSelect.setAttribute('disabled', 'disabled');
      secondSelect.innerHTML += "<option value='2m x 2m [4m² de área] - Food'>2m x 2m [4m² de área] (2 metros de Frente) </option>";
      setCreds(2);
    }
  } if (selectedValue === "diamante") {
      secondSelect.innerHTML += "<option value='4m x 5m [20m² de área]'>4m x 5m [20m² de área] (4 metros de Frente)</option>";
      setCreds(4);
    } if (selectedValue === "elite") {
      secondSelect.innerHTML += "<option value='5m x 10m [50m² de área]'>5m x 10m [50m² de área] (5 metros de Frente)</option>";
      setCreds(6);
    } if (selectedValue === "ilha") {
      secondSelect.innerHTML += "<option value='10m x 10m [100m² de área]'>10m x 10m [100m² de área] (10 metros de Frente)</option>";
      setCreds(6);
    } if (selectedValue === "presidencial") {
      secondSelect.innerHTML += "<option value='5m x 5m [25m² de área]'>5m x 5m [25m² de área] (5 metros de Frente)</option>";
      setCreds(4);
    } if (selectedValue === "presidencial Master") {
      secondSelect.innerHTML += "<option value='6.5m x 5m [32.5m² de área]'>6.5m x 5m [32.5m² de área] (6.5 metros de Frente)</option>";
      setCreds(5);
    } else if (selectedValue === "prata") {
    if (answer === "Não") {
      secondSelect.innerHTML += "<option value='4m x 3m [12m² de área]'>4m x 3m [12m² de área] (3 metros de Frente)</option>";
      setCreds(3);
    } else if (answer === "Sim") {
      secondSelect.innerHTML += "<option value='2.5m x 2.5m [6.25m² de área]'>2.5m x 2.5m [6.25m² de área] (2.5 metros de Frente)</option>";
      setCreds(3);
    }
  } else if (selectedValue === "ouro") {
    if (answer === "Não") {
      secondSelect.innerHTML += "<option value='3m x 5m [15m² de área]'>3m x 5m [15m² de área] (3 metros de Frente)</option>";
      setCreds(3);
    } else if (answer === "Sim") {
      secondSelect.innerHTML += "<option value='4.5m x 2.5m [11.25m² de área]'>4.5m x 2.5m [11.25m² de área] (4.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='4m x 3m [12² de área]'>4m x 3m [12² de área] (4 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='4.5m x 2.5m - Área Food Truck [11.25m² de área]'>4.5m x 2.5m - Área Food Truck [11.25m² de área] (4.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='2.5m x 2.5m - Área Food Truck [6.25m² de área]'>2.5m x 2.5m - Área Food Truck [6.25m² de área] (2.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='3m x 5m - Área Food Truck [15m² de área]'>3m x 5m - Área Food Truck [15m² de área] (3 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='4.5m x 2m - Área Food Truck [9m² de área]'>4.5m x 2m - Área Food Truck [9m² de área] (4.5 metros de Frente)</option>";
      secondSelect.innerHTML += "<option value='2.25m x 7m - Área Food Truck [15.75m² de área]'>2.25m x 7m - Área Food Truck [15.75m² de área] (2.5 metros de Frente)</option>";
      setCreds(3);
    }
  } if (selectedValue === "vila") {
    secondSelect.setAttribute('disabled', 'disabled');
    secondSelect.innerHTML += "<option value='2m x 2m [4m² de área]'>2m x 2m [4m² de área] (2 metros de Frente) </option>";
    setCreds(2);
  }
 // Trigger update for the text input
  updateTextInput();
  updateSecret();
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
  "2m x 2m [4m² de área]": {
    price: 7072.50,
    text: "R$ 7.072,50 (sete mil, setenta e dois reais e cinquenta centavos)"
  },
  "3m x 2m [6m² de área]": {
    price: 13627.50,
    text: "R$ 13.627,50 (treze mil, seiscentos e vinte e sete reais e cinquenta centavos)"
  },
  "2m x 2m [4m² de área] - Food": {
    price: 3680,
    text: "R$ 3.680,00 (três mil, seiscentos e oitenta reais)"
  },
  "4m x 3m [12m² de área]": {
    price: 23000,
    text: "R$ 23.000,00 (vinte mil reais)"
  },
  "2.5m x 2.5m [6.25m² de área]": {
    price: 4600,
    text: "R$ 4.600,00 (quatro mil e seiscentos reais)"
  },
  "4m x 5m [20m² de área]": {
    price: 42498.25,
    text: "R$ 42.498,25 (quarenta e dois mil, quatrocentos e noventa e oito reais e vinte e cinco centavos)"
  },
  "5m x 5m [25m² de área]": {
    price: 50312.50,
    text: "R$ 50.312,50 (cinquenta mil, trezentos e doze reais e cinquenta centavos)"
  },
  "6.5m x 5m [32.5m² de área]": {
    price: 69933.80,
    text: "R$ 69.933,80 (sessenta e nove mil, novecentos e trinta e três reais e oitenta centavos)"
  },
  "5m x 10m [50m² de área]": {
    price: 100912.50,
    text: "R$ 100.912,50 (cem mil, novecentos e doze reais e cinquenta centavos)"
  },
  "10m x 10m [100m² de área]": {
    price: 201724.95,
    text: "R$ 201.724,95 (duzentos e um mil, setecentos e vinte e quatro reais e noventa e cinco centavos)"
  },
  "3m x 5m [15m² de área]": {
    price: 32435.75,
    text: "R$ 32.435,75 (vinte e oito mil, duzentos e cinco reais)"
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
  const selectedValue = meticSelect.value;

  // Check if the selected value exists in the price map
  if (priceMap.hasOwnProperty(selectedValue)) {
    const originalText = priceMap[selectedValue].text;
    textInput.value = originalText;
  } else {
    textInput.value = ""; // Reset the text input if the selected value is not found
  }
}

const kvaOptions = {
  apoio: [],
  bronze: ["Energia elétrica normal 1 Kva's"],
  diamante: ["Energia elétrica normal 2 Kva's"],
  elite: ["Energia elétrica normal 4 Kva's"],
  ilha: ["Energia elétrica normal 4 Kva's"],
  ouro: ["Energia elétrica normal 1 Kva's"],
  prata: ["Energia elétrica normal 1 Kva's"],
  presidencial: ["Energia elétrica normal 2 Kva's"],
  "presidencial Master": ["Energia elétrica normal 3 Kva's"],
  vila: ["Energia elétrica normal 1 Kva's"]
};

function updateSecret() {
   const cotaSelect = document.getElementById("cota");
   const kvaSelect = document.getElementById("kva");
   const selectedCota = cotaSelect.value;

  kvaSelect.innerHTML = "";

   if (selectedCota === "default" || kvaOptions[selectedCota].length === 0) {
     const defaultOption = document.createElement("option");
     defaultOption.text = "Selecione uma Opção";
     defaultOption.value = "default";
     kvaSelect.add(defaultOption);
     return;
   }

  kvaOptions[selectedCota].forEach(kva => {
    const option = document.createElement("option");
    option.text = kva;
    option.value = kva.toLowerCase().replace(/ /g, " ");
    kvaSelect.add(option);
  });
}

// Get references to the radio input and select tags
const select2 = document.getElementById("pay");

// Function to handle radio input changes
function handleSelectChange() {
  const formaSelect = document.getElementById("formaSelect");
  const selectedValue = meticSelect.value;
  const selectedOption = priceMap[selectedValue];

  if (!selectedOption) return;

  const originalValue = selectedOption.price;

  switch (formaSelect.value) {
    case "vista":
      const discountedValue = calculateDiscount(originalValue, 10);
      const formattedValue = discountedValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      const updatedText = `${formattedValue} (${convertToText(discountedValue)})`;
      select2.options.length = 0;
      select2.innerHTML = `<option value="${updatedText}">${updatedText}</option>`;
      break;
    case "parcelado":
      select2.options.length = 0;
      select2.innerHTML = "<option value='1+1 (2 total)'>1+1 (2 total)</option>";
      break;
  }
}

function calculateDiscount(value, percentage) {
  const discount = value * (percentage / 100);
  const discountedValue = value - discount;
  return discountedValue;
}

function convertToText(value) {
  const unidade = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];
  const dezena = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
  const centena = ["", "cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
  const dez_a_dezenove = ["dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

  let num = value;
  let real = '';
  let centavos = '';
  
  let inteiro = Math.floor(num);
  let decimal = Math.round((num - inteiro) * 100);

  if (inteiro > 0) {
    if (inteiro > 999999) {
      real += `${unidade[Math.floor(inteiro / 1000000)]} milhão `;
      inteiro %= 1000000;
    }
    if (inteiro > 999) {
      real += `${centena[Math.floor(inteiro / 100000)]} ${dezena[Math.floor((inteiro / 10000) % 10)]} mil `;
      inteiro %= 1000;
    }
    if (inteiro > 99) {
      real += `${centena[Math.floor(inteiro / 100)]} `;
      inteiro %= 100;
    }
    if (inteiro > 9 && inteiro < 20) {
      real += `${dez_a_dezenove[inteiro - 10]} `;
      inteiro = 0;
    } else {
      if (inteiro > 9) {
        real += `${dezena[Math.floor(inteiro / 10)]} `;
        inteiro %= 10;
      }
      if (inteiro > 0) {
        real += `${unidade[inteiro]} `;
      }
    }
    real += 'reais';
  }

  if (decimal > 0) {
    if (decimal > 9 && decimal < 20) {
      centavos += `${dez_a_dezenove[decimal - 10]} `;
    } else {
      if (decimal > 9) {
        centavos += `${dezena[Math.floor(decimal / 10)]} `;
        decimal %= 10;
      }
      if (decimal > 0) {
        centavos += `${unidade[decimal]} `;
      }
    }
    centavos += 'centavos';
  }

  return `${real} ${centavos}`.trim();
}

const dateInput = document.getElementById("dateInput");
const formattedDateDiv = document.getElementById("formattedDate");
const formattedDateContainer = document.getElementById("formattedDateContainer");
const hiddenFormattedDate = document.getElementById("hiddenFormattedDate");
const dateForm = document.getElementById("dateForm");

const today = new Date().toISOString().slice(0, 10);
dateInput.value = today;

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day} de ${monthNames[parseInt(month) - 1]} de ${year}`;
}

function displayFormattedDate(dateString) {
  const newDiv = document.createElement("div");
  newDiv.textContent = formatDate(dateString);
  formattedDateContainer.appendChild(newDiv);
}

function updateHiddenFormattedDate(dateString) {
  hiddenFormattedDate.value = formatDate(dateString);
}

formattedDateDiv.textContent = formatDate(today);
displayFormattedDate(today);
updateHiddenFormattedDate(today);

dateInput.addEventListener("input", () => {
  const formattedDate = formatDate(dateInput.value);
  formattedDateDiv.textContent = formattedDate;
  displayFormattedDate(dateInput.value);
  updateHiddenFormattedDate(dateInput.value);
});

dateForm.addEventListener("submit", (event) => {
  if (!hiddenFormattedDate.value) {
    alert("Formatted date is missing!");
    event.preventDefault();
  }
});
