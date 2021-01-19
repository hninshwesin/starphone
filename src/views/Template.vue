<template>
<div class="template">
  <div class="main">
    <div class="container">
      <h4 class="text-success">Choose Product Name</h4>
        <form class="form-horizontal">
          <div class="panel-body">
            <div class="form-group">
<!--              <label class="control-label col-sm-2">Select Brand Name:</label>-->
              <div class="col-md-12" style="padding: 20px;">
                <select class='form-control' v-model='brand_id' @change='getRaw()'>
                  <option value='0' >Select Brand Name</option>
                  <option v-for='data in brandName' :key="data" :value='data.raw_publics_id'>{{ data.brand_name }}</option>
                </select>
              </div>
            </div>
          </div>
        </form>
    </div>
    <div class="container" v-if="raw">
      <div class="phone">
        <div class="phone-top"></div>
        <div class="phone-middle">
          <div class="ivr-editor" id="ivr-editor">

            <div data-toggle="tooltip" data-placement="top"
                 class="ivr-el ivr-page elEditing hover-element" data-type="PageElement"
                 :style="{ 'background-color': raw.BackgroundColor }" style>
              <div v-for="(list, index) in raw.fields" :key="index">
                <div v-if="list.marquee">
                  <marquee class="ivr-el ivr-running-line elEditing" data-type="RunningLineElement"
                           bgcolor="white" scrolldelay="120" scrollamount="6" :style="{'text-color' : list.marquee.color}">
                    {{list.marquee.t}}
                  </marquee>
                  <!-- <marquee-text class="ivr-el ivr-running-line elEditing" data-type="RunningLineElement" :repeat=1 :color="list.marquee.color">
                   {{list.marquee.t}}
                </marquee-text> -->
                </div>

                <div v-if="list.text">
                                  <span class="ivr-el ivr-text elEditing" data-type="TextElement" style="font-size: 25px" :style="{'color' : list.text.color}">
                                    {{list.text.t}}
                                  </span>
                </div>

                <div v-if="list.button">
                  <div class="ivr-el ivr-button elEditing"
                       data-type="ButtonElement" style="height: 50px;border-radius:6px"
                       :style="{'background-color' : list.button.color}">
                    <a :href="list.button.link" target = "_blank">
                                    <span class="ivr-el ivr-text elEditing" data-type="TextElement" style="font-size: 25px" :style="{'color' : list.button.textcolor}">
                                    {{list.button.t}}
                                  </span>
                    </a>
                  </div>
                </div>

                <div v-if="list.containerdata">
                  <div v-for="container of list.containerdata" :key="container">
                    <div class="ivr-el ivr-container"
                         data-type="ContainerElement" style="height: 50px;width:50%;float:left"
                         :style="{'background-color' : container.backgroundcolor}">
                      <div>
                        <div v-for="col of container.column" :key="col">
                          <div class="ivr-el ivr-button"
                               data-type="ButtonElement" style="height: 50px;border-radius:6px"
                               :style="{'background-color' : col.buttoncolor}">
                            <a :href="col.link" target = "_blank">
                                              <span class="ivr-el ivr-text elEditing" data-type="TextElement" style="font-size: 25px" :style="{'color' : col.textcolor}">

                                              {{col.t}}
                                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="list.threecontainerdata">
                  <div v-for="container of list.threecontainerdata" :key="container">
                    <div class="ivr-el ivr-container"
                         data-type="ContainerElement" style="height: 50px;width:33.33%;float:left"
                         :style="{'background-color' : container.backgroundcolor}">
                      <div>
                        <div v-for="col of container.column" :key="col">
                          <div class="ivr-el ivr-button"
                               data-type="ButtonElement" style="height: 50px;border-radius:6px"
                               :style="{'background-color' : col.buttoncolor}">
                            <a :href="col.link" target = "_blank">
                                             <span class="ivr-el ivr-text elEditing" data-type="TextElement" style="font-size: 25px" :style="{'color' : col.textcolor}">
                                                {{col.t}}
                                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="list.image">
                  <div data-toggle="tooltip" data-placement="top"
                       class="ivr-el ivr-image" data-type="ImageElement">
                    <img data-toggle="tooltip" data-placement="top"
                         class="ivr-el ivr-image elEditing" :src="list.image" data-type="ImageElement">
                  </div>
                </div>

                <div v-if="list.sliderdata">
                  <vue-flux :options="vfOptions" :images="list.sliderdata" :transitions="vfTransitions" ref="slider">
                  </vue-flux>

                </div>


              </div>
            </div>
          </div>
        </div>
        <div class="phone-bottom"></div>
      </div>
    </div>
<!--    <child-template :id = myId></child-template>-->

  </div>
</div>
</template>

<script>
// import ChildTemplate from "@/views/ChildTemplate";
import {VueFlux} from 'vue-flux';

import axios from "axios";
export default {
name: "Template",
  components: {
    // ChildTemplate,
    VueFlux
  },
  data(){
    return{
      raw: [],
      vfOptions: {
        autoplay: true,
        delay: 1000
      },
      vfTransitions: [ 'slide' ],
      brandName: '',
      brand_id: ''
    }
  },
  created() {
    this.getBrandName();
  },
  methods: {
    getBrandName() {
      const URL = 'http://vuesp.localhost/api/brand_name';
      axios.get(URL).then(res => {
            this.brandName = res.data.data;
          }
      ).catch(error => {
        console.log(error.response)
        console.log('Submit Fail')
      });
    },
    getRaw(){
      console.log(this.brand_id)
      const API_URL = 'http://vuesp.localhost';
      const URL = `${API_URL}/api/public/${this.brand_id}`
      console.log(URL)
      axios.get(URL).then(res => {
            this.raw = res.data.data.raw_json;
            console.log(this.raw)
          }
      ).catch(error => {
        console.log(error.response)
        console.log('Submit Fail')
      });
      // axios.get(URL)
      //     .then(function (response) {
      //       console.log(response)
      //     });
    }
  },
  mounted() {
  // console.log(this.myId)
  // const self = this;

  }
}
</script>

<style scoped>
.main {
  flex: 100%;
  background-color: white;
  padding: 20px;
}

.ivr-image {
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  /* padding: 0 2px; */
}
/*.col-sm-5*/
</style>