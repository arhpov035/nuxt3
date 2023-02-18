<template>
  <div>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" />
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>
    <a href="" @click.prevent="getUser">user</a><br>
    <a href="" @click.prevent="logout">user</a><br>
  </div>
</template>

<script setup>
const authStore = useAuthStore();
const router = useRouter();



const name = ref("");
const email = ref("");
const password = ref("");
const login = () => {
  const formData = {
    email: "a@a.ru",
    password: "a",
  };
  authStore.userLogin(formData);
  // if (!email.value || !password.value) {
  //   alert("Please fill all the field");
  // } else {
  //   const data = {
  //     email: email.value,
  //     password: password.value,
  //   };
  //   auth.userLogin(data);
  //   router.push("/");
  // }
};

const getUser = async () => {
  authStore.getUser();
};
const logout = async () => {
  authStore.userLogout();
};
</script>


<script>
export default {
  middleware: ["guest"],
};
</script>