<template>
  <div class="container">
    <div class="phone">
                    <div class="phone-top"></div>
                    <div class="phone-middle">
                      <div class="ivr-editor" id="ivr-editor">
                        
                        <div data-toggle="tooltip" data-placement="top"
                             class="ivr-el ivr-page elEditing hover-element" data-type="PageElement"
                             :style="{ 'background-color': database.BackgroundColor }" style>
                             <div v-for="(list, index) in database.fields" :key="index">
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
                                    <a :href="list.button.link">
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
                                            <a :href="col.link">
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
                                            <a :href="col.link">
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
                                  
                                    <div  data-toggle="tooltip" data-placement="top"
                                    class="ivr-el ivr-image" data-type="SliderElement">
                                     <!-- <carousel :src="slider.image"></carousel> -->
                                     <!-- <vue-flux :options="vfOptions" :images="list.sliderdata.image" :transitions="vfTransitions" ref="slider">
                                      </vue-flux> -->
                                     <img data-toggle="tooltip" data-placement="top"  style="direction:rtl;"
                                          class="ivr-el ivr-image elEditing" :src="list.sliderdata.image" data-type="ImageElement">

                                     <!-- <carousel>
                                      <slide>
                                        
                                      </slide>
                                    </carousel> -->
                                      
                                    </div>
                                  
                                </div>
                               
                               
                             </div>
                        </div>
                      </div>
                    </div>
                    <div class="phone-bottom"></div>
                  </div>
  </div>
</template>

<script>
// import {VueFlux} from 'vue-flux';

export default {
  name: "ChildPreview",
  components: {
    // VueFlux,
  },
  props: [
    'database',
  ],
  // props: {
  //   database: Object,
  //   images: [String, Object]
  // },
  data() {
    return {
      // vfOptions: {
      //    autoplay: true,
      //    delay: 1000
      // },
      // vfImages: [ 
      //   'https://ragnarlotus.github.io/vue-flux-docs/img/slides/59.jpg', 
      //   'https://images.pexels.com/photos/5478104/pexels-photo-5478104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
      //   'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' 
      //    ],
      // vfTransitions: [ 'slide' ],
    }
    
  },
  mounted() {
    // this.slider = this.database.fields
    //   console.log(this.slider)
  },
  methods: {
  },
  computed: {
    }
  // beforeMount() {
  //     this.child_model = this.model
  // }
}
</script>

<style lang="scss" scoped>

// .ivr-page {
//   width: 96%;
//   min-height: 30px;
//   margin-left: -23px;
//   margin-top: -243px;
//   padding: 3px;
//   height: 940px;
// }

// .ivr-el {
//   position: relative;
//   max-width: 100%;
// }

.ivr-image {
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  /* padding: 0 2px; */
}

</style>