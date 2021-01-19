<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">

        <div class="input">
          <label for="name">Your Name</label>
          <input
              type="text"
              id="name"
              v-model.number="name">
        </div>
        <div class="input">
          <label for="email">Mail</label>
          <input
              type="email"
              id="email"
              v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
              type="password"
              id="password"
              v-model="password">
        </div>
        <div class="input">
          <label for="c-password">Comfirmed Password</label>
          <input
              type="password"
              id="c-password"
              v-model="c_password" required>
        </div>

        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    <Footer/>ooo
  </div>
</template>

<script>
// import router from "@/router";

import Footer from "@/components/footer/footer";
export default {
name: "signup",
  components: {Footer},
  data () {
    return {
      name: '',
      email: '',
      password: '',
      c_password: '',
    }
  },
  methods: {

    onSubmit () {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        c_password: this.c_password,
      }
      console.log(formData)
      this.$store.dispatch('signup', formData)
      // .then(()=> router.push("/create"))
    }
  }
}
</script>

<style scoped>
.signup-form {
  width: 320px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}
.input {
  margin: 10px auto;
}
.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}
.input.inline label {
  display: inline;
}
.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border-radius: 7px;
  border: 1px solid #c3cc;
}
.input.inline input {
  width: auto;
}
.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}
.input select {
  border: 1px solid #ccc;
  font: inherit;
}
.hobbies button {
  border: 1px solid #521751;
  background: #521751;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}
.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}
.hobbies input {
  width: 90%;
}
.submit button {
  border-radius: 18px;
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}
.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;

}
.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>