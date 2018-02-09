import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from "jquery";

console.log("Login");

$("#target").submit(()=>{
	const login = $("#identifiant").val();
	const password = $("#password").val();

	return false;
})

function login(login,password){
	$.ajax({
		"url": "http://localhost:3131",
		"username":"login",
		"password":"password",
		"method": "GET",
		"dataType": "json",
		error: (request, status,error) => {
			//treat error
			console.log(error);
		},
		sucess: (data,status,request) => {
			console.log(data);
		}
	});
}


