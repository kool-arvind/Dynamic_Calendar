let showDate = document.querySelector('.date');
let monthName = document.querySelector('.monthName')
let nextBtn = document.querySelector('.nextBtn')
let prevBtn = document.querySelector('.prevBtn')
let yearName = document.querySelector('.year')
let goBtn = document.querySelector('.search-btn')
let searchInput = document.querySelector('.search input');


// console.log(date.toDateString().split(' ')[1]);



let tempDate = new Date();
let tempMonth = tempDate.getMonth() + 1
let tempYear = tempDate.getFullYear();
let uniqueDate = tempDate.getDate()
let uniqueMonth = tempDate.getMonth() + 1;
let uniqueYear = tempDate.getFullYear();


document.getElementById("myText").placeholder = `${uniqueYear}`;

function changeYear() {

    if (!searchInput.value) return

    else if (isNaN(searchInput.value)) return;

    else if(searchInput.value < 100000 && searchInput.value > 1970 ){

    tempYear = searchInput.value
    showCalendar();
    
    console.log(searchInput.value);

    }

    return;



}





function returnLeapYear(findYear) {
    if (findYear % 4 == 0) {
        return true
    }
    else {
        return false
    }
}





prevBtn.addEventListener('click', () => {
    showDate.innerHTML = ''
    tempMonth--;
    if (tempMonth < 1) {
        tempMonth = 12
        tempYear--
    }
    showCalendar()
})


nextBtn.addEventListener('click', () => {
    showDate.innerHTML = ''
    tempMonth++;
    if (tempMonth > 12) {
        tempMonth = 1
        tempYear++
    }
    showCalendar()
    })


function showCalendar() {
showDate.innerHTML = ""

    console.log(tempYear);

    let date = new Date(`${tempYear},${tempMonth},1`);
    let setDate = date.toDateString().split(' ')[0];
    let setYear = date.toDateString().split(' ')[1];
 
    
    


    let returnWeek = {
        Sun: 1,
        Mon: 2,
        Tue: 3,
        Wed: 4,
        Thu: 5,
        Fri: 6,
        Sat: 7,
    }

    let returnYear = {
        Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31, Jun: 30, Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31
    }
    let returnCompleteYear = {
        Jan: "January", Feb: "February", Mar: "March", Apr: 'April', May: 'May', Jun: "June", Jul: "July", Aug: "August", Sep: "September", Oct: "October", Nov: 'November', Dec: "December"
    }
    if (returnLeapYear(tempYear)) {
        returnYear.Feb = 29;
    }

    monthName.innerHTML = returnCompleteYear[`${setYear}`]
    yearName.innerHTML = `<h1>${tempYear}</h1>`

    for (let i = 1; i != returnYear[`${setYear}`] + 1; i++) {

        showDate.innerHTML += `<div class='todate'>${i}</div>`
        if (uniqueDate == i && uniqueMonth == tempMonth && uniqueYear == tempYear) {
            let j = i - 1;
            let printDate = document.querySelectorAll('.todate')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
        }

    }


    let rightDate = document.querySelector('.todate');

    rightDate.style.gridColumn = `${returnWeek[setDate]}`








}
showCalendar();
    
