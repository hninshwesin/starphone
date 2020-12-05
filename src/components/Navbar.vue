<template>
<div>
  <ul class="nav-menu">
    <li class="menu-item dropdown">
      <router-link to="/">Home</router-link>
    </li>
    <li class="menu-item dropdown">
      <router-link to="/about">About</router-link>
    </li>
    <li class="menu-item dropdown">
      <router-link to="/contact">Contact</router-link>
    </li>
<!--    <li class="menu-item dropdown">-->
<!--      <router-link to="/preview">Preview</router-link>-->
<!--    </li>-->
  </ul>
</div>
  <!-- <div class="pure-menu pure-menu-horizontal">
    <div class="container">
      <router-link to="/" class="pure-menu-heading pure-menu-link"
        >Home</router-link
      >
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link class="pure-menu-link" to="/about">About</router-link>
        </li>
      </ul> -->
      <!-- <a href="/" class="pure-menu-link">Contact</a> -->
        <!-- <li class="pure-menu-item">
          <router-link class="pure-menu-link" to="/contact">Contact</router-link>
        </li>
    </div>
  </div> -->
</template>

<script>
  export default {
    name: "Navbar"
  };
</script>

<style scoped>
  
  .onlineDesignerPro .nav-menu {
    text-transform: uppercase;
    display: table;
    margin-top: 5px;
    margin-bottom: 0;
    width: 100%;
    padding-left: 0!important;
    padding-right: 0!important;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.menu-item {
    display: inline-block;
    height: 30px;
    margin-right: 11px;
    text-align: center;
}

li.menu-item {
    position: relative;
}

a {
  color:white;
}
</style>