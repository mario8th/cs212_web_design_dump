function doRootBeerStuff() {
   var checkboxBool
   var radioBool
   var recipe_inner
   var recipe_outer
   var vanillaBool = document.getElementById("vanilla").checked
   var chocolateBool = document.getElementById("chocolate").checked
   var coffeeBool = document.getElementById("coffee").checked
   checkboxBool =  vanillaBool || chocolateBool || coffeeBool
   var barqBool = document.getElementById("barq").checked
   var awBool = document.getElementById("aw").checked
   var dadBool = document.getElementById("dad").checked
   var ibcBool = document.getElementById("ibc").checked
   radioBool = barqBool || awBool || dadBool || ibcBool
   if(!checkboxBool || !radioBool) {
      alert("You must select at least one ice cream flavor, and you must select one root beer brand")
   }
   else {
      recipe_inner = document.getElementById("recipe_inner")
      recipe_outer = document.getElementById("recipe_outer")

      recipe_inner.style.border = "5px"
      recipe_inner.style.borderWidth = "5px"
      recipe_inner.style.borderStyle = "solid"
      recipe_inner.style.backgroundColor = "rgba(129, 77, 48)"
      recipe_inner.style.borderColor = "rgba(129, 77, 48)"
      recipe_inner.style.color = "white"

      recipe_outer.style.marginTop = "10px"
      recipe_outer.style.padding = "5px"
      recipe_outer.style.borderStyle = "solid"
      recipe_outer.style.borderWidth = "5px"
      recipe_outer.style.borderColor = "rgba(129, 77, 48)"
      recipe_outer.style.width = "250px"

      var outputString = "Recipe:<br>In a glass mug, add one scoop of each of these ice creams - "
      if(vanillaBool) {
         outputString += "vanilla"
      }

      if(chocolateBool) {
         if(vanillaBool) {
            outputString += ', '
         }
         outputString += "chocolate"
      }

      if(coffeeBool) {
         if(chocolateBool || vanillaBool) {
            outputString += ', '
         }
         outputString += "coffee"
      }
      outputString += ". Fill up the mug with "

      if(barqBool) {
         outputString += "Barq's"
      }

      else if(awBool) {
         outputString += "A&W"
      }

      else if(dadBool) {
         outputString += "Dad's"
      }

      else {
         outputString += "IBC"
      }

      outputString += " root beer. Enjoy!"

      recipe_inner.innerHTML = outputString
   }
}
