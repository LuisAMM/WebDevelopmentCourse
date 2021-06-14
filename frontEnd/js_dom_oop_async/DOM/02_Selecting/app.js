// return an html collection (it does not contain the methods of an array)
// we can use for..of but not for..each
// getElementsByTagName -> return an html collection of the solicited tags
const allImages = document.getElementsByTagName('img');

for(let img of allImages){
	console.log(img.src)
	// we can mutate the src with this
	// img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
}

// ========================================================================== //
// document.getElementsByClassName -> return all the elements that match a className

const squareImage = document.getElementsByClassName('square');

for(let img of squareImage){
	img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
}

// ========================================================================== //
// document.querySelector() -> return the first element that match the css style selector (only the first even when a class it's called) 

const anchorText = document.querySelector("a[title='Java']")

// ========================================================================== //
// document.querySelectorAll() -> return the all the elements that match the css style selector

// all the anchors inside of paragraphs
const links = document.querySelectorAll("p a")

for(let link of links){
	console.log(link.href)
}