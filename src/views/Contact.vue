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
    <div class="main">
      <div class="container">
        <div id="container">
          <div class="row">
            <form>
              <label>Name: </label>
              <input type="text" v-model="name"><br/>
              <label>Last Name: </label>
              <input type="text" v-model="last"><br/>
              <label>Index: </label>
              <input type="text" v-model="index"><br/>
              <label>Grade: </label>
              <select v-model="grade">
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <br><br>
              <button type="button" v-on:click="add()">Add Data</button>
              <br/><br>
              <button type="button" v-on:click="saveFile()">saveFile</button>
            </form>
            <br> <br>
            <table border="1">
              <thead>
              <td>Name</td>
              <td>Last Name</td>
              <td>Index</td>
              <td>Grade</td>
              </thead>
              <tbody>
              <tr v-for="x in arr" :key="x">
                <td>{{ x.first }}</td>
                <td>{{ x.lastn }}</td>
                <td>{{ x.index }}</td>
                <td>{{ x.grade }}</td>
              </tr>
              </tbody>
            </table>

            {{ arr }}
          </div>
        </div>
      </div>
    </div>
    <h2>Here is contact page</h2>

    <!-- <div class="footer">
                <h2>Footer</h2>
            </div> -->
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'Contact',
  components: {
    Navbar
  },
  data() {
    return {
      name: '',
      last: '',
      index: 0,
      grade: 0,
      arr: []
    }
  },
  methods: {
    add: function () {
      this.arr.push({first: this.name, lastn: this.last, index: this.index, grade: this.grade});
      console.log(this.arr);
    },
    saveFile: function () {
      const data = JSON.stringify(this.arr)
      const fs = require('fs');
      fs.writeFileSync("data.json", data);
      // try { fs.writeFileSync('myfile.txt', data, 'utf-8'); }
      // catch(e) { alert('Failed to save the file !'); }

      // window.localStorage.setItem('arr', data);
      // console.log(JSON.parse(window.localStorage.getItem('arr')))

      // document.getElementById("1").innerHTML = data;
      // const blob = new Blob([data], {type: 'text/plain'})
      // const e = document.createEvent('MouseEvents'),
      // a = document.createElement('a');
      // a.download = "test.json";
      // a.href = window.URL.createObjectURL(blob);
      // a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      // e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      // a.dispatchEvent(e);
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
