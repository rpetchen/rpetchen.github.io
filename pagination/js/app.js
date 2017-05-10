var studentList = document.querySelectorAll(".student-item")
var numRecords = 10
var numPages = Math.ceil((studentList.length)/numRecords)
var pages = []
var startPage = 1
var nameArray = []
var nameClass = document.querySelectorAll(".student-details")
var nameH = document.querySelectorAll('h3')
var emailH = document.querySelectorAll('.email')
var emailArray = []
//initialize search bar
var pageH = document.querySelector(".page-header")
var searchClass = document.createElement('div')
searchClass.className = 'student-search'
var searchBar = document.createElement('input')
searchBar.type = 'text'
var searchBut = document.createElement('button')
searchBut.textContent = "Search"
searchClass.appendChild(searchBar)
searchClass.appendChild(searchBut)
pageH.appendChild(searchClass)

var buttonTag = document.getElementsByTagName('button')
var button = buttonTag[0]

	var page_list = document.createElement('ul')
	page_list.className = "pagination"
	var page = document.querySelector(".page")
	page.appendChild(page_list)
	



function pageArray () {

for (k = 1;  k < numPages+1; k ++){
pages.push(k);
console.log(pages[k])
}
}
pageArray()


function showPage(num) {

for (i = 0; i < studentList.length; i ++){
studentList[i].style.display = 'none'
}

for (z = num; z <= num; z++) {
	studentIndex = numRecords * (z-1);
	records = numRecords * z

	for (studentIndex; studentIndex < records; studentIndex++) {
		var student = studentList[studentIndex]
		console.log(student)
		student.style.display = 'block'
		}
	}

}

showPage(startPage)




function appendPageLinks () {

	pages.forEach(function(p){ 
		var page_link = document.createElement('li')
		var link = document.createElement('a')
		link.setAttribute('href', '#')
		page_list.appendChild(page_link)
		page_link.appendChild(link)
		link.textContent =  p

	page_link.addEventListener('click', function() {showPage(p) })

	})


}
appendPageLinks()



nameH.forEach(function (elem) {

elem.className = "searchName"

})


for (i = 0; i < nameH.length; i ++) {
	nameArray[i] = nameH[i].textContent	
	emailArray[i] = emailH[i].textContent 
}

button.addEventListener('click', function() {

if (document.querySelector('.student-search input').value != null) {
var input = searchBar.value
search(input)
console.log(input)

}

})

searchBar.addEventListener('click', function() {
	searchBar.style.color = 'black'
})

function search (input) {

var found = false

if (input != null) {

for (i = 0; i < studentList.length; i ++){
studentList[i].style.display = 'none'

if (nameArray[i].includes(input)) {
	studentList[i].style.display = 'block'
	found = true
} 

if (found == true) {
	searchBar.value = ''
}
if (found != true) {
	searchBar.value = "NO RESULTS FOUND"
	searchBar.style.color = 'red'
}

}
}
}








