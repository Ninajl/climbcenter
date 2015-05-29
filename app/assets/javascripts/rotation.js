var dragging = false;
$(function() {
    var target = $('#image');
    var mainTarget = $('#image');
    var rad = mainTarget.width()/2;
    var elOfs = mainTarget.offset();
    var elPos = {
       x: elOfs.left,
       y: elOfs.top
    };
    target.mousedown(function() {
        dragging = true;
    });
    $(document).mouseup(function() {
        dragging = false;
    });
    $(document).mousemove(function(e) {
      var mPos = {
        x: e.pageX-elPos.x,
        y: e.pageY-elPos.y
      };
      var getAtan = Math.atan2(mPos.x-rad, mPos.y-rad);
      var getDeg = -getAtan/(Math.PI/180) + 135;  //135 = (180deg-45deg)


        if (dragging) {
            mainTarget.css({transform: 'rotate(' + getDeg + 'deg)'});
        }
    });
});
