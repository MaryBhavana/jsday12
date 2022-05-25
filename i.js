console.log("working...");

function changeDirection(){
    const element = document.getElementsByClassName("flex-container");
    element[0].style.flexDirection = "column";

    changeDirection.innerHTML = `<img src"./w.jpg"/>`;

// const image = document.getElementsByTagName("img");
//         image[0].src = "./w.jpg"
document.getElementsByTagName("img")[0].src = "./w.jpg";

const element1 = document.getElementById("msg");
   element1.innerHTML = `<div><b>hello world</b></div>`;

}

// function changeColor() {
//     const changeColor = document.getElementsByClassName("impMessage");
//     const changeColor1 = document.getElementById("message");
//     changeColor[0].style.color = "red";
//     changeColor1.style.color = "orange"; 

//     changeColor1.innerHTML = `<img src="./coffee1.jpg" />`;

//     // const image = document.getElementsByTagName("img");
//     // image[0].src= "./coffee2.jpg";
//     document.getElementsByTagName("img")[0].src = "./coffee2.jpg";
// }//if u try to change src of two images in one function, u might get errors, so better to handle them using different functions only.

let element5 = document.createElement("div");
element5.className = "newDIv";
element5.id = "newDiv";
element5.setAttribute("for","value");
element5.innerText = "Hello I have created a new div from JS";
console.log(element5);
document.querySelector("p.impMessage").appendChild(element5);

let createElement = document.createElement("img");
createElement.className = "image";
createElement.setAttribute("src","./coffee2.jpg")


