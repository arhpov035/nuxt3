import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
export const useAuthStore = defineStore("authStore", () => {
  const token = ref("");
  const isloading = ref(false);
  const user = ref({});

  const userSignup = async (data) => {
    isloading.value = true;

    const res = await fetch("https://api.tortam.ru/api/v1/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("regi");
    console.log(res);
    console.log("res");
    const output = await res.json();
    if (output.success) {
      isloading.value = false;
      alert(output.remember_token);
      data.name = "";
      data.email = "";
      data.password = "";
    } else {
      isloading.value = false;
      alert(output.remember_token);
    }
  };

  // getter
  // const getToken = computed(() => (token.value = localStorage.token));

  const userLogin = async (data) => {
    isloading.value = true;

    const res = await fetch("https://api.tortam.ru/api/v1/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const output = await res.json();

    console.log(output);

    if (output.token) {
      localStorage.token = output.token;
      token.value = output.token;
      alert(output.token);
      isloading.value = false;
    } else {
      isloading.value = false;

      alert(output.token);
    }
  };

  const getUser = async (data) => {
    isloading.value = true;
    const res = await fetch("https://api.tortam.ru/api/v1/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
      },
    });
    const output = await res.json();
    console.log(output);
    isloading.value = false;
    user.value = output.user;
  };
  const userLogout = (data) => {
    token.value = "";
    user.value = "";
    // localStorage.token = token.value;
    localStorage.removeItem("token");
  };
  if (process.client) {
    if (localStorage.token) {
      token.value = localStorage.token;
    }
  }

  return {
    token,
    isloading,
    user,
    // getToken,
    userSignup,
    userLogin,
    getUser,
    userLogout,
  };
});
