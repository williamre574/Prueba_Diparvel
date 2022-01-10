

export function PostCard (props) {

	let {address, id, email, name, phone, username, website} = props;
	//let dateForm = new Date(date).toLocaleString(),
	//urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"]
//	[0].source_url: "app/asset/loader.svg";


	document.addEventListener("click", (e) => {
		if(!e.target.matches(".post-card a")) return false;
		localStorage.setItem("wpPostId", e.target.dataset.id);
	});

	return `  
	<article class="post-card">
		
	<h1>${name}</h1>
	<p>Ciudad: ${address.city}</p>
	<p>Correo: ${email}</p>
	<p>Telefono: ${phone}</p>
	<p>Nombre usuario: ${username}</p>
	<p>
	<a href="#/${website}" data-id="${id}">VER EMPRESA</a>
	</p>
	</article>


	  `;

	  //<img src ="${urlPoster}" alt="${title.rendered}"></img>
	  //	<time datetime>${dateForm}</time>
}