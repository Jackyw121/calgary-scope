document.addEventListener("DOMContentLoaded", function() {
    fetchUserData();
    initializeEditButton();
    initializeSaveButton();
    initializeCancelButton();
    initializeEditProfileButton();
    initializeProfilePicture();
  });
  
  function fetchUserData() {
    // Simulating an asynchronous request to retrieve user data from the database or storage
    setTimeout(function() {
      var userData = JSON.parse(localStorage.getItem("userData")) || {
        username: "John Doe",
        email: "johndoe@example.com",
        location: "New York, USA",
        joinedDate: "July 1, 2023",
        aboutText: "Tell us a little about yourself!."
      };
  
      // Update the user profile with the retrieved data
      document.querySelector(".profile-card-username").textContent = userData.username;
      document.getElementById("aboutText").textContent = userData.aboutText;
      document.getElementById("locationText").textContent = "Location: " + userData.location;
      document.getElementById("joinedText").textContent = "Joined: " + userData.joinedDate;
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  function initializeEditButton() {
    var editButton = document.getElementById("editButton");
    var aboutSection = document.getElementById("aboutSection");
    var editSection = document.getElementById("editSection");
  
    editButton.addEventListener("click", function() {
      aboutSection.style.display = "none";
      editSection.style.display = "block";
      document.getElementById("editTextarea").value = document.getElementById("aboutText").textContent.trim();
    });
  }
  
  function initializeSaveButton() {
    var saveButton = document.getElementById("saveButton");
    var aboutSection = document.getElementById("aboutSection");
    var editSection = document.getElementById("editSection");
    var aboutText = document.getElementById("aboutText");
    var editTextarea = document.getElementById("editTextarea");
    var usernameText = document.querySelector(".profile-card-username");
  
    saveButton.addEventListener("click", function() {
      aboutSection.style.display = "flex";
      editSection.style.display = "none";
      aboutText.textContent = editTextarea.value;
      usernameText.contentEditable = false;
  
      // Save the updated user data in localStorage
      var userData = {
        username: usernameText.textContent,
        aboutText: aboutText.textContent,
        location: document.getElementById("locationText").textContent.replace("Location: ", ""),
        joinedDate: document.getElementById("joinedText").textContent.replace("Joined: ", "")
      };
      localStorage.setItem("userData", JSON.stringify(userData));
    });
  }
  
  function initializeCancelButton() {
    var cancelButton = document.getElementById("cancelButton");
    var aboutSection = document.getElementById("aboutSection");
    var editSection = document.getElementById("editSection");
  
    cancelButton.addEventListener("click", function() {
      aboutSection.style.display = "flex";
      editSection.style.display = "none";
    });
  }
  
  function initializeEditProfileButton() {
    var editProfileButton = document.getElementById("editProfileButton");
    var editButton = document.getElementById("editButton");
    var editSection = document.getElementById("editSection");
    var usernameText = document.querySelector(".profile-card-username");
    var profilePicture = document.getElementById("profilePicture");
    var profilePictureInput = document.getElementById("profilePictureInput");
  
    editProfileButton.addEventListener("click", function() {
      if (editProfileButton.textContent === "Edit Profile") {
        editProfileButton.textContent = "Save Profile";
        editButton.style.display = "block";
        editSection.style.display = "none";
        usernameText.contentEditable = true;
        profilePicture.style.cursor = "pointer";
        profilePictureInput.style.display = "block";
      } else {
        editProfileButton.textContent = "Edit Profile";
        editButton.style.display = "none";
        editSection.style.display = "none";
        usernameText.contentEditable = false;
        profilePicture.style.cursor = "default";
        profilePictureInput.style.display = "none";
      }
    });
  }
  
  function initializeProfilePicture() {
    var profilePictureInput = document.getElementById("profilePictureInput");
    var profilePicture = document.getElementById("profilePicture");
  
    profilePictureInput.addEventListener("change", function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
  
      reader.onload = function() {
        profilePicture.src = reader.result;
        profilePicture.alt = "Profile Picture";
      };
  
      reader.readAsDataURL(file);
    });
  }
  