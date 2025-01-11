import { API } from "./api.js";
import { UI } from "./ui.js";

const api = new API();
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.renderLoader();
  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((error) => {
      console.log("Hataaa" + error);
      alert("Şarkılar API dan gelmiyor....");
    });
});

ui.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target[0].value;
  if (query.trim() === "") {
    return alert("Geçerli bir arama işlemi gerçekleştiriniz!!!");
  }
  ui.renderLoader();
  ui.updateTitle(query + " için sonuçlar");
  api
    .searchMusics(query)
    .then((data) => ui.renderCards(data))
    .catch((error) => {
      console.log("Hataaa" + error);
      alert("Şarkılar API dan gelmiyor....");
    });
});

ui.list.addEventListener("click", (e) => {
  // Eğer play classına sahip bir elemana tıklandıysa şarkı çalma işlevini gerçekleştir
  if (e.target.className == "play") {
    // Tıklanılan elemanın kapsamına eriş
    const card = e.target.closest(".card");

    const data = card.dataset;

    console.log(data);

    ui.renderPlayer(data);

    console.log(ui);
  }
});
