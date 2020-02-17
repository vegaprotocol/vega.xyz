import jump from 'jump.js';
import Cookies from 'js-cookie';
import { scramble } from './scramble.js';

/*
 * find and return closest element
 */
function closest(el, selector){
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }
  return null;
}

document.addEventListener("DOMContentLoaded",()=>{
	document.querySelector('body').classList.add('js');

	// persist toggle state across sessions
	const toggleSwitchCheckbox = document.querySelector('#toggleSwitch');
	if(toggleSwitchCheckbox){
		if(Cookies.get('toggle')){
			toggleSwitchCheckbox.checked = true;
		}

		toggleSwitchCheckbox.addEventListener('change', function(){
			if(this.checked){
				Cookies.set('toggle', 'yes');
			}
			else{
				Cookies.remove('toggle');
			}
		});
	}

	// custom cursor
	const body = document.querySelector('body');
	const cursor = document.createElement('div');
	cursor.id = "cursor";
	body.appendChild(cursor);

	document.addEventListener("mousemove", (e) => {
		cursor.style.left = `${e.clientX}px`;
		cursor.style.top = `${e.clientY}px`;
	});

	const hoverable = document.querySelectorAll("a, button, input");

	hoverable.forEach((hoverableEl) => {
		hoverableEl.addEventListener('mouseover', () => {
			cursor.classList.add('on-link');
		});
		hoverableEl.addEventListener('mouseout', () => {
			cursor.classList.remove('on-link');
		});
	});

	// smooth scroll links
	// if(window.location.hash) {
 	//  		jump(window.location.hash)
 	//	}
 	//  	let anchorlinks = document.querySelectorAll('a[href*="#"]');
	// for (let item of anchorlinks) {
	//     item.addEventListener('click', (el) =>{
	//     	let target;
	//     	let hash = el.currentTarget.getAttribute('href').split('#')[1];
	    	
	//     	if(hash === 'top'){
	//     		target = 'body';
	//     	} else{
	//     		target = '#' + hash;
	//     	}
	//         jump(target);
	//     });
	// }

	// open/close footer link sections
	const footerItemLinks = document.querySelectorAll('.footer-item-link');

	const openFooterItem = (el) => {
		document.querySelectorAll('.footer-item').forEach( el => {
			el.classList.remove('open');
		});
		el.closest('.footer-item').classList.add('open');
	}

	footerItemLinks.forEach(footerItemLink => {
		footerItemLink.addEventListener('click', event => {
			event.currentTarget.blur();
			event.preventDefault();
			event.currentTarget.blur();
			openFooterItem(event.currentTarget);
		})

		footerItemLink.addEventListener('keyup', event => {
			const el = event.currentTarget;
			if (event.keyCode === 13 || event.keyCode === 32) {
				openFooterItem(el);
			}
			event.preventDefault();
		});
	});

	// flip last footer element on click
	const footerSwitchLinks = document.querySelectorAll('.footer-switch-link');

	const switchFooterItem = (el) => {
		// close open footer items
		const openFooterItem = document.querySelector('.footer-item.open');
		if(openFooterItem){
			openFooterItem.classList.remove('open');
		}

		el.classList.add('hidden');
		el.nextElementSibling.classList.add('visible');
	}

	footerSwitchLinks.forEach(footerSwitchLink => {
		footerSwitchLink.addEventListener('click', el => {
			switchFooterItem(el.currentTarget);
		});

		footerSwitchLink.addEventListener('keyup', event => {
			const el = event.currentTarget;
			event.currentTarget.blur();
			if (event.keyCode === 13 || event.keyCode === 32) {
				switchFooterItem(el);
			}
			event.preventDefault();
		});
	});

	// slide toggle areas
	const slideToggle = (el) => {
		if (!el.classList.contains('active')) {
			el.classList.add('active');
		} else{
			el.classList.remove('active');
		}

		let slideTogglePanel = closest(el, '.slide-toggle-container').querySelector('.slide-toggle-panel');

		if (!slideTogglePanel.classList.contains('active')) {
	        slideTogglePanel.classList.add('active');
	        slideTogglePanel.style.height = 'auto';

	        let height = slideTogglePanel.clientHeight + "px";
	        slideTogglePanel.style.height = '0px';

	        setTimeout(function () {
	            slideTogglePanel.style.height = height;
	        }, 0);
	    } else {
	        slideTogglePanel.style.height = '0px';
	        slideTogglePanel.classList.remove('active');
	    }
	}


	document.querySelectorAll('.slide-toggle-area').forEach( slideToggleArea => {
		slideToggleArea.querySelectorAll('.slide-toggle-trigger').forEach( slideToggleTrigger => {
			slideToggleTrigger.addEventListener('click', (event) => {
				slideToggle(event.currentTarget);
			});

			slideToggleTrigger.addEventListener('keyup', (event) => {
				event.preventDefault();
				if (event.keyCode === 13 || event.keyCode === 32) {
					slideToggle(event.currentTarget);
				}
			});
		})
	});

	// scramble init
	const scrambleHeadings = document.querySelectorAll('.scramble-heading');
	scrambleHeadings.forEach(heading => {
		scramble.scrambleInit(heading);
	});

	// scramble headings
	const scrambleHeadingLines = document.querySelectorAll('.scramble-heading .line');
	scrambleHeadingLines.forEach( line => {
		scramble.sequentialScramble(line, 50, 800);
	});

	const scrambleOnHover = document.querySelectorAll('.scramble-on-hover');
	scrambleOnHover.forEach( line => {
		scramble.scrambleInit(line, true);

		line.addEventListener('mouseenter', function(){
			scramble.parallelScramble(this, 20, 0, 10);
		});
	});

	// draggable 404 window
	const dragElement = (el) => {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		if (document.getElementById(el.id + "Header")) {
		  // if present, the header is where you move the DIV from:
		  document.getElementById(el.id + "Header").onmousedown = dragMouseDown;
		} else {
		  // otherwise, move the DIV from anywhere inside the DIV:
		  el.onmousedown = dragMouseDown;
		}

		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		};

		function elementDrag(e){
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			el.style.top = (el.offsetTop - pos2) + "px";
			el.style.left = (el.offsetLeft - pos1) + "px";
		}

		function closeDragElement(){
			// stop moving when mouse button is released:
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}

	const draggableItem = document.getElementById("appWindow");
	if(draggableItem){
		dragElement(draggableItem);
	}

	// current section highlighting in table of contents
	const tableOfContents = document.querySelector('.table-of-contents');
	const firstMenuItem = document.querySelector('.table-of-contents li:first-child');
	if(tableOfContents){
		firstMenuItem.classList.add('current');

		document.addEventListener('scroll', () => {
			let scrollDistance = document.querySelector('html').scrollTop;
			let pageSections = document.querySelectorAll('#content .heading-panel');
			pageSections.forEach( (section, index) => {
				if((section.offsetTop-2) <= scrollDistance){
					let active = tableOfContents.querySelector('li.current');
					if(active){
						active.classList.remove('current');
					}
					tableOfContents.querySelectorAll('ul li')[index].classList.add('current');
				}
			});
		});
	}
});