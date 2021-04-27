let acolorURL = "./assets/acolor.png";
let bcolorURL ="./assets/bcolor.png";
let ccolorURL ="./assets/ccolor.png";
let dcolorURL ="./assets/dcolor.png";
let ecolorURL ="./assets/ecolor.png";
let fcolorURL ="./assets/fcolor.png";
let gcolorURL ="./assets/gcolor.png";
let hcolorURL ="./assets/hcolor.png";
let icolorURL ="./assets/icolor.png";
let jcolorURL ="./assets/jcolor.png";
let kcolorURL ="./assets/kcolor.png";
let lcolorURL ="./assets/lcolor.png";
let mcolorURL ="./assets/mcolor.png";
let ncolorURL ="./assets/ncolor.png";
let ocolorURL ="./assets/ocolor.png";
let pcolorURL ="./assets/pcolor.png";
let qcolorURL ="./assets/qcolor.png";
let rcolorURL ="./assets/rcolor.png";
let scolorURL ="./assets/scolor.png";
let tcolorURL ="./assets/tcolor.png";
let ucolorURL ="./assets/ucolor.png";
let vcolorURL ="./assets/vcolor.png";
let wcolorURL ="./assets/wcolor.png";
let xcolorURL ="./assets/xcolor.png";
let ycolorURL ="./assets/ycolor.png";
let zcolorURL ="./assets/zcolor.png";



let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

// Detect when we press a key while in the text box
inputElement.addEventListener("keydown",function(event){

  // Detect when we specifically press enter key
  if (event.key == "Enter"){


    
    // Get the contents of the text input (aka name)
    let name = inputElement.value;
    console.log(name);

    //We can also clear what we wrote in the text box
    inputElement.value = "";
    
    //Clear the reading result from last time
    result.innerHTML = "";
    
    // Loop through 26 times
    for (let i = 0; i < 26; i++){
      
      // Print the number we're at in the loop
      console.log(i);
      
      // Get the i-th letter in the name
      let letter = name[i];
      console.log(letter);
      
      // Create a new HTML image element for the card
      let selectedColor = document.createElement("img");



      
      // If letter is a, use corresponding color
      if (["a"].includes(letter)){
        selectedColor.src = acolorURL;
      }

       // If letter is b, use corresponding color
       if (["b"].includes(letter)){
        selectedColor.src = bcolorURL;
      }

       // If letter is c, use corresponding color
       if (["c"].includes(letter)){
        selectedColor.src = ccolorURL;
      }

       // If letter is d, use corresponding color
       if (["d"].includes(letter)){
        selectedColor.src = dcolorURL;
      }
       // If letter is e, use corresponding color
       if (["e"].includes(letter)){
        selectedColor.src = ecolorURL;
      }

       // If letter is f, use corresponding color
       if (["f"].includes(letter)){
        selectedColor.src = fcolorURL;
      }
       // If letter is g, use corresponding color
       if (["g"].includes(letter)){
        selectedColor.src = gcolorURL;
      }

       // If letter is h, use corresponding color
       if (["h"].includes(letter)){
        selectedColor.src = hcolorURL;
      }
       // If letter is i, use corresponding color
       if (["i"].includes(letter)){
        selectedColor.src = icolorURL;
      }

       // If letter is j, use corresponding color
       if (["j"].includes(letter)){
        selectedColor.src = jcolorURL;
      }
       // If letter is k, use corresponding color
       if (["a"].includes(letter)){
        selectedColor.src = acolorURL;
      }

       // If letter is l, use corresponding color
       if (["l"].includes(letter)){
        selectedColor.src = lcolorURL;
      }
       // If letter is m, use corresponding color
       if (["m"].includes(letter)){
        selectedColor.src = mcolorURL;
      }

       // If letter is n, use corresponding color
       if (["n"].includes(letter)){
        selectedColor.src = ncolorURL;
      }
       // If letter is o, use corresponding color
       if (["o"].includes(letter)){
        selectedColor.src = ocolorURL;
      }

       // If letter is p, use corresponding color
       if (["p"].includes(letter)){
        selectedColor.src = pcolorURL;
      }
       // If letter is q, use corresponding color
       if (["q"].includes(letter)){
        selectedColor.src = qcolorURL;
      }

       // If letter is r, use corresponding color
       if (["r"].includes(letter)){
        selectedColor.src = rcolorURL;
      }
       // If letter is s, use corresponding color
       if (["s"].includes(letter)){
        selectedColor.src = scolorURL;
      }

       // If letter is t, use corresponding color
       if (["t"].includes(letter)){
        selectedColor.src = tcolorURL;
      }
       // If letter is u, use corresponding color
       if (["u"].includes(letter)){
        selectedColor.src = ucolorURL;
      }

       // If letter is w, use corresponding color
       if (["w"].includes(letter)){
        selectedColor.src = wcolorURL;
      }
       // If letter is x, use corresponding color
       if (["x"].includes(letter)){
        selectedColor.src = xcolorURL;
      }

       // If letter is y, use corresponding color
       if (["y"].includes(letter)){
        selectedColor.src = ycolorURL;
      }
       // If letter is z, use corresponding color
       if (["z"].includes(letter)){
        selectedColor.src = zcolorURL;
      }

      
      
      
      result.appendChild(selectedColor);
      
    }
    
  }
})