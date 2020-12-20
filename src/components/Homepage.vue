<template>
  <div class="home-page">
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
      <h1 class="page-title">Create VIVR</h1>
      <div class="ivr-padding-top-bottom">
        <div class="middle_center_block template-edit wrapper" style="margin: 0 auto;">
          <div class="container">
            <div id="container">
              <div id="row">
                <div class="col-md-4" id="left">
                  <div class="reset_button">
                    <a href="/">Reset All</a>
                    <!-- <a class="reset-all" data-url="/" href="#">Reset All</a> -->
                  </div>
                  <div class="select_page_button" style="font-size: 20px">
                    <a class="select-page" href="#">Select Page</a>
                  </div>
                  <div class="phone">
                    <div class="phone-top"></div>
                    <div class="phone-middle">
                      <div class="ivr-editor" id="ivr-editor">
                        
                        <div data-toggle="tooltip" data-placement="top" title="Select PageElement"
                             class="ivr-el ivr-page elEditing hover-element" data-type="PageElement"
                             :style="{ 'background-color': RawData.BackgroundColor }">
                             <div v-for="(list, index) in RawData.fields" :key="index">
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
                                  <span class="ivr-el ivr-text elEditing" title="Select Text" data-type="TextElement" style="font-size: 25px" :style="{'color' : list.text.color}">
                                    {{list.text.t}}
                                  </span>
                                </div>
                                
                                <div v-if="list.button">
                                  <div class="ivr-el ivr-button elEditing"
                                      title="Select Button" data-type="ButtonElement" style="height: 50px"
                                      :style="{'background-color' : list.button.color}">
                                    <a :href="list.button.link">
                                    <span class="ivr-el ivr-text elEditing" title="Select Text" data-type="TextElement" style="font-size: 25px" :style="{'color' : list.button.textcolor}">
                                    {{list.button.t}}
                                  </span>
                                  </a>
                                  </div>
                                </div>

                                <div v-if="list.containerdata">
                                    <div v-for="container of list.containerdata" :key="container">
                                      <div class="ivr-el ivr-container"
                                        title="Select Container" data-type="ContainerElement" style="height: 50px;width:50%;float:left"
                                        :style="{'background-color' : container.backgroundcolor}">
                                      <div>
                                        <div v-for="col of container.column" :key="col">
                                          <div class="ivr-el ivr-button"
                                          title="Select Button" data-type="ButtonElement" style="height: 50px"
                                          :style="{'background-color' : col.buttoncolor}">
                                            <a :href="col.link">
                                              <span class="ivr-el ivr-text elEditing" title="Select Text" data-type="TextElement" style="font-size: 25px" :style="{'color' : col.textcolor}">
                                    
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
                                        title="Select Container" data-type="ContainerElement" style="height: 50px;width:33.33%;float:left"
                                        :style="{'background-color' : container.backgroundcolor}">
                                      <div>
                                        <div v-for="col of container.column" :key="col">
                                          <div class="ivr-el ivr-button"
                                          title="Select Button" data-type="ButtonElement" style="height: 50px"
                                          :style="{'background-color' : col.buttoncolor}">
                                            <a :href="col.link">
                                             <span class="ivr-el ivr-text elEditing" title="Select Text" data-type="TextElement" style="font-size: 25px" :style="{'color' : col.textcolor}">
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
                                  <div data-toggle="tooltip" data-placement="top" title="Select Image"
                                    class="ivr-el ivr-image" data-type="ImageElement" style="display:inline-block;width:100%;">
                                  <img data-toggle="tooltip" data-placement="top" title="Select Image"
                                      class="ivr-el ivr-image elEditing" :src="list.image" data-type="ImageElement" @click="selectImage">
                                </div>
                                </div>

                                <div v-if="list.sliderdata">
                                  <div v-for="slider of list.sliderdata" :key="slider">
                                    <div  data-toggle="tooltip" data-placement="top" title="Select Slider"
                                    class="ivr-el ivr-slider" data-type="SliderElement" style="display:inline-block;width:100%;direction:rtl;">
                                      <img data-toggle="tooltip" data-placement="top" title="Select Slider"
                                          class="ivr-el ivr-image elEditing" :src="slider.image" data-type="ImageElement">
                                    </div>
                                  </div>
                                </div>
                               
                               
                             </div>
                        </div>
                      </div>
                    </div>
                    <div class="phone-bottom"></div>
                  </div>
                </div>

                <div class="col-md-8" id="center">
                  <div class="wrap-el-options">
                    <div class="edit-selected-element block TextElement">
                      <div class="edit-selected-element-title block-title border-radius-style no-frame">
                        <span class="ivr-element-title">Page Options</span>
                      </div>
                      <div class="edit-selected-element-body block-body">
                        <div class="edit-selected-element-body-group">
                          <span class="group-title">Add Background Color</span>
                          <div class="edit-Add-Background-Color-Image p15">
                            <div class="background-color">
                              <label class="odLabelInline">Color</label><br>
                              <ColorPickerButton
                                  v-bind:field-name="'alertBackgroundColor'"
                                  v-bind:init-color="colorValue"
                                  v-on:update-color="Background"
                              ></ColorPickerButton>
                            </div>
                            <br>
                            <!--                            <div class="file-upload">-->
                            <!--                              <label>-->
                            <!--                                <input type="file" name="uploadfile" @change="previewImage" accept="image/*">-->
                            <!--&lt;!&ndash;                                <input type="hidden" value="" name="uploadfile"&ndash;&gt;-->
                            <!--&lt;!&ndash;                                       data-attr="backgroundImage" class="backgroundImageEditor">&ndash;&gt;-->
                            <!--                                <span>Browse</span>-->
                            <!--                              </label>-->
                            <!--                            </div>-->
                          </div>
                        </div>
                      </div>
                      <div class="edit-selected-element-bottom block-bottom border-radius-style no-frame">
                        <!--                        <a class="undo" style="margin-top: 9px;float:left">-->
                        <!--                          <span>Undo</span>-->
                        <!--                        </a>-->
                        <div class="threeButtons" style="float:right">
                          <div class="threeButtonsItems">
                            <select v-model="selected">
                              <option value="" selected disabled>Select Options</option>
                              <option v-for="option in options" :value="option.id" :key="option.value">
                                {{ option.value }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!--                      <div class="ivr-back-next mt40">-->
                      <!--                        <a href="/" class="btn ivr-back-link">&lt;&lt; Back</a>-->
                      <!--                        <a href="/preview"-->
                      <!--                           class="save-temp command-to-save edit-url btn ivr-next-link form-btn-lilac-normal">-->
                      <!--                          Save And Continue-->
                      <!--                        </a>-->
                      <!--                      </div>-->
                      <br>
                      <!--text-->
                      <div v-if="selected === 1">
                        <div class="edit-selected-element block TextElement">
                          <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title">Text Options</span>
                          </div>
                          <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">Input Text</span>
                              <div class="edit-Edit-Text p15">
                                <div class="content-text">
                                  <input type="text" v-model="newText" data-attr="content" value=""
                                         class="contentEditor">
                                </div>
                              </div>
                              <div class="edit-selected-element-body-group">
                                <span class="group-title">Font Options</span>
                                <div class="edit-Font-Options p15">
                                  <div class="font-size">
                                    <label class="odLabelInline">Font Size</label>
                                    <input style="width:40px" type="number" min="12" value="14" data-attr="fontSize"
                                           class="fontSizeEditor">
                                    &nbsp;
                                    <label class="odLabelInline">px</label>
                                  </div>
                                  <div class="color">

                                    <div class="edit-Color p15">
                                      <div class="text-color">
                                        <label class="odLabelInline">Text Color</label>
                                        <ColorPickerButton
                                            v-bind:field-name="'alertTextColor'"
                                            v-bind:init-color="templateModel.alertTextColor"
                                            v-on:update-color="UpdatedColor"
                                        ></ColorPickerButton>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- <div class="actions-block block">
                              <div class="actions-selector">
                              </div>

                              <div class="actions-body block-body">
                                <form class="actions-body-form"></form>
                              </div>
                            </div> -->
                            <div class="edit-selected-element-bottom block-bottom border-radius-style no-frame">
                              <a class="undo" style="margin-top: 9px;float:left">
                                <span @click="removeText">Undo</span>
                              </a>
                              <div class="threeButtons" style="float:right">
                                <a class="add-element" data-toggle="tooltip" data-placement="top"
                                   title="Add Selected Element">
                                  <span @click="addText">Add</span>
                                </a>
                                <!--                                <a class="remove-element" data-toggle="tooltip" data-placement="top"-->
                                <!--                                   title="Delete Selected Element" href="#">-->
                                <!--                                  <span>Delete</span>-->
                                <!--                                </a>-->
                              </div>
                            </div>
                            <br>
                          </div>
                        </div>
                        <!--                        <div class="ivr-back-next mt40">-->
                        <!--                          <a href="/" class="btn ivr-back-link">&lt;&lt; Back</a>-->
                        <!--                          <a href="/"-->
                        <!--                             class="save-temp command-to-save edit-url btn ivr-next-link form-btn-lilac-normal">-->
                        <!--                            Save And Continue-->
                        <!--                          </a>-->
                        <!--                        </div>-->
                      </div>
                      <!--slider-->
                      <div v-if="selected === 2">
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
                            <!--                            <div class="actions-block block">-->
                            <!--                              <div class="actions-selector form-group">-->
                            <!--                                <span class="actions-title block-title">Action</span>-->
                            <!--                                <div>-->
                            <!--                                  <select class="el-action" v-model="selectedaction">-->
                            <!--                                    <option value="" selected disabled>not selected</option>-->
                            <!--                                    <option v-for="action in actions" :value="action.id" :key="action.value">-->
                            <!--                                      {{ action.value }}-->
                            <!--                                    </option>-->
                            <!--                                  </select>-->
                            <!--                                </div>-->
                            <!--                              </div>-->

                            <!--                              <div class="actions-body block-body">-->
                            <!--                                <form class="actions-body-form">-->
                            <!--                                </form>-->
                            <!--                              </div>-->
                            <!--                            </div>-->
                            <div class="edit-selected-element-bottom block-bottom border-radius-style no-frame">
                              <a class="undo" href="#" style="margin-top: 9px;float:left">
                                <span>Undo</span>
                              </a>
                              <div class="threeButtons" style="float:right">
                                <a class="remove-element" data-toggle="tooltip" data-placement="top"
                                   title="Delete Selected Element" href="#">
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!--button-->
                      <div v-if="selected === 3">
                        <div class="edit-selected-element block ButtonElement">
                          <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title"> Button Options</span>
                          </div>
                          <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">ButtonColor</span>
                              <div class="edit-Color p15">
                                <div class="background-color">
                                  <label class="odLabelInline">Color</label>
                                  <ColorPickerButton
                                      v-bind:field-name="'alertButtonColor'"
                                      v-bind:init-color="templateModel.alertButtonColor"
                                      v-on:update-color="UpdatedColor"
                                  ></ColorPickerButton>
                                </div>
                              </div>
                            </div>
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">Input Text</span>
                              <div class="edit-Edit-Text p15">
                                <div class="content-text">
                                  <input type="text" v-model="newText" data-attr="content" value=""
                                         class="contentEditor">
                                </div>
                              </div>
                            </div>
                            <div class="edit-Color p15">
                                      <div class="text-color">
                                        <label class="odLabelInline">Text Color</label>
                                        <ColorPickerButton
                                            v-bind:field-name="'alertTextColor'"
                                            v-bind:init-color="templateModel.alertTextColor"
                                            v-on:update-color="UpdatedColor"
                                        ></ColorPickerButton>
                                      </div>
                              </div>
                          </div>
                          <div class="actions-block block">
                            <div class="actions-selector form-group">
                              <span class="actions-title block-title">Action</span>
                              <div>
                                <select class="el-action" v-model="selectedaction">
                                  <option value="" selected disabled>not selected</option>
                                  <option v-for="action in actions" :value="action.id" :key="action.value">
                                    {{ action.value }}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div v-if="selectedaction === 1">
                              <div class="actions-body block-body">
                                <form class="actions-body-form">
                                  <div class="linkEditor" data-action="link">
                                    <br>
                                    <input type="hidden" name="type" value="default">
                                    <input name="link" v-model="newLink" placeholder="Please Type Link" type="text" value="">
                                    <br>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div v-if="selectedaction === 2">
                              <div class="actions-body block-body">
                                <form class="actions-body-form">
                                  <div class="callEditor" data-action="call">
                                    <!--                                    <select name="type" width="200px">-->
                                    <!--                                      <option value="system" selected="selected">Phone call</option>-->
                                    <!--                                      <option value="viber">Viber</option>-->
                                    <!--                                      <option value="whatsapp">Whatsapp</option>-->
                                    <!--                                    </select>-->
                                    <!--                                    <button class="btn question-btn tooltip-btn" style="margin-top:3px">-->
                                    <!--                                      <span class="tooltiptext">Choose call type</span>-->
                                    <!--                                    </button>-->
                                    <!--                                    <br>-->
                                    <br>
                                    <input style="margin-top:10px" name="number" placeholder="Please Type Number"
                                           type="text" value="">
                                    <br>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div class="edit-selected-element-bottom block-bottom border-radius-style no-frame">
                            <a class="undo" style="margin-top: 9px;float:left">
                              <span @click="removeButtonText">Undo</span><br>
                            </a>
                            <div class="threeButtons" style="float:right">
                              <a class="add-element" data-toggle="tooltip" data-placement="top"
                                 title="Add Selected Element">
                                <span @click="addButtontext">Add</span>
                              </a>
                              <!-- <br>
                              <a class="remove-element" data-toggle="tooltip" data-placement="top"
                                 title="Delete Selected Element">
                                <span @click="removeButtonText">Delete</span>
                              </a> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--dropdown-->
                      <!--                      <div v-if="selected === 4">-->

                      <!--                      </div>-->
                      <!--image-->
                      <div v-if="selected === 5">
                        <div class="edit-selected-element block ImageElement">
                          <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title"> Image Options</span>
                          </div>
                          <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">
                                Replace Image
                                <span style="font-size: 15px;color: #6e7b88;float: right;margin-right: 15px;">
<!--                                (Recommended size: 600x400px)-->
                                </span>
                              </span>
                              <div class="edit-Replace-Image p15">
                                <div class="file-upload">
                                  <label>Browse
                                    <!-- <input ref="fileInput" type="file" @input="previewImage"> -->
                                    <input type="file" @change="previewImage" accept="image/*">

                                    <!--                                    <input type="file" name="uploadfile">-->
                                    <!--                                    <input type="hidden" value="" name="uploadfile" data-attr="src" class="srcEditor">-->
                                    <!--                                    <span>Browse</span>-->
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="edit-selected-element-bottom block-bottom border-radius-style no-frame">
                              <a class="undo" style="margin-top: 9px;float:left">
                                <span @click=removepreviewImage>Undo</span>
                              </a>
                              <div class="threeButtons" style="float:right">
                                <a class="remove-element" data-toggle="tooltip" data-placement="top"
                                   title="Delete Selected Element" href="#">
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--ticker-->
                      <div v-if="selected === 6">
                        <div class="edit-selected-element block RunningLineElement">
                          <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title"> Running Line Options</span>
                          </div>
                          <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">Edit Text</span>
                              <div class="edit-Edit-Text p15">
                                <div class="content-text">
                                  <input type="text" v-model="newText" data-attr="content" value="texts.t"
                                         class="contentEditor">
                                </div>
                              </div>
                              <!-- <div class="edit-selected-element-body-group">
                                <span class="group-title">Font Options</span>
                                <div class="edit-Font-Options p15">
                                  <div class="font-size">
                                    <label class="odLabelInline">Font Size</label>
                                    <input style="width:40px" type="number" min="12" value="14" data-attr="fontSize"
                                           class="fontSizeEditor">
                                    &nbsp;
                                    <label class="odLabelInline">px</label>
                                  </div>
                                  <div class="color">

                                    <div class="edit-Color p15">
                                      <div class="text-color">
                                        <label class="odLabelInline">Text Color</label>
                                        <ColorPickerButton
                                            v-bind:field-name="'alertTextColor'"
                                            v-bind:init-color="templateModel.alertMarqueeTextColor"
                                            v-on:update-color="UpdatedColor"
                                        ></ColorPickerButton>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> -->
                            </div>
                          </div>
                          <div class="edit-selected-element-bottom block-bottom border-radius-style no-frame">
                            <a class="undo" style="margin-top: 9px;float:left">
                              <span @click="removeMarqueeText">Undo</span>
                            </a>
                            <div class="threeButtons" style="float:right">
                              <a class="add-element" data-toggle="tooltip" data-placement="top"
                                 title="Add Selected Element">
                                <span @click="addMarqueetexts">Add</span>
                              </a>
                              <!-- <br>
                              <a class="remove-element" data-toggle="tooltip" data-placement="top"
                                 title="Delete Selected Element">
                                <span @click="removeMarqueeText">Delete</span>
                              </a> -->
                            </div>
                          </div>
                        </div>
                      </div>

                      <!--two column container -->
                      <div v-if="selected === 7">
                        <div class="edit-selected-element block ContainerElement">
                          <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title"> Container Options</span>
                          </div>
                          <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">Container Background Color</span>
                              <div class="edit-Color p15">
                                <div class="background-color">
                                  <label class="odLabelInline">Color</label>
                                  <ColorPickerButton
                                      v-bind:field-name="'alertContainerColor'"
                                      v-bind:init-color="templateModel.alertContainerColor"
                                      v-on:update-color="UpdatedColor"
                                  ></ColorPickerButton>
                                </div>
                              </div>
                            </div>
                            <br>
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">Input Text</span>
                              <div class="edit-Edit-Text p15">
                                <div class="content-text">
                                  <input type="text" v-model="newText" data-attr="content" value="" placeholder="Text"
                                         class="contentEditor">
                                </div>
                              </div>
                              <div class="actions-body block-body">
                                <form class="actions-body-form">
                                  <div class="linkEditor" data-action="link">
                                    <br>
                                    <input type="hidden" name="type" value="default">
                                    <input name="link" v-model="newLink" placeholder="Please Type Link" type="text" value="">
                                    <br>
                                  </div>
                                </form>
                              </div>
                              <div class="color">
                                    <div class="edit-Color p15">
                                      <div class="text-color">
                                        <label class="odLabelInline">Text Color</label>
                                        <ColorPickerButton
                                            v-bind:field-name="'alertTextColor'"
                                            v-bind:init-color="templateModel.alertTextColor"
                                            v-on:update-color="UpdatedColor"
                                        ></ColorPickerButton>
                                      </div>
                                      <div class="button-color">
                                        <label class="odLabelInline">Button Color</label>
                                        <ColorPickerButton
                                            v-bind:field-name="'alertButtonColor'"
                                            v-bind:init-color="templateModel.alertButtonColor"
                                            v-on:update-color="UpdatedColor"
                                        ></ColorPickerButton>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                            <!-- <br>
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">Input Text for Column two</span>
                              <div class="edit-Edit-Text p15">
                                <div class="content-text">
                                  <input type="text" v-model="newText" data-attr="content" value="" placeholder="Text"
                                         class="contentEditor">
                                </div>
                              </div>
                              <div class="actions-body block-body">
                                <form class="actions-body-form">
                                  <div class="linkEditor" data-action="link">
                                    <br>
                                    <input type="hidden" name="type" value="default">
                                    <input name="link" v-model="newLink" placeholder="Please Type Link" type="text" value="">
                                    <br>
                                  </div>
                                </form>
                              </div>
                              <div class="color">
                                    <div class="edit-Color p15">
                                      <div class="text-color">
                                        <label class="odLabelInline">Text Color</label>
                                        <ColorPickerButton
                                            v-bind:field-name="'alertTextColor'"
                                            v-bind:init-color="templateModel.alertTextColor"
                                            v-on:update-color="UpdatedColor"
                                        ></ColorPickerButton>
                                      </div>
                                      <div class="button-color">
                                        <label class="odLabelInline">Button Color</label>
                                        <ColorPickerButton
                                            v-bind:field-name="'alertButtonColor'"
                                            v-bind:init-color="templateModel.alertButtonColor"
                                            v-on:update-color="UpdatedColor"
                                        ></ColorPickerButton>
                                      </div>
                                    </div>
                                  </div>
                            </div> -->
                          </div>
                        </div>
                          <div class="edit-selected-element-bottom block-bottom border-radius-style no-frame">
                            <a class="undo" style="margin-top: 9px;float:left">
                              <span >Undo</span><br>
                            </a>
                            <div class="threeButtons" style="float:right">
                              <a class="add-element" data-toggle="tooltip" data-placement="top"
                                 title="Add Selected Element">
                                <span @click="addTwoColContainer">Add</span>
                              </a>
                              <!-- <br>
                              <a class="remove-element" data-toggle="tooltip" data-placement="top"
                                 title="Delete Selected Element">
                                <span @click="removeButtonText">Delete</span>
                              </a> -->
                            </div>
                          </div>
                      </div>

                      <!--three column container -->
                      <div v-if="selected === 8">
                        <div class="edit-selected-element block ContainerElement">
                          <div class="edit-selected-element-title block-title border-radius-style no-frame">
                            <span class="ivr-element-title"> Container Options</span>
                          </div>
                          <div class="edit-selected-element-body block-body">
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">Container Background Color</span>
                              <div class="edit-Color p15">
                                <div class="background-color">
                                  <label class="odLabelInline">Color</label>
                                  <ColorPickerButton
                                      v-bind:field-name="'alertContainerColor'"
                                      v-bind:init-color="templateModel.alertContainerColor"
                                      v-on:update-color="UpdatedColor"
                                  ></ColorPickerButton>
                                </div>
                              </div>
                            </div>
                            <br>
                            <div class="edit-selected-element-body-group">
                              <span class="group-title">Input Text</span>
                              <div class="edit-Edit-Text p15">
                                <div class="content-text">
                                  <input type="text" v-model="newText" data-attr="content" value="" placeholder="Text"
                                         class="contentEditor">
                                </div>
                              </div>
                              <div class="actions-body block-body">
                                <form class="actions-body-form">
                                  <div class="linkEditor" data-action="link">
                                    <br>
                                    <input type="hidden" name="type" value="default">
                                    <input name="link" v-model="newLink" placeholder="Please Type Link" type="text" value="">
                                    <br>
                                  </div>
                                </form>
                              </div>
                              <div class="color">
                                    <div class="edit-Color p15">
                                      <div class="text-color">
                                        <label class="odLabelInline">Text Color</label>
                                        <ColorPickerButton
                                            v-bind:field-name="'alertTextColor'"
                                            v-bind:init-color="templateModel.alertTextColor"
                                            v-on:update-color="UpdatedColor"
                                        ></ColorPickerButton>
                                      </div>
                                      <div class="button-color">
                                        <label class="odLabelInline">Button Color</label>
                                        <ColorPickerButton
                                            v-bind:field-name="'alertButtonColor'"
                                            v-bind:init-color="templateModel.alertButtonColor"
                                            v-on:update-color="UpdatedColor"
                                        ></ColorPickerButton>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                          </div>
                        </div>
                          <div class="edit-selected-element-bottom block-bottom border-radius-style no-frame">
                            <a class="undo" style="margin-top: 9px;float:left">
                              <span >Undo</span><br>
                            </a>
                            <div class="threeButtons" style="float:right">
                              <a class="add-element" data-toggle="tooltip" data-placement="top"
                                 title="Add Selected Element">
                                <span @click="addThreeColContainer">Add</span>
                              </a>
                              <!-- <br>
                              <a class="remove-element" data-toggle="tooltip" data-placement="top"
                                 title="Delete Selected Element">
                                <span @click="removeButtonText">Delete</span>
                              </a> -->
                            </div>
                          </div>
                      </div>



                    </div>

                      
                      

                      <div class="ivr-back-next mt40">
                        <a href="/" class="btn ivr-back-link">&lt;&lt; Back</a>
                        <a
                           class="save-temp command-to-save edit-url btn ivr-next-link form-btn-lilac-normal">
                           <span @click="saveRaw">Save And Continue</span>
                           
                        </a>
                        <!-- <a href="/preview"
                           class="save-temp command-to-save edit-url btn ivr-next-link form-btn-lilac-normal">
                           <span @click="saveRaw">Save And Continue</span>
                           
                        </a> -->
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    

    <!--    <div class="footer">-->
    <!--      <div class="container">-->
    <!--        <div class="footer_block">-->
    <!--          <ul>-->
    <!--            <li class="title"><a href="/#">Services</a></li>-->
    <!--            <li>-->
    <!--              <a href="/#">Create Visual IVR</a>-->
    <!--            </li>-->
    <!--          </ul>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  
</template>

<script>

import Navbar from '@/components/Navbar'
import ColorPickerButton from "@/components/ColorPickerButton";
// import MarqueeText from 'vue-marquee-text-component'
import axios from "axios"

export default {
  name: 'Homepage',
  components: {
    Navbar,
    ColorPickerButton,
    // MarqueeText
  },
  data() {
    return {
      options: [
        {id: 1, value: 'Add Text'},
        {id: 2, value: 'Add Slider'},
        {id: 3, value: 'Add Button'},
        {id: 4, value: 'Add Dropdown'},
        {id: 5, value: 'Add Image'},
        {id: 6, value: 'Add Ticker'},
        {id: 7, value: 'Add Two Column Container'},
        {id: 8, value: 'Add Three Column Container'},
      ],
      actions: [
        {id: 1, value: 'Link'},
        // {id: 2, value: 'Call'},
        // {id: 3, value: 'Navigation'},
        // {id: 4, value: 'ContactSMS'},
        // {id: 5, value: 'ContactForm'},
      ],
      
      selected: null,
      selectedaction: null,
      // texts: [],
      // buttontexts: [],
      // marqueetexts: [],
      newText: null,
      newLink: null,
      Color: "#FFFFFF",
      fields: {
        alertBackgroundColor: "#FFFFFF",
        alertButtonColor: "#FFFFFF",
        alertTextColor: "#FFFFFF",
        alertMarqueeTextColor: "#FFFFFF",
        alertContainerColor: "#FFFFFF",
      },
      templateModel: {
        alertBackgroundColor: "#FFFFFF",
        alertButtonColor: "#FFFFFF",
        alertTextColor: "#FFFFFF",
        alertMarqueeTextColor: "#FFFFFF",
        alertContainerColor: "#FFFFFF",
      },
      newBackgroundColor: [],
      imageData: [],
      sliderData: [],
      currentNumber: 0,
      timer: null,
      RawData: {
        BackgroundColor: '',
        fields: [],
      },
      GetRaw: [],
      
    }
  },
  methods: {
    UpdatedColor(colorValue, fieldName) {
      this.fields[fieldName] = colorValue;
      this.templateModel[fieldName] = colorValue;
      this.newBackgroundColor.push({pagecolour: this.templateModel[fieldName]});
    },
    Background(colorValue){
      this.RawData.BackgroundColor = colorValue;
    },
    addText() {
      if (!this.newText) {
        return;
      }
      // this.texts.push({t: this.newText});
      this.RawData.fields.push({text: {t: this.newText, color: this.templateModel.alertTextColor}});
      this.newText = '';
      // console.log(this.RawData.fields);
      // console.log(this.texts)
      // this.saveTexts();
    },
    addButtontext() {
      if (!this.newText) {
        return;
      }
      // const element = document.getElementById('newtexts');
      // element.innerHTML = this.newText;
      // this.buttontexts.push({t: this.newText});
      this.RawData.fields.push({button: {t: this.newText, color: this.templateModel.alertButtonColor, link: this.newLink, textcolor: this.templateModel.alertTextColor}});
      this.newText = '';
      this.newLink = '';
      // console.log(this.RawData.fields);
      // console.log(this.buttontexts)
      // this.saveTexts();
    },

    addTwoColContainer() {
      
      this.RawData.fields.push(
        {containerdata: [{
          backgroundcolor: this.templateModel.alertContainerColor,
          column: [{
            buttoncolor: this.templateModel.alertButtonColor,
            t: this.newText, 
            link: this.newLink,
            textcolor: this.templateModel.alertTextColor
            }]
          }]
          });
      this.newLink = '';
      this.newText = '';
    },

    addThreeColContainer() {
      
      this.RawData.fields.push(
        {threecontainerdata: [{
          backgroundcolor: this.templateModel.alertContainerColor,
          column: [{
            buttoncolor: this.templateModel.alertButtonColor,
            t: this.newText, 
            link: this.newLink,
            textcolor: this.templateModel.alertTextColor
            }]
          }]
          });
      this.newLink = '';
      this.newText = '';
    },

    addMarqueetexts() {
      if (!this.newText) {
        return;
      }
      // const element = document.getElementById('newtexts');
      // element.innerHTML = this.newText;
      // this.marqueetexts.push({t: this.newText});
      this.RawData.fields.push({marquee: {t: this.newText, color: this.templateModel.alertMarqueeTextColor}});
      this.newText = '';
      // console.log(this.RawData.fields);
      // console.log(this.marqueetexts)
      // this.saveTexts();
    },
    removeText(x) {
      this.texts.splice(x, 1);
      // this.saveTexts();
    },
    removeButtonText(x) {
      this.buttontexts.splice(x, 1);
      // this.saveTexts();
    },
    removeMarqueeText(x) {
      this.marqueetexts.splice(x, 1);
      // this.saveTexts();
    },
    saveRaw() {
      const data = this.RawData;
      const self = this
      const URL = 'http://127.0.0.1:8000/api/backends';
      axios.post(URL, JSON.stringify(data)).then(response => {
        const status = response.data.success;
        self.GetRaw = response.data.data.raw_json;
        console.log(self.GetRaw)
        self.$router.push({name: 'Preview', params: {data : self.GetRaw}})
        // if (status == true) {
        //   self.$swal.fire({
        //     title: 'Submitted!',
        //     text: 'Your Template has been created!',
        //     icon: 'success',
        //     timer: 5000
        //   })
        //   .then(function () {
        //         self.$router.push({name: 'Preview', params: {data : self.GetRaw}})
        //       })
        // }
        console.log(status);
      }).catch(error => {
        console.log(error.response)
        console.log('Submit Fail')
      });
    },
    selectImage () {
          this.$refs.fileInput.click()
      },
    previewImage(e) {
      const image = e.target.files[0];
      // console.log(image)
      const data = new FormData();
      data.append('image', image);
      const URL = 'http://127.0.0.1:8000/api/image';
      axios.post(URL, data,{headers: {"Content-Type": "multipart/form-data"}}).then(response => {
        this.imageData = response.data.path
      }).catch(error => {
        console.log(error.message)
        console.log('Submit Fail')
      });

      this.RawData.fields.push({image: this.imageData});
      // console.log(this.imageData)

      // const input = this.$refs.fileInput;
      // const file = input.files;
      // if (file && file[0]) {
      //   const reader = new FileReader();
      //   reader.onload = (e) => {
      //     this.imageData = e.target.result;
      //     this.RawData.fields.push({image: this.imageData});
      //   }
      //   reader.readAsDataURL(file[0]);
      //   this.$emit('input', file[0]);
      },
      removepreviewImage(x){
      console.log(this.imageData);
      this.imageData.splice(x, 1);
        // this.images.splice(key, 1);

        if(!this.imageData.length){

            this.$refs.im.value = '';
        }
    },
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
  },
  mounted() {

  },
}

</script>

<style lang="scss" scoped>

div.color-picker-outer {
  width: 30px;
  height: 30px;
  display: inline-block;
  background-color: #EEE;
  position: relative;
  top: 19px;
  outline: 3px solid #C9C9C9;
}

.color-picker-inner {
  width: 30px;
  height: 30px;
  position: relative;
  display: inline-block;
}

.vc-chrome {
  position: absolute;
  top: -3px;
  right: 33px;
  z-index: 9;
}

.header {
  background-color: skyblue;
}

.header .container {
  width: 95% !important;
}

.header .container .row {
  margin-right: -15px;
  margin-left: -15px;
}

/*footer {*/
/*  background: #f0f3f6;*/
/*  border-top: 1px solid #b7b7b7;*/
/*  padding-top: 25px;*/
/*}*/

.footer {
  position: fixed;
  padding-top: 5px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: skyblue;
  color: white;
  text-align: center;
}

.footer .container {
  width: 95% !important;
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

.page-title {
  background: #f0f3f6;
  text-align: center;
  font-size: 28px;
  color: #29b1e7;
  padding: 8px 0;
  margin: 0;
}

.ivr-padding-top-bottom {
  padding: 58px 0 100px;
  min-height: 500px;
}

.middle_center_block template-edit wrapper .container {
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.middle_center_block.template-edit.wrapper a {
  font-size: 18px;
}

.reset_button .reset-all, .select_page_button .select-page {
  vertical-align: left;
}

#container {
  min-height: 100% !important;
  width: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
}

.main .row {
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-4 {
  width: 33.33333333%;
  float: left;
}

.reset_button, .select_page_button {
  display: inline-block;
}

.reset_button {
  float: left;
  // text-align: left;
  // margin-left: 30px;
}

.select_page_button {
  float: right;
  // margin-right: 33px;
  // margin-bottom: 5px;
}

.phone {
  position: relative;
  width: 340px;
  clear: right;
}

.phone-top {
  background: skyblue;
  width: 338px;
  height: 258px;
  background-size: cover;
}

.phone-middle {
  background: skyblue;
  width: 338px;
  min-height: 450px;
  background-size: contain;
  height: 450px;
}

[class*=ivr-editor] {
  width: 511px;
  max-width: 511px;
  padding-top: 22px;
  margin: -55px 0 0 32px;
  height: auto;
  transform: scale(0.621, 0.621);
  transform-origin: left top;
}

// .elEditing {
//   outline: 2px solid black;
// }

.ivr-page {
  width: 96%;
  min-height: 30px;
  margin-left: -23px;
  overflow-y: scroll;
  margin-top: -243px;
  padding: 3px;
  height: 940px;
}

.ivr-el {
  position: relative;
  max-width: 100%;
}

.ivr-image {
  vertical-align: middle;
  /* padding: 0 2px; */
}

.ivr-el.ivr-button {
  height: 45px;
  display: inline-block;
  border-radius: 6px;
  font-family: Arial, Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  width: 100%;
  max-width: 100%;
  background-color: #E7E7E7;
}

.ivr-button {
    display: inline-block;
    min-height: 40px;
    height: 1.42em;
    color: #444;
    border: 1px solid #CCC;
    background: #DDD;
    box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
    cursor: pointer;
    /* padding: 5px 2px; */
    text-align: center;
    margin: 1px auto;
}

.ivr-container {
    display: inline-block;
    margin: 0 auto;
    vertical-align: top;
    text-align: center;
    width: 100%;
}

.ivr-text {
  display: inline-block;
  vertical-align: middle;
  /* margin-top: -0.6em; */
  margin-left: 10px;
  margin-right: 10px;
}

.ivr-el.ivr-text {
  color: rgb(179, 9, 49);
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-family: Arial, Arial, Helvetica, sans-serif;
}

.ivr-page > .ivr-text {
  max-width: 75%;
  display: inline-block;
  position: relative;
  /* transform: translate(-0%, -0%); */
}

.phone-bottom {
  background: skyblue;
  width: 338px;
  height: 54px;
  height: 54px;
  background-size: cover;
}

.col-md-8 {
  width: 66.66666667%;
  float: left;
  /* position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px; */
}

.wrap-el-options {
  padding-top: 28px;
}

.ivr-element-title {
  color: #29b1e7;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;
  box-sizing: border-box;
  width: 750px;
  height: 80px;
  border-color: #dddedf;
  background-color: #e0e8f0;
}

.TextElement .ivr-element-title {
  display: inline;
  text-align: center;
}

.ButtonElement .ivr-element-title {
  display: inline;
  text-align: center;
}

.edit-selected-element-title {
  background: #e0e8f0;
  height: 60px;
  line-height: 60px;
  border: 1px solid #dddedf;
  margin: 0;
  width: 100%;
  display: inline-block;
  color: #c350a6;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.edit-selected-element-body {
  width: 100%;
  /* width: 445px; */
  /* max-width: 450px; */
  background: #f0f3f6;
}

.edit-selected-element-body > div {
  padding: 5px 0;
}

.edit-selected-element-body-group {
  background-color: #f0f3f6;
  /*padding: 2%;*/
  border-width: 3px;
  border-left: 1px solid #dddedf;
  border-right: 1px solid #dddedf;
}

.group-title {
  display: block;
  margin-bottom: 12px;
  padding: 10px 0 12px 15px;
  color: #c350a6;
  border-bottom: 1px solid #dddedf;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  /*font-family: "OpenSans", "proxima_nova_rgregular";*/
}

.edit-selected-element-body-group > div {
  display: inline-block;
  width: 100%;
  /*margin: 0 auto;*/
  /*width: 300px;*/
  /*text-align: center;*/
}

.p15 {
  padding: 0 15px;
}

.TextElement .edit-Font-Options {
  padding-bottom: 50px;
}

.TextElement .color, .TextElement .content-text, .TextElement .font-family {
  /* padding-left: 20px; */
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  font-family: "OpenSans";
}

.TextElement .font-family, .TextElement .font-size {
  display: inline-block;
  vertical-align: middle;
  width: 50%;
}

.mb-15 {
  margin-bottom: 15px;
}

.odLabelInline {
  display: inline-block;
  margin-right: 5px;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  font-family: "OpenSans", "proxima_nova_rgregular";
}

[type=number] {
  border-radius: 10px;
  border: 1px solid #9caab7;
  text-align: center;
  width: 90px;
}

.TextElement .color, .TextElement .content-text, .TextElement .font-family {
  /* padding-left: 20px; */
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  font-family: "OpenSans";
}

.TextElement .font-style {
  text-align: right;
}

.TextElement .font-weight {
  text-align: left;
}

.TextElement .font-style label, .TextElement .font-weight label {
  margin: 0 5px;
}

input[type=checkbox] + label {
  display: inline-block;
  padding: 4px 12px;
  /*margin-bottom: 0;*/
  font-size: 14px;
  line-height: 20px;
  color: #333;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
  vertical-align: middle;
  cursor: pointer;
  background-color: #f5f5f5;
  /*background-image: -moz-linear-gradient(top,#fff,#e6e6e6);*/
  /*background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));*/
  /*background-image: -webkit-linear-gradient(top,#fff,#e6e6e6);*/
  /*background-image: -o-linear-gradient(top,#fff,#e6e6e6);*/
  background-image: linear-gradient(to bottom, #fff, #e6e6e6);
  background-repeat: repeat-x;
  border-radius: 5px;
  /*filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#ffe6e6e6',GradientType=0);*/
  /*filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);*/
  /*-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);*/
  /*-moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);*/
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
}

.TextElement .color, .TextElement .font-style, .TextElement .font-weight {
  display: inline-block;
  vertical-align: middle;
  width: 28%;
}

input[type=checkbox] {
  display: none;
}

.PageElement .edit-selected-element-body .background-color {
  display: inline-block;
  vertical-align: middle;
  width: 50%;
}

.PageElement .background-color {
  color: #333333;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  font-family: "OpenSans";
}

.PageElement .background-color {
  margin-bottom: 15px;
}

.odLabelInline {
  display: inline-block;
  margin-right: 5px;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  font-family: "OpenSans", "proxima_nova_rgregular";
}

.block {
  position: relative;
}

.PageElement .edit-selected-element-body .file-upload,
.PageElement .edit-selected-element-body .background-color {
  display: inline-block;
  vertical-align: middle;
  width: 50%;
}

.PageElement .file-upload, .PageElement .background-color {
  margin-bottom: 15px;
}

.file-upload {
  position: relative;
  overflow: hidden;
  /* margin-left: 20px; */
  //vertical-align: middle;
}

.file-upload label {
  width: 160px;
  height: 38px;
  line-height: 38px;
  background: #f1f2f4;
  border-radius: 10px;
  border: 1px solid #9caab7;
  color: #000000;
  text-align: center;
  margin-bottom: 0;
  left: 20px;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  font-family: "OpenSans";
  cursor: pointer;
  background: linear-gradient(#fff, #9dabb8);
}

.file-upload input[type="file"] {
  display: none;
}

input {
  border-radius: 10px;
  border: 1px solid #9caab7;
  height: 32px;
}

.file-upload span {
  line-height: 36px;
}

.block-bottom {
  height: 60px;
  padding: 10px;
  font-family: serif;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 auto;
  background: #e0e8f0;
  border-left: 1px solid #dddedf;
  border-right: 1px solid #dddedf;
  border-bottom: 1px solid #dddedf;
  border-top-left-radius: 0px ! important;
  border-top-right-radius: 0px ! important;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  /* padding-top: 10px; */
}

.edit-selected-element-title.block-title.border-radius-style.no-frame {
  font-family: proxima_nova_rgregular;
}

.ButtonElement .edit-selected-element-body .background-color, .ButtonElement .edit-selected-element-body .height, .ButtonElement .edit-selected-element-body .border-radius, .ButtonElement .edit-selected-element-body .border-color, .ButtonElement .edit-selected-element-body .border-width {
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  font-family: "OpenSans";
}

.ButtonElement .border-radius, .ButtonElement .border-color, .ButtonElement .border-width {
  display: inline-block;
  vertical-align: middle;
  width: 33%;
}

.ButtonElement .actions-block {
  padding: 10px 10px 50px 0;
  border-left: 1px solid #dddedf;
  border-right: 1px solid #dddedf;
  background-color: #f0f3f6;
}

.ImageElement .actions-block {
  padding: 10px 10px 12px 0;
  border-left: 1px solid #dddedf;
  border-right: 1px solid #dddedf;
  background-color: #f0f3f6;
}

.actions-title.block-title {
  display: block;
  margin-bottom: 12px;
  padding: 10px 0 12px 15px;
  color: #c350a6;
  border-bottom: 1px solid #dddedf;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  font-family: "OpenSans", "proxima_nova_rgregular";
}

.actions-block .el-action {
  margin: 5px 10px 5px 15px;
}

.el-action {
  width: 250px;
  height: 32px;
  border: 1px solid #9caab7;
  border-radius: 10px;
  color: #292929;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  font-family: "OpenSans";
  padding-left: 5px;
}

.RunningLineElement .scrollamount {
  padding-left: 17px;
}

.RunningLineElement .scrollamount, .RunningLineElement .direction {
  display: inline-block;
  vertical-align: middle;
  width: 50%;
  font-size: 14px;
}

.checkbox-wrapper-text {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0px;
}

.c-text-top {
  vertical-align: text-top;
}

.checkbox-wrapper {
  position: relative;
  cursor: pointer;
  border: 1px solid red;
  height: 20px;
  width: 20px;
}

.checkbox-wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

input[type=checkbox] {
  display: none;
}

.checkbox-replace {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
}

.border-radius-style.no-frame {
  padding-bottom: 0;
}

.edit-selected-element-bottom.block-bottom.border-radius-style.no-frame a span {
  line-height: 18px;
  border-bottom: 1px solid #b4bec8;
}

.edit-selected-element-bottom.block-bottom.border-radius-style.no-frame a {
  line-height: 16px;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  font-family: "OpenSans";
  text-decoration: none;
  color: #000;
}

.ivr-back-next .ivr-back-link {
  float: left;
  font-style: normal;
  font-weight: 400;
  font-family: "OpenSans";
  color: #29b1e7;
}

.ivr-back-next .ivr-next-link {
  float: right;
  font-style: normal;
  font-weight: 400;
  font-family: "OpenSans";
  color: #29b1e7;
}

</style>