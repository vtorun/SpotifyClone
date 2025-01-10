export class UI {
  constructor() {
    this.list = document.querySelector(".list");
    this.form = document.querySelector("form");
    this.title = document.querySelector("#title");
  }

  renderCards(songs) {
    this.list.innerHTML = "";
    songs.forEach((song) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<div class="card">
                <figure>
                  <img
                    src="${song.images.coverarthq}"
                    alt=""
                  />
                  <div class="play">
                    <i class="bi bi-play-fill"></i>
                  </div>
                </figure>
            
                <div class="card-info">
                  <h4>${this.sliceText(song.title)}</h4>
                  <h4>${song.subtitle}</h4>
                </div>
              </div>`;
      this.list.appendChild(card);
    });
  }
  renderLoader() {
    this.list.innerHTML = ` 
  <div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>  
  </div>`;
  }
  updateTitle(text) {
    this.title.textContent = text;
  }
  sliceText(text){
    if (text.length>16) {
        return text.slice(0,16)+"..."  
    }
    return text;
  }
}
