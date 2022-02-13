import { defineStore } from 'pinia'
import instance from '../axios/index';

export const authStore = defineStore('auth', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,

      modelData: {
        username: '',
        password: '',
        token: ''
      },
      otpPage: false,
      currentUser: null

    }
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
    currentUser(state){
        return state.currentUser;
    },
    modelData(state) {
        return state.modelData;
    }
  },
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },

submitLogin(state, data) {
    var params = {
      username: data.username,
      password: data.password,
    };

    const LOGIN_CREDENTIALS = {
      grant_type: "password",
      client_id: parseInt(process.env.CLIENT_ID),
      client_secret: process.env.CLIENT_SECRET,
      scope: "*"
    };
    Object.assign(params, LOGIN_CREDENTIALS);
    const p = new Promise(function (resolve, reject) {
      return instance
        .post('api/user/login', params)
        .then(response => {
          const token = response.data.token;
          const refresh_token = response.data.token;
          api.defaults.headers.common["Authorization"] =
            "Bearer " + token;
          state.$patch("setAccessToken", {
            token: token,
            refresh_token: refresh_token,
            logintype: 'admin'
          });
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
    return p;
  },

verifyOtpTokenSubmit(state, data) {
    const p = new Promise(function (resolve, reject) {
      return instance
        .post('api/v1/verify-otp-token', data)
        .then(response => {
          const token = response.data.data.token;
          const refresh_token = response.data.token;
          api.defaults.headers.common["Authorization"] =
            "Bearer " + token;
          state.dispatch("setAccessToken", {
            token: token,
            refresh_token: refresh_token,
            logintype: 'consumer'
          });
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
    return p;
  },
  setAccessToken(state, data) {
    api.defaults.headers.common["Authorization"] =
      "Bearer " + data.token;
    LocalStorage.set("access_token", data.token);
    LocalStorage.set("refresh_token", data.refresh_token);
    LocalStorage.set("logintype", data.logintype);
  },

  async fetchProfile() {
    var token = LocalStorage.getItem("access_token");
    if (token) {
      const user = this.currentUser;
      if (user) {
        return {
          status: 200,
          data: {
            data: user
          }
        };
      }
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      return instance.get('api/v1/profile').then(response => {
        this.currentUser = response.data.data;
        return response;
      });
    }
  },

  logout(state) {
  api.post('api/v1/logout').then(response => {
  });
  LocalStorage.remove("access_token");
  LocalStorage.remove("refresh_token");
  window.location.reload("/");
  this.currentUser = null
}

  },








});
