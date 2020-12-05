<template>
  <div class="preview">
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
    <div class="main">
      <h2>Here is Preview Page</h2>
                        <div class="edit-selected-element block ImageElement">
                          <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Slider Image Options</span>
                          </div>
                          <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">
                                Replace Image
                                <span
                                    style="font-size: 15px;color: #6e7b88;float: right;margin-right: 15px;">
<!--                                  (Recommended size: 600x400px)-->
                                </span>
                              </span>
                              <div class="edit-Replace-Image p15">
                                <div class="file-upload">
                                  <label>Browse
                                    <input type="file" @change="previewSlider" accept="image/*" multiple>
                                  </label>
                                </div>
                              </div>
                            </div>
                        </div>
    </div>

    <div v-for="(list, index) in RawData.fields" :key="index">
        <div v-if="list.slider">
          <transition-group name='fade' tag='div'>
                                    <div
                                     data-toggle="tooltip" data-placement="top" title="Select Slider"
                                    class="ivr-el ivr-slider" data-type="SliderElement" style="display:inline-block;width:100%;direction:rtl;"
                                    >
                                      <img data-toggle="tooltip" data-placement="top" title="Select Slider"
                                      class="ivr-el ivr-image elEditing"
                                          :src="list.slider" data-type="ImageElement"
                                          />
                                  </div>
            </transition-group>

        </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: "Preview",
  components: {
    Navbar,
  },
  data(){
    return{
      sliderData: [],
      currentNumber: 0,
      timer: null,
      RawData: {
        
        fields: [],
      },
    }
  },
  mounted: function () {
        this.startRotation();
    },
  methods:{
    previewSlider: function (e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files);
    },
    createImage(files) {
      var vm = this;
      for (var index = 0; index < files.length; index++) {
        var reader = new FileReader();
        reader.onload = function(event) {
          // const imageUrl = event.target.result;
          // vm.images.push(imageUrl);
          vm.sliderData = event.target.result;
          vm.RawData.fields.push({slider: vm.sliderData});
          console.log(vm.sliderData)
        }
        reader.readAsDataURL(files[index]);
      }
    },
    startRotation: function() {
            this.timer = setInterval(this.next, 3000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
  }
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