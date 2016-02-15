Template.login.onRendered(function(){ 
    $('body').addClass('bodyStyle');
});
Template.login.helpers({
    resetPassword: function() {
        return Session.get('resetPasswordToken');
    }
})

Template.login.events({
    'submit .form': function(event) { 
        event.preventDefault();
        Meteor.loginWithPassword($('#email').val(),$('#password').val(), function(err,res){
            if (err) {
                if(err.reason == 'Login forbidden'){
                    toastr["error"]('Your account has been deactivated');
                } else {
                    toastr["error"](err.reason);
                }
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
                //Router.go('/');
            }
        });
    },
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});

/*
Template.maincontent.onRendered(function(){
    
});

Template.maincontent.events({
    
});

Template.maincontent.helpers({
    
});

*/