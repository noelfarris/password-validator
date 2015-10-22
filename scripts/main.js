'use strict';
var password = document.getElementById('password');
var feedback = document.getElementById('feedback');

password.addEventListener('keyup', function(e) {
	e.preventDefault();
	feedback.innerHTML = "Password Strength: "
	var passwordVal = password.value
	console.log(passwordVal);
	if(passwordVal.length > 7 && passwordVal.match(/[a-zA-Z]+/) && passwordVal.match(/[0-9]+/) && passwordVal.match(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]+/)) {
		feedback.innerHTML = "Password Strength: Very strong";
	} else if(passwordVal.length > 7 && passwordVal.indexOf(/[a-zA-Z]+/) && passwordVal.indexOf(/[0-9]+/)) {
		feedback.innerHTML = "Password Strength: Strong";
	} else if(passwordVal.length <= 7 && passwordVal.match(/[a-zA-Z]+/)) {
		feedback.innerHTML = "Password Strength: Weak";
	} else if(passwordVal.length <= 7 && passwordVal.match(/[0-9]+/)) {
		feedback.innerHTML = "Password Strength: Very weak";
	}
})