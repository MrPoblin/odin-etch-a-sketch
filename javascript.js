const parent = document.querySelector(".parent");

let size = 960;
let gridList = [];

function fillGrid(width){
    let gridNum = width ** 2;
    for(let i = 0; i < gridNum; i++){
        let square = document.createElement("div");
        square.style.flexBasis = `${String(size / width)}px`;
        square.className = "square";
        square.addEventListener("mouseover", () =>{
            square.style.backgroundColor = "black";
        })
        parent.appendChild(square);
        gridList.push(square);
    }
}

fillGrid(16);