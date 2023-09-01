const Fform = document.querySelector(".login-form"); //form input

function submitEvent(event) {
  event.preventDefault();
  const form = event.currentTarget; // formularz

  const formData = {
    email: form.elements.email.value, //wartosc inputa mail
    password: form.elements.password.value, //v tego drugiego
  };

  const empty = "";
  if (formData.email === empty || formData.password === empty) {
    return alert("Do not leave any empty fields!");
  } else {
    console.log(formData);
    form.reset();
  }
}

Fform.addEventListener("submit", submitEvent);
