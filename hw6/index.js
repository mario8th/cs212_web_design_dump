function calculateBill() {
   var tax = document.getElementById("tax")
   var price = document.getElementById("price")
   var tip = document.getElementById("tip")
   var returnString = ""
   var errorBool = false
   if (tax.checkValidity() == false || tax.value == "") {
      var taxMin = tax.min
      var taxMax = tax.max
      returnString += "Invalid entry for tax percent. Must be a number between "
      returnString += taxMin + " and " + taxMax + '\n'
      errorBool = true
   }
   if (price.checkValidity() == false || price.value == "") {
      var priceMin = price.min
      var priceMax = price.max
      returnString += "Invalid entry for price. Must be a number between "
      returnString += priceMin + " and " + priceMax + '\n'
      errorBool = true
   }
   if (tip.checkValidity() == false || tip.value == "") {
      var tipMin = tip.min
      var tipMax = tip.max
      returnString += "Invalid entry for tip percent. Must be a number between "
      returnString += tipMin + " and " + tipMax + '\n'
      errorBool = true
   }
   if (errorBool) {
      document.getElementById("priceTag").innerHTML = ""
      document.getElementById("taxTag").innerHTML = ""
      document.getElementById("tipTag").innerHTML = ""
      document.getElementById("total").innerHTML = ""
      alert(returnString)
   }
   else {
      var totalPrice = parseFloat(price.value)
      document.getElementById("priceTag").innerHTML = "Price: $" + totalPrice.toFixed(2)
      var totalTax = price.value * (tax.value / 100)
      document.getElementById("taxTag").innerHTML = "Tax: $" + totalTax.toFixed(2)
      var totalTip = totalTax * (tip.value / 100)
      document.getElementById("tipTag").innerHTML = "Tip: $" + totalTip.toFixed(2)
      var total = totalTax + totalTip + totalPrice
      document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2)
   }
}
