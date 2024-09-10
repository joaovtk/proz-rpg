let forca = document.querySelector("#forca");
let destreza = document.querySelector("#destreza");
let inteligencia = document.querySelector("#inteligencia");
let nome = document.querySelector("#nome");
let create = document.querySelector("#create");
let classe = document.querySelector("#classe");

create.addEventListener("click", () => {
    forca = Number(forca.value);
    destreza = Number(destreza.value);
    inteligencia = Number(inteligencia.value);

    if((forca + destreza + inteligencia) == 10 && nome.value && classe.value){
        window.location.href = `/game?nome=${nome.value}&classe=${classe.value}&forca=${forca}&destreza=${destreza}&inteligencia=${inteligencia}`;
        console.log(forca, destreza, inteligencia);
    }else {
        alert("Formulario Incorreto");
    }
});