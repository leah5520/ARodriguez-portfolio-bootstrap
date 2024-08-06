// console.log('Hello World!');

// var prompt=prompt('what is your name');

// console.log(prompt);

var age = prompt('whats your age?');
console.log(age)


function verifyAge(age) {
  if (age < 18) {
    alert('your are a minor')
  } else if (age >=18 && age <= 60) { alert ('you are an adult!')
  } else { alert('you are a senior citizen')
  }
}
