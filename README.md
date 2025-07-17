# SPOTS: WebApp - Sprint 6 - By: Austin G. Abbott

An interactive social media web application that allows users to create a personal profile and share photos. Users can add and remove photos, like photos from other users, and make minor adjustments to their profile. The project is built with responsive design principles and enhanced with JavaScript for dynamic interactivity.

- [Link to video description of Spots](https://www.loom.com/share/4756a4c486f5479fa37e97b66b8737bf?sid=01bce196-b1d4-49b0-822d-561ff3ccd0fdgit)

---

## Project Features

### Core Features:

- **Responsive Design**: Adapts seamlessly to different screen sizes (320px and up).
- **Profile Editing**: Users can update their profile name and description.
- **Photo Sharing**: Users can add new photos with captions and remove photos they no longer want to display.
- **Like Functionality**: Users can like photos, and the like state persists until toggled.
- **Modal Interactions**: Modals are used for profile editing, adding new posts, and previewing images.

### New Features and UX Enhancements:

- **Close Modals with Escape Key**: Users can now close modals by pressing the `Escape` key.
- **Close Modals by Clicking the Overlay**: Clicking outside the modal content closes the modal.
- **Form Validation**: Real-time form validation ensures users provide valid inputs before submitting forms.
- **Dynamic Card Generation**: Photo cards are dynamically created using JavaScript and a template.
- **Reset Validation on Modal Open**: Validation errors are cleared when modals are reopened.
- **Interactive Buttons**: Buttons provide hover effects and are disabled when inputs are invalid.
- **Preview Image Modal**: Clicking on a photo opens a larger preview with a caption.

---

## Technologies and Techniques Used

- **HTML5**: Semantic and accessible markup.
- **CSS3**: Responsive design with Flexbox and Grid layout.
- **JavaScript (ES6)**: Dynamic DOM manipulation and event handling.
- **BEM Methodology**: Organized and maintainable CSS structure.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Media Queries**: Ensures a consistent user experience across devices.
- **Figma**: Used for design and prototyping.

---

## Project Links

- [Link to the project design on Figma](https://www.figma.com/design/mXGZ6wZ4QPKx5KjpHX9QCV/Sprint-9-Project%3A-Spots?node-id=0-1&t=q3sLidv5V6u8hM1F-0)
- [Link to the project on GitHub Pages](https://github.com/FameOz-1/se_project_spots-aa/deployments/github-pages)

---

## Plans for Finalizing the Project

- **Save User Photo Likes**: Implement functionality to persist user likes across sessions.
- **Profile Image Upload**: Add the ability for users to upload and change their profile picture.
- **User Authentication**: Introduce user accounts with login and registration functionality.
- **Enhanced Mobile Responsiveness**: Further optimize the design for smaller screens.

---

## Directory Structure

The project is organized using the BEM methodology with a flat file structure:

project-root/
├── images/
│ ├── avatar.jpg
│ ├── close.svg
│ ├── close-wht.svg
│ ├── logo.svg
│ ├── pencil.svg
│ └── plus.svg
│
├── pages/
│ └── index.css
│
├── blocks/
│ ├── card/
│ │ ├── card.css
│ │ ├── card**image.css
│ │ ├── card**delete-btn.css
│ │ ├── card**like-btn.css
│ │ └── card**caption.css
│ │
│ ├── modal/
│ │ ├── modal.css
│ │ ├── modal**container.css
│ │ ├── modal**close-btn.css
│ │ ├── modal**form.css
│ │ └── modal**input.css
│ │
│ ├── profile/
│ │ ├── profile.css
│ │ ├── profile**image.css
│ │ ├── profile**info.css
│ │ ├── profile**name.css
│ │ ├── profile**description.css
│ │ └── profile**edit-btn.css
│ │
│ └── page/
│ ├── page.css
│ └── page**content.css
│
├── scripts/
│ ├── index.js
│ └── validation.js
│
├── index.html
├── README.md
└── favicon.ico

## How to Clone and Run the Project Locally

1. Clone the repository:

```bash
- git clone https://github.com/fameoz-1/se_project_spots-aa.git
```

2. Navigate to the project directory:

- cd t10_p3_spots-app

3. Open index.html in your browser to view the Project

## Acknowledgments

- **TripleTen**: For providing the project lessons, requirements and design inspiration.

- **Figma**: For the design and prototyping tools.

- **MDN Web Docs**: For documentation and resources on web development.
