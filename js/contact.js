const formContainer = document.getElementById("form");

function validateForm() {
  var fnamePointer = "first name";
  var firstName = document.forms["contactForm"][fnamePointer].value;
  if (validateString(firstName, fnamePointer, 0)) {
    return false;
  }
  var lnamePointer = "last name";
  var lastName = document.forms["contactForm"][lnamePointer].value;
  if (validateString(lastName, lnamePointer, 0)) {
    return false;
  }
  var emailPointer = "email";
  var email = document.forms["contactForm"][emailPointer].value;
  if (validateString(email, emailPointer, 0)) {
    return false;
  }
  console.log(validateEmail(email));

  if (!validateEmail(email)) {
    alert("Email is not valid");
    return false;
  }

  var subjectPointer = "subject";
  var subject = document.forms["contactForm"][subjectPointer].value;
  if (validateString(subject, subjectPointer, 10)) {
    return false;
  }

  formContainer.innerHTML =
    '<h1 class="complete"> Form was submitted successfully.</h1><p>Your question has been recieved and you will recieve an answer within one week.</p><button onClick="window.location.reload();">Send new form</button>';
}

function validateString(string, nameOfValue, minLength) {
  if (string == "") {
    alert("Must contain " + nameOfValue);
    return true;
  }

  if (minLength != 0) {
    if (string.length < minLength) {
      alert(nameOfValue + " must be greater than length of " + minLength);
      return true;
    }
  }

  return false;
}

function validateEmail(email) {
  const re = /.+@.+\..+/;
  return re.test(String(email).toLowerCase());
}
