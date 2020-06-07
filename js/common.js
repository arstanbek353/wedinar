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

var elem = document.querySelectorAll(".animation");
function moveScroll() {
  for (var i = 0; i<elem.length; i++) {
    var elemTop = elem[i].getBoundingClientRect().top,
      elemHeight = elem[i].getBoundingClientRect().height,
      startPoint = elemHeight*50/100,
      endPoint = elemHeight*85/100;
    if ( elemTop < startPoint && elemTop > -(endPoint)) {
      elem[i].classList.add('animate')
    } else {
      elem[i].classList.remove('animate')
    }
  }
}
$(document).on("scroll", function () {
  moveScroll();
});