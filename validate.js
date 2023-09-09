function validate() {
  let username = document.getElementById("uname");
  if (username.value == "") {
    alert("username is required");

    return false;
  }

  if (username.value.length < 4) {
    username.style.border = "solid 1px red";
    alert("Username Should Be at least 4");
    return false;
  }
  const password = document.getElementById("upass");
  if (password.value == "") {
    alert("password is required");

    return false;
  }
  let regx = /[0-9][a-zA-Z0-9]*[a-zA-Z0-9][$]/;
  if (!regx.test(password.value)) {
    password.style.border = "solid 1px red";
    alert("Password should start with digit and end with $");
    return false;
  }
  let education = document.getElementsByName("field");
  for (let i = 0; i < education.length; i++) {
    if (education[i].checked) {
      break;
    }
    alert("Please Select Your educational field.");
    return false;
  }

  if (
    !(
      hobbies[0].checked ||
      hobbies[1].checked ||
      hobbies[2].checked ||
      hobbies[3].checked
    )
  ) {
    alert("Please Select Atleast one of your hobby");

    return false;
  }
  return true;
}
