const API_URL = import.meta.env.VITE_API_URL;

class Country {
  url = API_URL;
  constructor(paths, render) {
    this.paths = paths;
    this.render = render;
  }

  async fetch() {
    if (sessionStorage.getItem("countries")) {
      this.render(JSON.parse(sessionStorage.getItem("countries")));
      return;
    }

    try {
      this.data = await fetch(`${API_URL}${this.paths}`);
      this.data = await this.data.json();
      sessionStorage.setItem("countries", JSON.stringify(this.data));
      this.render(this.data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Country;
