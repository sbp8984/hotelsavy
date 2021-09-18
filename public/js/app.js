console.log('Client side javascript file is loaded!')

const domain = 'http://localhost:3000' 
//const domain = 'https://hotelsavy.com' 

//This is client side code that will not work in backend nodejs

const hotelForm = document.querySelector('form')
const search = document.querySelector('input')
const selectDate = document.querySelector('input[id="checkin"]')
const selectDate2 = document.querySelector('input[id="checkout"]')
var selectAdults = document.getElementById("numberAdults")
const selectCurrency = document.getElementById("currencySelect")


const messageOne = document.querySelector('#message-1') /// Hotel Name / Loading text  
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
const messageSeven = document.querySelector('#message-7')
const messageEight = document.querySelector('#message-8')
const messageNine = document.querySelector('#message-9')
const messageTen = document.querySelector('#message-10')

const messageEleven = document.querySelector('#message-11')  /// Hotel Address
const messageTwelve = document.querySelector('#message-12')
const messageThirteen = document.querySelector('#message-13') /// Hotel Star 
const messageFourteen = document.querySelector('#message-14')  //// Hotel Review Rating
const messageFifteen = document.querySelector('#message-15') /// Hotel Total number of reviews

const messageSeventeen = document.querySelector('#message-17') /// Hotel neighbour image
const messageEighteen = document.querySelector('#message-18') /// Hotel Description
const messageTwenty = document.querySelector('#message-20')
const messageTwentyOne = document.querySelector('#message-21') /// Hotel week  1 URL
const messageTwentyTwo = document.querySelector('#message-22') /// Hotel week  2 URL


const messageLoad = document.querySelector('#message-load')
const messageOptionOne = document.querySelector('#message-option-1') /// Hotel Name / Loading text  
const messageOptionTwo = document.querySelector('#message-option-2')
const messageOptionThree = document.querySelector('#message-option-3')




document.getElementsByClassName('hotelResults')[0].style.visibility = 'hidden'
document.getElementsByClassName('hotelResults')[0].style.maxHeight = "0px"


hotelForm.addEventListener('submit', (e) => {
    e.preventDefault()


    const location = search.value
    var checkindate = selectDate.value
    var checkoutdate = selectDate2.value
    //var date = document.getElementById("date").value

    var adults = selectAdults.value;
    var currency = selectCurrency.options[selectCurrency.selectedIndex].text;
    //var currency = selectCurrency.value;

    document.getElementsByClassName('hotelResults')[0].style.visibility = 'hidden'
    document.getElementsByClassName('hotelResults')[0].style.maxHeight = "0px"


    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''
    messageSix.textContent = ''
    messageSeven.textContent = ''
    messageEight.textContent = ''
    messageNine.textContent = ''
    messageTen.textContent = ''


    messageEleven.textContent = ''
    messageTwelve.textContent = ''
    messageThirteen.textContent = ''
    messageFourteen.textContent = ''
    messageFifteen.textContent = ''

    messageSeventeen.textContent = ''
    messageEighteen.textContent = ''

    messageTwenty.textContent = ''
    messageTwentyOne.textContent = ''
    messageTwentyTwo.textContent = ''


    fetch(domain + '/hotel?address=' + location + '&checkin=' + checkindate + '&checkout=' + checkoutdate + '&adults=' + adults + '&currency=' + currency).then((response) => {


        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
                messageThree.textContent = ''
                messageFour.textContent = ''
                messageFive.textContent = ''
                messageSix.textContent = ''
                messageSeven.textContent = ''
                messageEight.textContent = ''
                messageNine.textContent = ''
                messageTen.textContent = ''

                document.getElementsByClassName('hotelResults')[0].style.visibility = 'hidden'
                document.getElementsByClassName('hotelResults')[0].style.maxHeight = "0px"


                messageEleven.textContent = ''
                messageTwelve.textContent = ''
                messageThirteen.textContent = ''
                messageFourteen.textContent = ''
                messageFifteen.textContent = ''
                messageSeventeen.textContent = ''
                messageEighteen.textContent = ''
                messageTwenty.textContent = ''
                messageTwentyOne.textContent = ''
                messageTwentyTwo.textContent = ''

            } else {
                messageOne.textContent = data.hotelName
                messageTwo.textContent = data.checkin
                messageThree.textContent = data.price
                messageFour.textContent = data.checkin1
                messageFive.textContent = data.price1
                messageSix.textContent = data.url1
                messageSeven.textContent = data.url2
                messageEight.textContent = data.url3
                messageNine.textContent = data.url4
                messageTen.textContent = data.url5

                document.getElementsByClassName('hotelResults')[0].style.visibility = 'visible'
                document.getElementsByClassName('hotelResults')[0].style.maxHeight = "100%"


                messageEleven.textContent = data.address1
                messageTwelve.textContent = data.url6
                messageThirteen.textContent = data.hotelStar
                messageFourteen.textContent = data.hotelRating
                messageFifteen.textContent = data.hotelTotalReviews
                messageSeventeen.textContent = data.urlArea
                messageEighteen.textContent = data.description
                messageTwenty.textContent = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?zoomwheel=false&access_token=pk.eyJ1Ijoic2JwODk4NCIsImEiOiJja3Jrcm1nZTcxOWdmMnBvNXhycWZocXYwIn0.YagRvMDHc4suDLQnZKbAEg#15/' + data.hotelLat + '/' + data.hotelLong

                messageTwentyOne.textContent = data.hotelUrl
                messageTwentyTwo.textContent = data.hotelUrl2
                
                var hotelUrl1 = messageTwentyOne.textContent;
                document.getElementById("hotel-link-1").href = hotelUrl1;

                var hotelUrl2 = messageTwentyTwo.textContent;
                document.getElementById("hotel-link-2").href = hotelUrl2;


                var hStar = messageThirteen.textContent;

                var imgVar1 = messageSix.textContent;
                document.querySelector(".id-of-img-tag").src = imgVar1;

                var imgVar2 = messageSeven.textContent;
                document.querySelector(".id-of-img-tag2").src = imgVar2;

                var imgVar3 = messageEight.textContent;
                document.querySelector(".id-of-img-tag3").src = imgVar3;

                var imgVar4 = messageNine.textContent;
                document.querySelector(".id-of-img-tag4").src = imgVar4;

                var imgVar5 = messageTen.textContent;
                document.querySelector(".id-of-img-tag5").src = imgVar5;

                var imgVar17 = messageSeventeen.textContent;
                document.querySelector(".id-of-img-tag17").src = imgVar17;

                var mapLink = messageTwenty.textContent;
                document.querySelector("iframe").src = mapLink;

                if (hStar == 5 ) {
                    document.querySelector(".hotel-img-stars").src = '/img/star_5.png'
                } else if (hStar <= 4  ) {
                    document.querySelector(".hotel-img-stars").src = '/img/star_4.png'
                } else if (hStar <= 3  ) {
                    document.querySelector(".hotel-img-stars").src = '/img/star_3.png'
                } else if (hStar <= 2  ) {
                    document.querySelector(".hotel-img-stars").src = '/img/star_2.png'
                } else if (hStar <= 1  ) {
                    document.querySelector(".hotel-img-stars").src = '/img/star_1.png'
                } else {
                    document.querySelector(".hotel-img-stars").src = '/img/star_0.png'
                }
                
            }

        })
    })
})




/// Function to add days
function addDays(myDate, days) {
    return new Date(myDate.getTime() + days * 24 * 60 * 60 * 1000);
}
var myDate = new Date();
var newDate = addDays(myDate, 1);
var maxDate = addDays(myDate, 300);


/// Function to change the format of the dates

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

// console.log(formatDate(myDate));
// console.log(formatDate(newDate));

var formattedDate = formatDate(myDate)
var maxformattedDate = formatDate(maxDate)

var formattedDateCheckout = formatDate(newDate)

document.getElementById("checkin").value = formattedDate;//Now you get the js variable inside your form element
document.getElementById("checkin").min = formattedDate;//Now you get the js variable inside your form element
document.getElementById("checkin").max = maxformattedDate;//Now you get the js variable inside your form element

document.getElementById("checkout").value = formattedDateCheckout;//Now you get the js variable inside your form element
document.getElementById("checkout").min = formattedDateCheckout;//Now you get the js variable inside your form element
document.getElementById("checkout").max = maxformattedDate;//Now you get the js variable inside your form element




/// Added from app2.js


const debounce = (func, wait, immediate) => {
    let timeout
    return function () {
        const context = this, args = arguments
        const later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}




hotelForm.addEventListener('input', debounce(() => {
    console.log(search.value)
    const query = search.value
    messageLoad.textContent = 'Loading...'
    //messageTwo.textContent = ''
    fetch(domain + '/autocomplete?search=' + query).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageLoad.textContent = ''
                messageOptionOne.textContent = data.error
                messageOptionTwo.textContent = ''
                messageOptionThree.textContent = ''

            } else {
                // open up model display windo
                modal.style.display = "block";

                messageLoad.textContent = ''
                messageOptionOne.textContent = data.destinationName;
                messageOptionTwo.textContent = data.destinationName1;
                messageOptionThree.textContent = data.destinationName2;

                document.getElementById("message-option-1").value = messageOptionOne.textContent; // its a textfield
                document.getElementById("message-option-2").value = messageOptionTwo.textContent; // its a textfield
                document.getElementById("message-option-3").value = messageOptionThree.textContent; // its a textfield

            }
        })
    })
}, 2000))


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



/// Update input field with search suggestions

function change1() {
    var txt = document.getElementById("message-option-1").value;
    document.getElementById("my_field").value = txt;
    modal.style.display = "none";
}
function change2() {
    var txt = document.getElementById("message-option-2").value;
    document.getElementById("my_field").value = txt;
    modal.style.display = "none";
}
function change3() {
    var txt = document.getElementById("message-option-3").value;
    document.getElementById("my_field").value = txt;
    modal.style.display = "none";
}
function change4() {
    var txt = document.getElementById("message-option-4").value;
    document.getElementById("my_field").value = txt;
    modal.style.display = "none";
}
function change5() {
    var txt = document.getElementById("message-option-5").value;
    document.getElementById("my_field").value = txt;
    modal.style.display = "none";
}
