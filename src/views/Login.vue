<template>
  <div id="login">
    <div id="heading">
      <h2>Login</h2>
    </div>
    <form @submit="login">
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        required
      />
      <input
        type="text"
        id="password"
        name="password"
        placeholder="Password"
        required
      />
      <input type="submit" id="login" value="Login" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  methods: {
    login: function(){
      localStorage.setItem("token","aaaaaa");
      this.$router.push("/home");
    }
  }
});
</script>

<style scoped>
.login {
  position: relative;
}
#heading{
  padding: 15%;
  padding-bottom: 2%;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
form > input {
  width: 35ch;
  margin: 1ch;
  padding: 1%;
}
</style>

