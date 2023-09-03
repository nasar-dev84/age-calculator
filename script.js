'use strict';
const btnEl = document.querySelector('.btn')
const birthdayEl = document.getElementById('birthday')
const resultEl = document.getElementById('result')

function calculateAge () {
  const birthdayInput = birthdayEl.value;
  
  if(birthdayInput === "") {
    alert("Please enter your birhtday");
  }else {
    const age = getAge(birthdayInput)
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old.`;
  }
  console.log(birthdayInput);
}

function getAge(birthdayInput) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayInput);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if(
    month < 0 || 
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    age--;
  
  }
  return age;
}
btnEl.addEventListener('click', calculateAge);