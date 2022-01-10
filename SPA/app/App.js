
import {ajax} from "./helpers/ajax.js";
import { Header } from "./componets/header.js";
import { Loader } from "./componets/Loaders.js";
import { Posts } from "./componets/posts.js";
import { PostCard } from "./componets/PostCard.js";
import {Router} from "./componets/router.js"

export function App(){
	//document.getElementById("root").innerHTML='<h1>ASP conexions exitosa con API PlaceHolder</h1>';
	//console.log(api);
	//ajax({
	//	url: api.POSTS,
	//	cbSuccess: (posts) => {
	//		console.log(posts);
	//	}
	//});
	//https://pokeapi.co/api/v2/pokemon?limit=100&offset=200
	const d = document,
	$root = d.getElementById("root");
	$root.innerHTML= null;
	$root.appendChild(Header());
	$root.appendChild(Posts());
	$root.appendChild(Loader());
	Router();

	

	
} 