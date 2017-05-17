document.getElementById("name").focus()

const test = document.querySelector('select[name="user_title"]')
const shirt = document.querySelector('.shirt')

function createTA(elementA, prop1, value1, prop2, value2) {
const element = document.createElement(elementA)
element[prop1] = value1
element[prop2] = value2
return element
}

function append (elementP, target){
	const parent = target.parentElement
	parent.appendChild(elementP)
}


test.addEventListener ('change', function(e) {
if (e.target.value === 'other') {
	const otherRole = createTA('textarea', 'id', 'other-title', 'placeholder', 'Your Job Role' )
	append(otherRole, test)
	otherRole.style.display = "block"
	otherRole.style.width = '50%'
}
})  

const colorS = document.getElementById('color')
const designS = document.getElementById('design')

function assignShirtname () {
for (i = 0; i < colorS.length; i++) {
if (colorS[i].textContent.includes('I ♥ JS shirt only)')) {
colorS[i].setAttribute('name', 'heart js')
}
else if (colorS[i].textContent.includes('JS Puns')){
	colorS[i].setAttribute('name', 'js puns')
}
}
}
assignShirtname () 

var index

function findIndex (design) {
	for (var i = 0; i<colorS.length; i++) {
		if (colorS[i].getAttribute("name") == design) {
			 index = i
			 return index
		}
	}
}

function designSelection (design) {

if (design == 'heart js' || design == 'js puns') {
		for (i = 0; i<colorS.length; i++) {
		colorS.children[i].style.display = 'none'
		if (colorS[i].getAttribute('name') === design) {
			colorS[i].style.display = ''
}
}
index = findIndex(design)
colorS.selectedIndex = index
}
if (design == 'Select Theme') {
	for (i = 0; i<colorS.length; i++){
		colorS[i].style.display = ''

}
}
}

designS.addEventListener ('change', function(e) {
console.log(event.target.value)
designSelection(e.target.value)
})

var valueText = document.createElement('h1')



var cost = 0

labelT = document.querySelector('.activities')


activities = document.querySelectorAll('.activities input[type=checkbox]')


labelT.addEventListener ('change', function(e){
var target = event.target
var textC = event.target.parentElement.textContent
var time = textC.split('—').pop().split(',').shift()
price = Number(textC.split('$').pop())

checkConflict(time, target)
getPrice(target, price)
labelT.appendChild(valueText)
valueText.textContent = "$" + cost

})

function getPrice (target, price) {
	if (target.checked) {
			cost += price
		}

		if (target.checked === false){
			cost -= price
		}
}


function checkConflict(time, target){ 
var listN = event.target.getAttribute('name')

if (listN.includes('all')) {
	}
else if (listN.includes('all') === false) {
	for (i = 0; i <activities.length; i++) {
		if (activities[i].parentElement.textContent.includes(time) && activities[i].checked === false && event.target.checked === true)  {
			activities[i].disabled = true
	
		}
		else if (activities[i].parentElement.textContent.includes(time)) {
			activities[i].disabled = false
			
		}	

	}

}}
	


