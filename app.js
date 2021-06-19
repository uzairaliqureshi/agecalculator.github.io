var prompt1 = prompt("enter your birth Date \n(for example : 16)");
var prompt2 = prompt(
  "enter your birth Month \n(for example : jan , january , 01 , 1 whatever you like)"
);
var prompt3 = +prompt("enter your birth Year \n(for example : 1969)");
prompt2.toLowerCase;
if (
  prompt2 === "jan" ||
  prompt2 === "jauary" ||
  prompt2 === "01" ||
  prompt2 === "1"
) {
  prompt2 = 0;
} else if (
  prompt2 === "feb" ||
  prompt2 === "february" ||
  prompt2 === "02" ||
  prompt2 === "2"
) {
  prompt2 = 1;
} else if (
  prompt2 === "mar" ||
  prompt2 === "march" ||
  prompt2 === "03" ||
  prompt2 === "3"
) {
  prompt2 = 2;
} else if (
  prompt2 === "apr" ||
  prompt2 === "april" ||
  prompt2 === "04" ||
  prompt2 === "4"
) {
  prompt2 = 3;
} else if (prompt2 === "may" || prompt2 === "05" || prompt2 === "5") {
  prompt2 = 4;
} else if (
  prompt2 === "jun" ||
  prompt2 === "june" ||
  prompt2 === "06" ||
  prompt2 === "6"
) {
  prompt2 = 5;
} else if (
  prompt2 === "" ||
  prompt2 === "july" ||
  prompt2 === "07" ||
  prompt2 === "7"
) {
  prompt2 = 6;
} else if (
  prompt2 === "aug" ||
  prompt2 === "august" ||
  prompt2 === "08" ||
  prompt2 === "8"
) {
  prompt2 = 7;
} else if (
  prompt2 === "sep" ||
  prompt2 === "september" ||
  prompt2 === "09" ||
  prompt2 === "9"
) {
  prompt2 = 8;
} else if (
  prompt2 === "oct" ||
  prompt2 === "october" ||
  prompt2 === "10" ||
  prompt2 === "10"
) {
  prompt2 = 9;
} else if (
  prompt2 === "nov" ||
  prompt2 === "november" ||
  prompt2 === "11" ||
  prompt2 === "11"
) {
  prompt2 = 10;
} else if (
  prompt2 === "dec" ||
  prompt2 === "december" ||
  prompt2 === "12" ||
  prompt2 === "12"
) {
  prompt2 = 11;
} else {
  alert("please define month correctly ");
}
var dob = new Date();
dob.setDate(prompt1);
dob.setMonth(prompt2);
dob.setFullYear(prompt3);
var today = new Date();
var mstoday = today.getTime();
var msdob = dob.getTime();
var age = mstoday - msdob;
var year = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
var date = new Date("january 1, 1970");
var date1 = 1970 + year;
date.setFullYear(date1);
var msdate = date.getTime();
var month = age - msdate;
var months = Math.floor(month / (1000 * 60 * 60 * 24 * 30));
var day = today.getDate() - dob.getDate();
if (today.getDate() > dob.getDate()) {
  alert(
    "your age is " + year + " years " + months + " months and " + day + " days"
  );
} else {
  alert(
    "your age is " +
      year +
      " years " +
      months +
      " months and " +
      dob.getDate() -
      today.getDate() +
      " days"
  );
}
