class Client {
  failureRedirectPath = "/";
  loginPath = "/auth/login";
  loginRedirectPath = "/dashboard";
  logoutRedirectPath = "/";
  storage = localStorage;

  constructor(
    failureRedirectPath = "/",
    loginPath = "/auth/login",
    loginRedirectPath = "/dashboard",
    logoutRedirectPath = "/",
    storage = localStorage
  ) {
    this.failureRedirectPath = failureRedirectPath;
    this.loginPath = loginPath;
    this.loginRedirectPath = loginRedirectPath;
    this.logoutRedirectPath = logoutRedirectPath;
    this.storage = storage;
  }

  /**
   * Validate the callback request received from the provider.
   *
   * @param code {string} authorization code
   * @param state {string} received state value that must match the state value sent to the provider
   * @returns {string} redirect path, either this.loginPath or this.failureRedirectPath
   */
  callback(code, state) {
    if (code != null) {
      if (state === this.storage.getItem("state")) {
        this.storage.removeItem("state");
        this.storage.setItem("code", code);
        return this.loginPath;
      } else {
        console.error("Received invalid state. Please try again.");
        this.storage.removeItem("state");
        return this.failureRedirectPath;
      }
    } else {
      console.error("Did not receive valid authorization code. Please try again.");
      this.storage.removeItem("state");
      return this.failureRedirectPath;
    }
  }

  /**
   * Store values received in token
   *
   * @param token {Object} values parsed from token received from provider
   * @returns {string} loginRedirectPath
   */
  login(token) {
    this.storage.removeItem("code");
    for (let key in token) {
      this.storage.setItem(key, token[key]);
    }
    return this.loginRedirectPath
  }

  /**
   * Clear stored values and return redirect path
   *
   * @returns {string} logoutRedirectPath
   */
  logout() {
    this.storage.clear();
    return this.logoutRedirectPath;
  }

  /**
   * Verify required token values are currently stored
   *
   * @returns {boolean} if the user is currently authenticated
   */
  isAuthenticated() {
    return (
      this.storage.getItem("accessToken") != null &&
      this.storage.getItem("refreshToken") != null &&
      this.storage.getItem("name") != null &&
      this.storage.getItem("id") != null
    );
  }
}

export default Client;
