const url = "https://shazam.p.rapidapi.com/search?term=hadise&locale=en-US";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e6a620c577msh2184218a20be38ap1af1b8jsn5656078368db",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export class API {
  async getPopular() {
    // const response = await fetch(url, options);
    // const data = await response.json();
    // const formatted = data.tracks.hits.map((item) => item.track);
    // return formatted;
    const data = await this.searchMusics("tarkan");
    const data1 = await this.searchMusics("gülşen");
    return [...data, ...data1];
  }
  async searchMusics(query) {
    const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US`;
    const response = await fetch(url, options);
    const data = await response.json();
    const formatted = data.tracks.hits.map((item) => item.track);
    return formatted;
  }
}
