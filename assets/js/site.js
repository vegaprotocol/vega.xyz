import jump from 'jump.js'
import Cookies from 'js-cookie'

/*
 * recursively get all text nodes as an array for a given element
 */
function getTextNodes(node) {
    var childTextNodes = [];

    if (!node.hasChildNodes()) {
        return;
    }

    var childNodes = node.childNodes;
    
    for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeType == Node.TEXT_NODE) {
            childTextNodes.push(childNodes[i]);
        }
        else if (childNodes[i].nodeType == Node.ELEMENT_NODE) {
            Array.prototype.push.apply(childTextNodes, getTextNodes(childNodes[i]));
        }
    }

    return childTextNodes;
}

/*
 * given a text node, wrap each character in the given tag.
 */
function wrapEachCharacter(textNode, tag, styleClass) {
    var text = textNode.nodeValue;
    var parent = textNode.parentNode;
    var characters = text.split('');

    characters.forEach(function(character) {
	    var element = document.createElement(tag);
	    if(styleClass){
	    	element.classList.add(styleClass)
	    }
	    var characterNode = document.createTextNode(character);
	    element.appendChild(characterNode);

	    parent.insertBefore(element, textNode);
    });

    parent.removeChild(textNode);
}

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
	if(window.location.hash) {
  		jump(window.location.hash)
  	}

  	let anchorlinks = document.querySelectorAll('a[href*="#"]');
	for (let item of anchorlinks) {
	    item.addEventListener('click', () =>{
	    	let target;
	    	let hash = this.getAttribute('href').split('#')[1];
	    	
	    	if(hash === 'top'){
	    		target = 'body';
	    	} else{
	    		target = '#' + hash;
	    	}
	        jump(target);
	    });
	}

	// open/close footer link sections
	const footerItemLinks = document.querySelectorAll('.footer-item-link');

	footerItemLinks.forEach(footerItemLink => footerItemLink.addEventListener('click', el => {
		document.querySelectorAll('.footer-item').forEach( el => {
			el.classList.remove('open');
		});
		el.target.closest('.footer-item').classList.add('open');
	}));

	// flip last footer element on click
	const footerSwitchLinks = document.querySelectorAll('.footer-switch-link');
	footerSwitchLinks.forEach(footerSwitchLink => footerSwitchLink.addEventListener('click', el => {
		el.currentTarget.classList.add('hidden');
		el.currentTarget.nextElementSibling.classList.add('visible');
	}));

	// slide toggle areas
	document.querySelectorAll('.slide-toggle-area').forEach( slideToggleArea => {
		slideToggleArea.querySelectorAll('.slide-toggle-trigger').forEach( slideToggleTrigger => {
			slideToggleTrigger.addEventListener('click', function(){
				if (!this.classList.contains('active')) {
					this.classList.add('active');
				} else{
					this.classList.remove('active');
				}

				let slideTogglePanel = closest(this, '.slide-toggle-container').querySelector('.slide-toggle-panel');

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

			        slideTogglePanel.addEventListener('transitionend', () => {
			            slideTogglePanel.classList.remove('active');
			        },{
			        	once: true
			        });
			    }
			})
		})
	});

	// list of possible letters to scramble to
	const letters = (" ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?").split("");

	// wrap all characters in span tag
	const scrambleHeadings = document.querySelectorAll('.scramble-heading');

	scrambleHeadings.forEach(heading => {
		var textNodes = getTextNodes(heading);
		textNodes.forEach(function(textNode) {
			// don't bother wrapping spaces
			if(textNode.textContent.trim() !== ''){
				wrapEachCharacter(textNode, 'span', 'flip');
			}	
		});
	});

	// scramble headings
	const scrambleHeadingLines = document.querySelectorAll('.scramble-heading .line');

	scrambleHeadingLines.forEach( line => {
		let i = 0;
		let timer = setTimeout(function flipTimer() {
			const el = line.querySelectorAll('.flip')[i];
			if(el){
				let originalLetter = el.textContent;
				let randomChar = letters[Math.floor(Math.random()*letters.length)];
				el.textContent = randomChar;
				el.classList.add('flop');
				setTimeout(() => {
					el.textContent = originalLetter;
				}, 500);
				i++;
				timer = setTimeout(flipTimer, 50);
			}
		}, 800);
	});
});