const form = document.getElementById("form");
const start = document.getElementById("start");
let parent = document.getElementById("parent");
const main = document.querySelector("main");

async function reponse(resultat) {
	const resulte = await fetch(
		"http://10.69.0.17:3002/v1/flowers?date=" + resultat,
		{
			method: "GET",
		}
	);
	const flowers = await resulte.json();
	console.log(flowers);

	parent.remove();

	parent = document.createElement("div");
	parent.setAttribute("id", "parent");
	parent.classList.add("parent");

	main.appendChild(parent);

	for (let flower of flowers) {
		const carte = page(
			flower.image,
			flower.name,
			flower.description,
			flower.propolis,
			flower.nectar,
			flower.propolis,
			flower.melliferous,
			flower.startBloom,
			flower.endBloom
		);

		parent.appendChild(carte);
	}
}

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const resultat = start.value;
	await reponse(resultat);
});

function page(a, b, c, p, n, poll, e, s, end) {
	const div = document.createElement("div");
	div.classList.add("radius");

	const img = document.createElement("div");
	img.classList.add("img");
	img.style.background = "center / cover url(" + a + ") no-repeat";
	const espace = document.createElement("div");
	espace.classList.add("padinge");

	const etoile = document.createElement("div");
	if (e == 1) {
		etoile.classList.add("rouge");
	} else if (e == 2) {
		etoile.classList.add("bleu");
	} else if (e == 3) {
		etoile.classList.add("vert");
	}
	for (let i = 0; i < e; i++) {
		const imgEtoile = document.createElement("img");
		imgEtoile.src = "/asset/Vector (3).svg";
		etoile.appendChild(imgEtoile);
	}

	const nom = document.createElement("p");
	nom.classList.add("noir");
	nom.classList.add("taille");
	nom.textContent = b;

	const info = document.createElement("div");
	info.classList.add("aligne");

	const type = document.createElement("p");

	const icon = document.createElement("img");
	icon.src = "/asset/Vector (4).svg";

	const span = document.createElement("span");
	span.classList.add("clair");
	span.textContent = " Floraison";

	const date = document.createElement("p");
	date.classList.add("noir");

	if (s == 1) {
		date.textContent = "janvier-";
	} else if (s == 2) {
		date.textContent = "février-";
	} else if (s == 3) {
		date.textContent = "mars-";
	} else if (s == 4) {
		date.textContent = "avril-";
	} else if (s == 5) {
		date.textContent = "mai-";
	} else if (s == 6) {
		date.textContent = "juin-";
	} else if (s == 7) {
		date.textContent = "juillet-";
	} else if (s == 8) {
		date.textContent = "août-";
	} else if (s == 9) {
		date.textContent = "septembre-";
	} else if (s == 10) {
		date.textContent = "octobre-";
	} else if (s == 11) {
		date.textContent = "novembre-";
	} else if (s == 12) {
		date.textContent = "décembre-";
	}

	if (end == 1) {
		date.textContent = date.textContent + "janvier";
	} else if (end == 2) {
		date.textContent = date.textContent + "février";
	} else if (end == 3) {
		date.textContent = date.textContent + "mars";
	} else if (end == 4) {
		date.textContent = date.textContent + "avril";
	} else if (end == 5) {
		date.textContent = date.textContent + "mai";
	} else if (end == 6) {
		date.textContent = date.textContent + "juin";
	} else if (end == 7) {
		date.textContent = date.textContent + "juillet";
	} else if (end == 8) {
		date.textContent = date.textContent + "août";
	} else if (end == 9) {
		date.textContent = date.textContent + "septembre";
	} else if (end == 10) {
		date.textContent = date.textContent + "octobre";
	} else if (end == 11) {
		date.textContent = date.textContent + "novembre";
	} else if (end == 12) {
		date.textContent = date.textContent + "décembre";
	}

	const descrip = document.createElement("p");
	descrip.classList.add("gris-lint");
	descrip.textContent = c;

	const caliter = document.createElement("div");
	caliter.classList.add("grid");
	caliter.classList.add("gap");

	const propolis = document.createElement("div");
	propolis.classList.add("centre");

	const propolisNom = document.createElement("p");
	propolisNom.classList.add("clair");
	propolisNom.textContent = "Propolis";

	caliter.appendChild(propolis);
	propolis.appendChild(propolisNom);
	if (p == 0) {
		const non = document.createElement("img");
		non.src = "/asset/Vector (2).svg";
		propolis.appendChild(non);
	} else {
		const oui = document.createElement("img");
		oui.src = "/asset/Vector (5).svg";
		propolis.appendChild(oui);
	}

	const nectar = document.createElement("div");

	const nectarNom = document.createElement("p");
	nectarNom.classList.add("clair");
	nectarNom.textContent = "Nectar";

	caliter.appendChild(nectar);
	nectar.appendChild(nectarNom);
	if (n == 0) {
		nectar.classList.add("centre");
		const non = document.createElement("img");
		non.src = "/asset/Vector (2).svg";
		nectar.appendChild(non);
	} else {
		nectar.classList.add("alig");
		const petitDiv = document.createElement("div");
		petitDiv.classList.add("centre");

		const nombre = document.createElement("p");
		nombre.classList.add("clair");

		const barre = document.createElement("progress");

		nombre.textContent = n;
		barre.max = 3;
		barre.value = n;

		nectar.appendChild(petitDiv);
		petitDiv.appendChild(nombre);
		petitDiv.appendChild(barre);
	}

	const pollen = document.createElement("div");

	const pollenNom = document.createElement("p");
	pollenNom.classList.add("clair");
	pollenNom.textContent = "Pollen";

	caliter.appendChild(pollen);
	pollen.appendChild(pollenNom);
	if (poll == 0) {
		pollen.classList.add("centre");
		const non = document.createElement("img");
		non.src = "/asset/Vector (2).svg";
		pollen.appendChild(non);
	} else {
		pollen.classList.add("alig");

		const petitDiv = document.createElement("div");
		petitDiv.classList.add("centre");

		const nombre = document.createElement("p");
		nombre.classList.add("clair");

		const barre = document.createElement("progress");

		nombre.textContent = poll;
		barre.max = 3;
		barre.value = poll;

		pollen.appendChild(petitDiv);
		petitDiv.appendChild(nombre);
		petitDiv.appendChild(barre);
	}

	div.appendChild(img);
	div.appendChild(espace);
	espace.appendChild(etoile);
	espace.appendChild(nom);
	espace.appendChild(info);
	info.appendChild(type);
	type.appendChild(icon);
	type.appendChild(span);
	info.appendChild(date);
	espace.appendChild(descrip);
	espace.appendChild(caliter);

	return div;
}
