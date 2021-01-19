<template>
  <div class="home">
    <div class="main-menu">
      <h2>Home Page</h2>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <Footer/>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <homepage></homepage>-->
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Homepage from '@/components/Homepage'

import Footer from "@/components/footer/footer";
export default {
  name: 'Home',
  components: {
    Footer
    // Homepage
  }
}
</script>
