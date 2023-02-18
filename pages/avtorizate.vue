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
    <a href="" @click.prevent="getUser">user</a>
  </div>
</template>

<script setup>
const authStore = useAuthStore();
const router = useRouter();

definePageMeta({
  middleware: ["auth"],
})



// now you can access localStorage
// if (process.client) {
//   console.log(1)
//   console.log(localStorage.token)
//   console.log(2)
// }


const name = ref("");
const email = ref("");
const password = ref("");

const login = () => {
  if (!email.value || !password.value) {
    alert("Please fill all the field");
  } else {
    const data = {
      email: 'arhipov035@gmail.com',
      password: '12345678',
    };
    authStore.userLogin(data);
    // router.push("/");
  }
};
</script>
