window.addEventListener("load", init);

function init() {

    szerkezet();

}

function szerkezet() {
    let gomb = document.createElement("button");
    let forma = document.querySelector('formazas');
    let article = document.querySelector("article");
    let div = document.createElement("div");
    let img = document.createElement("img");
    article.appendChild(div);
    div.appendChild(img);
    div.appendChild(gomb);
    gomb.textContent = "Gomb";
    img.src = 'letöltés.jfif';
    gomb.addEventListener('click', () => {
        if(div.classList.contains("formazas")){
            div.classList.remove("formazas")
        }else{
            div.classList.add("formazas");
        }
    });
    img.addEventListener('mouseenter', function(){
        div.classList.add("formazas2");
    })
    img.addEventListener('mouseleave', function(){
        div.classList.remove("formazas2");
    })
}