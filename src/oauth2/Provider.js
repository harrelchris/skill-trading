import { v4 as uuid } from 'uuid';

class Provider {
  authorizationEndpoint = "https://login.eveonline.com/v2/oauth/authorize/";
  tokenEndpoint = "https://login.eveonline.com/v2/oauth/token";

  authorize() {
    const state = uuid();
    const queryParams = {
      response_type: "code",
      redirect_uri: process.env.REACT_APP_CALLBACK_URL,
      client_id: process.env.REACT_APP_CLIENT_ID,
      scope: process.env.REACT_APP_SCOPE,
      state: state
    };
    const queryString = new URLSearchParams(queryParams).toString();
    const authorizationURL = `${this.authorizationEndpoint}?${queryString}`
    return [authorizationURL, state];
  }

  async token(code) {
    const payload = {
      grant_type: "authorization_code",
      code: code
    };
    return await this.#requestToken(payload);
  }

  async refresh(refreshToken) {
    const payload = {
      grant_type: "refresh_token",
      refresh_token: refreshToken
    };
    return await this.#requestToken(payload);
  }

  async #requestToken(payload) {
    const authorization = window.btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_SECRET_KEY}`);
    const body = new URLSearchParams(payload).toString();
    const response = await fetch(this.tokenEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${authorization}`,
      },
      body: body
    });
    const jwt = await response.json();
    return this.#parseJWT(jwt)
  }

  #parseJWT(jwt) {
    const [, b64Payload,] = jwt["access_token"].split(".");
    const payloadString = window.atob(b64Payload);
    const payload = JSON.parse(payloadString);
    return {
      accessToken: jwt["access_token"],
      refreshToken: jwt["refresh_token"],
      expiresAt: payload["exp"],
      name: payload["name"],
      id: payload["sub"].split(":")[2]
    };
  }
}

export default Provider;
