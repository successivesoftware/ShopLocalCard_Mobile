Template.navigation.rendered = function(){
    
    var instance = this;
    instance.autorun(function () {
     var subscription = Meteor.subscribe('roles');
        if (subscription.ready()) {
            $('#side-menu').metisMenu();
        }
    });

};  

Template.navigation.helpers({
   checkArray: function(data, roles){
       for(var i=0; i<roles.length; i++){
           if(roles[i].name == data){
               return roles[i];
           }
       }
       return false;
       //if(roles.indexOf(data) == -1) {
       //    return false
       //} else {
       //    return
       //}
   },
   'userImageUrl':function(){
      if( Meteor.user() && Meteor.user().profile.profile_image && Meteor.user().profile.profile_image.url) {
          return Meteor.user().profile.profile_image.url;
      }else {
          return '../../img/avatar1.jpg';
      }
    }
   
});

Template.navigation.events ({
  'click a': function() {
      if($('body').hasClass('body-small')){
          $("body").toggleClass("mini-navbar");
          if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
              // Hide menu in order to smoothly turn on when maximize menu
              $('#side-menu').hide();
              // For smoothly turn on menu
              setTimeout(
                  function () {
                      $('#side-menu').fadeIn(500);
                  }, 100);
          } else if ($('body').hasClass('fixed-sidebar')) {
              $('#side-menu').hide();
              setTimeout(
                  function () {
                      $('#side-menu').fadeIn(500);
                  }, 300);
          } else {
              // Remove all inline style from jquery fadeIn function to reset menu state
              $('#side-menu').removeAttr('style');
          }
      }
  }
})