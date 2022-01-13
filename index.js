let clickReviewButtonFunction = () => {
  let commentInput = document.querySelector(".form__comment")
  if (commentInput.value == "") {
    commentInput.value = document.querySelector(".email__link").innerHTML
  }

  let telInput = document.querySelector("#tel")
  let regex = /^\+375(\d{9})$/
  let numberIsValid = regex.test(telInput.value)
  let validationMessage = document.querySelector("#telValidatorMessage")
  validationMessage.textContent = numberIsValid ? "валидный" : "не валидный"
}


let button = document.querySelector(".form__button")
button.addEventListener("click", clickReviewButtonFunction)