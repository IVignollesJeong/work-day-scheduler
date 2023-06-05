# Work Day Scheduler

## Description

This project called for the creation of a work day scheduling app. The app was designed to allow users with busy schedules to plan important events in order to manage time effectively. The requirements for the work day scheduling app were as follows: 

- When opening the planner, the current day is displayed at the top of the page.
- When scrolling down, the user is presented with time blocks for standard business hours of 9am to 5pm.
- Upon entering an event and clicking the save button, the text for that event is stored in the local storage.
- Upon refreshing the page, the saved events persist.

## Installation

N/A, the webpage can be reached through the URL found inside the "Usage" section.

Source code for the portfolio page can be found here: [Work-Day-Scheduler HTML](https://github.com/IVignollesJeong/work-day-scheduler/blob/master/index.html) // [Assets: JavaScript + CSS](https://github.com/IVignollesJeong/work-day-scheduler/tree/master/assets).

## Usage

![Work-Day-Scheduler-Demo](https://github.com/IVignollesJeong/work-day-scheduler/assets/131202032/513a65cc-37ff-43ae-aea7-6713d24e7058)


[Work Day Scheduler App](https://ivignollesjeong.github.io/work-day-scheduler/)

The application functions as follows:

- User is presented with the current date and time at the top of the page, along with time blocks from 9am to 5pm
- By clicking into any of the time blocks, the user can enter text describing important events similar to a planner.
- The user then clicks the blue save icon to the right of the time block to save the event to local storage.
- Upon refreshing the page, the user's entered events will remain on the page and selected time block.
- The time blocks are time-sensitive, meaning they will change colors depending on the current user's time.
- a GREY box means the time block is in the past. A RED box means the time block is the current time. A GREEN time block means the event is in the future and has not yet happened.

## Credits

[stackoverflow jquery DOM help](https://stackoverflow.com/questions/22828474/how-to-get-number-from-the-id-value) </br>
[DayJs documentation](https://day.js.org/docs/en/display/format) </br>
[MP4 to GIF converter](https://cloudconvert.com/mp4-to-gif) </br>
Starter code - OSU Bootcamp Slack

## License

MIT License

Copyright (c) [2023] [Ian Vignolles-Jeong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
