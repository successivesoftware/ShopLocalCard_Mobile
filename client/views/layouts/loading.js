
Template.loading.rendered = function () {
    this.loading = window.pleaseWait({
      logo: '/favicon.ico',
      backgroundColor: '#2F4050',
      loadingHtml: message + spinner
    });
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};

var message = '<p class="loading-message">Just a second...</p>';
var spinner = '<div class="fa fa-circle-o-notch fa-3x fa-spin"></div>';