(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var password = document.getElementById('password');
var feedback = document.getElementById('feedback');

password.addEventListener('keyup', function (e) {
	e.preventDefault();
	feedback.innerHTML = "Password Strength: ";
	var passwordVal = password.value;
	console.log(passwordVal);
	if (passwordVal.length > 7 && passwordVal.match(/[a-zA-Z]+/) && passwordVal.match(/[0-9]+/) && passwordVal.match(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]+/)) {
		feedback.innerHTML = "Password Strength: Very strong";
	} else if (passwordVal.length > 7 && passwordVal.indexOf(/[a-zA-Z]+/) && passwordVal.indexOf(/[0-9]+/)) {
		feedback.innerHTML = "Password Strength: Strong";
	} else if (passwordVal.length <= 7 && passwordVal.match(/[a-zA-Z]+/)) {
		feedback.innerHTML = "Password Strength: Weak";
	} else if (passwordVal.length <= 7 && passwordVal.match(/[0-9]+/)) {
		feedback.innerHTML = "Password Strength: Very weak";
	}
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
