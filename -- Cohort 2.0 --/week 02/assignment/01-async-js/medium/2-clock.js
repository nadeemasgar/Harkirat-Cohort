/* 
    Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
    clock that shows you the current machine time?

    Can you make it so that it updates every second, and shows time in the following formats - 
    - HH:MM::SS (Eg. 13:45:23)

    - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

let hour = 0;
let minute = 0;
let second = 0;

function format(unit) {
  return String(unit).padStart(2, "0");
}

setInterval(() => {
  console.clear(); // optional: clears the terminal for clean updating
  console.log(`${format(hour)}:${format(minute)}:${format(second)}`);

  second++;

  if (second === 60) {
    second = 0;
    minute++;
  }
  if (minute === 60) {
    minute = 0;
    hour++;
  }
  if (hour === 24) {
    hour = 0;
  }
}, 1000);

