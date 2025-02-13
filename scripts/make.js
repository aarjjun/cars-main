      // JavaScript to handle opening and closing the modal
      const openPopupButton = document.getElementById('open-make-popup');
      const closePopupButton = document.getElementById('close-popup');
      const popup = document.getElementById('make-popup');

      openPopupButton.addEventListener('click', () => {
        popup.style.display = 'block'; // Show the modal
      });

      closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none'; // Close the modal
      });

      function showPopUp(contentUrl) {
        // Show the overlay
        const overlay = document.getElementById('popup-overlay');
        overlay.classList.add('show');
        
        // Load content from makepop.html (or any other page)
        fetch(contentUrl)
          .then(response => response.text())
          .then(data => {
            document.querySelector('.popup-content').innerHTML = data;
          })
          .catch(error => console.error('Error loading pop-up content:', error));
        
        // Close the pop-up if the user clicks outside the pop-up content
        overlay.addEventListener('click', function(event) {
          if (event.target === overlay) {
            closePopUp();
          }
        });
      }
      
      function closePopUp() {
        const overlay = document.getElementById('popup-overlay');
        overlay.classList.remove('show');
      }
      window.onload = function() {
        const carBrandsContainer = document.querySelector('.car-brands-container');
        carBrandsContainer.classList.add('show');
      };
      