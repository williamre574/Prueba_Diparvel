export function Menu () {
	const $menu = document.createElement("nav");
	$menu.classList.add("menu");
	$menu.innerHTML=` <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <!-- Brand -->
  <a class="navbar-brand" href="#">Home</a>

  <!-- Toggler/collapsibe Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Navbar links -->
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
     <!-- <li class="nav-item">
        <a class="nav-link" href="#/usuarios">Buscador</a>
      </li>
       -->
    </ul>
  </div>
</nav> `
	return $menu
}