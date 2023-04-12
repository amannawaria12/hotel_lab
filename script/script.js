$(document).ready(function() {
    // Disable confirm password field by default
    $('#confirm-password').prop('disabled', true);
  
    // Enable confirm password field when password field has a value
    $('#password').on('input', function() {
      if ($(this).val()) {
        $('#confirm-password').prop('disabled', false);
      } else {
        $('#confirm-password').prop('disabled', true);
      }
    });
    
    // Validate that password and confirm password fields match
    $('#password, #confirm-password').on('keyup', function() {
      if ($('#password').val() != $('#confirm-password').val()) {
        $('#confirm-password')[0].setCustomValidity("Passwords do not match");
      } else {
        $('#confirm-password')[0].setCustomValidity("");
      }
    });
    
    // Show the password as we click on the checkbox
    $('#show-password').on('change', function() {
      if ($(this).is(':checked')) {
        $('#password').attr('type', 'text');
        $('#confirm-password').attr('type', 'text');
      } else {
        $('#password').attr('type', 'password');
        $('#confirm-password').attr('type', 'password');
      }
    });

    $('form').submit(function(event) {
    event.preventDefault();
    alert('You are signed up!');
  });
});

