function sendMail(event) {
  event.preventDefault(); 

  let params = {
    name: document.getElementById('nom').value,
    prenom: document.getElementById('prenom').value,
    phone: document.getElementById('telephone').value,
    email: document.getElementById('email').value,
    entreprise: document.getElementById('entreprise').value,
    message: document.getElementById('message').value
  };

  emailjs.send("service_axxyvke", "template_xgqktvh", params)
    .then(function(response) {
      alert("Email envoyé !");
     
    }, function(error) {
      alert("Erreur : " + error.text);
    });
}


