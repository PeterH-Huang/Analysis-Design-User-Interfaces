var products = [
	{
		name: "brocoli",
		nut: false,
		lactose: false,
        organic: true,
		price: 1.90
	},
	{
		name: "organic bread",
		nut: false,
		lactose: false,
        organic: true,
		price: 3.35
	},
    {
		name: "bread",
		nut: false,
		lactose: false,
        organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		nut: false,
		lactose: false,
        organic: true,
		price: 10.00
	},
    {
        name:"yogurt",
        nut: false,
        lactose: true,
        organic: false,
        price: 6.00
    },
    {
        name:"organic yogurt",
        nut: false,
        lactose: true,
        organic: true,
        price: 8.00
    },
    {
        name:"peanut butter",
        nut: true,
        lactose: false,
        organic: false,
        price:5.50
    },
    {
        name:"organic peanut butter",
        nut: true,
        lactose: false,
        organic: true,
        price:6.50
    },
    {
        name:"cheese",
        nut: false,
        lactose: true,
        organic: false,
        price:7.00
    },
    {
        name:"organic cheese",
        nut: false,
        lactose: true,
        organic: true,
        price:9.00
    },
    {
        name:"milk chocolate covered almonds",
        nut: true,
        lactose: true,
        organic: false,
        price: 6.00
    },
    {
        name:"potato chips",
        nut: false,
        lactose: false,
        organic: false,
        price: 3.00
    },
    {
        name:"organic trail mix (with nuts)",
        nut: true,
        lactose: false,
        organic: true,
        price: 4.00
    },
    {
        name:"dairy milk",
        nut: false,
        lactose: true,
        organic: true,
        price: 4.70
    },
    {
        name:"granola trail mix (with nuts)",
        nut: true,
        lactose: false,
        organic: false,
        price: 3.00
    },
];

function restrictProducts(prod, restriction) {
	let productList = [];
	for (i=0; i<prod.length; i+=1) {
		if ((restriction == "Lactose") && (prod[i].lactose == false)){
			productList.push(prod[i]);
		}
		else if ((restriction == "Nuts") && (prod[i].nut == false)){
			productList.push(prod[i]);
		}
        else if ((restriction == "Both") && (prod[i].nut == false) && (prod[i].lactose == false) ){
            productList.push(prod[i]);
        }
        else if ((restriction == "None")){
			productList.push(prod[i]);
		}
	}
	return productList;
}

function organicOnly(prod, restriction){
    let productList = [];
	for (i=0; i<prod.length; i+=1) {
		if ((restriction == "ya") && (prod[i].organic == true)){
			productList.push(prod[i]);
		}
		else if ((restriction == "no")){
			productList.push(prod[i]);
		}
	}
	return productList;
}


function getTotalPrice(chosen) {
	total = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosen.indexOf(products[i].name) > -1){
			total += products[i].price;
		}
	}
	return total;
}