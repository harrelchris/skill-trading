const CACHE_DURATION = 10800 // 3 hours in seconds

class Evepraisal {
  async getPrices() {
    let prices;
    if (this.#cacheIsValid()) {
      prices = this.#loadPrices();
    } else {
      const data = await this.#requestPrices();
      prices = this.#parsePrices(data);
      this.#dumpPrices(prices)
    }
    return prices;
  }

  async #requestPrices() {
    const response = await fetch("https://evepraisal.com/a/16dqs6.json?live=yes&persist=no", {
      method: "GET",
      headers: {
        "User-Agent": "https://github.com/harrelchris/skill-trading"
      }
    });
    return await response.json();
  }

  #parsePrices(data) {
    const prices = {};
    for (let item of data.items) {
      prices[item.name] = {
        buy: item.prices.buy.max,
        sell: item.prices.sell.min
      }
    }
    return prices;
  }

  #dumpPrices(prices) {
    const priceString = JSON.stringify(prices);
    localStorage.setItem("ep", priceString);
    const expiration = this.#secondsNow() + CACHE_DURATION;
    localStorage.setItem("epx", expiration.toString());
  }

  #secondsNow() {
    return Math.floor(Date.now() / 1000);
  }

  #loadPrices() {
    const priceString = localStorage.getItem("ep");
    return JSON.parse(priceString);
  }

  #cacheIsValid() {
    const epxString = localStorage.getItem("epx");
    const epx = Number.parseInt(epxString);
    return epx !== null && epx > this.#secondsNow();
  }
}

export default Evepraisal;
