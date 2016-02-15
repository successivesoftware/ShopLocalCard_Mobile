/*// Ensure we have the token to pass into the template when it's present
if (Accounts._resetPasswordToken) {  
  Session.set('resetPasswordToken', Accounts._resetPasswordToken);
}

Template.RecoverPassword.helpers({  
  resetPassword: function() {
    return Session.get('resetPasswordToken');
  }
});

Template.RecoverPassword.events({  
  'submit #forgot-password': function(event, template) {
    var email = template.find('#user-email'),
      message;

    // You will probably want more robust validation than this!
    if (email) {
      // This will send a link to the address which, upon clicking, prompts the
      
      Accounts.forgotPassword(email);
      message = 'Sent a reset password link to ' + email + '.';
    } else {
      message = 'Please enter a valid email address.'
    }

    // Inform the user.
    template.find('#form-messages').html(message);

    return false;
  },
  'submit #set-new-password': function (event, template) {
    // Proper decoupled validation would be much nicer than this
    var password = template.find('#new-password').value,
      passwordTest = new RegExp("(?=.{6,}).*", "g");

    // If the password is valid, we can reset it.
    if (passwordTest.test(password)) {
      Accounts.resetPassword(
        Session.get('resetPasswordToken'),
        password,
        function (error) {
          if (err) {
            template.find('#form-messages').html('There was a problem resetting your password.');
          } else {
            // Get rid of the token so the forms render properly when they come back.
            Session.set('resetPasswordToken', null);
          }
        })
      //});
    } else {
      // Looks like they blew it
      template.find('#form-messages').html('Your password is too weak!');
    }

    return false;
  }

});



Template.RecoverPassword.events({  
    'submit #change-password': function(event, template) {
        var currentPassword,
            newPassword,
            newPasswordRepeated;

        currentPassword = template.find('#current-password');
        newPassword = template.find('#new-password');
        newPasswordRepeated = template.find('#new-password-repeated');

        // You will want to validate your passwords better than this
        if (newPassword !== newPasswordRepeated) {
            template.find('#form-messages').html("The new passwords don't match!");

            return false;
        }

        Accounts.changePassword(currentPassword, newPassword, function(error) {
            if (error) {
                message = 'There was an issue: ' + error.reason;
            } else {
                message = 'You reset your password!'
            }
        });

        // Inform the user.
        template.find('#form-messages').html(message);

        return false;
    }
});*/


// if (Accounts._resetPasswordToken) {  
//   Session.set('resetPasswordToken', Accounts._resetPasswordToken);
// }


Template.RecoverPassword.helpers({
   resetPassword: function() {
    return Session.get('resetPasswordToken');
  }
});


Template.RecoverPassword.events({
    
    'submit #forgot-password': function(event, template) {
    event.preventDefault();

    var email = template.find('#user-email');
    var email = $('[name=user-email]').val();
    // You will probably want more robust validation than this!
    if (email) {
      // This will send a link to the address which, upon clicking, prompts the
      var options = {};
          options.email = email;
           
          Accounts.forgotPassword({email: email}, function(err) {
              
                if (err) {
                  if (err.message === 'User not found [403]') {
                   
                      toastr["error"]('User not found');
                      toastr.options = {
                          //"closeButton": true,
                          "debug": true,
                          "progressBar": true,
                          "positionClass": "toast-top-right",
                          "onclick": null,
                          "showDuration": "400",
                          "hideDuration": "1000",
                          "timeOut": "7000",
                          "extendedTimeOut": "1000",
                          "showEasing": "swing",
                          "hideEasing": "linear",
                          "showMethod": "fadeIn",
                          "hideMethod": "fadeOut"
                      } 

                  } else {
                   // console.log('We are sorry but something went wrong.');

                    toastr["error"]('We are sorry but something went wrong.');
                      toastr.options = {
                          "closeButton": true,
                          "debug": true,
                          "progressBar": true,
                          "positionClass": "toast-top-right",
                          "onclick": null,
                          "showDuration": "400",
                          "hideDuration": "1000",
                          "timeOut": "7000",
                          "extendedTimeOut": "1000",
                          "showEasing": "swing",
                          "hideEasing": "linear",
                          "showMethod": "fadeIn",
                          "hideMethod": "fadeOut"
                      } 

                  }
                } else {
                   toastr["success"]('Email Sent. Check your mailbox.');
                      
                      toastr.options = {
                          "closeButton": true,
                          "debug": true,
                          "progressBar": true,
                          "positionClass": "toast-top-right",
                          "onclick": null,
                          "showDuration": "400",
                          "hideDuration": "1000",
                          "timeOut": "7000",
                          "extendedTimeOut": "1000",
                          "showEasing": "swing",
                          "hideEasing": "linear",
                          "showMethod": "fadeIn",
                          "hideMethod": "fadeOut"
                      } 
                }
          });
          
    } else {
     
              toastr["error"]('Please enter a valid email address');
                
                toastr.options = {
                    "closeButton": true,
                    "debug": true,
                    "progressBar": true,
                    "positionClass": "toast-top-right",
                    "onclick": null,
                    "showDuration": "400",
                    "hideDuration": "1000",
                    "timeOut": "7000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                } 

   
    }

  
  },
  'submit #set-new-password': function (event, template) {
   
    var password = template.find('#new-password').value,
      passwordTest = new RegExp("(?=.{6,}).*", "g");
    if (passwordTest.test(password)) {
      Accounts.resetPassword(
        Session.get('resetPasswordToken'),
        password,
        function (error) {
          if (error) {
             toastr["error"]('There was a problem resetting your password.');
                    toastr.options = {
                        "closeButton": true,
                        "debug": true,
                        "progressBar": true,
                        "positionClass": "toast-top-right",
                        "onclick": null,
                        "showDuration": "400",
                        "hideDuration": "1000",
                        "timeOut": "7000",
                        "extendedTimeOut": "1000",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
               } 
          } else {
         
            Session.set('resetPasswordToken', null);
          }
        })
      //});
    } else {
          toastr["error"]('Your password is too weak.');
                  toastr.options = {
                      "closeButton": true,
                      "debug": true,
                      "progressBar": true,
                      "positionClass": "toast-top-right",
                      "onclick": null,
                      "showDuration": "400",
                      "hideDuration": "1000",
                      "timeOut": "7000",
                      "extendedTimeOut": "1000",
                      "showEasing": "swing",
                      "hideEasing": "linear",
                      "showMethod": "fadeIn",
                      "hideMethod": "fadeOut"
             } 
    }

    return false;
  }

});



Template.RecoverPassword.onRendered(function(){
    
});





Template.ChangePassword.onRendered(function(){
    
});

Template.ChangePassword.events({

  'submit #change-password': function(event, template) {
        var currentPassword,
            newPassword,
            newPasswordRepeated;

        currentPassword = template.find('#current-password');
        newPassword = template.find('#new-password');
        newPasswordRepeated = template.find('#new-password-repeated');

        // You will want to validate your passwords better than this
        if (newPassword !== newPasswordRepeated) {
            template.find('#form-messages').html("The new passwords don't match!");

            return false;
        }

        Accounts.changePassword(currentPassword, newPassword, function(error) {
            if (error) {
                message = 'There was an issue: ' + error.reason;
            } else {
                message = 'You reset your password!'
            }
        });

        // Inform the user.
        template.find('#form-messages').html(message);

        return false;
    }
    
});

Template.ChangePassword.helpers({
    
}); 

