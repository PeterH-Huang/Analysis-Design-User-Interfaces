var currentTab = 0; // Current tab is set to be the first tab (0)
show(currentTab); // Display the current tab

function show(num) {//display the specified tab and the Previous/Next buttons:
	var tab = document.getElementsByClassName("content");
	tab[num].style.display = "block";

	if (num == 0) {
		document.getElementById("prev").style.display = "none";
	  } 
	else {
		document.getElementById("prev").style.display = "inline";
	  }
	
	if (num == (tab.length - 1)) {
		document.getElementById("next").innerHTML = "Done";
	  } else {
		document.getElementById("next").innerHTML = "Next";
	  }
	  //use the step indicator function
	  stepIndicator(num)
	}

function figureTab(step) {//figures out which tab to display
	var placeholder = document.getElementsByClassName("content");
	placeholder[currentTab].style.display = "none";
	// Increase the current tab by 1 or decrease by 1:
	currentTab = currentTab + step;
	//display the new correct tab:
	show(currentTab);
}

function stepIndicator(num) {
	// This function removes the "active" class of all steps...
	var i, j = document.getElementsByClassName("step");
	for (i = 0; i < j.length; i++) {
	  j[i].className = j[i].className.replace(" active", "");
	}
	//... and adds the "active" class to the current step:
	j[num].className += " active";
  }

var restrictArray = []
var optionArray = []



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

function final(meth){
	var method = document.getElementById(meth)

	if (method.value == "None"){
		var display = document.getElementById('checkout');
		display.innerHTML = "";

		var text = document.createElement("h4");
		text.appendChild(document.createTextNode("Thank you for browsing our store!"))
		display.appendChild(text)

		var display2 = document.getElementById('fin');
		display2.innerHTML = "";
		var tea = document.createElement("h4")
		tea.appendChild(document.createTextNode("Please visit us again soon!"))
		display2.appendChild(tea)
	}
	else if (method.value == "Pickup"){
		var display = document.getElementById('cqc');
		display.innerHTML = "";

		var head = document.createElement("h3");
		head.appendChild(document.createTextNode("Select a store location to pickup from:"))
		display.appendChild(head)
		display.appendChild(document.createElement("br"))

		var sel = document.createElement("select");
		sel.appendChild(new Option('68 St.Pierre Ave', 'value'));
		sel.appendChild(new Option('421 Garbrandt Rd', 'value'));
		sel.appendChild(new Option('1336 Yan St', 'value'));
		sel.appendChild(new Option('118 Whittaker D.', 'value'));


		display.appendChild(sel)

		var head2 = document.createElement("h3");
		head2.appendChild(document.createTextNode("Enter your payment information:"))
		display.appendChild(head2)
		display.appendChild(document.createElement("br"))
		var text = document.createElement("P");
		
		text.appendChild(document.createTextNode("Number and Street address:"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("textarea"))
		text.appendChild(document.createElement("br"))

		text.appendChild(document.createTextNode("Postal Code:"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("textarea"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("br"))

		text.appendChild(document.createTextNode("Credit Card Number:"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("textarea"))
		text.appendChild(document.createElement("br"))

		text.appendChild(document.createTextNode("CVC:"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("textarea"))
		text.appendChild(document.createElement("br"))

		text.appendChild(document.createTextNode("Expire date (MM/YY):"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("textarea"))

		display.appendChild(text)

		var display2 = document.getElementById('fin');
		display2.innerHTML = "";
		var tea = document.createElement("h4")
		tea.appendChild(document.createTextNode("Your order will be ready for pickup anytime before the store closes"))
		display2.appendChild(tea)
	}

	else if (method.value == "Delivery"){
		var display = document.getElementById('checkout');
		display.innerHTML = "";
		

		var head = document.createElement("h3")
		head.appendChild(document.createTextNode("Enter your address and payment information:"))
		display.appendChild(head)
		display.appendChild(document.createElement("br"))


		var text = document.createElement("P");
		
		text.appendChild(document.createTextNode("Number and Street address:"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("textarea"))
		text.appendChild(document.createElement("br"))

		text.appendChild(document.createTextNode("Postal Code:"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("textarea"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("br"))

		text.appendChild(document.createTextNode("Credit Card Number:"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("textarea"))
		text.appendChild(document.createElement("br"))

		text.appendChild(document.createTextNode("CVC:"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("textarea"))
		text.appendChild(document.createElement("br"))

		text.appendChild(document.createTextNode("Expire date (MM/YY):"))
		text.appendChild(document.createElement("br"))
		text.appendChild(document.createElement("textarea"))

		display.appendChild(text)



		var display2 = document.getElementById('fin');
		display2.innerHTML = "";
		var tea = document.createElement("h4")
		tea.appendChild(document.createTextNode("Your order will arrive in 1 hour"))
		display2.appendChild(tea)

		
	}
}
