// ---------------------------------------------
// ------------ Products section ---------------
// ---------------------------------------------

//Array of products (donuts)
const donut_products = [
	{
		id: 'klassisk_sockermunk',
		name: 'Klassisk Sockermunk',
		price: 10,
		rating: 3.5,
		category: 'Klassisk',
		amount: 0,
		img: {
			url: 'assets/product_images/sugar_donut.jpg',
			width: 1024,
			height: 1024,
			alt: 'en enstaka klassisk munk med sockerglasyr och florsocker på en grå bakgrund',
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
			url: 'assets/product_images/chocolate_donut.jpg',
			width: 1024,
			height: 1024,
			alt: 'en enstaka choklad-doppad munk med färgglatt strössel på framför en vit bakgrund',
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
			url: 'assets/product_images/salted_caramel_donut.jpg',
			width: 1024,
			height: 1024,
			alt: 'en enstaka munk med karamell-glasyr som droppar ner från munken på en vit bakgrund',
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
			url: 'assets/product_images/lemon_poppyseed_donut.jpg',
			width: 1024,
			height: 1024,
			alt: 'en enstaka munk med en gul citron-glasyr toppad med vallmofrön på en vit bakgrund',
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
			url: 'assets/product_images/raspberry_pistachio_donut.jpg',
			width: 1024,
			height: 1024,
			alt: 'en enstaka munk med en rosa hallon-glasyr toppad med pistagenötter på en vit bakgrund',
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
			url: 'assets/product_images/nutella_hazelnut_donut.jpg',
			width: 1024,
			height: 1024,
			alt: 'en enstaka munk med en nutella-glasyr toppad med choklad och hasselnötter på en brun bakgrund',
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
			url: 'assets/product_images/vanilla_blueberry_donut.jpg',
			width: 1024,
			height: 1024,
			alt: 'en enstaka munk med en vit vaniljglasyr toppad med små blåbär på en vit tallrik',
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
			url: 'assets/product_images/matcha_coconut_donut.jpg',
			width: 1024,
			height: 1024,
			alt: 'en enstaka munk med en grön matcha-glasyr toppad med kokosflingor på en vit bakgrund',
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
			url: 'assets/product_images/apples_cinnamon_donut.jpg',
			width: 1024,
			height: 1024,
			alt: 'en enstaka munk med en brun kanel-glasyr toppad med små äppelbitar och kanel på en vit bakgrund',
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
			url: 'assets/product_images/strawberry_cheesecake_donut.jpg',
			width: 1024,
			height: 1024,
			alt: 'en enstaka munk med en vit färskost-glasyr toppad med kaksmulor och en jordgubbe i munkens mitten, på en vit bakgrund',
		},
	},
];

const icon_full_star = {
	id: 'full_star',
	img: {
		url: 'assets/icons/star_solid.svg',
		width: 576,
		height: 512,
		alt: 'en ikon som representerar en ifylld stjärna',
	},
};

const icon_half_star = {
	id: 'half_star',
	img: {
		url: 'assets/icons/star_half_stroke_solid.svg',
		width: 576,
		height: 512,
		alt: 'en ikon som representerar en halft ifylld stjärna',
	},
};

const today = new Date();

const product_list_div = document.querySelector('#products_list');

const sort_by_name_btn = document.querySelector('#sort_by_name');
sort_by_name_btn.addEventListener('click', sort_by_name);

const sort_by_lowest_price_btn = document.querySelector('#sort_by_price_cheap');
sort_by_lowest_price_btn.addEventListener('click', sort_by_lowest_price);

const sort_by_highest_price_btn = document.querySelector('#sort_by_price_expensive');
sort_by_highest_price_btn.addEventListener('click', sort_by_highest_price);

const sort_by_category_btn = document.querySelector('#sort_by_category');
sort_by_category_btn.addEventListener('click', sort_by_category);

const sort_by_rating_btn = document.querySelector('#sort_by_rating');
sort_by_rating_btn.addEventListener('click', sort_by_rating);

const weekend_prices = donut_products.map((product) => Math.round(product.price * 1.15));

const is_friday = today.getDay() === 5;
const is_saturday = today.getDay() === 6;
const is_sunday = today.getDay() === 0;
const is_monday = today.getDay() === 1;

let price_increase = 1;
const bulk_purchase_discount = 0.9;

print_products_list();

function print_products_list() {
	//rensa diven på produkter innan utskrift av uppdaterad information
	product_list_div.innerHTML = '';

	// om det är fredag efter 15 till måndag 03:00 så uppdateras price_increase
	if ((is_friday && today.getHours() >= 15) || is_saturday || is_sunday || (is_monday && today.getHours() <= 3)) {
		console.log('Det är helg'); // TODO: kan ta bort denna log efter jag sett att det funkar på helgen
		price_increase = 1.15;
	} else {
		console.log('Det är inte helg'); // TODO: kan ta bort denna log efter jag sett att det funkar på helgen
		price_increase = 1;
	}
	donut_products.forEach((product) => {
		product_list_div.innerHTML += `
			<article class="product">
				<img class="product_img" src="${product.img.url}" width="${product.img.width}" height="${
			product.img.height
		}" loading="lazy" alt="${product.img.alt}">
				<h3>${product.name}</h3>
				<p>${Math.round(product.price * price_increase)} kr</p>
				<p>Kategori: ${product.category}
				<div class="ratings">
					<p>Betyg: </p>
					${get_rating_stars(product.rating)}
				</div>
				<div class="count_buttons">
					<button class="decrease_btns" id="decrease_${product.id}"><span class="material-symbols-outlined">remove</span></button>
					<span class="product_amount">${product.amount}</span>
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

function get_rating_stars(rating) {
	// för att se ifall det finns decimal
	const needs_half_star = rating % 1 === 0.5;

	let html = '';

	if (needs_half_star) {
		for (let i = 1; i < rating; i++) {
			html += `<img src="${icon_full_star.img.url}" class="${icon_full_star.id}" width="${icon_full_star.img.width}" height="${icon_full_star.img.height}" alt="${icon_full_star.img.alt}">`;
		}
		html += `<img src="${icon_half_star.img.url}" class="${icon_half_star.id}" width="${icon_half_star.img.width}" height="${icon_half_star.img.height}" alt="${icon_half_star.img.alt}">`;
	} else {
		for (let i = 0; i < rating; i++) {
			html += `<img src="${icon_full_star.img.url}" class="${icon_full_star.id}" width="${icon_full_star.img.width}" height="${icon_full_star.img.height}" alt="${icon_full_star.img.alt}">`;
		}
	}

	return html;
}

//-------------------------------------------------------------------------------

function sort_by_name() {
	donut_products.sort((product1, product2) => {
		if (product1.name < product2.name) {
			return -1;
		}
		if (product1.name > product2.name) {
			return 1;
		}
		return 0;
	});

	print_products_list();
}

function sort_by_lowest_price() {
	donut_products.sort((product1, product2) => product1.price - product2.price);
	print_products_list();
}

function sort_by_highest_price() {
	donut_products.sort((product1, product2) => product2.price - product1.price);
	print_products_list();
}

function sort_by_category() {
	donut_products.sort((product1, product2) => {
		if (product1.category < product2.category) {
			return -1;
		}
		if (product1.category > product2.category) {
			return 1;
		}
		return 0;
	});
	console.table(donut_products);

	print_products_list();
}

function sort_by_rating() {
	donut_products.sort((product1, product2) => product2.rating - product1.rating);
	print_products_list();
}

//-------------------------------------------------------------------------------

function increase_product_count(e) {
	// vi tar bort increase och decrease här för att kunna hitta rätt id i arrayen (då den inte har increase eller decrease i sitt id i arrayen!)
	const product_id = e.target.id.replace('increase_', '');
	// spara id för knappen vi trycker på, för att kunna behålla fokus
	const clicked_button_id = e.target.id;
	// leta rätt på produkten i arrayen som har id:t
	const found_product_index = donut_products.findIndex((product) => product.id === product_id);
	if (found_product_index === -1) {
		return;
	}
	donut_products[found_product_index].amount += 1;
	print_products_list();
	update_and_print_cart();
	// för att behålla fokus på knappen
	document.querySelector(`#${clicked_button_id}`).focus();
	// TODO: Koppla så att när denna klickas i så ska visuell feedback ges att varukorgen uppdaterats
}

//---------------------------------------------------------------------------------

function decrease_product_count(e) {
	// vi tar bort increase och decrease här för att kunna hitta rätt id i arrayen (då den inte har increase eller decrease i sitt id i arrayen!)
	const product_id = e.target.id.replace('decrease_', '');
	// spara id för knappen vi trycker på, för att kunna behålla fokus
	const clicked_button_id = e.target.id;
	// leta rätt på produkten i arrayen som har id:t
	const found_product_index = donut_products.findIndex((product) => product.id === product_id);
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
	// för att behålla fokus på knappen
	document.querySelector(`#${clicked_button_id}`).focus();
	// TODO: Koppla så att när denna klickas i så ska visuell feedback ges att varukorgen uppdaterats
}

// ---------------------------------------------
// --------- Shopping Cart section -------------
// ---------------------------------------------

const shopping_cart_products_overview = document.querySelector('#cart_products_added');

const go_to_checkout_btn = document.querySelector('#to_checkout_btn');

// för att ha en slutlig totalsumma utanför funktionen, typ ifall den behöver kommas åt utanför själva "print-funktitonen"
let final_order_sum = 0;

// samma med denna som ovan, skulle kunna vara lokal variabel antar jag men sätter utanför pga samma som ovan
let delivery_fee = 0;

function update_and_print_cart() {
	// vi vill bara ha de produkter i vår array som har en amount som är större än 0
	const purchased_products = donut_products.filter((product) => product.amount > 0);
	let total_sum = 0;
	let each_product_price = 0;

	// ifall användaren tar bort alla produkter i varukorgen vill vi skriva att den är tom
	if (purchased_products.length === 0) {
		shopping_cart_products_overview.innerHTML = `
		<p>Din varukorg är tom</p>`;
		final_order_sum = 0;
		delivery_fee = 0;
		return;
	}

	// rensa föregående text
	shopping_cart_products_overview.innerHTML = '';

	// för varje produkt som matchar vårt filter (amount > 0) så skriver vi ut en <p> med namn, antal och totalt pris.
	purchased_products.forEach((product) => {
		each_product_price = Math.round(product.price * price_increase);
		let discount_msg = '';

		// om vi köper 10 eller fler av samma, 10% rabatt på endast den produkten
		if (product.amount >= 10) {
			each_product_price = Math.round(product.price * price_increase * bulk_purchase_discount);
			discount_msg = `Bulkköps-rabatt: -10% på denna produkt`;
		}

		// lägger till priset för varje produkt till totalsumman
		total_sum += product.amount * each_product_price;

		// skriver ut produkterna i varukorgen, med pris och antal
		shopping_cart_products_overview.innerHTML += `
		<div class="shopping_cart_item">
			<p class="shopping_cart_products">
				<span>${product.name}: </span>
				<span>${product.amount}st - ${product.amount * each_product_price}kr</span>
			</p>
			<p class="discount_msg">${discount_msg}</p>
		</div>`;
	});
	final_order_sum = total_sum;

	// Om det är måndag morgon, rabatt
	if (today.getDay() === 1 && today.getHours() < 10) {
		final_order_sum = Math.round(total_sum * 0.9);
		shopping_cart_products_overview.innerHTML += `
		<p class="discount">Måndag morgon-rabatt, 10% dras av från din beställning: - ${Math.round(total_sum * 0.1)}kr</p>`;
	}

	// funktionalitet för fraktkostnader
	const total_amount_of_donuts = donut_products.reduce((product1, product2) => product1 + product2.amount, 0);

	if (total_amount_of_donuts >= 15) {
		delivery_fee = 0;
	} else {
		delivery_fee = 25 + Math.round(final_order_sum * 0.1);
	}
	shopping_cart_products_overview.innerHTML += `
	<p class="delivery_fee">
		<span>Frakt: </span>
		<span>${delivery_fee}</span>
	</p>`;

	// för att printa ut totalsumman av alla produkter i varukorgen
	// knappen inuti en wrapper för att kunna centrera med flex
	shopping_cart_products_overview.innerHTML += `
	<p class="total_sum">
		<span>Totalsumma: </span>
		<span>${final_order_sum + delivery_fee}kr</span>
	</p>
	<div class="checkout_btn_wrapper">
		<button class="visualize" type="button" id="to_checkout_btn">Gå till kassan</button>
	</div>`;
}
