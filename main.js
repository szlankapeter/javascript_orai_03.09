window.addEventListener("load", function () {
    kepFeltoltes();
});

function kepFeltoltes() {
    const article = document.querySelector("article");
    const kepLista = ["kep1.jfif", "kep2.jfif", "kep3.jfif", "kep4.jfif", "kep5.jfif", "kep6.jfif", "kep7.jfif", "kep8.jfif"];
    
    for (let i = 0; i < kepLista.length; i++) {
        let img = document.createElement("img");
        img.src = kepLista[i];
        article.appendChild(img);
    }
    const div = document.createElement("div");
    article.appendChild(div);
}