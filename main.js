const btn = document.getElementById("btn");

async function reponse() {
	const resulte = await fetch("http://10.69.0.17:3002/v1/flowers", {
		method: "GET",
	});
	const flowers = await resulte.json();
	console.log(flowers);

	for (let flower of flowers) {
		page(
			flower.image,
			flower.name,
			flower.description,
			flower.propolis,
			flower.nectar,
			flower.propolis,
			flower.melliferous
		);
	}
}

btn.addEventListener("click", () => {
	reponse();
});

const main = document.querySelector("main");

function page(a, b, c, p, n, poll, e) {
	const div = document.createElement("div");
	div.classList.add("radius");

	const img = document.createElement("div");
	img.classList.add("img");
	img.style.background = "center / cover url(" + a + ") no-repeat";
	const espace = document.createElement("div");
	espace.classList.add("padinge");

	const etoile = document.createElement("div");
	etoile.classList.add("etoile");
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

	const date = document.createElement("p");
	date.classList.add("noir");

	const descrip = document.createElement("p");
	descrip.classList.add("gris-lint");
	descrip.textContent = c;

	const caliter = document.createElement("div");
	caliter.classList.add("aligne");
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

	main.appendChild(div);
	div.appendChild(img);
	div.appendChild(espace);
	espace.appendChild(etoile);
	// etoile.appendChild(imgEtoile);
	espace.appendChild(nom);
	espace.appendChild(info);
	info.appendChild(type);
	type.appendChild(icon);
	type.appendChild(span);
	info.appendChild(date);
	espace.appendChild(descrip);
	espace.appendChild(caliter);
}
