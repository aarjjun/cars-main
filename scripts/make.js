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