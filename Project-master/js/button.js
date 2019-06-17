$(function() {
  var d, x, y, selected;
  $('.button, .close-list-item').on('click', function(e) {

    var $this = $('.button, .close-list-item');
    if($this.find('.is-selected').length === 0) {
      $this.prepend('<span class="is-selected"></span>');
    }
    
    selected = $this.find('.is-selected');
    selected.removeClass('animate');

    if(!selected.height() && !selected.width()) {
      d = Math.max($(this).outerWidth(), $(this).outerHeight());
      selected.css({height: d, width: d});
    }   
    
    x = e.pageX - $this.offset().left - selected.width()/2;
    y = e.pageY - $this.offset().top - selected.height()/2;

    selected.css({top: 0+'px', left: 0+'px'}).addClass('animate');
    
    $this.addClass('expanded-button');
    $('.first-list-item, .list-item').hide();
    $('.list-item').show();
  });

  $('.close-list-item').on('click', function(e){
     e.stopPropagation();
     $('.expanded-button').removeClass('expanded-button');
     $('.list-item').hide();
    $('.first-list-item').show();
  });
  
});