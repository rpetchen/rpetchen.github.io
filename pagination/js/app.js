var studentList = document.querySelectorAll(".student-item")
var numRecords = 10
numPages = Math.ceil(studentList.length/numRecords)
const pageH = document.querySelector(".page-header")
const searchClass = document.createElement('div')
searchClass.className = 'student-search'
const searchBar = document.createElement('input')
searchBar.type = 'text'
clearBut = document.createElement('button')
clearBut.className = 'clear'
const searchBut = document.createElement('button')
searchBut.className = 'search'
searchBut.textContent = "Search"
searchClass.appendChild(searchBar)
searchClass.appendChild(searchBut)
pageH.appendChild(searchClass)
searchClass.appendChild(clearBut)
clearBut.textContent = 'Clear Search Results'

var searchbutton = document.querySelector('.search')
var clearbutton = document.querySelector('.clear')

var page_list = document.createElement('ul')
page_list.className = "pagination"
var page = document.querySelector(".page")
page.appendChild(page_list)
var page_link


function showPage(num, list) {

for (c = 0; c<studentList.length; c++){
	studentList[c].style.display = 'none'
}
for (p = 0; p <list.length; p++) {

	if (p >= (num * numRecords) && p <= (num * 10) + 9) {
		list[p].style.display = 'block'
	}
}
}


showPage(0, studentList)

function appendPageLinks (numPages) {
page_list.innerHTML = ''
	for (let j = 0; j< numPages; j++) { 
		var page_link = document.createElement('li')
		var link = document.createElement('a')
		link.setAttribute('href', '#')
		page_list.appendChild(page_link)
		page_link.appendChild(link)
		link.textContent =  j + 1
		page_link.addEventListener('click', function() {showPage(j, studentList) })

	}
}

appendPageLinks(numPages)

searchBut.addEventListener('click', function() {

if (document.querySelector('.student-search input').value != null) {
var input = searchBar.value

studentMatch = search(input)
showPage(0, studentMatch)

if (studentMatch.length > numRecords) {
	totalPages = Math.ceil(studentMatch.length/numRecords)
	appendPageLinks(totalPages)
}
}
})

searchBar.addEventListener('click', function() {
	searchBar.style.color = 'black'
})


clearbutton.addEventListener('click', function () {
appendPageLinks(numPages)
showPage(0, studentList)
searchBar.value = ''
})

function search (input) {
var found = false
var studentMatch = []
const studentE = document.querySelectorAll('.student-details .email')
const studentN = document.querySelectorAll('.student-details h3')


if (input != null) {

for (i = 0; i < studentList.length; i ++){


if (studentE[i].innerHTML.includes(input) || studentN[i].innerHTML.includes(input)) {
	found = true
	studentMatch.push(studentList[i])
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
return studentMatch
}



