/*export function SearchForm () {

	const d=document,
	 $form = d.createElement("form"),
	$input = d.createElement("input");


	$input.classList.add("form-search");
	$input.name="search";
	$input.type="search";
	$input.placeholder="Buscar..";
	$form.appendChild($input);

	d.addEventListener("submit",e =>{
		if(!e.target(".form-search")) return false;
		e.preventDefault();
		localStorage.setItem("wrSearch" e.target.search.value);
		location.hash ="#/search?"
	});
	return $form;
}*/