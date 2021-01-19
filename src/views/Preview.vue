<template>
  <div class="preview">
<!--    <div class="header">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="header col-md-12">-->
<!--            <div class="head-top-wrapper">-->
<!--              <div class="head_top_right">-->
<!--                <navbar></navbar>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="main">
      <!-- <h2>Here is Preview Page</h2> -->
      <child-preview :database="database"></child-preview>
      <div class="ivr-back-next mt40" v-if="database">
        <a class="save-temp command-to-save edit-url btn ivr-next-link form-btn-lilac-normal">
          <span @click="publish">Publish</span>
        </a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar'
import ChildPreview from './ChildPreview.vue'
// import Footer from "@/components/footer/footer"
import axios from "axios";


export default {
  name: "Preview",
  components: {
    // Navbar,
    ChildPreview,
    // Footer
  },
  data(){
    return{
      database: [],
      // data: ''
    }
  },
  created() {
    this.database = this.$route.params.data
    // this.data = this.$route.params.slide

  },
  mounted() {
    // console.log(this.database.BackgroundColor)
  },
  methods:{
    publish () {
      const raw = this.database;
        const self = this
        const URL = 'http://vuesp.localhost/api/public';
        axios.post(URL, JSON.stringify(raw)
        ).then(response => {
          const status = response.data.success;
          const id = response.data.data.id;
          self.$router.push({name: 'brandName', params: {id : id}})
          // self.GetRaw = response.data.data.raw_json;
          // if (status === true) {
          //   self.$swal.fire({
          //     title: 'Submitted!',
          //     text: 'Your Template has been published!',
          //     icon: 'success',
          //     timer: 5000
          //   })
          //   .then(function () {
          //     self.$router.push({name: 'Template', params: {id : id}})
          //   })
          // }
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
.main {
  flex: 100%;
  background-color: white;
  padding: 20px;
}

.mt40 {
  margin-top: 30px;
}

.ivr-back-next .ivr-next-link {
  /*float: right;*/
  font-style: normal;
  font-weight: 400;
  font-family: "OpenSans";
  color: #29b1e7;
}

.form-btn-lilac-normal {
  background: black none repeat scroll 0 0;
  border: 1px solid black;
  border-radius: 3px;
  color: #fff!important;
  cursor: pointer;
}
/*.header {*/
/*  background-color: skyblue;*/
/*}*/

/*.header .container {*/
/*  width: 95% !important;*/
/*}*/

/*.header .container .row {*/
/*  margin-right: -15px;*/
/*  margin-left: -15px;*/
/*}*/

/*.col-md-12 {*/
/*  width: 100%;*/
/*}*/

/*.head_top_right {*/
/*  position: relative;*/
/*  display: inline-flex;*/
/*  vertical-align: middle;*/
/*  !* width: calc(100% - 310px); *!*/
/*  height: 90px;*/
/*  align-items: center;*/
/*  text-align: center;*/
/*  font-size: 20px;*/
/*}*/


/*.row {*/
/*  display: flex;*/
/*  flex-wrap: wrap;*/
/*}*/
</style>