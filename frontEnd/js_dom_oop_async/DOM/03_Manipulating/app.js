// ========================================================================== //
// innerText property -> retrieve the text of an element (ignore the ones with display = none) 
const paragraphText = document.querySelector('p');
// if we want to access all the text (without html) inside an element we can use innerText
console.log(paragraphText.innerText);
//  if we want to modify the text in that paragraph we can use also innerText
paragraphText.innerText = "changed text with inner text";

// ========================================================================== //
// textContent -> it's similar to inner text (in the sense that we can retrieve the text of the element) (retrieve the elements that have the property of display=none)

console.log(paragraphText.textContent);

// ========================================================================== //
// 

const allLinks = document.querySelectorAll('a')

for(let link of allLinks){
	// change all the text on the links
	// completly override all the tags inside of all the anchors
	link.innerText = 'I am a link!!';
}
// ========================================================================== //
// modifiying html with innerText or textContent 
const header = document.querySelector('h1');
// it does not render the html if we modify it with inner text
header.innerText = '<i>asdf<i>';

// ========================================================================== //
// innerHtml -> retrieve the text WITH the html tags that are inside of the paragraph and when we modify it it can render html
const secondParagraph = document.querySelector('p:nth-of-type(2)');
console.log(secondParagraph.innerHTML);

const h2Headers = document.querySelectorAll('h2');
for(let h2 of h2Headers){
	h2.innerHTML = '<i>'+h2.innerHTML+'<i>';
}

// ========================================================================== //
// getAttribute() -> retrieve the value of the specified attribute of one element, if it doest exist it will return null

const firstLink = document.querySelector('a');
console.log(firstLink.href);
console.log(firstLink.id);
// or
console.log(firstLink.getAttribute('href'));
console.log(firstLink.getAttribute('id'));

// ========================================================================== //
// setAttribute() -> modify the value of the specified attribute of one element
// changed the reference of the first link to google.com
firstLink.setAttribute('href', 'https://www.google.com');

// ========================================================================== //
// modifying attributes

const input = document.querySelector('input[type="text"]')
// input.type = 'password';
input.type= 'color';
// input.setAttribute('type','text');

// ========================================================================== //
// style property -> modify all the properties related to css
header.innerHTML = '<i>Chickens<i>'
// the css properties inside of style are all camelCased (so font-size will be fontSize for example) 
// we can modify the style with this property BUT we cannot access the current styles written in css
// everything in javascript must be a string

header.style.fontSize = '5rem'
header.style.color = 'magenta'
header.style.border = '2px solid pink'

for(let link of allLinks){
	link.style.color = '#00aaac';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}
// ========================================================================== //
// in order to get the style applied to the element by the browser we can use the windows object
// it's not a selector
console.log(window.getComputedStyle(header).color)
console.log(window.getComputedStyle(header).fontSize)
console.log(window.getComputedStyle(header).fontFamily)
console.log(window.getComputedStyle(header).margin)

// ========================================================================== //
// there is a better way that we should use we can define a class in css and add it to an element

const h2 = document.querySelector('h2')

console.log(h2.getAttribute('class'));
// with set attribute we cannot apply two classes to one element
h2.setAttribute('class', 'purple');
// border override the purple class 
h2.setAttribute('class', 'border');
// we can do something like and it would work but there is a better way
h2.setAttribute('class', `${h2.getAttribute('class')} purple`)

// classList -> object that control the classes in the document and each element

// classList.add() will not replace one class with another but instead will aplly both classes to the element

h2.classList.add('border')
h2.classList.add('purple')

// if we want to remove a class then we use classList.remove()

h2.classList.remove('purple')

// if we want to alternate a class we can use classList.toggle()

h2.classList.toggle('purple')
h2.classList.toggle('border')

document.createElement('button')

// ========================================================================== //
//selecting parent / childs / sibilings 

const firstBold = document.querySelector('b');
// accessing the parent element of the first bold element
// only one parent per element
console.log(firstBold.parentElement)
const paragraph = firstBold.parentElement;
// accessing the htmlCollection of children from the paragraph
// one parent can have multiple children
console.log(paragraph.children)

// Accessing sibilings
// we can use 4 methods 

// these two method will return a text-node (depending on the case could not return the exact element that we want)
// element.nextSibiling
// element.previousSibiling

// these two methods return the next or previous element
// element.nextElementSibiling
// element.previousElementSibiling

console.log(paragraph.nextSibling);
console.log(paragraph.previousSibling);
console.log(paragraph.nextElementSibling);
console.log(paragraph.previousElementSibling);

// ========================================================================== //
// Create and insert new elements

// document.createElement(Tag name of the element)
const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'

// element.appendChild(newElement) allow us to insert any element at the end of another element (in this case the body) 
document.body.appendChild(newImg)
newImg.classList.add('square')

// ========================================================================== //
// ELEMENT.append('some text' or TextElement) -> allow us to insert text at the end of the element (can only be text element b,div, ....)

paragraph.append('somos los que tal')

// element.prepend('some text' or textElement) -> similar to append but at the beginning

// const boldText = document.createElement('b')
// boldText.innerText = "I am at the beginning"
// or with append
const boldText = document.createElement('b')
boldText.append('I am at the beginning!')
paragraph.prepend(boldText)

// ========================================================================== //
// element.insertAdjacentElement(position, newElement) -> we use it to add an element after or before another element

// positions:
				// - beforebegin 	-> before target element
				// - afterbegin		-> inside target element before it's first child
				// - beforeend		-> inside target element after it's last child
				// - afterend			-> after target element

const h3 = document.createElement('h3');
h3.innerText = 'I am before paragraph';
paragraph.insertAdjacentElement('beforebegin', h3)

const h3_1 = document.createElement('h3');
h3_1.innerText = 'I am in the paragraph before the first child'
paragraph.insertAdjacentElement('afterbegin', h3_1)

const h3_2 = document.createElement('h3');
h3_2.innerText = 'I am in the paragraph after the last child'
paragraph.insertAdjacentElement('beforeend', h3_2)

const h3_3 = document.createElement('h3');
h3_3.innerText = 'I am after the paragraph'
paragraph.insertAdjacentElement('afterend', h3_3)

// ========================================================================== //
// element.remove() and element.removeChild()
// element.remove() -> remove element
// parentElement.removeChild(element) -> remove element (not parentElement)

const li = document.querySelector('li')
const ul = li.parentElement
// remove li -> it's a little bit annoying because we need to access both elements
ul.removeChild(li) 
// can be done in one line with:
// li.parentElement.removeChild(li)

// we can also use remove (not supported on internet explorer)
li.remove()