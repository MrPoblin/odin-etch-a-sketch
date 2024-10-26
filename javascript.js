const parent = document.querySelector(".parent");

let size = 960;

function fillGrid(width){
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
      }
    let gridNum = width ** 2;
    for(let i = 0; i < gridNum; i++){
        let square = document.createElement("div");
        square.style.flexBasis = `${String(size / width)}px`;
        square.style.opacity = 0;
        square.className = "square";
        square.addEventListener("mouseover", () =>{
            square.style.opacity =  parseFloat(square.style.opacity) + 0.1;
            square.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        });
        parent.appendChild(square);
    }
}


const button = document.querySelector(".size");
button.addEventListener("click", () =>{
    const newSize = parseInt(prompt("Enter new size"));
    if (newSize){
        if(newSize > 100){
            alert("Size too big!");
        }
        else if(newSize < 0){
            alert("Enter a positive number!");
        }
        else{
        fillGrid(newSize);
        }
    }
    else{
        alert("Enter a positive number!");
    }
})

fillGrid(16);