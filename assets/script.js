$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    //get values of the time block and its contents
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    //saves these values in local storage
    localStorage.setItem(time, value);
  });


  function hourUpdater () {
    //dayjs used to get current hour for time block comparison
    var currentHour = dayjs().hour();
    //loop over time blocks
    $('.time-block').each(function () {

      // grabs the ID of the time block, creates array of the value inside (hour-x), splits the array at '-', gets that value (x).
      // example: 'hour-13' turns into the value '13'. This value is then compared to dayjs current hour to determine block color class.
      var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

      if (timeBlockHour < currentHour) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    
    });
  }

  hourUpdater();
  
  // sets interval to run time block hour checker function every 10 seconds.
  setInterval(hourUpdater, 10000);


// loads the data saved in local storage in relation to what time block it is in
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
})

// displays current date, time in header.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));