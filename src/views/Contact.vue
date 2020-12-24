<template>
  <div class="contact">
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="header col-md-12">
            <div class="head-top-wrapper">
              <div class="head_top_right">
                <navbar></navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2>Here is contact page</h2>
    <div class="main">
      <div class="container">
          <!-- <vue-image-slider :images="imageArray" :intervalVal=3000 :height=700 :width=1200 /> -->

      <vue-flux :options="vfOptions" :images="vfImages" :transitions="vfTransitions" ref="slider">
        <!-- <template >
            
        </template> -->
      </vue-flux>
      </div>
    </div>
    

    <!-- <div class="footer">
                <h2>Footer</h2>
            </div> -->
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import {VueFlux} from 'vue-flux';

export default {
  name: 'Contact',
  components: {
    Navbar,
    VueFlux,
  },
  data() {
    return {
      vfOptions: {
         autoplay: true,
         delay: 1000
      },
      vfImages: [ 
        'https://ragnarlotus.github.io/vue-flux-docs/img/slides/59.jpg', 
        'https://images.pexels.com/photos/5478104/pexels-photo-5478104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' ],
      vfTransitions: [ 'slide' ],
    }
  },
  mounted() {

    },

  
}
</script>

<style scoped>

.header {
  background-color: skyblue;
}

.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  width: 100%;
}

.header .container {
  width: 95% !important;
}

.header .container .row {
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-12 {
  width: 100%;
}

.head_top_right {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  /* width: calc(100% - 310px); */
  height: 90px;
  align-items: center;
  text-align: center;
  font-size: 20px;
}


.row {
  display: flex;
  flex-wrap: wrap;
}

.main {
  flex: 100%;
  background-color: white;
  padding: 20px;
}

.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  width: 100%;
}
</style>
