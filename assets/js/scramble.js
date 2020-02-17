DOMTokenList.prototype.addMany = function(classes) {
    var array = classes.split(' ');
    for (var i = 0, length = array.length; i < length; i++) {
      this.add(array[i]);
    }
}

class Scramble {

	/*
	 * recursively get all text nodes as an array for a given element
	 */
	static getTextNodes(node) {
	    const childTextNodes = [];

	    if (!node.hasChildNodes()) {
	        return;
	    }

	    const childNodes = node.childNodes;
	    
	    for (let i = 0; i < childNodes.length; i++) {
	        if (childNodes[i].nodeType == Node.TEXT_NODE) {
	            childTextNodes.push(childNodes[i]);
	        }
	        else if (childNodes[i].nodeType == Node.ELEMENT_NODE) {
	            Array.prototype.push.apply(childTextNodes, Scramble.getTextNodes(childNodes[i]));
	        }
	    }

	    return childTextNodes;
	}

	/*
	 * given a text node, wrap each character in the given tag.
	 */
	static wrapEachCharacter(textNode, tag, styleClass) {
	    const text = textNode.nodeValue.trim();
	    const parent = textNode.parentNode;
	    const characters = text.split('');

	    characters.forEach(function(character) {
		   	let element = document.createElement(tag);
		    if(styleClass){
		    	element.classList.addMany(styleClass)
		    }
		    let characterNode = document.createTextNode(character);
		    element.appendChild(characterNode);

		    parent.insertBefore(element, textNode);
	    });

	    parent.removeChild(textNode);
	}

	// list of possible letters to scramble to
	static letters(){
		const letters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,':()&!?");
		const lettersArr = letters.split("");
		return lettersArr;
	}

	scrambleInit(node, remainVisible) {
		var textNodes = Scramble.getTextNodes(node);
		textNodes.forEach(function(textNode) {
			// don't bother wrapping spaces
			if(textNode.textContent.trim() !== ''){
				let elClasses = 'flip';
				if(remainVisible){
					elClasses = 'flip stay-visible';
				}
				Scramble.wrapEachCharacter(textNode, 'span', elClasses);
			}	
		});
	}

	sequentialScramble(node, letterDelay, initDelay){
		if(!node.classList.contains('scrambling')){
			node.classList.add('scrambling');
			let i = 0;
			let timer = setTimeout(function flipTimer() {
				const el = node.querySelectorAll('.flip')[i];
				if(el){
					let originalLetter = el.textContent;
					let randomChar = Scramble.letters()[Math.floor(Math.random()*Scramble.letters().length)];
					el.textContent = randomChar;
					el.classList.add('flop');
					setTimeout(() => {
						el.textContent = originalLetter;
					}, letterDelay);
					i++;
					timer = setTimeout(flipTimer, letterDelay);
				}
				else{
					setTimeout(function(){
						node.classList.remove('scrambling');
					}, 50);
				}
			}, initDelay);
		}
	}

	parallelScramble(node, letterDelay, initDelay, noOfScrambles){
		if(!node.classList.contains('scrambling')){
			node.classList.add('scrambling');
			const el = node.querySelectorAll('.flip');

			el.forEach(character => {

				if(character.textContent.trim() !== ''){
					let currentChar = 0;
					let originalLetter = character.textContent;
					let timer = setTimeout(function flipTimer() {
						if(currentChar < noOfScrambles){
							let randomChar = Scramble.letters()[Math.floor(Math.random()*Scramble.letters().length)];
							character.textContent = randomChar;
							currentChar++;
							timer = setTimeout(flipTimer, letterDelay);
						}
						else{
							character.textContent = originalLetter;
							setTimeout(function(){
								node.classList.remove('scrambling');
							}, 50);
						}
					}, initDelay);
				}
			});
		}
	}
}

export const scramble = new Scramble();