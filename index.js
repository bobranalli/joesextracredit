function Calculate(){
	/* Variables for outputting */
	var subtotal;
	var newtotal;
	var discount;
	var tax;
	var newtax;
	var t;
	var total;
	
	/* get the quantities */
	var x = document.getElementById("fries").value;
	var y = document.getElementById("soda").value;
	var z = document.getElementById("hotdogs").value;

	var hot = parseFloat(x);
	var fries = parseFloat(y);
	var drink = parseFloat(z);
	
	subtotal = (hot*3.25 + fries*2.00 + drink*1.50);
	
	if(subtotal >= 20){
		discount = subtotal*.10;
		discount = discount.toFixed(2);
		newtotal = subtotal - discount;
	} else {
		newtotal = subtotal;
	}
	
	tax = newtotal*0.0625;
	newtax = tax.toFixed(2);
	t = tax + newtotal;
	total = t.toFixed(2);
	var print ="Your order: " + x + " hotdog(s), " + y + " fries, and " + z + " drink(s)" + "\n";
	print += "Subtotal: $" + subtotal + "\n";
	
	
	if(discount > 0){ 
		print+="Discount: $" + discount + "\n";
	} else {
		print+="You did not get a discount this time. Order more next time!"+ "\n";
	}
	
	
	if(newtax > 0) {
		print+="Tax: $" + newtax+ "\n";
	} else {
		print+="Tax: $0"+ "\n";
	}
	
	if(total > 0) {
		print+="Total: $" + total+ "\n";
	} else {
		print+="Total: $0";
	}
	
	alert(print);
}




