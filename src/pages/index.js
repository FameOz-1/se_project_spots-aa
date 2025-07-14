import "./index.css";
import {
  enableValidation,
  settings,
  resetValidation,
} from "../scripts/validation.js";
import logoImage from "../images/logo.svg";
document.querySelector(".header__logo").src = logoImage;
import avatarImage from "../images/avatar.jpg";
import pencilLightIcon from "../images/pencil-light.svg";
document.querySelector(".profile__pencil-img").src = pencilLightIcon;
import pencilIcon from "../images/pencil.svg";
document.querySelector(".profile__pencil-icon").src = pencilIcon;
import plusIcon from "../images/plus.svg";
document.querySelector(".profile__add-btn").querySelector("img").src = plusIcon;
import closeIcon from "../images/close.svg";
document
  .querySelectorAll(".modal__close-btn img, .modal__close-btn_type_preview img")
  .forEach((img) => {
    img.src = closeIcon;
  });
import previewCloseIcon from "../images/close-wht.svg";
document.querySelector(
  ".modal__close-btn_type_preview .modal__close-icon"
).src = previewCloseIcon;
import Api from "../utils/Api.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "16150a07-cc6d-4059-ab7d-574d162722d2",
    "Content-Type": "application/json",
  },
});

const avatarImageEl = document.querySelector(".profile__avatar");

api
  .getAppInfo()
  .then(([cards, user]) => {
    cards.forEach(function (item) {
      const cardElement = getCardElement(item);
      cardsList.append(cardElement); // Make sure append is correct and prepend is not needed.
      console.log("user.avatar:", user.avatar);
      console.log("avatarImage:", avatarImage);
      console.log("avatarImageEl:", avatarImageEl);
    });

    avatarImageEl.src = avatarImage;
    editProfileNameInput.textContent = user.name;
    editProfileDescriptionInput.textContent = user.description;
  })
  .catch(console.error);

// Avatar Form Elements
const avatarModalBtn = document.querySelector(".profile__avatar-btn");
const avatarModal = document.querySelector("#avatar-modal");
const avatarCloseBtn = avatarModal.querySelector(".modal__close-btn");
const avatarForm = avatarModal.querySelector("#edit-avatar-form");
const avatarSubmitBtn = avatarModal.querySelector(".modal__submit-btn");
const avatarInput = avatarModal.querySelector("#profile-avatar-input");

// Edit-Profile Form Elements
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileSubmitBtn =
  editProfileModal.querySelector(".modal__submit-btn");
const editProfileForm = editProfileModal.querySelector("#edit-profile-form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// New Post Foem Elements
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector("#new-post-form");
const newPostSubmitBtn = newPostModal.querySelector(".modal__submit-btn");
const newPostImageInput = newPostModal.querySelector("#post-image-input");
const newPostCaptionInput = newPostModal.querySelector("#post-caption-input");

// Preview Form Elements
const previewModal = document.querySelector("#preview-image-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

// Delete Form Elements
const deleteModal = document.querySelector("#delete-modal");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-btn_active");
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtnEl.addEventListener("click", () => {
    let card = cardDeleteBtnEl.closest(".card");
    openModal(deleteModal);
    card.remove();
    card = null;
  });

  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_is-opened");
    if (openModal) {
      closeModal(openModal);
    }
  }
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscapeKey);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target === modal) {
      closeModal(modal);
    }
  });
});

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;

  const inputList = Array.from(
    editProfileForm.querySelectorAll(settings.inputSelector)
  );
  resetValidation(editProfileForm, inputList, settings);
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

previewModalCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

avatarModalBtn.addEventListener("click", function () {
  openModal(avatarModal);
});

avatarCloseBtn.addEventListener("click", function () {
  closeModal(avatarModal);
});

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  api
    .editAvatarInfo(avatarInput.value)
    .then((data) => {
      avatarImageEl.src = data.avatar || avatarUrl;
      closeModal(avatarModal);
      //   disableButton(avatarSubmitBtn);
    })
    .catch(console.error);
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  api
    .editUserInfo({
      name: editProfileNameInput.value,
      about: editProfileDescriptionInput.value,
    })
    .then((data) => {
      profileNameEl.textContent = data.name;
      profileDescriptionEl.textContent = data.about;
      closeModal(editProfileModal);
      disableButton(editProfileSubmitBtn, settings);
    })
    .catch(console.error);
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  const cardInputValues = {
    name: newPostCaptionInput.value,
    link: newPostImageInput.value,
  };

  const cardElement = getCardElement(cardInputValues);
  cardsList.prepend(cardElement);
  closeModal(newPostModal);
  newPostForm.reset();
  disableButton(newPostSubmitBtn);
}

avatarForm.addEventListener("submit", handleAvatarSubmit);

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

newPostForm.addEventListener("submit", handleNewPostSubmit);

enableValidation(settings);
