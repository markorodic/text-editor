//for both divs - use document.getElementById().innerHTML and set it to a localStorage 'default text' object
//need to have an interval function which has localStorage object assigned to the document getElementBy().innerHTML fo each div
//make the function every 1000 miliseconds, or 1 second

document.getElementById('heading').innerHTML = localStorage['title'] || 'Just Write'
document.getElementById('content').innerHTML = localStorage['text'] || "This text is automatically saved every second"

setInterval(function() {
  localStorage['title'] = document.getElementById('heading').innerHTML;
  localStorage['text'] = document.getElementById('content').innerHTML
}, 1000)
