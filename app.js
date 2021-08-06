function calculation() {
  let date = document.getElementById('date');
  let month = document.getElementById('month');
  let year = document.getElementById('year');
  let arr = ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug", "sep", "oct", "nov", "dec"]
  let arr2 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
  let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == month.value || arr2[i] == month.value || arr3[i] == month.value)
      month.value = i;
  }
  let dob = new Date();
  dob.setDate(date.value);
  dob.setMonth(month.value);
  dob.setFullYear(year.value);
  let today = new Date();
  let msToday = today.getTime();
  let msDob = dob.getTime();
  let msAge = msToday - msDob;
  let ageInYear = Math.floor(msAge / (1000 * 60 * 60 * 24 * 365.25));
  let msYear = ageInYear * 365.25 * 24 * 3600 * 1000
  let msMonth = msAge - msYear;
  let months = Math.floor(msMonth / (1000 * 60 * 60 * 24 * (365.25 / 12)));
  let msmonth = months * (365.25 / 12) * 24 * 3600 * 1000
  let msdays = msAge - msYear - msmonth
  let days = Math.floor(msdays / (1000 * 60 * 60 * 24))
  if (date.value && month.value && year.value) {
    document.getElementById('result').value = `${ageInYear} y ${months} m ${days} d`
  } else{
    document.getElementById('result').value = ''
  }
  date.value = '';
  month.value = '';
  year.value = '';
}
