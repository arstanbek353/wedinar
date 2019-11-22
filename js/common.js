function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
}

loadData()
  .then(() => {
    let preloaderEl = document.getElementById('cube-loader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
});
$('.circle').children(".circle__text").on('click', function(){
	$(this).toggleClass('collaps').find('.circle__subtet').slideDown("slow");
	$(".circle__text").not(this).removeClass('collaps').find('.circle__subtet').slideUp("slow");
});

var $window = $(window);
var $elem = $(".animation");

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("animate")
    }
});