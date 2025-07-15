import "./index.css";
import {
  enableValidation,
  settings,
  resetValidation,
  disableButton,
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

api
  .getAppInfo()
  .then(([cards, user]) => {
    cards.forEach(function (item) {
      const cardElement = getCardElement(item);
      cardsList.append(cardElement); // Make sure append is correct and prepend is not needed.
    });

    avatarImageEl.src = user.avatar || avatarImage;
    profileNameEl.textContent = user.name;
    profileDescriptionEl.textContent = user.about;
  })
  .catch(console.error);

// Avatar Form Elements
const avatarImageEl = document.querySelector(".profile__avatar");
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
const deleteCloseBtn = deleteModal.querySelector(".modal__close-btn");
const deleteForm = deleteModal.querySelector(".modal__form");

let selectedCard, selectedCardId;

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-btn");

  if (data.isLiked) {
    cardLikeBtnEl.classList.add("card__like-btn_active");
  }

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  cardLikeBtnEl.addEventListener("click", (evt) => handleLike(evt, data._id));
  cardDeleteBtnEl.addEventListener("click", () =>
    handleDeleteCard(cardElement, data._id)
  );

  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

function handleLike(evt, id) {
  const isLiked = evt.target.classList.contains("card__like-btn_active");
  api
    .handleLikeStatus(id, isLiked)
    .then(() => {
      evt.target.classList.toggle("card__like-btn_active");
    })
    .catch(console.error);
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

deleteCloseBtn.addEventListener("click", function () {
  closeModal(deleteModal);
});

function handleAvatarSubmit(evt) {
  evt.preventDefault();

  avatarSubmitBtn.textContent = "Saving...";
  avatarSubmitBtn.disabled = true;

  api
    .editAvatarInfo(avatarInput.value)
    .then((data) => {
      avatarImageEl.src = data.avatar;
    })
    .catch((err) => {
      console.error("Error creating card:", err);
    })
    .finally(() => {
      closeModal(avatarModal);
      avatarSubmitBtn.textContent = "Save";
      avatarForm.reset();
    });
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;

  const inputList = Array.from(
    editProfileForm.querySelectorAll(settings.inputSelector)
  );
  resetValidation(editProfileForm, inputList, settings);
  openModal(editProfileModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();

  const editProfileSubmitBtn = evt.submitter;
  editProfileSubmitBtn.textContent = "Saving...";

  api
    .editUserInfo({
      name: editProfileNameInput.value,
      about: editProfileDescriptionInput.value,
    })
    .then((data) => {
      profileNameEl.textContent = data.name;
      profileDescriptionEl.textContent = data.about;
      editProfileForm.reset();
      disableButton(editProfileSubmitBtn, settings);
    })
    .catch((err) => {
      console.error("Error creating card:", err);
    })
    .finally(() => {
      editProfileSubmitBtn.textContent = "Save";
      closeModal(editProfileModal);
    });
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();

  const name = newPostCaptionInput.value.trim();
  const link = newPostImageInput.value.trim();

  newPostSubmitBtn.textContent = "Saving...";
  newPostSubmitBtn.disabled = true;

  api
    .postCards({ name, link })
    .then((cardData) => {
      cardsList.prepend(getCardElement(cardData));
      newPostForm.reset();
      disableButton(newPostSubmitBtn, settings);
    })
    .catch((err) => {
      console.error("Error creating card:", err);
    })
    .finally(() => {
      newPostSubmitBtn.textContent = "Save";
      newPostSubmitBtn.disabled = false;
      closeModal(newPostModal);
    });
}

function handleDeleteCard(cardElement, cardId) {
  selectedCard = cardElement;
  selectedCardId = cardId;
  openModal(deleteModal);
}

function handleDeleteSubmit(evt) {
  evt.preventDefault();

  const deleteSubmitBtn = evt.submitter;
  deleteSubmitBtn.textContent = "Deleting...";

  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deleteModal);
    })
    .catch((err) => {
      console.error("Error creating card:", err);
    })
    .finally(() => {
      deleteSubmitBtn.textContent = "Delete";
    });
}

avatarForm.addEventListener("submit", handleAvatarSubmit);

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

newPostForm.addEventListener("submit", handleNewPostSubmit);

deleteForm.addEventListener("submit", handleDeleteSubmit);

enableValidation(settings);
