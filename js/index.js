
$(document).ready(function(){


})
function openModal(modalId) {
    $('#' + modalId).removeClass('hidden');
    // Add click event listener to close the modal when clicking outside of it
    $(document).on('click', function (e) {
      if (!$(e.target).closest('#' + modalId).length) {
        closeModal(modalId);
      }
    });
  }

  // Function to close a modal
  function closeModal(modalId) {
    $('#' + modalId).addClass('hidden');
    // Remove click event listener when closing the modal
    $(document).off('click');
  }