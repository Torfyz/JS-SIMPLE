const inLista = document.querySelector("#indice");
const formButton = document.querySelector("#botao");
const lista = document.querySelector("#lista");
const alerta = document.querySelector("#alert")

formButton.addEventListener("click", (e) => {
  e.preventDefault;

  const indiceList = inLista.value;

  if (indiceList === "") {
    const h1 = document.createElement("h1");
    h1.innerHTML = "PREENCHA COM ALGUMA COISA VAGABUNDO";

    alerta.appendChild(h1);
    alerta.className = "inlista lista";

    alerta.style.background = "red";
    alerta.style.color = "white";
    inLista.value = "";

    setTimeout(()=>{
        h1.innerHTML = "";
        alerta.className = "";
        div.style.background = "transparent";

    }, 3000)
  } else {
    const h1 = document.createElement("h1");
    h1.innerHTML = `# >${indiceList}`;

    const div = document.createElement("div");
    div.appendChild(h1);
    div.className = "inlista";

    lista.appendChild(div);
    lista.className = "lista";

    const botao = document.createElement("button")
    botao.innerHTML = "DELETAR"
    botao.className = "botao"
    botao.id = "del"
    div.appendChild(botao)

    botao.addEventListener("click", (r)=>{
        r.preventDefault

        h1.innerHTML = "";
        lista.className = "";
        div.className = ""
        botao.innerHTML = ""
        botao.className = ""
        botao.id = ""
        botao.remove()
        div.remove()
    })

    inLista.value = "";
  }
});
