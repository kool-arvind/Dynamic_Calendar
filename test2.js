function fun(){

const search_btn_sect = document.querySelector('.search input').value;


let uniqueDate_sect = new Date();
let onlyChangeYear;

if(!search_btn_sect){

onlyChangeYear = uniqueDate_sect.getFullYear();

}
else{

    onlyChangeYear = search_btn_sect;

}


let jan = document.querySelector('.jan');
let feb = document.querySelector('.feb');
let mar = document.querySelector('.mar');
let apr = document.querySelector('.apr');

let may = document.querySelector('.may');
let jun = document.querySelector('.jun');
let jul = document.querySelector('.jul');
let aug = document.querySelector('.aug');

let sep = document.querySelector('.sep');
let oct = document.querySelector('.oct');
let nov = document.querySelector('.nov');
let dec = document.querySelector('.dec');

let fullyear_sect = document.querySelectorAll('.fullyear-sect')

function returnLeapYear_sect(findYear) {
    if (findYear % 4 == 0) {
        return true
    }
    else {
        return false
    }
}

if(!search_btn_sect){
    fullyear_sect.forEach((el) =>{
        el.innerHTML = `<h2>${onlyChangeYear}</h2>`
        })
}
else{
    fullyear_sect.forEach((el) =>{
        el.innerHTML = `<h2>${search_btn_sect}</h2>`
        })
}




let date_sect1 = new Date(`${onlyChangeYear},1,1`);
let date_sect2 = new Date(`${onlyChangeYear},2,1`);
let date_sect3 = new Date(`${onlyChangeYear},3,1`);
let date_sect4 = new Date(`${onlyChangeYear},4,1`);
let date_sect5 = new Date(`${onlyChangeYear},5,1`);
let date_sect6 = new Date(`${onlyChangeYear},6,1`);
let date_sect7 = new Date(`${onlyChangeYear},7,1`);
let date_sect8 = new Date(`${onlyChangeYear},8,1`);
let date_sect9 = new Date(`${onlyChangeYear},9,1`);
let date_sect10 = new Date(`${onlyChangeYear},10,1`);
let date_sect11 = new Date(`${onlyChangeYear},11,1`);
let date_sect12= new Date(`${onlyChangeYear},12,1`);


let checkDate1 = date_sect1.toDateString().split(' ')[1];
let checkDate2 = date_sect2.toDateString().split(' ')[1];
let checkDate3 = date_sect3.toDateString().split(' ')[1];
let checkDate4 = date_sect4.toDateString().split(' ')[1];
let checkDate5 = date_sect5.toDateString().split(' ')[1];
let checkDate6 = date_sect6.toDateString().split(' ')[1];
let checkDate7 = date_sect7.toDateString().split(' ')[1];
let checkDate8 = date_sect8.toDateString().split(' ')[1];
let checkDate9 = date_sect9.toDateString().split(' ')[1];
let checkDate10 = date_sect10.toDateString().split(' ')[1];
let checkDate11 = date_sect11.toDateString().split(' ')[1];
let checkDate12 = date_sect12.toDateString().split(' ')[1];

let monthName_sect = document.querySelectorAll('.monthName-sect')



let returnWeek_sect = {
    Sun: 1,
    Mon: 2,
    Tue: 3,
    Wed: 4,
    Thu: 5,
    Fri: 6,
    Sat: 7,
}

let returnYear_sect = {
    Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31, Jun: 30, Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31
}
if(returnLeapYear_sect(onlyChangeYear)){
    returnYear_sect.Feb = 29;
}
console.log();


jan.innerHTML = ' '
feb.innerHTML = ' '
mar.innerHTML = ' '
apr.innerHTML = ' '
may.innerHTML = ' '
jun.innerHTML = ' '
jul.innerHTML = ' '
aug.innerHTML = ' '
sep.innerHTML = ' '
oct.innerHTML = ' '
nov.innerHTML = ' '
dec.innerHTML = ' '

let retunrYear_sect = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
}

for(let i = 1; i != returnYear_sect[`${checkDate1}`] + 1; i++){
    jan.innerHTML += `<div class='jan-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate1] == uniqueMonth ){
        
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.jan-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}
for(let i = 1; i != returnYear_sect[`${checkDate2}`] + 1; i++){
    feb.innerHTML += `<div class='feb-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate2] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.feb-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}
for(let i = 1; i != returnYear_sect[`${checkDate3}`] + 1; i++){
    mar.innerHTML += `<div class='mar-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate3] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.mar-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}
for(let i = 1; i != returnYear_sect[`${checkDate4}`] + 1; i++){
    apr.innerHTML += `<div class='apr-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate4] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.apr-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}
for(let i = 1; i != returnYear_sect[`${checkDate5}`] + 1; i++){
    may.innerHTML += `<div class='may-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate5] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.may-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}
for(let i = 1; i != returnYear_sect[`${checkDate6}`] + 1; i++){
    jun.innerHTML += `<div class='jun-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate6] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.jun-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}
for(let i = 1; i != returnYear_sect[`${checkDate7}`] + 1; i++){
    jul.innerHTML += `<div class='jul-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate7] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.jul-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}
for(let i = 1; i != returnYear_sect[`${checkDate8}`] + 1; i++){
    aug.innerHTML += `<div class='aug-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate8] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.aug-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}
for(let i = 1; i != returnYear_sect[`${checkDate9}`] + 1; i++){
    sep.innerHTML += `<div class='sep-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate9] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.sep-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}
for(let i = 1; i != returnYear_sect[`${checkDate10}`] + 1; i++){
    oct.innerHTML += `<div class='oct-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate10] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.oct-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}
for(let i = 1; i != returnYear_sect[`${checkDate11}`] + 1; i++){

    nov.innerHTML += `<div class='nov-dates'>${i}</div>`


    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate11] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.nov-dates')
            printDate[j].style.color = 'royalblue'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }


}
for(let i = 1; i != returnYear_sect[`${checkDate12}`] + 1; i++){
    dec.innerHTML += `<div class='dec-dates'>${i}</div>`

    if(onlyChangeYear == uniqueDate_sect.getFullYear() &&
    uniqueDate == i && retunrYear_sect[checkDate12] == uniqueMonth){
        
        let j = i - 1;
            let printDate = document.querySelectorAll('.dec-dates')
            printDate[j].style.color = 'crimson'
            printDate[j].style.boxShadow = '2px 2px 5px black'
            printDate[j].style.borderRadius = '50px'
            printDate[j].style.width = '20px'
            printDate[j].style.display = 'flex'
            printDate[j].style.alignItems = 'center'
            printDate[j].style.justifyContent = 'center'
    }
}


let setDate1 = date_sect1.toDateString().split(' ')[0];
let setDate2 = date_sect2.toDateString().split(' ')[0];
let setDate3 = date_sect3.toDateString().split(' ')[0];
let setDate4 = date_sect4.toDateString().split(' ')[0];

let setDate5 = date_sect5.toDateString().split(' ')[0];
let setDate6 = date_sect6.toDateString().split(' ')[0];
let setDate7 = date_sect7.toDateString().split(' ')[0];
let setDate8 = date_sect8.toDateString().split(' ')[0];

let setDate9 = date_sect9.toDateString().split(' ')[0];
let setDate10 = date_sect10.toDateString().split(' ')[0];
let setDate11 = date_sect11.toDateString().split(' ')[0];
let setDate12 = date_sect12.toDateString().split(' ')[0];



console.log(setDate1);


let fixedDate1 = document.querySelector('.jan-dates');
let fixedDate2 = document.querySelector('.feb-dates');
let fixedDate3 = document.querySelector('.mar-dates');
let fixedDate4 = document.querySelector('.apr-dates');

let fixedDate5 = document.querySelector('.may-dates');
let fixedDate6 = document.querySelector('.jun-dates');
let fixedDate7 = document.querySelector('.jul-dates');
let fixedDate8 = document.querySelector('.aug-dates');

let fixedDate9 = document.querySelector('.sep-dates');
let fixedDate10 = document.querySelector('.oct-dates');
let fixedDate11 = document.querySelector('.nov-dates');
let fixedDate12= document.querySelector('.dec-dates');


fixedDate1.style.gridColumn = `${returnWeek_sect[setDate1]}`
fixedDate2.style.gridColumn = `${returnWeek_sect[setDate2]}`
fixedDate3.style.gridColumn = `${returnWeek_sect[setDate3]}`
fixedDate4.style.gridColumn = `${returnWeek_sect[setDate4]}`

fixedDate5.style.gridColumn = `${returnWeek_sect[setDate5]}`
fixedDate6.style.gridColumn = `${returnWeek_sect[setDate6]}`
fixedDate7.style.gridColumn = `${returnWeek_sect[setDate7]}`
fixedDate8.style.gridColumn = `${returnWeek_sect[setDate8]}`

fixedDate9.style.gridColumn = `${returnWeek_sect[setDate9]}`
fixedDate10.style.gridColumn = `${returnWeek_sect[setDate10]}`
fixedDate11.style.gridColumn = `${returnWeek_sect[setDate11]}`
fixedDate12.style.gridColumn = `${returnWeek_sect[setDate12]}`


}
fun();