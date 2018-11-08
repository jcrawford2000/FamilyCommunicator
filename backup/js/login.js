$(document).ready(function() {
	$("#login").click(function () {
		alert("Login Clicked!\nUser:" + $("#user").val() + "\nPass:" + $("#pass").val());
	});

	$("#facebook").click(function () {
		alert("Facebook Clicked!");
	});

	$("#google").click(function () {
		alert("Google Clicked!");
	});


	$("#twitter").click(function () {
		alert("Twitter Clicked!");
	});
});
