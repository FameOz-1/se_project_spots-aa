// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add("form__input_type_error");
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add("form__input-error_active");
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove("form__input_type_error");
//   errorElement.classList.remove("form__input-error_active");
//   errorElement.textContent = "";
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   console.log(hasInvalidInput(inputList));
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add("button_inactive");
//   } else {
//     buttonElement.classList.remove("button_inactive");
//   }
// };

// const setEventListeners = (formElement) => {
// const inputList = Array.from(formElement.querySelectorAll(".form__input"));
// const buttonElement = formElement.querySelector(".form__submit");

// toggleButtonState(inputList, buttonElement);

// inputList.forEach((inputElement) => {
//   inputElement.addEventListener("input", function () {
//     checkInputValidity(formElement, inputElement);

//     toggleButtonState(inputList, buttonElement);
//   });
// });
// };

const showInputError = (formEl, inputEl, errorMsg) => {
  const errorMsgID = inputEl.id + "-error";
  const errorMsgEl = document.querySelector(`#${inputEl.id}-error`);
  errorMsgEl.textContent = errorMsg;
};

const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  }
};

const setEventListeners = (formEl) => {
  const inputList = formEl.querySelectorAll(".modal__input");
  const buttonElement = formEl.querySelector(".modal__submit-btn");

  //   TODO - handle initial states
  //   toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkInputValidity(formEl, inputEl);
      //   toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formEl) => {
    setEventListeners(formEl);
  });
};

enableValidation();
