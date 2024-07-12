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
  
      const formData = new FormData(form); // Get form data as an object
      // Convert FormData to regular object if needed
      const formValues = Object.fromEntries(formData.entries());
  
      // Send form data to Firestore
      db.collection("formSubmissions").add(formValues)
        .then(() => {
          console.log("Form data submitted successfully!");
          alert("Form submitted successfully!"); // Display a success message       to the user
          form.reset(); // Clear the form after successful submission
        })
        .catch((error) => {
          console.error("Error submitting form data:", error);
          if(error.code === 'permission-denied'){
              alert("Permission denied. Check your Firestore security rules.");
          }else{
              alert("An error occurred while submitting the form. Please try      again."); // Display a generic error message to the user
          }
        });
    });
  }
  
