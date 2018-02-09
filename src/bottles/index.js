import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import $ from "jquery";

console.log("Bottles");

const name = "Bottle 1";





$.ajax({
	"url": "http://localhost:3131/bottles",
	"method": "GET",
	"dataType": "json",
	error: (request, status,error) => {
		//treat error
		console.log(error);
	},
	sucess: (data,status,request) => {
		console.log(data);
		for(var i=0;i<data.lenght;i++){
			$("#bottles-listing").append(`
				<tr>
		          <th scope="row">1</th>
		          <td>${data[i].brand}</td>
		          <td>${data[i].PRICE}</td>
		          <td>${data[i].VOLUME}</td>

		          <td>
		            <div class="dropdown">
		              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                Action
		              </button>
		              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
		                <a class="dropdown-item" href="#">Add</a>
		                <a class="dropdown-item" href="#">Delete </a>
		              </div>
		            </div>
		          </td>

		        </tr>
				`);
		}
		
	}
});