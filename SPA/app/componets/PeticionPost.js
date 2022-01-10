export function Peticion(props) {

	let {name, company} = props

	return `<secction class="post-page">
	<aside>
	<h2>${name}</h2>
	</aside>
	<hr>
	<article>
	<h5>Name company: ${company.name}</h5>
	<p>BS: ${company.bs}</p>
	<p>Catch Phrase: ${company.catchPhrase}</p>
	</article>

	</secction>`
}