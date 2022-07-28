var restrictArray = []
var optionArray = []
document.getElementById("home").click();

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function updateList(res){
	var s1 = document.getElementById(res);
	restrictArray = restrictProducts(products, s1.value);
}

function organicUpdate(restrict){
	var s3 = document.getElementById(restrict);
	optionArray = organicOnly(products, s3.value);
}

function common(a1,b2){
	var common = []
	for (i = 0; i<a1.length; i++){
		for (j = 0; j<b2.length; j++){
			if (a1[i] == b2[j]) { 
				common.push(a1[i]);
				}
			}
		}
	return common
}


function reset(){
	restrictArray = []
    optionArray = []
}

function lowHigh(slct2) {
	var prod = common(optionArray,restrictArray).sort(function(a, b){return a.price - b.price})
    var s2 = document.getElementById(slct2);

    // represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    

    // for each item in the array, create a checkbox element, each containing information such as:
    for (i = 0; i < prod.length; i++) {  
        var productName = prod[i].name;
		var productPrice = prod[i].price;
        
		var checkbox = document.createElement("input");
        // create the checkbox and add in HTML DOM
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);

        // create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName +" $"+ productPrice));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}

function highLow(slct4) {
	var prod2 = common(optionArray,restrictArray).sort(function(a, b){return b.price - a.price})
    var s4 = document.getElementById(slct4);

    // represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s4.innerHTML = "";
		
    

    // for each item in the array, create a checkbox element, each containing information such as:
    for (i = 0; i < prod2.length; i++) {  
        var productName = prod2[i].name;
		var productPrice = prod2[i].price;
        
		var checkbox = document.createElement("input");
        // create the checkbox and add in HTML DOM
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s4.appendChild(checkbox);

        // create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName +" $"+ productPrice));
		s4.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s4.appendChild(document.createElement("br"));    
	}
}

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	 
	
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	
	c.appendChild(para);
	c.appendChild(document.createElement("br"));
	c.appendChild(document.createTextNode("The Total Price is $" + getTotalPrice(chosenProducts)));
		
}