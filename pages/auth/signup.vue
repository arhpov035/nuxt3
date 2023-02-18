<template>
  <div>
    <div class="container my-10 mx-auto max-w-xl bg-pink-400 rounded-xl">
      <form action="" class="p-5" @submit.prevent="signup">
        <h1 class="text-white text-center text-3xl">Signup Form</h1>
        <div class="my-3">
          <label for="" class="text-md font-semibold"> Enter your name </label>
          <input
            type="text"
            v-model="name"
            class="outline-none w-full py-2 rounded bg-transparent border-b-2 text-white text-lg placeholder-white"
            placeholder="Enter Your Name"
          />
        </div>
        <div class="my-3">
          <label for="" class="text-md font-semibold"> Enter your Email </label>
          <input
            type="email"
            v-model="email"
            class="outline-none w-full py-2 rounded bg-transparent border-b-2 text-white text-lg placeholder-white"
            placeholder="Enter Your Email"
          />
        </div>
        <div class="my-3">
          <label for="" class="text-md font-semibold">
            Enter your Password
          </label>
          <input
            type="password"
            v-model="password"
            class="outline-none w-full py-2 rounded bg-transparent border-b-2 text-white text-lg placeholder-white"
            placeholder="Enter Your Password"
          />
        </div>
        <button
          class="rounded-md border px-10 py-2 bg-pink-800 text-white text-xl text-semibold hover:bg-pink-900"
          type="submit"
        >
          {{ authStore.isloading ? "Signup..." : "Signup" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const authStore = useAuthStore();
const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");

const signup = () => {
  const data = {
    name: "test",
    email: "test",
    password: "test",
  };
  console.log(12);
  console.log(data);
  console.log(34);
  if (!name.value || !email.value || !password.value) {
    alert("Please fill all the field");
  } else {
    // const data = {
    //   name: name.value,
    //   email: email.value,
    //   password: password.value,
    // };
    const data = {
      name: "tesdt",
      email: "tesdt@ya.ru",
      password: "test",
    };
    authStore.userSignup(data);
    router.push("/auth/login");
  }
};
</script>
