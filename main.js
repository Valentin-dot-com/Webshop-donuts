
// ---------------------------------------------
// ------------ Products section ---------------
// ---------------------------------------------

//Array of products (donuts)
const donut_products = [ //TODO: Lägg till bilder och fixa alt-texter
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

const productListDiv = document.querySelector('#products_list');

printProductsList();

function printProductsList() {
	productListDiv.innerHTML = ''; //rensa diven på produkter innan utskrift av uppdaterad information
	donut_products.forEach((product) => {
		// productListDiv.innerHTML += '<article class="products">' + product.name + '</article>';
		productListDiv.innerHTML += `
            <article class="product">
                <img src="${product.img.url}" alt="${product.img.alt}">
                <h3>${product.name}</h3>
                <p>${product.price} kr</p>
                <p>Rating: ${product.rating}</p>
            </article>
            <div>
                <button class="decrease_btns" id="decrease_${product.id}">Decrease</button>
                <input type="number" min="0" value="${product.amount}">
                <button class="increase_btns" id="increase_${product.id}">Increase</button>
            </div>
        `;
	});

    // sätter eventlyssnare varje gång vi uppdaterar, så det finns kvar.
	const increaseButtons = document.querySelectorAll('button.increase_btns');
	increaseButtons.forEach((button) => {
		button.addEventListener('click', increaseProductCount);
	});

    //TODO: Gör samma för "decrease_button"^^^^
}

const decreaseButtons = document.querySelectorAll('button.decrease_btns');
console.log(decreaseButtons);

//-------------------------------------------------------------------------------

function increaseProductCount(e) {
	const productId = e.target.id.replace('increase_', '');
	// vi tar bort increase och decrease här för att kunna hitta rätt id i arrayen (då den inte har increase eller decrease i sitt id i arrayen!)
	console.log('produkt id: ' + productId);
	// leta rätt på produkten i arrayen som har id:t
	const foundProductIndex = donut_products.findIndex(
		(product) => product.id === productId
	);
	console.log('index: ' + foundProductIndex);
	if (foundProductIndex === -1) {
		console.error('Det finns ingen sådan produkt! Kolla ID_t');
		return;
	}
	donut_products[foundProductIndex].amount += 1;
	console.log(donut_products[foundProductIndex]);
	printProductsList();
}

// öka dess amount med +1
// skriv ut produktlistan

//---------------------------------------------------------------------------------
