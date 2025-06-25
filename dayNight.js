let but = document.querySelector('button');
let a = document.querySelector('body');

but.addEventListener('click', function() {
    if(but.textContent === "😎"){
        but.textContent = "🌙";
        a.style.backgroundColor = "black";
        a.style.color = "white";
    }else{
        but.textContent = "😎";
        a.style.backgroundColor = "yellow";
        a.style.color = "darkblue";
    }
})