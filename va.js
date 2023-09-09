const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // email validation
  const email = form.elements.email.value;
  if (!email || !isValidEmail(email)) {
    alert("Invalid email address");
    return;
  }

  // number validation
  const number = form.elements.number.value;
  if .(!number || isNaN(number)) {
    alert("Invalid number");
    return;
  }

  // name validation
  const name = form.elements.name.value;
  if (!name || !isValidName(name)) {
    alert("Invalid name");
    return;
  }

  // password validation
  const password = form.elements.password.value;
  if (!password) {
    alert("Please Enter password");
    return;
  } else if (!isValidPassword(password)) {
    alert("password must star");
  }

  // dropdown validation
  const dropdown = form.elements.dropdown.value;
  if (!dropdown) {
    alert("Please select an option");
    return;
  }

  // radio button validation
  const radios = form.elements.radio;
  let radioValue;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radioValue = radios[i].value;
      break;
    }
  }
  if (!radioValue) {
    alert("Please select an option");
    return;
  }
});

function isValidEmail(email) {
  const regex = /^[^@]+@[^@]+\.[a-z]{2,3}$/i;
  return regex.test(email);
}

function isValidName(name) {
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(name);
}

function isValidPassword(password) {
  const regex = /^\d.*\$$/;
  return regex.test(password) && password.length >= 4;
}
