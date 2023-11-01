function dms (angle) {
  const MINUTES_IN_DEGREE = 60;
  const SECONDS_IN_MINUTES = 60;

  const degree = getDegree(angle);
  const minutes = getMinutes(angle, degree, MINUTES_IN_DEGREE);
  const seconds = getSeconds(angle, degree, MINUTES_IN_DEGREE, SECONDS_IN_MINUTES);

  return `${degree}°${getPad(minutes)}'${getPad(seconds)}"`;
}

function getPad (value) {
  return String(value).length < 2 ? "0" + String(value) : String(value);
}

function getSeconds (angle, degree, MINUTES_IN_DEGREE, SECONDS_IN_MINUTES) {
  let decimal = angle - degree;
  let minutes = decimal * MINUTES_IN_DEGREE;
  let seconds = Math.floor(((minutes - Math.floor(minutes)) * SECONDS_IN_MINUTES));
  return seconds;
}

function getMinutes (angle, degree, MINUTES_IN_DEGREE) {
  let decimal = angle - degree;
  let minutes = decimal * MINUTES_IN_DEGREE;
  return Math.floor(minutes);
}

function getDegree (angle) {
  return Math.floor(angle);
}

console.log(dms(-1));   // -1°00'00"
console.log(dms(400));  // 400°00'00"
console.log(dms(-40));  // -40°00'00"
console.log(dms(-420)); // 420°00'00"

/*

Further Exploration
The current solution implementation only works with positive numbers in the range of 0 to 360 (inclusive). Can you refactor it so that it works with any positive or negative number?

Our solution returns the following results for inputs outside the range 0-360:


*/