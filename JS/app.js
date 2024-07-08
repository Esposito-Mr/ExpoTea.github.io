import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqNzTrLsTgn5RWYWek7f0KLR96GGwQMs8",
  authDomain: "expotea.firebaseapp.com",
  projectId: "expotea",
  storageBucket: "expotea.appspot.com",
  messagingSenderId: "175892241557",
  appId: "1:175892241557:web:69d7915ce54944f2af0f9c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('multi-page-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    fantasy: document.getElementById('fant').value,
    cnpj: document.getElementById('cnpj').value,
    ccm: document.getElementById('ccm').value,
    endereco: document.getElementById('endereco').value,
    cep: document.getElementById('cep').value,
    estado: document.getElementById('estado').value,
    tel: document.getElementById('tel').value,
    email: document.getElementById('e-mail').value,
    autent: document.getElementById('autent').value,
    brindes: document.getElementById('brindes').value,
    nome: document.getElementById('nome').value,
    cpf: document.getElementById('cpf').value,
    rg: document.getElementById('rg').value,
    nacional: document.getElementById('nacional').value,
    civil: document.getElementById('civil').value,
    profiss: document.getElementById('profiss').value,
    address: document.getElementById('address').value,
    cep1: document.getElementById('cep1').value,
    estado1: document.getElementById('estado1').value,
    emailPessoal: document.getElementById('pessoal').value,
    telephone: document.getElementById('telephone').value,
    foodRadio: document.querySelector('input[name="food"]:checked')?.value,
    metragem: document.getElementById('metragem').value,
    valor: document.getElementById('valor').value,
    message: document.getElementById('message').value,
    forma: document.querySelector('input[name="forma"]:checked')?.value,
    represent: document.getElementById('represent').value,
    pay: document.getElementById('pay').value
  };

  try {
    await addDoc(collection(db, 'formData'), formData);
    alert('Form data submitted successfully!');
  } catch (error) {
    console.error('Error submitting form data: ', error);
    alert('Error submitting form data.');
  }
});
