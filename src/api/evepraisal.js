class Evepraisal {
  endpoint = "http://evepraisal.com/a/16dd90.json?live=yes&persist=no";

  constructor() {}

  async #fetchPrices() {
    const response = await fetch(this.endpoint, {
      method: "GET",
      headers: {
        "User-Agent": "https://github.com/harrelchris/skill-trading"
      }
    });
    return await response.json();
  }
}