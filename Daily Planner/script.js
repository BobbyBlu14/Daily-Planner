$(document).ready(function () {
    displayBlocks()
    // TO SHOW THE DATE AND TIME ON PAGE
    var todayDate = moment().format('dddd' + ", " + 'LL');
    document.getElementById("currentDay").innerHTML = todayDate;
    // HOW 
    var saveComment = localStorage.getItem('9AM')
    $("#9AM").val(saveComment)
    var saveComment = localStorage.getItem('10AM')
    $("#10AM").val(saveComment)
    var saveComment = localStorage.getItem('11AM')
    $("#11AM").val(saveComment)
    var saveComment = localStorage.getItem('12PM')
    $("12PM").val(saveComment)
    var saveComment = localStorage.getItem('1PM')
    $("#1PM").val(saveComment)
    var saveComment = localStorage.getItem('2PM')
    $("#2PM").val(saveComment)
    var saveComment = localStorage.getItem('3PM')
    $("#3PM").val(saveComment)
    var saveComment = localStorage.getItem('4PM')
    $("#4PM").val(saveComment)
    var saveComment = localStorage.getItem('5PM')
    $("#5PM").val(saveComment)
})
$(document).on("click", ".saveBtn", function () {
    // value of the siblgs
    // get the id of the siblings
    var value = $(this).siblings('.description').val();
    var id = $(this).siblings('.description').attr('id');
    localStorage.setItem(id, value)
});
// add rows/hr/text/button to page
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
function displayBlocks() {
    times.forEach(function (time) {
        var $row = $(`<div class="row time-block"></div>`)
        var $hour = $("<div>").addClass("hour").text(`${time}`)
        var $text = $(`<textarea id='${time}'class = 'description col-9'>`)
        var $saveBtn = $("<button>").addClass("saveBtn col-1")
        $row.append($hour)
        .append($text)
        .append($saveBtn
            .append($("<i class='fas fa-save'>")))
            $(".container").append($row)
        })
        markTimes();
    }
    function markTimes() {
        let hours = $(".time-block")
        console.log(hours)
        hours.each(function (i, timeBlock) {
            //console.log(timeBlock)// this thing is html element
            decideTime($(this))// $(this) is the jquery element
        })
    }
    const now = times
    function decideTime(tB) {
        const htmlELEM = tB.children(".hour")[0]
        const hourNow = htmlELEM.innerHTML.split("")[0]
        console.log(hourNow)
        let temporality;
        if (hourNow < now) {
            temporality = "past"
        } else if (hourNow > now) {
        temporality = "future"
    } else {
        temporality = "present"
    }
    (tB.children("textarea")[0].classList.add(temporality))
}

