import * as $ from 'jquery';

$(() => {
	$('body').addClass('js');

	// let footerItemHeight = $('.footer-item').eq(0).outerHeight();
	// $('.footer-item').css({'maxHeight': footerItemHeight});

	$('.footer-item-link').click(function(){
		$('.footer-item').removeClass('open');
		$(this).closest('.footer-item').addClass('open');
	});

	function spanify(node){
		node.contents().each(function(){
			if (this.nodeType == 3) {
				$(this).replaceWith($(this).text().replace(/(\w|\.)/g, "<span class='flip'>$&</span>"));
			}
			else if(this.nodeType == 1){
				spanify($(this));
			}
		});
	}

	$('.heading-intro-home').each(function(){
		spanify($(this));
	});

	const letters = (" ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?").split("");

	$('.heading-intro-home .line').each(function(){
		let $this = $(this);
		let i = 0;

		let timer = setTimeout(function myTimer() {
			let el = $this.find('.flip').eq(i);
			if(el.length){
				let originalLetter = el.text();
				let randomChar = letters[Math.floor(Math.random()*letters.length)];

				el.text(randomChar);
				el.addClass('flop');

				setTimeout(() => {
					el.text(originalLetter);
				}, 500);

				timer = setTimeout(myTimer, 50);
				i++;
			}
		}, 800);
	});
});