// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= bootstrap
//= bootstrap.min
//= facebook
//= jquery.easing.min
//= jquery
//= rotation
//= jug
//= require turbolinks
//= require_tree .





 function setHold(event) {
  var name = event.currentTarget.id
  var picture_container = document.getElementById('image')
  var title = document.getElementById('type')
  var rotation = document.getElementById('rotation')
  var movement_text = document.getElementById(name)
      picture_container.src =  "assets/" + name + ".png"
      title.innerHTML = name
      rotation.innerHTML = movement_text.dataset.movement
}
