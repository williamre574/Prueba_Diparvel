
import {ajax} from "../helpers/ajax.js"
import {PostCard} from "./PostCard.js"
import {Peticion} from "./PeticionPost.js"
//import {SearchForm} from "/SearchForm.js"

export function Router(){
	const d = document,
	w = window,
	$posts = d.getElementById("posts");

	let {hash} = location;
	console.log(hash);

	if(!hash || hash ==="#/"){


	ajax({
		url: "https://jsonplaceholder.typicode.com/users",
		cbSuccess: (posts) => {

			console.log(posts);
			let html ="";
			posts.forEach((post) => (html+=PostCard(post)));
			d.querySelector(".loader").style.display="none";
			$posts.innerHTML= html;
			
		},
	});	
	//d.querySelector(".input").style.display="none";	
	} else if(hash.includes ("#/usuarios")) {
		$posts.innerHTML="<h2>seccion del usuario</h2>"
		d.querySelector(".input").style.display="none";
		d.querySelector(".loader").style.display="none";
	} else if(hash==="#/todos") {
		
	

		
		//d.querySelector(".input").style.display="none";
		d.querySelector(".loader").style.display="none";
	} else {
		console.log(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem("wpPostId")};`);

		 ajax({
		url: `https://jsonplaceholder.typicode.com/users/${localStorage.getItem("wpPostId")}`,
		cbSuccess: (posts) => {

			console.log(posts);
			$posts.innerHTML=Peticion(posts);

			
		},
	});	

		d.querySelector(".loader").style.display="none";
	}	


}