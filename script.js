function gerar() {
  let valor = window.document.querySelector("#txtn");
  let numero = Number(valor.value);
  let lista = window.document.querySelector("div#res ul");
  lista.innerHTML = "";
  let primo = 2;

  if (numero <= 0 || numero > 999999999999) {
    window.alert("ERRO Valor impossível!");
  } else {
    do {
      if (numero % primo == 0) {
        numero /= primo;
        let item = document.createElement("li");
        item.textContent = `${primo}`;
        lista.appendChild(item);
      } else if (primo > 2) {
        primo += 2;
      } else {
        primo++;
      }
    } while (numero !== 1);
  }
}
