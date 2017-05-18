document.getElementById("name").focus()

const test = document.querySelector('select[name="user_title"]')
const shirt = document.querySelector('.shirt')

const payment = document.querySelector('select[name="user_payment"]')
const credit = document.getElementById('credit-card')
const paypal =  document.querySelectorAll('div p')[0]
const bitcoin = document.querySelectorAll('div p')[1]
const button = document.querySelector ('button[type = "submit"]')
const nameError = document.createElement('span')
const emailError = document.createElement('span')
const label = document.querySelectorAll('.activities label')
const act = document.querySelector('.activities')
var check = 0
const checkedMessage = document.createElement('span')
const ccnum = document.getElementById('cc-num')
const zip = document.getElementById('zip')
const cvv = document.getElementById('cvv')
const paymentParent = payment.parentElement
const cvvError = document.createElement('span')
var payTest = document.getElementById('credit-card')
var payParent = payTest.parentElement
var ccnError = document.createElement('div')
var zipError = document.createElement('div')
var payLegend= paymentParent.querySelector('legend')

ccnError.textContent = "Credit Card Number invalid"  
zipError.textContent = 'ZIP Code is 5 Characters'
cvvError.textContent = 'CVV is 3 digits'
ccnError.style.color = 'red'
zipError.style.color = 'red'
cvvError.style.color = 'red'


paypal.style.display = 'none'
bitcoin.style.display = 'none'


var infoParent = document.querySelector('fieldset')

const name = document.getElementById('name') 

payment.addEventListener('change', function(e){	
paymentSelection(e.target.value)
})


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


function paymentSelection (target) {

	if (target === 'paypal') {
		credit.style.display = 'none'
		bitcoin.style.display = 'none'
		paypal.style.display = ''
	}
	if (target=== 'bitcoin'){
		credit.style.display = 'none'
		bitcoin.style.display = ''
		paypal.style.display = 'none'

	}
		if (target === 'credit card'){
		credit.style.display = ''
		bitcoin.style.display = 'none'
		paypal.style.display = 'none'
	}

	if (target === 'select_method'){
		credit.style.display = ''
		bitcoin.style.display = 'none'
		paypal.style.display = 'none'
}
}

const email = document.getElementById('mail')
var form = document.querySelector('form')
var submit

form.addEventListener('submit', function(e){
formValidations()
console.log('submit')
submit = formValidations()
if (submit === false) {
e.preventDefault()
}
}

 	)

function formValidations (){
var reg = new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)?([a-zA-Z0-9]{2,4})$')
var valid = true
	if (name.value.length < 1) {
		infoParent.insertBefore(nameError, name)
		nameError.textContent = 'Name is Required'
		nameError.style.color = 'red'
		valid = false
	}

	else {nameError.textContent = ''}

	if (reg.test(mail.value) === false) {
		infoParent.insertBefore(emailError, email)
			emailError.textContent = 'E-Mail must include @ and .'
			emailError.style.color = 'red'
			valid = false
	}
	else {emailError.textContent = ''}

 	for (i = 0; i <activities.length; i++) {

 	if (activities[i].checked) {
 		check = 1
 		checkedMessage.textContent = ""
 	}
}

 	if (check < 1) {
 		act.insertBefore(checkedMessage, label[0])
 		checkedMessage.textContent = "Please Select One or More Activities"
 		checkedMessage.style.color = 'red'
 		valid = false

 	}
 
 	if (payment.value === "credit card") {
 		if (cvv.value.length < 3 || cvv.value.length > 3) {
 			payParent.insertBefore(cvvError, payLegend)
 			valid = false
 		}
 			else{	cvvError.textContent = ''}
 		

 		if (ccnum.value.length < 13 || ccnum.value.length > 16) {
 			payParent.insertBefore(ccnError, payLegend)
 			valid = false
 		}
 		else { ccnError.textContent = ""   }
 		

 		if (zip.value.length < 5 || zip.value.length >5) {
 			payParent.insertBefore(zipError, payLegend)
 			valid = false
 		}
 		else {	zipError.textContent = '' }
 	}
 	return valid
 }







mail.addEventListener('input', function(){
var reg = new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)?([a-zA-Z0-9]{2,4})$')
if (reg.test(mail.value) === false) {
		infoParent.insertBefore(emailError, email)
			emailError.textContent = 'E-Mail must include @ and .'
			emailError.style.color = 'red'
}
})