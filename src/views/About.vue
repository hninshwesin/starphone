<template>
  <div class="about">
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
      <div id="vue-instance">
        <select class="form-control" @change="changeCountry($event)">
          <option value="" selected disabled>Choose</option>
          <option v-for="country in countries" :value="country.code" :key="country.code">{{ country.name }}</option>
        </select>
        <br><br>
        <p><span>Selected country name: {{ selectedCountry }}</span></p>
        <p><span>User country: {{ user.address.country }}</span></p>
      </div>
      <span class="group-title">Input Text :
                              <input v-model="newText"><br><br>
                              <button @click="addText">Add Text</button>
                          </span>
      <div v-for="(text,n) in texts" :key="n">
        <p>
          <span class="text">{{ text }}</span>
          <button @click="removeText(n)">x</button>
          <button @click="saveTexts">save</button>
        </p>
      </div>
    </div>
    <!-- <div class="footer">
            <h2>Footer</h2>
        </div> -->
  </div>
</template>

<script>

// import Navbar from '@/components/Navbar'

export default {
  name: 'About',
  components: {
    // Navbar,
  },
  data() {
    return {
      countries: [
        {code: 'GB', name: 'Great Britain'},
        {code: 'US', name: 'United States'},
        {code: 'KZ', name: 'Kazakhstan'}
      ],
      selectedCountry: null,
      user: {
        address: {
          country: null
        }
      },
      texts: [],
      newText: null,
    }
  },
  methods: {
    changeCountry(event) {
      this.user.address.country = event.target.value
      this.selectedCountry = event.target.options[event.target.options.selectedIndex].text
    },
    addText() {
      if (!this.newText) {
        return;
      }

      this.texts.push(this.newText);
      this.newText = '';
      // this.saveTexts();
    },
    removeText(x) {
      this.texts.splice(x, 1);
      // this.saveTexts();
    },
    saveTexts() {
      const parsed = JSON.stringify(this.texts);
      console.log(parsed)
      localStorage.setItem('texts', parsed);
    }
  },
  mounted() {
    // if (localStorage.getItem('texts')) {
    //   try {
    //     this.texts = JSON.parse(localStorage.getItem('texts'));
    //   } catch (e) {
    //     localStorage.removeItem('texts');
    //   }
    // }
  },
}
</script>

<style scoped>

.about .header {
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

</style>
