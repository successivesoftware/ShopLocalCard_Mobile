Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
});

Accounts.onResetPasswordLink(function(token, done){
    Session.set('resetPasswordToken', Accounts._resetPasswordToken);
    doneCallback = done;
})

Accounts.config({ 
    // enablePasswordChange: true,
    sendVerificationEmail: true, 
    forbidClientAccountCreation: false 
});

Router.route('/', {
    name: 'Home',
    title: 'Home | Shop Local',
    
    action:function() { 
         if (!Meteor.userId()) {
            this.layout('blankLayout');
            this.render('login');
        } else { 
           this.render('home');
        }
    }
});


Router.route('/login', {
    name:  'login',
    title: 'Login | Shop Local',
    
    action:function() {
        if (!Meteor.userId()) {
            this.layout('blankLayout');
            this.render('login');
        } else {
            Router.go('/');
        }
    },

});

Router.route('/register', {
    name:  'register',
    title: 'Register | Shop Local',
    
    action:function() {
        if (!Meteor.userId()) {
            this.layout('blankLayout');
            this.render('register');
        } else {
            Router.go('/');
        }
    },
});

Router.route('/RecoverPassword', {
    name:  'RecoverPassword',
    title: 'RecoverPassword | Shop Local',
    
    action:function() {
        if (!Meteor.userId()) {
            this.layout('blankLayout');
            this.render('RecoverPassword');
        } else {
            Router.go('/');
        }
    },
});

Router.route('/ChangePassword', {
    name:  'ChangePassword',
    title: 'ChangePassword | Shop Local',
    
    action:function() {
        if (!Meteor.userId()) {
            this.layout('blankLayout');
            this.render('ChangePassword');
        } else {
            Router.go('/');
        }
    },
});

Router.route('/adminPanel', {
    name: 'adminPanel',
    title: 'Home | Daily Spinz',
    
    action:function() {
        if (!Meteor.userId()) {
            this.layout('blankLayout');
            this.render('login');
        } else { 
           this.render('adminPanel');
        }

    }
});

