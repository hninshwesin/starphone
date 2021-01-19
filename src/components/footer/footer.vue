<template>
  <div class="footer">
    <div class="footer_block">
      <ul>
        <li class="title">
          <router-link to="/about">Services</router-link>
        <li>
<!--          <a href="/create">Create Visual IVR</a>-->
          <router-link to="/create">Create</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "footer"
}
</script>

<style scoped>

* {
  cursor: pointer;
}
.footer {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color:skyblue;
  /*padding: 20px;*/
}
.footer_block {
  /*padding-top: 20px;*/
  font-weight: bold;
  color: white;
}
.footer_block a {
  text-decoration: none;
  color: white;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}
li {
  margin: 0 16px;
}
li a {
  text-decoration: none;
  color: black;
}
li a:hover,
li a:active,
li a.router-link-active {
  color: #fa9f;
}
</style>