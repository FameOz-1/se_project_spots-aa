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

- [Link to the project design on Figma](https://www.figma.com/file/BBNm2bC3lj8QQMHlnqRsga/Sprint-3-Project-%E2%80%94-Spots?type=design&node-id=2%3A60&mode=design&t=afgNFybdorZO6cQo-1)
- [Link to the project on GitHub Pages](https://fameoz-1.github.io/t10_p3_spots-app/)

---

## Plans for Finalizing the Project

- **Save User Photo Likes**: Implement functionality to persist user likes across sessions.
- **Profile Image Upload**: Add the ability for users to upload and change their profile picture.
- **User Authentication**: Introduce user accounts with login and registration functionality.
- **Enhanced Mobile Responsiveness**: Further optimize the design for smaller screens.

---

## Directory Structure

The project is organized using the BEM methodology with a flat file structure:

. ├── blocks/ # Reusable BEM blocks │ ├── card.css # Styles for photo cards │ ├── modal.css # Styles for modals │ ├── profile.css # Styles for the profile section │ └── ... # Additional block styles ├── images/ # Project images ├── pages/ # Page-specific styles │ └── index.css # Main page styles ├── scripts/ # JavaScript files │ ├── index.js # Main JavaScript logic │ ├── validation.js # Form validation logic │ └── utils.js # Utility functions (if applicable) ├── vendor/ # Third-party libraries and fonts │ ├── normalize.css # Normalize CSS for cross-browser consistency │ ├── fonts.css # Font imports │ └── fonts/ # Font files ├── index.html # Main HTML file ├── README.md # Project documentation └── .gitignore # Git ignore file

## How to Clone and Run the Project Locally

1. Clone the repository:

```bash
- git clone https://github.com/fameoz-1/t10_p3_spots-app.git
```

2. Navigate to the project directory:

- cd t10_p3_spots-app

3. Open index.html in your browser to view the Project

## Acknowledgments

- **TripleTen**: For providing the project lessons, requirements and design inspiration.

- **Figma**: For the design and prototyping tools.

- **MDN Web Docs**: For documentation and resources on web development.
