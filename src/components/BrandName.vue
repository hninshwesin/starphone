<template>
<div id="brandName">
  <div class="brandName-form">
    <form @submit.prevent="onSubmit">
      <div class="input">
        <label for="name">Create Your Brand Name</label>
        <input
            type="text"
            id="name"
            v-model="name">
      </div>
      <div class="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>

</div>
</template>

<script>
import axios from "axios";

export default {
name: "BrandName",
  data(){
    return{
      myId: '',
      name: ''
    }
  },
  created() {
    this.myId = this.$route.params.id;
  },
  mounted() {
  console.log(this.myId)
  },
  methods: {
    onSubmit () {
      const formData = {
        brand_name: this.name,
        raw_publics_id: this.myId,
      }
      console.log(formData)
      const self = this
      const URL = 'http://vuesp.localhost/api/brand_name';
      axios.post(URL, formData
      ).then(response => {
        const status = response.data.success;
        if (status === true) {
          self.$swal.fire({
            title: 'Submitted!',
            text: 'Your Template has been published!',
            icon: 'success',
            timer: 5000
          })
          .then(function () {
            self.$router.push({name: 'Template'})
          })
        }
        console.log(status);
      }).catch(error => {
        console.log(error.response)
        console.log('Submit Fail')
      });
    }
  }
}
</script>

<style scoped>
.brandName-form {
  width: 400px;
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
.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  border-radius: 7px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}
.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}
.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
  border-radius: 18px;
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