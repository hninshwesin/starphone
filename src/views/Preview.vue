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
      <div >
        <div class="file-upload">
          <label>Browse
             <input type="file" @change="previewSlider" accept="image/*" multiple>
           </label>
         </div>
      </div>

      <div v-for="(list, index) in RawData.fields" :key="index">
        <div v-for="slider of list.sliderdata" :key="slider">
          <div  data-toggle="tooltip" data-placement="top" title="Select Slider"
            class="ivr-el ivr-slider" data-type="SliderElement" style="display:inline-block;width:50%;direction:rtl;">
             <img data-toggle="tooltip" data-placement="top" title="Select Slider"
                class="ivr-el ivr-image elEditing" :src="slider.image" data-type="ImageElement">
            </div>
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
      RawData: {
        fields: [],
      },
    }
  },
  methods:{
    previewSlider: function (e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files);
      // const input = event.target;
      // if (input.files && input.files[0]) {
      //   const reader = new FileReader();
      //   reader.onload = (e) => {
      //     this.sliderData = e.target.result;
      //     console.log(this.sliderData);
      //     this.RawData.fields.push({slider: this.sliderData});
      //   }
      //   reader.readAsDataURL(input.files[0]);
      // }
    },
    createImage(files) {
      var vm = this;
      for (var index = 0; index < files.length; index++) {
        var reader = new FileReader();
        reader.onload = function(event) {
          // const imageUrl = event.target.result;
          // vm.images.push(imageUrl);
          vm.sliderData = event.target.result;
          // let slider = vm.RawData.fields.push({sliderdata: [{}]});
          // slider.push({image: vm.sliderData})
          vm.RawData.fields.push({sliderdata: [{image: vm.sliderData}]});

        //   vm.RawData.fields.push(
        // {sliderdata: [{
        //   image: vm.sliderData
        //   }]
        //   });
        }
        reader.readAsDataURL(files[index]);
      }
    },
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