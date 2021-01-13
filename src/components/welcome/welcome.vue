<template>
  <div id="welcome">
    <h1>Learning Vue Authentication</h1>
    <p>Here you go!</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signIn">Sign In</router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "welcome"
}
</script>

<style scoped>

</style>