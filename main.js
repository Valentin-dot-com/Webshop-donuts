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

// ---------------------------------------------
// ----------- Nav-menu section ----------------
// ---------------------------------------------

const shopping_cart_btn = document.querySelector('#cart_btn');
shopping_cart_btn.addEventListener('click', scroll_to_cart);

const heading_one = document.querySelector('h1');
heading_one.addEventListener('click', scroll_to_top);

const shopping_cart_aside = document.querySelector('#shopping_cart_aside');

function scroll_to_cart() {

	const offset = window.innerHeight * 0.1;

	const cart_position = shopping_cart_aside.offsetTop;

	const scroll_to_position = cart_position - offset;

	window.scrollTo({
		top:scroll_to_position,
		behavior: 'smooth',
	});
}

function scroll_to_top() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

// -------------------

// TODO: kom på bättre namn kanske
const nav_cart_sum = document.querySelector('#cart_cost_sum');

function show_cart_sum_in_nav_menu() {
	nav_cart_sum.innerHTML = `
		${final_order_sum + delivery_fee}kr
	`;
}

// ---------------------------------------------
// -------------- Products section -------------
// ---------------------------------------------

function print_products_list() {
	//rensa diven på produkter innan utskrift av uppdaterad information
	product_list_div.innerHTML = '';

	// om det är fredag efter 15 till måndag 03:00 så uppdateras price_increase
	if ((is_friday && today.getHours() >= 15) || is_saturday || is_sunday || (is_monday && today.getHours() <= 3)) {
		price_increase = 1.15;
	} else {
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
		show_cart_sum_in_nav_menu();
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

	// Om det är måndag morgon, rabatt (gäller måndag kl 03.00-10.00, för att inte krocka med helgpåslaget mellan 00.00-03.00)
	if (today.getDay() === 1 && today.getHours() < 10 && today.getHours > 3) {
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
	<label class="discount_code">
		<span>Rabattkod:</span>
		<input id="discount_code_input" type="text">
	</label>
	<div class="checkout_btn_wrapper">
		<button class="visualize" type="button" id="to_checkout_btn">Gå till kassan</button>
	</div>`;
	check_if_invoice_available();
	show_cart_sum_in_nav_menu();
	// TODO: lägg till visuell feedback att varukorgen har uppdaterats1
}

// ---------------------------------------------
// --------- Shopping Form section -------------
// ---------------------------------------------

const payment_option_radio_btns = Array.from(document.querySelectorAll('input[name="payment_options"]'));

const card_payment_fields = document.querySelector('#card_payment_fields');

const invoice_payment_field = document.querySelector('#invoice_payment_field');

const invoice_radio_btn = document.querySelector('#invoice_btn');

let selected_payment_option = 'card';

function check_if_invoice_available() {
	if (final_order_sum > 800) {
		invoice_radio_btn.setAttribute('disabled', '');
	} else {
		//Går det bra att ha denna som en else eller finns det en bättre lösning?
		invoice_radio_btn.removeAttribute('disabled');
	}
}

payment_option_radio_btns.forEach((radio_btn) => {
	radio_btn.addEventListener('change', switch_payment_method);
});

// togglar vad som ska synas när vi trycker på betalmetoden
function switch_payment_method(e) {
	invoice_payment_field.classList.toggle('hidden');
	card_payment_fields.classList.toggle('hidden');

	selected_payment_option = e.target.value;
}
// ---------------------------------------------
// ------------ Form validation ----------------
// ---------------------------------------------

const order_btn = document.querySelector('#submit_btn');

// ----------- inputs ----------------------

const first_name_input = document.querySelector('#first_name_input');
first_name_input.addEventListener('change', activate_order_button);

const last_name_input = document.querySelector('#last_name_input');
last_name_input.addEventListener('change', activate_order_button);

const address_input = document.querySelector('#address_input');
address_input.addEventListener('change', activate_order_button);

const postal_code_input = document.querySelector('#postal_code_input');
postal_code_input.addEventListener('change', activate_order_button);

const city_input = document.querySelector('#city_input');
city_input.addEventListener('change', activate_order_button);

const phonenumber_input = document.querySelector('#phonenumber_input');
phonenumber_input.addEventListener('change', activate_order_button);

const email_input = document.querySelector('#email_input');
email_input.addEventListener('change', activate_order_button);

// RegEx for these input^

const name_regex = new RegExp(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/);

const address_regex = new RegExp(/^[A-Za-zåäöÅÄÖéÉèÈÉëËüÜ\- ]+ \d{1,4}[A-Za-z]?$/);

const postal_code_regex = new RegExp(/^\d{3} \d{2}$/);

const city_regex = new RegExp(/^[A-Za-zåäöÅÄÖéÉèÈÉëËüÜ\-'\s]+$/);

const phonenumber_regex = new RegExp(/^(\+46|0)(7[0-9]{1})\d{3}\d{2}\d{2}$/);

const email_regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

// -------------- Invoice -------------------------------

const social_security_number_input = document.querySelector('#social_security_number_input');
social_security_number_input.addEventListener('change', activate_order_button);

const social_security_number_regex = new RegExp(
	/^20\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])-\d{4}$|^19\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])-\d{4}$/
);

function is_social_security_number_valid() {
	return social_security_number_regex.exec(social_security_number_input.value);
}

// ----------------- Card payment ----------------------------

const cardnumber_input = document.querySelector('#cardnumber_input');
cardnumber_input.addEventListener('change', activate_order_button);

const year_input = document.querySelector('#year_input');
year_input.addEventListener('change', activate_order_button);

const month_input = document.querySelector('#month_input');
month_input.addEventListener('change', activate_order_button);

const cvc_input = document.querySelector('#cvc_input');
cvc_input.addEventListener('change', activate_order_button);

// TODO: fixa regEx på kort om du hinner, var inget krav!!
// denna kollar så att fältet inte är tomt...
const credit_card_fields_regex = new RegExp(/^.+$/);

// ------------------ Check form ----------------------------

// Denna fungerar endast om jag fyller i uppifrån och ner i rätt ordning, alltså med felmeddelanden
// Den går inte heller vidare om ett fält är fel...
function activate_order_button() {
	order_btn.setAttribute('disabled', '');
	if (name_regex.exec(first_name_input.value) === null) {
		// TODO: lägg till felmedelanden
		console.warn('Incorrect first name');
		send_error_msg('first_name_input');
		return;
	}
	remove_error_msg('first_name_input');

	if (name_regex.exec(last_name_input.value) === null) {
		console.warn('Incorrect last name');
		send_error_msg('last_name_input');
		return;
	}
	remove_error_msg('last_name_input');

	if (address_regex.exec(address_input.value) === null) {
		console.warn('Incorrect address');
		send_error_msg('address_input');
		return;
	}
	remove_error_msg('address_input');

	if (postal_code_regex.exec(postal_code_input.value) === null) {
		console.warn('Incorrect postal code');
		send_error_msg('postal_code_input');
		return;
	}
	remove_error_msg('postal_code_input');

	if (city_regex.exec(city_input.value) === null) {
		console.warn('Incorrect city');
		send_error_msg('city_input');
		return;
	}
	remove_error_msg('city_input');

	if (phonenumber_regex.exec(phonenumber_input.value) === null) {
		console.warn('Incorrect phonenumber');
		send_error_msg('phonenumber_input');
		return;
	}
	remove_error_msg('phonenumber_input');

	if (email_regex.exec(email_input.value) === null) {
		console.warn('Incorrect email');
		send_error_msg('email_input');
		return;
	}
	remove_error_msg('email_input');

	if (selected_payment_option === 'invoice' && !is_social_security_number_valid()) {
		console.warn('Incorrect social security number');
		return;
	}
	if (selected_payment_option === 'card') {
		if (credit_card_fields_regex.exec(cardnumber_input.value) === null) {
			console.warn('Incorrect cardnumber');
			send_error_msg('cardnumber_input');
			return;
		}
		remove_error_msg('cardnumber_input');

		//ingen error_msg på dessa då egentligen inte valideras
		if (credit_card_fields_regex.exec(year_input.value) === null) {
			console.warn('Incorrect year');
			return;
		}

		if (credit_card_fields_regex.exec(month_input.value) === null) {
			console.warn('Incorrect month');
			return;
		}

		if (credit_card_fields_regex.exec(cvc_input.value) === null) {
			console.warn('Incorrect cvc');
			send_error_msg('cvc_input');
			return;
		}
		remove_error_msg('cvc_input');
	}
	order_btn.removeAttribute('disabled', '');
}

function send_error_msg(id) {
	const input_id = document.getElementById(id);
	const error_msg = input_id.nextElementSibling;

	error_msg.classList.remove('hidden');
}

function remove_error_msg(id) {
	const input_id = document.getElementById(id);
	const error_msg = input_id.nextElementSibling;

	error_msg.classList.add('hidden');
}

// ---------------- Send and reset form ------------------------

const reset_form_btn = document.querySelector('#reset_btn');
reset_form_btn.addEventListener('click', reset_form);

// Tar bort eventuella felmeddelanden som var synliga under inputs
function reset_form() {
	const all_error_msg = document.querySelectorAll('.error_msg');
	console.log(all_error_msg);
	all_error_msg.forEach((msg) => {
		msg.classList.add('hidden');
	});

	// all_error_msg.classList.add('hidden');

	donut_products.forEach((product) => {
		product.amount = 0;
	});
	update_and_print_cart();
}
