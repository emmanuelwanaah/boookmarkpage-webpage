document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    const topParagraphs = document.querySelectorAll('.top p');
    const downImage = document.querySelector('.down img');
    const downRightTitle = document.querySelector('.downright h2');
    const downRightText = document.querySelector('.downright p');
    const moreInfoLink = document.querySelector('.downright .login');

    // Function to update the content based on the clicked paragraph
    const updateContent = (index) => {
        // Define your content based on the clicked paragraph index
        const content = [
            {
                image: 'images/illustration-features-tab-1.svg',
                title: 'Bookmark in one click',
                text: 'Organize your bookmarks however you like. Our<br> simple drag-and-drop interface gives you complete<br> control over how you manage your favourite sites.',
                
            },
            {
                image: 'images/illustration-features-tab-2.svg',
                title: 'Intelligent search',
                text: 'Our powerful search feature will help you find saved<br>  sites in no time at all. No need to trawl through all of<br>  your bookmarks.',
              
            },
            {
                image: 'images/illustration-features-tab-3.svg',
                title: 'Share your bookmarks',
                text: 'Easily share your bookmarks and collections with<br> others. Create a shareable link that you can send at<br> the click of a button.',
                
            },
            // Add more content for other paragraphs
        ];

        // Update the content based on the clicked paragraph
        // Update the content based on the clicked paragraph
downImage.src = content[index].image;
downRightTitle.textContent = content[index].title;
downRightText.innerHTML = content[index].text; // Change here
moreInfoLink.href = content[index].moreInfoLink;

    };

    // Add click event listeners to each paragraph
    topParagraphs.forEach((paragraph, index) => {
        paragraph.addEventListener('click', () => {
            // Remove the "active" class from all paragraphs
            topParagraphs.forEach(p => p.classList.remove('active'));
            
            // Add the "active" class to the clicked paragraph
            paragraph.classList.add('active');

            // Update the content based on the clicked paragraph
            updateContent(index);
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    var toggleIcons = document.querySelectorAll(".toggleIcon");
    var answers = document.querySelectorAll(".answer");

    // Hide all answers initially
    answers.forEach(function(answer) {
        answer.style.display = "none";
    });

    toggleIcons.forEach(function (toggleIcon, index) {
        toggleIcon.addEventListener("click", function () {
            if (answers[index].style.display === "none") {
                answers[index].style.display = "block";
            } else {
                answers[index].style.display = "none";
            }
        });
    });
});





//--------------------------------------- email valid --------------------------------------------------
document.getElementById('submitButton').addEventListener('click', function(event) {
    validateEmail();
    event.preventDefault(); // Prevent the default form submission
  });

  function validateEmail() {
    var emailInput = document.getElementById('emailInput').value;
    var errorMessage = document.getElementById('errorMessage');

    // Regular expression for a simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
      // Email is valid
      errorMessage.textContent = ''; // Clear error message
      // Add your code to submit the form or perform other actions here
      alert('Email is valid!'); // Example: Displaying an alert
    } else {
      // Email is not valid
      errorMessage.textContent = 'Please enter a valid email address.';
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu');
    var closeIcon = document.querySelector('.close');
    var navList = document.querySelector('ul');
  
    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      navList.classList.toggle('show');
  
      // Toggle between menu and close icons
      var navListStyle = window.getComputedStyle(navList);
      if (navList.classList.contains('show')) {
        // Menu is visible
        menuIcon.src = 'images/icon-close.svg'; // Change to close icon
      } else {
        // Menu is hidden
        menuIcon.src = 'images/icon-hamburger.svg'; // Change to hamburger icon
      }
    }
  });
  
  