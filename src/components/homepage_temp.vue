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
                      <div class="darken">
                      </div>
                      <div class="ivr-editor" id="ivr-editor">
                        <div data-toggle="tooltip" data-placement="top" title="Select PageElement"
                             class="ivr-el ivr-page elEditing hover-element" data-type="PageElement"
                             :style="{ 'background-color': templateModel.alertBackgroundColor }">
                          <marquee-text class="ivr-el ivr-running-line elEditing"
                                        :speed="5" :repeat="1" :duration="10" :interval="2000" data-type="RunningLineElement"
                                        style="background-color:#ffffff;width:100%;font-size:100px;"
                                        v-for="(text,n) in marqueetexts" :key="n">
                            {{ text.t }}
                          </marquee-text>
                          <div>
                            <span title="Select Text"
                                  v-for="(text,n) in texts" :key="n"
                                  style="font-size: 20px" :style="{'color' : templateModel.alertTextColor}">
                              {{ text.t }}
                            </span>
                          </div>
                          <div>
                            <div v-for="(texts,n) in buttontexts" :key="n" class="ivr-el ivr-button elEditing"
                                 data-toggle="tooltip" data-placement="top"
                                 title="Select Button" data-type="ButtonElement" style="height: 50px"
                                 :style="{'background-color' : templateModel.alertButtonColor}">
                              <span data-toggle="tooltip" data-placement="top" title="Select Text"
                                    style="font-size: 20px">
                              {{ texts.t }}
                            </span>
                            </div>
                          </div>

                          <div class="image">
                            <img data-toggle="tooltip" data-placement="top" title="Select Image"
                                 class="ivr-el ivr-image elEditing" :src="imageData" data-type="ImageElement" @click="selectImage">
                          </div>

                          <div data-toggle="tooltip" data-placement="top" title="Select Slider"
                               class="ivr-el ivr-slider" data-type="SliderElement"
                               style="display:inline-block;width:100%;direction:rtl;">
                            <img data-toggle="tooltip" data-placement="top" title="Select Image"
                                 class="ivr-el ivr-image elEditing" :src="sliderData" data-type="ImageElement">
                          </div>
                          <div data-toggle="tooltip" data-placement="top" title="Select Slider"
                               class="ivr-el ivr-slider" data-type="SliderElement"
                               style="display:inline-block;width:100%;direction:rtl;">

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
                                  v-bind:init-color="templateModel.alertBackgroundColor"
                                  v-on:update-color="getUpdatedColor"
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
                                  <!--                                  <div class="font-family mb-15">-->
                                  <!--                                    <label class="odLabelInline">Font Family</label>-->
                                  <!--                                    <select value="text.texts" style="width: 200px" data-attr="fontFamily"-->
                                  <!--                                            class="fontFamilyEditor">-->
                                  <!--                                      <option value="need-to-remove">not selected</option>-->
                                  <!--                                      <option value="Helvetica, sans-serif">Helvetica, sans-serif</option>-->
                                  <!--                                      <option value="Verdana, sans-serif">Verdana, sans-serif</option>-->
                                  <!--                                      <option value="Gill Sans, sans-serif">Gill Sans, sans-serif</option>-->
                                  <!--                                      <option value="Avantgarde, sans-serif">Avantgarde, sans-serif</option>-->
                                  <!--                                      <option value="Helvetica Narrow, sans-serif">Helvetica Narrow, sans-serif</option>-->
                                  <!--                                      <option value="sans-serif">sans-serif</option>-->
                                  <!--                                      <option value="Times, serif">Times, serif</option>-->
                                  <!--                                      <option value="Times New Roman, serif">Times New Roman, serif</option>-->
                                  <!--                                      <option value="Palatino, serif">Palatino, serif</option>-->
                                  <!--                                      <option value="Bookman, serif">Bookman, serif</option>-->
                                  <!--                                      <option value="New Century Schoolbook, serif">New Century Schoolbook, serif-->
                                  <!--                                      </option>-->
                                  <!--                                      <option value="serif">serif</option>-->
                                  <!--                                      <option value="Andale Mono, monospace">Andale Mono, monospace</option>-->
                                  <!--                                      <option value="Courier New, monospace">Courier New, monospace</option>-->
                                  <!--                                      <option value="Courier, monospace">Courier, monospace</option>-->
                                  <!--                                      <option value="Lucidatypewriter, monospace">Lucidatypewriter, monospace</option>-->
                                  <!--                                      <option value="Fixed, monospace">Fixed, monospace</option>-->
                                  <!--                                      <option value="monospace">monospace</option>-->
                                  <!--                                      <option value="Comic Sans, Comic Sans MS, cursive">Comic Sans, Comic Sans MS,-->
                                  <!--                                        cursive-->
                                  <!--                                      </option>-->
                                  <!--                                      <option value="Zapf Chancery, cursive">Zapf Chancery, cursive</option>-->
                                  <!--                                      <option value="Coronetscript, cursive">Coronetscript, cursive</option>-->
                                  <!--                                      <option value="Florence, cursive">Florence, cursive</option>-->
                                  <!--                                      <option value="Parkavenue, cursive">Parkavenue, cursive</option>-->
                                  <!--                                      <option value="cursive">cursive</option>-->
                                  <!--                                      <option value="Impact, fantasy">Impact, fantasy</option>-->
                                  <!--                                      <option value="Arnoldboecklin, fantasy">Arnoldboecklin, fantasy</option>-->
                                  <!--                                      <option value="Oldtown, fantasy">Oldtown, fantasy</option>-->
                                  <!--                                      <option value="Blippo, fantasy">Blippo, fantasy</option>-->
                                  <!--                                      <option value="Brushstroke, fantasy">Brushstroke, fantasy</option>-->
                                  <!--                                      <option value="fantasy">fantasy</option>-->
                                  <!--                                    </select>-->
                                  <!--                                  </div>-->
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
                                    <!-- <input type="text" value="#000" data-attr="color" class="colorEditor"
                                           style="display: none;">
                                    <div class="sp-replacer sp-light">
                                      <div class="sp-preview">
                                        <div class="sp-preview-inner" style="background-color: rgb(0, 0, 0);">
                                        </div>
                                      </div>
                                      <div class="sp-dd">
                                        <span class="glyphicon glyphicon-menu-down"></span>
                                      </div>
                                    </div> -->
                                  </div>
                                  <!--                                  <div class="font-style" data-toggle="tooltip" data-placement="top" title="Italic">-->
                                  <!--                                    <input type="checkbox" id="font-style" value="normal" data-attr="fontStyle"-->
                                  <!--                                           class="fontStyleEditor">-->
                                  <!--                                    <label for="font-style" style="font-style:italic; font-weight:200">-->
                                  <!--                                      T-->
                                  <!--                                    </label>-->
                                  <!--                                  </div>-->
                                  <!--                                  <div class="font-weight" data-toggle="tooltip" data-placement="top" title="Bold">-->
                                  <!--                                    <input type="checkbox" id="font-weight" value="normal" data-attr="fontWeight"-->
                                  <!--                                           class="fontWeightEditor">-->
                                  <!--                                    <label for="font-weight" style="font-weight:bold">-->
                                  <!--                                      T-->
                                  <!--                                    </label>-->
                                  <!--                                  </div>-->
                                </div>
                              </div>
                            </div>
                            <div class="actions-block block">
                              <div class="actions-selector">
                              </div>

                              <div class="actions-body block-body">
                                <form class="actions-body-form"></form>
                              </div>
                            </div>
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
                                    <input type="file" @change="previewSlider" accept="image/*">
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
                              <span class="group-title">Color</span>
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
                                  <input type="text" v-model="newText" data-attr="content" value="texts.t"
                                         class="contentEditor">
                                </div>
                              </div>
                            </div>
                            <!--                            <div class="edit-selected-element-body-group">-->
                            <!--                              <span class="group-title">Size</span>-->
                            <!--                              <div class="edit-Size p15">-->
                            <!--                                <div class="height">-->
                            <!--                                  <label class="odLabelInline">Height</label>-->
                            <!--                                  <input type="number" min="0" value="40" data-attr="height" class="heightEditor">-->
                            <!--                                  &nbsp;-->
                            <!--                                  <label class="odLabelInline">-->
                            <!--                                    px-->
                            <!--                                  </label>-->
                            <!--                                </div>-->
                            <!--                              </div>-->
                            <!--                            </div>-->
                            <!--                            <div class="edit-selected-element-body-group">-->
                            <!--                              <span class="group-title">Border</span>-->
                            <!--                              <div class="edit-Border p15">-->
                            <!--                                <div class="border-radius">-->
                            <!--                                  <label class="odLabelInline">Radius</label>-->
                            <!--                                  <input style="width: 50px" type="number" value="8" data-attr="borderRadius"-->
                            <!--                                         class="borderRadiusEditor">-->
                            <!--                                  &nbsp;-->
                            <!--                                  px-->
                            <!--                                </div>-->
                            <!--                                <div class="border-color">-->
                            <!--                                  <label class="odLabelInline">Color</label>-->
                            <!--                                  <input type="text" value="#000" data-attr="borderColor" class="borderColorEditor"-->
                            <!--                                         style="display: none;">-->
                            <!--                                  <div class="sp-replacer sp-light">-->
                            <!--                                    <div class="sp-preview">-->
                            <!--                                      <div class="sp-preview-inner" style="background-color: rgb(0, 0, 0);">-->

                            <!--                                      </div>-->
                            <!--                                    </div>-->
                            <!--                                    <div class="sp-dd">-->
                            <!--                                      <span class="glyphicon glyphicon-menu-down">-->

                            <!--                                      </span>-->
                            <!--                                    </div>-->
                            <!--                                  </div>-->
                            <!--                                </div>-->
                            <!--                                <div class="border-width">-->
                            <!--                                  <label class="odLabelInline">Width</label>-->
                            <!--                                  <input type="number" style="width: 50px" value="0" data-attr="borderWidth"-->
                            <!--                                         class="borderWidthEditor">-->
                            <!--                                  &nbsp; px-->
                            <!--                                </div>-->
                            <!--                              </div>-->
                            <!--                            </div>-->
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
                                    <input name="link" placeholder="Please Type Link" type="text" value="">
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
                                    <input ref="fileInput" type="file" @input="previewImage">
                                    <!-- <input type="file" @change="previewImage" accept="image/*"> -->

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
                            </div>
                            <!--                            <div class="edit-selected-element-body-group">-->
                            <!--                              <span class="group-title">Edit Speed and Direction</span>-->
                            <!--                              <div class="edit-Edit-Speed-and-Direction p15">-->
                            <!--                                <div class="scrollamount">-->
                            <!--                                  <label class="odLabelInline">Speed </label>-->
                            <!--                                  <input style="width:40px" type="number" min="0" value="1" data-attr="scrollamount"-->
                            <!--                                         class="scrollamountEditor">-->
                            <!--                                  <span style="font-size:17px;margin-left:5px">(The higher, the faster)</span>-->
                            <!--                                </div>-->
                            <!--                                <div class="direction">-->
                            <!--                                  <label class="odLabelInline checkbox-wrapper-text">Left to right</label>-->
                            <!--                                  <label class="checkbox-wrapper c-text-top">-->
                            <!--                                    <input type="checkbox" value="left" data-attr="direction" class="directionEditor">-->
                            <!--                                    <span class="checkbox-replace"></span>-->
                            <!--                                  </label>-->
                            <!--                                </div>-->
                            <!--                              </div>-->
                            <!--                            </div>-->
                            <!--                            <div class="edit-selected-element-body-group">-->
                            <!--                              <span class="group-title">Properties</span>-->
                            <!--                              <div class="edit-Properties p15">-->
                            <!--                                <div class="color">-->
                            <!--                                  <label class="odLabelInline">Text Color</label>-->
                            <!--                                  <input type="text" value="#000" data-attr="color" class="colorEditor"-->
                            <!--                                         style="display: none;">-->
                            <!--                                  <div class="sp-replacer sp-light">-->
                            <!--                                    <div class="sp-preview">-->
                            <!--                                      <div class="sp-preview-inner" style="background-color: rgb(0, 0, 0);">-->
                            <!--                                      </div>-->
                            <!--                                    </div>-->
                            <!--                                    <div class="sp-dd">-->
                            <!--                                      <span class="glyphicon glyphicon-menu-down">-->

                            <!--                                      </span>-->
                            <!--                                    </div>-->
                            <!--                                  </div>-->
                            <!--                                </div>-->
                            <!--                                <div class="font-size mb-15">-->
                            <!--                                  <label class="odLabelInline">Font Size</label>-->
                            <!--                                  <input style="width:40px" type="number" min="12" value="14" data-attr="fontSize"-->
                            <!--                                         class="fontSizeEditor">-->
                            <!--                                  &nbsp;-->
                            <!--                                  <label class="odLabelInline">px</label>-->
                            <!--                                </div>-->
                            <!--                              </div>-->
                            <!--                            </div>-->
                            <!--                            <div class="edit-selected-element-body-group">-->
                            <!--                              <span class="group-title">Background</span>-->
                            <!--                              <div class="edit-Background p15">-->
                            <!--                                <div class="background-color"><label class="odLabelInline">Color</label>-->
                            <!--                                  <input type="text" value="#000" data-attr="backgroundColor"-->
                            <!--                                         class="backgroundColorEditor" style="display: none;">-->
                            <!--                                  <div class="sp-replacer sp-light">-->
                            <!--                                    <div class="sp-preview">-->
                            <!--                                      <div class="sp-preview-inner" style="background-color: rgb(0, 0, 0);"></div>-->
                            <!--                                    </div>-->
                            <!--                                    <div class="sp-dd"><span class="glyphicon glyphicon-menu-down"></span></div>-->
                            <!--                                  </div>-->
                            <!--                                </div>-->
                            <!--                              </div>-->
                            <!--                            </div>-->
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
                      <div class="ivr-back-next mt40">
                        <a href="/" class="btn ivr-back-link">&lt;&lt; Back</a>
                        <a href="/preview"
                           class="save-temp command-to-save edit-url btn ivr-next-link form-btn-lilac-normal">
                          Save And Continue >>
                        </a>
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
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
import ColorPickerButton from "@/components/ColorPickerButton";
import MarqueeText from 'vue-marquee-text-component'
// import axios from "axios"

export default {
  name: 'Homepage',
  components: {
    Navbar,
    ColorPickerButton,
    MarqueeText
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
      ],
      actions: [
        {id: 1, value: 'Link'},
        {id: 2, value: 'Call'},
        // {id: 3, value: 'Navigation'},
        // {id: 4, value: 'ContactSMS'},
        // {id: 5, value: 'ContactForm'},
      ],
      selected: null,
      selectedaction: null,
      texts: [],
      buttontexts: [],
      marqueetexts: [],
      newText: null,
      Color: "#FFFFFF",
      fields: {
        alertBackgroundColor: "#FFFFFF",
        alertButtonColor: "#FFFFFF",
        alertTextColor: "#FFFFFF"
      },
      templateModel: {
        alertBackgroundColor: "#FFFFFF",
        alertButtonColor: "#FFFFFF",
        alertTextColor: "#FFFFFF"

      },
      newBackgroundColor: [],
      imageData: [],
      sliderData: [],
    }
  },
  methods: {
    getUpdatedColor(colorValue, fieldName) {
      this.fields[fieldName] = colorValue;
      this.templateModel[fieldName] = colorValue;
      this.newBackgroundColor.push({pagecolour: this.templateModel[fieldName]});
      console.log(this.newBackgroundColor)
    },
    UpdatedColor(colorValue, fieldName) {
      this.fields[fieldName] = colorValue;
      this.templateModel[fieldName] = colorValue;
      this.newBackgroundColor.push({pagecolour: this.templateModel[fieldName]});
      console.log(this.newBackgroundColor)
    },
    addText() {
      if (!this.newText) {
        return;
      }
      this.texts.push({t: this.newText});
      this.newText = '';
      console.log(this.texts)
      this.saveTexts();
    },
    addButtontext() {
      if (!this.newText) {
        return;
      }
      // const element = document.getElementById('newtexts');
      // element.innerHTML = this.newText;
      this.buttontexts.push({t: this.newText});
      this.newText = '';
      console.log(this.buttontexts)
      this.saveTexts();
    },
    addMarqueetexts() {
      if (!this.newText) {
        return;
      }
      // const element = document.getElementById('newtexts');
      // element.innerHTML = this.newText;
      this.marqueetexts.push({t: this.newText});
      this.newText = '';
      console.log(this.marqueetexts)
      this.saveTexts();
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
    saveTexts() {
      // const data = this.texts;
      // const URL = 'http://127.0.0.1:8000/api/backends';
      // axios.post(URL, JSON.stringify(data)).then(response => {
      //   // const status = response.data.success;
      //   console.log(response)
      //   console.log('Submit Success')
      // }).catch(error => {
      //   console.log(error.response)
      //   console.log('Submit Fail')
      // });
    },
    
    selectImage () {
          this.$refs.fileInput.click()
      },
    previewImage() {
      const input = this.$refs.fileInput;
      const file = input.files;
      if (file && file[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        }
        reader.readAsDataURL(file[0]);
        this.$emit('input', file[0]);
      }
    },
    removepreviewImage(x){
      console.log(this.imageData);
      this.imageData.splice(x, 1);
        // this.images.splice(key, 1);

        if(!this.imageData.length){

            this.$refs.im.value = '';
        }
    },
    // previewSlider: function (event) {
    //   const input = event.target;
    //   if (input.files && input.files[0]) {
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //       this.sliderData = e.target.result;
    //     }
    //     reader.readAsDataURL(input.files[0]);
    //   }
    // },
    
    // previewSlider: function (e) {
    //   var files = e.target.files || e.dataTransfer.files;
    //   if (!files.length)
    //     return;
    //   this.createImage(files);
    //   // const input = event.target;
    //   // if (input.files && input.files[0]) {
    //   //   const reader = new FileReader();
    //   //   reader.onload = (e) => {
    //   //     this.sliderData = e.target.result;
    //   //     console.log(this.sliderData);
    //   //     this.RawData.fields.push({slider: this.sliderData});
    //   //   }
    //   //   reader.readAsDataURL(input.files[0]);
    //   // }
    // },

    // createImage(files) {
    //   var vm = this;
    //   for (var index = 0; index < files.length; index++) {
    //     var reader = new FileReader();
    //     reader.onload = function(event) {
    //       // const imageUrl = event.target.result;
    //       // vm.images.push(imageUrl);
    //       vm.sliderData = event.target.result;
    //       // let slider = vm.RawData.fields.push({sliderdata: [{}]});
    //       // slider.push({image: vm.sliderData})
    //       // vm.RawData.fields.push({sliderdata: [{image: vm.sliderData}]});
    //       vm.RawData.fields.push({sliderdata: {image: vm.sliderData}});
    //
    //
    //     //   vm.RawData.fields.push(
    //     // {sliderdata: [{
    //     //   image: vm.sliderData
    //     //   }]
    //     //   });
    //     }
    //     reader.readAsDataURL(files[index]);
    //   }
    // },
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

.ivr-text {
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


                            