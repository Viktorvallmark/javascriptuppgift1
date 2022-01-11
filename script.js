//Raderna med färg
for(i = 0; i < 5; i++) {

    const div = document.createElement("div");
    div.innerText = `Rad ${i+1}`;
    div.style.textAlign = "center";
    
    div.style.color =`hsl(250, 80%, 65%)`;
    document.body.append(div);
    const hue = 130 + (i*15);
    div.style.backgroundColor = `hsl(${hue}, 74%, 77%)`;
    div.style.marginBottom = `${15+ i*3}px`;
    div.style.fontSize = `${i*5+10}px`;
    div.style.fontFamily = "Roboto";
}

//Listorna längst nere på sidan
const array= ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

//Skapa div-element
const div1 = document.createElement("div");
document.body.append(div1);
div1.style.display = "flex";
div1.style.flexDirection = "row";
div1.style.justifyContent = "space-around";
div1.style.border = "1px solid black";
div1.style.width = "100%";

//Addera ul till div-element
const ul1 = document.createElement("ul");
div1.appendChild(ul1);
const ul2 = document.createElement("ul");
div1.appendChild(ul2);
const ul3 = document.createElement("ul");
div1.appendChild(ul3);

//Första listan CSS
ul1.style.padding = "1rem";
ul1.style.display = "flex-inline";
ul1.style.flexDirection = "column";
ul1.style.flexBasis = "4%";
ul1.style.justifyContent = "end";
ul1.style.backgroundColor = `hsl(240, 60%, 80%)`;
ul1.style.listStyleType = "none";


//Andra listan CSS
ul2.style.padding = "1rem";
ul2.style.display = "flex";
ul2.style.flexDirection = "column";
ul2.style.flexBasis = "4%";
ul2.style.justifyContent = "center";
ul2.style.backgroundColor = `hsl(240, 60%, 80%)`;
ul2.style.listStyleType = "none";
ul2.style.marginTop = "1rem";
ul2.style.marginBottom = "1rem";
ul2.style.textAlign = "center";
    
//Tredje listan CSS
ul3.style.padding = "1rem";
ul3.style.display = "flex";
ul3.style.flexDirection = "column";
ul3.style.flexBasis = "4%";
ul3.style.justifyContent = "end";
ul3.style.backgroundColor = `hsl(240, 60%, 80%)`;
ul3.style.listStyleType = "none";
ul3.style.textAlign = "end";

//Första listan
for(j = 0 ; j < array.length; j++){
    const li = document.createElement("li");
    li.innerText = j;
    ul1.appendChild(li);
    
    
       
    if(j %2==0 && j != 4){
        li.style.backgroundColor = "black";
        li.style.color = "white";
    }else if(j == 4){
        li.style.backgroundColor = `hsl(240, 60%, 80%)`;
        li.style.color = "white";
    }else{
        li.style.backgroundColor = "white";
    }
}
//Andra listan
for(j = 9 ; j >= 0; j--){
    const li = document.createElement("li");
    li.innerText = j;
    ul2.appendChild(li);
    
    
    if(j %2==1 && j != 8){
        li.style.backgroundColor = "white";
        li.style.color = "black";
    }else if(j == 8){
        li.style.backgroundColor = `hsl(240, 60%, 80%)`;
        li.style.color = "white";
    }else{
        li.style.backgroundColor = "black";
        li.style.color = "white";
    }
}
//Tredje listan
for(const j of array){
    const li = document.createElement("li");
    li.innerText = j;
    ul3.appendChild(li);
    
    
    if(array.indexOf(j) %2==0){
        li.style.backgroundColor = "black";
        li.style.color = "white";
    }else if(array.indexOf(j)==5){
        li.style.backgroundColor = `hsl(240, 60%, 80%)`;
        li.style.color = "black";
    }else{
        li.style.backgroundColor = "white";
        li.style.color = "black";
    }
}