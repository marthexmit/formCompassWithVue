import router from "@/router";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    email: "",
    password: "",
    phone: "",
    date: "",
    checkbox: "",
    button: "",
    submit: "",
  },
  getters: {},
  mutations: {
    /*LOGICA NOME*/

    setName(state, name) {
      state.name = name;
      var btn = document.querySelector("#action-btn");
      var x = true;
      var y = false;
      function errorname() {
        var errorname = document.getElementById("validation-name");
        errorname.style.display = "block";
      }

      function ocultname() {
        var ocultname = document.getElementById("validation-name");
        ocultname.style.display = "none";
      }

      function valida(name) {
        return !!name.match(
          /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/
        );
      }

      btn.addEventListener("click", function nameclick() {
        if (valida(name) == true) {
          state.name = x;
          ocultname();
        } else {
          state.name = y;
          errorname();
        }
      });
    },

    /*LOGICA E-MAIL*/
    setEmail(state, email) {
      state.email = email;
      var btn = document.querySelector("#action-btn");
      var x = true;
      var y = false;
      function erroremail() {
        var erroremail = document.getElementById("validation-email");
        erroremail.style.display = "block";
      }

      function ocultemail() {
        var ocultemail = document.getElementById("validation-email");
        ocultemail.style.display = "none";
      }

      function valida(email) {
        return !!email.match(
          /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/
        );
      }

      btn.addEventListener("click", function emailclick() {
        if (valida(email) == true) {
          state.email = x;
          ocultemail();
        } else {
          state.email = y;
          erroremail();
        }
      });
    },

    /*LOGICA SENHA*/
    setPassword(state, password) {
      state.password = password;
      var btn = document.querySelector("#action-btn");
      var x = true;
      var y = false;
      function errorpassword() {
        var errorpassword = document.getElementById("validation-password");
        errorpassword.style.display = "block";
      }

      function ocultpassword() {
        var ocultpassword = document.getElementById("validation-password");
        ocultpassword.style.display = "none";
      }

      function valida(password) {
        return !!password.match(/^[6-9]*$/);
      }
      btn.addEventListener("click", function passwordclick() {
        if (valida(password) == true) {
          state.password = x;
          ocultpassword();
        } else {
          state.password = y;
          errorpassword();
        }
      });
    },
    /*LOGICA TELEFONE*/
    setPhone(state, phone) {
      state.phone = phone;
      var btn = document.querySelector("#action-btn");
      var x = true;
      var y = false;
      function errorphone() {
        var errorphone = document.getElementById("validation-phone");
        y;
        errorphone.style.display = "block";
      }

      function ocultphone() {
        var ocultphone = document.getElementById("validation-phone");
        x;
        ocultphone.style.display = "none";
      }

      btn.addEventListener("click", function phoneclick() {
        if (state.phone.length < 15) {
          errorphone();
        } else {
          ocultphone();
        }
      });
    },

    setDate(state, date) {
      state.date = date;
      var btn = document.querySelector("#action-btn");
      var x = true;
      var y = false;
      const dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear();
      var input = document.querySelector('input[type="date"]');
      var inputDate = input.value;
      var subDate = inputDate.slice(-10, -6);
      var intDate = parseInt(subDate);

      function errorbirthday() {
        var errorbirthday = document.getElementById("validation-birthday");
        y;
        errorbirthday.style.display = "block";
      }

      function ocultbirthday() {
        var ocultbirthday = document.getElementById("validation-birthday");
        x;
        ocultbirthday.style.display = "none";
      }

      btn.addEventListener("click", function birthdayclick() {
        if (intDate <= anoAtual - 121 || inputDate == "") {
          errorbirthday();
        } else {
          ocultbirthday();
        }
      });
    },
    /*LOGICA CHECKBOX*/
    setCheckbox(state, checkbox) {
      state.checkbox = checkbox;
      var btn = document.querySelector("#action-btn");
      var x = true;
      var y = false;
      function errorcheckbox() {
        var errorcheckbox = document.getElementById("validation-checkbox");
        errorcheckbox.style.display = "block";
      }

      function ocultcheckbox() {
        var ocultcheckbox = document.getElementById("validation-checkbox");
        ocultcheckbox.style.display = "none";
      }

      btn.addEventListener("click", function checkboxclick() {
        var checkbox = document.querySelector("#checkbox");
        if (checkbox.checked == true) {
          state.checkbox = x;
          ocultcheckbox();
        } else {
          state.checkbox = y;
          errorcheckbox();
        }
      });
    },
    /*LOGICA BOTÃO*/
    setButton(state, button) {
      state.button = button;
      var btn = document.querySelector(".btn-register");
      var input = document.querySelector('input[type="date"]');
      function ocultphone() {
        var x = true;
        var ocultphone = document.getElementById("validation-phone");
        x == true
          ? (ocultphone.style.display = "none")
          : (ocultphone.style.display = "block");
      }
      function ocultbirthday() {
        var x = true;
        var ocultbirthday = document.getElementById("validation-birthday");
        x == true
          ? (ocultbirthday.style.display = "none")
          : (ocultbirthday.style.display = "block");
      }
      btn.addEventListener("click", function () {
        let user = JSON.parse(localStorage.getItem("user") || "[]");

        user.push({
          nome: state.name,
          email: state.email,
          phone: state.phone,
          password: state.password,
          age: input.value,
          check: state.checkbox,
        });
        localStorage.setItem("user", JSON.stringify(user));
        
      });
      btn.addEventListener("click", function buttonClick() {
        if (
          state.name == true &&
          state.checkbox == true &&
          state.email == true &&
          state.password == true &&
          ocultphone &&
          ocultbirthday &&
          state.checkbox == true
        ) {
          router.push("/sucess");
        } 
      });
      /*Outro Botão*/
      var errorname = document.getElementById("validation-name");
      var errorphone = document.getElementById("validation-phone");
      var errorbirthday = document.getElementById("validation-birthday");
      var inpu = document.querySelector('input[type="date"]');
      var inputDate = inpu.value;
      var erroremail = document.getElementById("validation-email");
      var errorpassword = document.getElementById("validation-password");
      btn.addEventListener("click", function NovoClick() {
        if (state.name == "" && state.phone == "" && inputDate == "" && state.email == "" && state.password == "") {
          erroremail.style.display = "block";
          errorpassword.style.display = "block";
            errorbirthday.style.display = "block";
            errorphone.style.display = "block";
            errorname.style.display = "block";
          }
        });
    },
  },
  actions: {
    setName({ commit }, name) {
      commit("setName", name);
    },
    setEmail({ commit }, email) {
      commit("setEmail", email);
    },
    setPassword({ commit }, password) {
      commit("setPassword", password);
    },
    setPhone({ commit }, phone) {
      commit("setPhone", phone);
    },
    setDate({ commit }, date) {
      commit("setDate", date);
    },
    setCheckbox({ commit }, checkbox) {
      commit("setCheckbox", checkbox);
    },
    setButton({ commit }, button) {
      commit("setButton", button);
    },
  },
  modules: {},
});
