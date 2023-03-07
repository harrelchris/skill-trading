import Client from "../Client";

// TODO: get character id from localstorage
// TODO: cache esi requests in session storage for 5 minutes
// TODO: check session storage for values prior to making api request

const client = new Client();

class ESI {
  attributes(characterID) {
    const endpoint = `/characters/${characterID}/attributes/`;
    return this.#get(endpoint);
  }

  clones(characterID) {
    const endpoint = `/characters/${characterID}/clones/`;
    return this.#get(endpoint);
  }

  implants(characterID) {
    const endpoint = `/characters/${characterID}/implants/`;
    return this.#get(endpoint);
  }

  portraits(characterID) {
    const endpoint = `/characters/${characterID}/portrait/`;
    return this.#get(endpoint);
  }

  skillQueue(characterID) {
    const endpoint = `/characters/${characterID}/skillqueue/`;
    return this.#get(endpoint);
  }

  skills(characterID) {
    const endpoint = `/characters/${characterID}/skills/`;
    return this.#get(endpoint);
  }

  async #get(characterID) {
    const url = this.#buildURL(characterID);
    const accessToken = this.client.accessToken();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${accessToken}`
      }
    });
    return await response.json();
  }

  #buildURL(endpoint) {
    return `https://esi.evetech.net/latest${endpoint}?datasource=tranquility`
  }

  getAccessToken() {
    if (expired) {
      this.#refreshToken()
        .then(() => {})
        .catch((error) => {
          console.error(error);
        })
    } else {

    }
  }

  async #refreshToken() {}

  // async refresh(refreshToken) {
  //   const payload = {
  //     grant_type: "refresh_token",
  //     refresh_token: refreshToken
  //   };
  //   return await this.#requestToken(payload);
  // }
  //
  // async #requestToken(payload) {
  //   const authorization = window.btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_SECRET_KEY}`);
  //   const body = new URLSearchParams(payload).toString();
  //   const response = await fetch(this.tokenEndpoint, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "Authorization": `Basic ${authorization}`,
  //     },
  //     body: body
  //   });
  //   const jwt = await response.json();
  //   return this.#parseJWT(jwt)
  // }
  //
  // #parseJWT(jwt) {
  //   const [, b64Payload,] = jwt["access_token"].split(".");
  //   const payloadString = window.atob(b64Payload);
  //   const payload = JSON.parse(payloadString);
  //   return {
  //     accessToken: jwt["access_token"],
  //     refreshToken: jwt["refresh_token"],
  //     expiresAt: payload["exp"],
  //     name: payload["name"],
  //     id: payload["sub"].split(":")[2]
  //   };
  // }
}
