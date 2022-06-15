const formSignIn = document.querySelector(".login-form");

formSignIn.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
  }

  const dataSubmit = { email: email.value, password: password.value };
  console.log(dataSubmit);
  event.currentTarget.reset();
});
