  // Define the formatDate function
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 7);
  const dueDateString = formatDate(dueDate);

  console.log(dueDateString); // Outputs the formatted date

// Your Firebase configuration (from your project settings)
const firebaseConfig = {
  apiKey: "AIzaSyDQaauwpD5GiiM6nokB9ckLXE6GuhvcrXI",
  authDomain: "expotea-428817.firebaseapp.com",
  projectId: "expotea-428817",
  storageBucket: "expotea-428817.appspot.com",
  messagingSenderId: "21493325690",
  appId: "1:21493325690:web:5af5843d72b2fe21c540c3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Sign in anonymously
firebase.auth().signInAnonymously()
  .then(() => {
    // Proceed to connect to Firestore after successful anonymous sign-in
    connectToFirestore(); 
  })
  .catch((error) => {
    console.error("Error signing in anonymously:", error);
  });

  function connectToFirestore() {
    const db = firebase.firestore();
    const form = document.getElementById("multi-page-form"); // Replace "myForm" with your actual form ID
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission

      form.addEventListener("formdata", (e) => {
        const formData = e.formData;
  
        // Check the selected payment method
        const paymentMethod = formData.get('forma');
  
        if (paymentMethod === 'vista') {
            formData.set('payment', `Boleto Bancário em 1 parcela sendo o pagamento para ${dueDateString}`);
        } else if (paymentMethod === 'parcelado') {
          formData.set('payment', `Boleto Bancário em 2 parcelas sendo a primeira para ${dueDateString} e as demais subsequentes até o mês de outubro de 2025`);
        }
      });
  
      const formData = new FormData(form); // Get form data as an object
      // Convert FormData to regular object if needed
      const formValues = Object.fromEntries(formData.entries());
  
      // Delay the execution of sending form data to Firestore
      setTimeout(() => {
        // Send form data to Firestore
        db.collection("formSubmissions").add(formValues)
          .then(() => {
            // 1) Oculta o container de formulário (todas as etapas)
            const formContainer = document.getElementById("multi-page-form");
            formContainer.style.display = "none";

            // 2) Exibe a div de agradecimento
            const thankYouPage = document.getElementById("lastPage");
            thankYouPage.style.display = "block";
           form.reset(); // Clear the form after successful submission
          })
          .catch((error) => {
           console.error("Error submitting form data:", error);
           if (error.code === 'permission-denied') {
             alert("Permission denied. Check your Firestore security rules.");
           } else {
             alert("An error occurred while submitting the form. Please try again."); // Display a generic error message to the user
           }
          });
        }, 2000); // Delay the execution by 2 seconds (adjust the time as needed)
    });
  }
