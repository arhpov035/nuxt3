export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    console.log("midl");
    console.log(localStorage.token);
    console.log("wqr");
    if (localStorage.token) {
      return navigateTo("/auth/login");
    }
  }
});
