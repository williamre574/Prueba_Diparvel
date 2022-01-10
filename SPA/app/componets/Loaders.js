export function Loader() {
	const $loader = document.createElement("img");
	$loader.src= "app/asset/loader.svg";
	$loader.alt = "Cargando...";
	$loader.classList.add("loader");

	return $loader;
}