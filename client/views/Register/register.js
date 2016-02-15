Template.register.onRendered(function(){
    $('body').addClass('bodyStyle');
});

Template.register.events({
    
    'submit .form': function(event) {

        event.preventDefault();
        var name = $('[name=name]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var confirmpassword = $('[name=confirmpassword]').val();
        var isAgree  =  $("input[type='checkbox']").val();
         
        if(!$('#checkbox').is(':checked')){

                toastr["error"]('Please accept the terms and conditions!');
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
                return false;
        }

        if(password !== confirmpassword){ 

                toastr["error"]('password and confirm password do not match!');
               
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
                return false;
        }

        //User schema needs to be remove once we recieve the whole schema from marcus
        var userData = {
            username : email,
            email : email,
            profile : {
                name:{
                    title:'',
                    first_name:'',
                    last_name:''
                },
                
                contact_numbers : {
                    code: '+91',
                    mobile : 9999341290
                },
               
                profile_image : {
                  _id: '',
                   url: ''
                },

                address : {
                    line1 : 'abc',
                    line2 : 'abc',
                    city : 'New Delhi',
                    state : 'New Delhi',
                    zip : '110096',
                    country: {
                    _id: '1',
                    name: 'India',
                    code: 'IN'
                }
                },
                userType : '',  
                status : {
                     isActive: true
                },
                selected_countries : ''
            },

            password: password
        };


       Accounts.createUser(userData, function(error) {
            if (error) {
                toastr["error"](error.reason);
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
                return false;
            } else {
                Router.go('/');
            }
            
        });

    }
});
