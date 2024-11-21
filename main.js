// ---------------------------------------------
// ------------ Products section ---------------
// ---------------------------------------------

//Array of products (donuts)
const donut_products = [
	//TODO: Lägg till bilder och fixa alt-texter
	{
		id: 'klassisk_sockermunk',
		name: 'Klassisk Sockermunk',
		price: 10,
		rating: 3.5,
		category: 'Klassisk',
		amount: 0,
		img: {
			url: 'assets/product_images/cartoon_pink_donut.jpg',
			alt: 'Pink donut in a cartoon artstyle',
		},
	},
	{
		id: 'coklad_strossel',
		name: 'Choklad med regnbågsströssel',
		price: 13,
		rating: 4,
		category: 'Choklad drömmar', //ändra
		amount: 0,
		img: {
			url: 'assets/product_images/cartoon_cat_donut.jpg',
			alt: 'donut in a cartoon artstyle where the glacing is an a form of a pink cat',
		},
	},
	{
		id: 'salt_karamell_havssalt',
		name: 'Salt Karamell och Havssalt',
		price: 17,
		rating: 5,
		category: 'Friterad lyx',
		amount: 0,
		img: {
			url: 'assets/product_images/frog_donut.jpg',
			alt: 'donut where the glacing looks like a smiling and happy frog',
		},
	},
	{
		id: 'citron_vallmo',
		name: 'Citron och Vallmofrö',
		price: 12,
		rating: 3,
		category: 'Syrligt!',
		amount: 0,
		img: {
			url: 'assets/product_images/cartoon_pink_donut.jpg',
			alt: 'Pink donut in a cartoon artstyle',
		},
	},
	{
		id: 'hallon_pistage',
		name: 'Hallon och Pistage',
		price: 15,
		rating: 4,
		category: 'Bär på en munk',
		amount: 0,
		img: {
			url: 'assets/product_images/cartoon_pink_donut.jpg',
			alt: 'Pink donut in a cartoon artstyle',
		},
	},
	{
		id: 'nutella_hasselnot',
		name: 'Nutella och Hasselnöt',
		price: 20,
		rating: 5,
		category: 'Choklad drömmar',
		amount: 0,
		img: {
			url: 'assets/product_images/cartoon_pink_donut.jpg',
			alt: 'Pink donut in a cartoon artstyle',
		},
	},
	{
		id: 'vanilj_blabar',
		name: 'Vanilj och Blåbär',
		price: 13,
		rating: 4,
		category: 'Bär på en munk',
		amount: 0,
		img: {
			url: 'assets/product_images/cartoon_pink_donut.jpg',
			alt: 'Pink donut in a cartoon artstyle',
		},
	},
	{
		id: 'matcha_kokos',
		name: 'Matcha och Kokos',
		price: 18,
		rating: 3.5,
		category: 'Kryddiga och värmande',
		amount: 0,
		img: {
			url: 'assets/product_images/cartoon_pink_donut.jpg',
			alt: 'Pink donut in a cartoon artstyle',
		},
	},
	{
		id: 'apple_kanel',
		name: 'Äpple och Kanel',
		price: 18,
		rating: 4.5,
		category: 'Kryddiga och värmande',
		amount: 0,
		img: {
			url: 'assets/product_images/cartoon_pink_donut.jpg',
			alt: 'Pink donut in a cartoon artstyle',
		},
	},
	{
		id: 'jordgubbscheesecake',
		name: 'Jordgubscheesecake',
		price: 20,
		rating: 5,
		category: 'Bär på en munk',
		amount: 0,
		img: {
			url: 'assets/product_images/cartoon_pink_donut.jpg',
			alt: 'Pink donut in a cartoon artstyle',
		},
	},
];

const product_list_div = document.querySelector('#products_list');

print_products_list();

function print_products_list() {
	//rensa diven på produkter innan utskrift av uppdaterad information
	product_list_div.innerHTML = '';
	donut_products.forEach((product) => {
		product_list_div.innerHTML += `
            <article class="product">
                <img src="${product.img.url}" alt="${product.img.alt}">
                <h3>${product.name}</h3>
                <p>${product.price} kr</p>
                <p>Rating: ${product.rating}</p>
                <div class="count_buttons">
                    <button class="decrease_btns" id="decrease_${product.id}"><span class="material-symbols-outlined">remove</span></button>
                    <span>${product.amount}</span>
                    <button class="increase_btns" id="increase_${product.id}"><span class="material-symbols-outlined">add</span></button>
                </div>
            </article>
        `;
	});

	// sätter eventlyssnare varje gång vi uppdaterar, så det finns kvar
	const increase_buttons = document.querySelectorAll('button.increase_btns');
	increase_buttons.forEach((button) => {
		button.addEventListener('click', increase_product_count);
	});
	// gör samma som ovan fast på decrease knapparna
	const decrease_buttons = document.querySelectorAll('button.decrease_btns');
	decrease_buttons.forEach((button) => {
		button.addEventListener('click', decrease_product_count);
	});
}

//-------------------------------------------------------------------------------

function increase_product_count(e) {
	// vi tar bort increase och decrease här för att kunna hitta rätt id i arrayen (då den inte har increase eller decrease i sitt id i arrayen!)
	const product_id = e.target.id.replace('increase_', '');
	// leta rätt på produkten i arrayen som har id:t
	const found_product_index = donut_products.findIndex(
		(product) => product.id === product_id
	);
	if (found_product_index === -1) {
		return;
	}
	donut_products[found_product_index].amount += 1;
	print_products_list();
	update_and_print_cart();
}

//---------------------------------------------------------------------------------

function decrease_product_count(e) {
	// vi tar bort increase och decrease här för att kunna hitta rätt id i arrayen (då den inte har increase eller decrease i sitt id i arrayen!)
	const product_id = e.target.id.replace('decrease_', '');
	// leta rätt på produkten i arrayen som har id:t
	const found_product_index = donut_products.findIndex(
		(product) => product.id === product_id
	);
	if (found_product_index === -1) {
		return;
	}
	//ifall amount ligger på 0 vill vi inte få minus när vi trycker på -
	if (donut_products[found_product_index].amount == 0) {
		return;
	}
	donut_products[found_product_index].amount -= 1;
	print_products_list();
	update_and_print_cart();
}

// ---------------------------------------------
// --------- Shopping Cart section -------------
// ---------------------------------------------

const shopping_cart_products_overview = document.querySelector(
	'#cart_products_added'
);

function update_and_print_cart() {
	// vi vill bara ha de produkter i vår array som har en amount som är större än 0
	const purschased_products = donut_products.filter(
		(product) => product.amount > 0
	);
	// ifall användaren tar bort alla produkter i varukorgen vill vi skriva att den är tom
	if (purschased_products.length === 0) {
		shopping_cart_products_overview.innerHTML = `
		<p>
			Din varukorg är tom
		</p>
		`;
		// TODO: lägg till att "Till kassan"-knappen försvinner här, och visas när något läggs till i listan (desktop verison bara tror jag);
		return;
	}
	// rensa föregående text
	shopping_cart_products_overview.innerHTML = '';
	// för varje produkt som matchar vårt filter (amount > 0) så skriver vi ut en <p> med namn, antal och totalt pris.
	purschased_products.forEach((product) => {
		shopping_cart_products_overview.innerHTML += `
		<p>
			${product.name}: ${product.amount}st - ${product.amount * product.price}kr
		</p>
		`;
	});
}
