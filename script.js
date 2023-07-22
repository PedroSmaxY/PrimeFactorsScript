function generateFactors() {
  let value = window.document.querySelector("#txtn");
  let number = Number(value.value);
  let list = window.document.querySelector("div#res ul");
  list.innerHTML = "";
  let prime = 2;

  if (number <= 0 || number > 999999999999) {
    window.alert("ERROR: Impossible value!");
  } else {
    do {
      if (number % prime === 0) {
        number /= prime;
        let item = document.createElement("li");
        item.textContent = `${prime}`;
        list.appendChild(item);
      } else if (prime > 2) {
        prime += 2;
      } else {
        prime++;
      }
    } while (number !== 1);
  }
}
