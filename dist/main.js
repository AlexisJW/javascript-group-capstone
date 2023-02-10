/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/addComments.js":
/*!********************************!*\
  !*** ./modules/addComments.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _showComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showComments.js */ "./modules/showComments.js");


const addComments = async (itemId) => {
  const user = document.querySelector('#username');
  const comment = document.querySelector('#comment');
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/comments', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username: user.value,
      comment: comment.value,
    }),
  })
    .then(() => {
      (0,_showComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(itemId);
      user.value = '';
      comment.value = '';
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComments);

/***/ }),

/***/ "./modules/addLikes.js":
/*!*****************************!*\
  !*** ./modules/addLikes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ "./modules/getLikes.js");


// Add like using Involvement API
const addLike = async (id) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  }).then(() => {
    (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);

/***/ }),

/***/ "./modules/fetchApiTv.js":
/*!*******************************!*\
  !*** ./modules/fetchApiTv.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _totalComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./totalComments.js */ "./modules/totalComments.js");


// fetch the tv API and Populate.
const populate = async () => {
  const cardsContainer = document.querySelector('#cards-container');
  const requestURL = 'https://api.tvmaze.com/shows';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const resultObj = await response.json();
  cardsContainer.innerHTML = '';
  let noComments = 0;
  resultObj.forEach(async (obj, index) => {
    noComments = await (0,_totalComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(index) || 0;
    cardsContainer.innerHTML += `
        <div class="shadow-card" index=${index}>
          <div class="container-item">
            <img src="${obj.image.medium}" alt="Avatar" style="width:100%">
              <div class="container">
              <h4><b> ${obj.name} </b></h4>
              <button style="font-size:14px" id="like-${obj.id}" class="like" type="button"> 0 <i class="fa fa-heart-o"></i></button>
              <button style="font-size:14px" id="${obj.id}" class="comment" type="button" class="comments"> ${noComments} Comments <i class="fa fa-comments-o"></i></button> 
             </div>
          </div>
        </div>
      `;
  });

  return cardsContainer.innerHTML;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);

/***/ }),

/***/ "./modules/getLikes.js":
/*!*****************************!*\
  !*** ./modules/getLikes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/likes/');
  if (response.headers.get('content-type').includes('application/json')) {
    const data = await response.json();
    data.forEach((like) => {
      // Check if element exists before adding like
      const element = document.getElementById(`like-${like.item_id.replace('like-', '')}`);
      if (element) {
        element.innerHTML = `${like.likes} <i class="fa fa-heart-o"></i>`;
      }
    });
    return data;
  }
  const data = await response.text();
  document.querySelectorAll('.like-count').forEach((likeCount) => {
    likeCount.innerHTML = 'Be the first to like this post!';
  });
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);

/***/ }),

/***/ "./modules/itemsCounter.js":
/*!*********************************!*\
  !*** ./modules/itemsCounter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Count items
const itemsCounter = () => {
  const container = document.querySelectorAll('.shadow-card');
  document.querySelector('#item-count').textContent = `Movies(${container.length})`;
  return container.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);

/***/ }),

/***/ "./modules/movieDetails.js":
/*!*********************************!*\
  !*** ./modules/movieDetails.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComments.js */ "./modules/addComments.js");


const detailSection = document.createElement('section');
detailSection.classList.add('popup');

document.body.insertBefore(detailSection, document.body.children[1]);

const comments = async (num) => {
  const requestURL = 'https://api.tvmaze.com/shows';
  const request = new Request(requestURL);
  const response = await fetch(request);
  let resultObj = await response.json();
  resultObj = resultObj[num];
  detailSection.innerHTML = `
        <button class='close' id='close'><i class='fa fa-close fa-10x'></i></button>
            <img src="${resultObj.image.medium}" class="detail-image" alt="Image">
            <h2>
                ${resultObj.name}
            </h2>
        <div class="detail-items">
            <li>Language: ${resultObj.language}</li>
            <li>Genres: ${resultObj.genres}</li>
            <li>Premiered: ${resultObj.premiered}</li>
            <li>Ended: ${resultObj.ended}</li>
            <li>Average rating: ${resultObj.rating.average}</li>
            <li><a href='${resultObj.officialSite}' target='_blank'>Official Site</a></li>
        </div>
        <div class='comments-section'>
            <h3>Comments</h3>
        </div>
        <div class='comment-form' id='form'>
            <h3>Add a comment</h3>
            <input type='text' id='username' placeholder='Your name' required>
            <input type='text' id='comment' placeholder='Your insights' required>
            <button type='submit' class='submit' id='submit'>Comment</button>
        </div>
        `;
  document.querySelector('#close').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
  };
  document.querySelector('#submit').onclick = () => {
    (0,_addComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(num);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);


/***/ }),

/***/ "./modules/showComments.js":
/*!*********************************!*\
  !*** ./modules/showComments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showComments = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/comments?item_id=${itemId}`);
  const comments = await response.json();
  let commentSection = '<h3>Comments</h3>';
  comments.forEach((comment) => {
    commentSection += `
        <li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>
        `;
  });
  document.querySelector('.comments-section').innerHTML = commentSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComments);


/***/ }),

/***/ "./modules/totalComments.js":
/*!**********************************!*\
  !*** ./modules/totalComments.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const totalComments = async (num) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/comments?item_id=${num}`);
  const comments = await response.json();
  return comments.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalComments);

/***/ }),

/***/ "./modules/ui.js":
/*!***********************!*\
  !*** ./modules/ui.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchApiTv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchApiTv.js */ "./modules/fetchApiTv.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ "./modules/getLikes.js");



const homePage = () => {
  (0,_fetchApiTv_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bg.jpg */ "./src/assets/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  width: 80vw;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  font-family: Arial, Helvetica, sans-serif;\n  color: white;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") rgba(0, 0, 0, 0.61);\n  background-repeat: repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nh3 {\n  text-align: center;\n}\n\nfooter h3 {\n  box-sizing: border-box;\n  border: 2px solid black;\n  padding: 20px;\n  justify-content: center;\n  align-content: center;\n}\n\n.flexbox {\n  display: flex;\n}\n\n.nav {\n  flex-direction: row;\n  justify-content: center;\n  margin: 25px 100px 0 0;\n}\n\n.menu {\n  justify-content: center;\n}\n\na {\n  text-decoration: none;\n  font-size: 25px;\n}\n\na:active,\na:hover {\n  text-decoration: underline;\n  color: blue;\n}\n\n.menu a {\n  margin: 0 20px;\n  justify-content: space-evenly;\n}\n\n.shadow-card {\n  border: 1px solid black;\n  width: 300px;\n  margin: 10vh auto;\n  background: transparent;\n  box-shadow: 0 0 15px rgb(255, 255, 255);\n  border-radius: 25px;\n  transition: transform 0.2s;\n}\n\n.shadow-card:hover {\n  border: 2px solid white;\n  transform: scale(1.1);\n}\n\n.container-item {\n  display: grid;\n  grid-template-rows: auto auto auto;\n  width: 90%;\n  background: transparent;\n  margin: 10px auto;\n  border-radius: 15px;\n  border: 2px solid white;\n  align-items: center;\n  font-size: 17px;\n}\n\nh4,\nbutton {\n  margin-left: 6px;\n}\n\nimg {\n  border-radius: 25px;\n}\n\nbutton {\n  margin-bottom: 6px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nli {\n  list-style: none;\n}\n\n.popup {\n  display: none;\n  position: fixed;\n  box-sizing: border-box;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid black;\n  width: 80vw;\n  height: 98vh;\n  border-radius: 20px;\n  padding: 8px;\n  z-index: 1;\n  overflow: auto;\n  margin: 0;\n  color: black;\n  background: white;\n  box-shadow: 0 0 15px rgb(255, 255, 255);\n}\n\n.detail-items {\n  display: grid;\n  grid-template-columns: 2fr 2fr;\n  justify-content: center;\n  width: 80vh;\n}\n\n.detail-image {\n  width: 30%;\n  margin: 2px;\n}\n\n.close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: transparent;\n  border: none;\n}\n\n.comments-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput,\n#submit {\n  margin: 8px;\n  padding: 6px;\n  box-sizing: border-box;\n  border: 2px solid black;\n  border-radius: 5px;\n  align-items: flex-start;\n}\n\n#username,\n#submit {\n  width: 70%;\n}\n\n#comment {\n  height: 90px;\n  overflow-x: hidden;\n  overflow: auto;\n}\n\n#cards-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n\n@media screen and (max-width: 768px) {\n  .shadow-card {\n    margin: 6vh auto;\n  }\n\n  #cards-container {\n    display: grid;\n    grid-template-columns: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,yCAAyC;EACzC,YAAY;EACZ,uEAAsD;EACtD,yBAAyB;EACzB,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;;EAEE,0BAA0B;EAC1B,WAAW;AACb;;AAEA;EACE,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,uCAAuC;EACvC,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,UAAU;EACV,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,cAAc;EACd,SAAS;EACT,YAAY;EACZ,iBAAiB;EACjB,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,2BAA2B;EAC7B;AACF","sourcesContent":["body {\n  width: 80vw;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  font-family: Arial, Helvetica, sans-serif;\n  color: white;\n  background: url(\"./assets/bg.jpg\") rgba(0, 0, 0, 0.61);\n  background-repeat: repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nh3 {\n  text-align: center;\n}\n\nfooter h3 {\n  box-sizing: border-box;\n  border: 2px solid black;\n  padding: 20px;\n  justify-content: center;\n  align-content: center;\n}\n\n.flexbox {\n  display: flex;\n}\n\n.nav {\n  flex-direction: row;\n  justify-content: center;\n  margin: 25px 100px 0 0;\n}\n\n.menu {\n  justify-content: center;\n}\n\na {\n  text-decoration: none;\n  font-size: 25px;\n}\n\na:active,\na:hover {\n  text-decoration: underline;\n  color: blue;\n}\n\n.menu a {\n  margin: 0 20px;\n  justify-content: space-evenly;\n}\n\n.shadow-card {\n  border: 1px solid black;\n  width: 300px;\n  margin: 10vh auto;\n  background: transparent;\n  box-shadow: 0 0 15px rgb(255, 255, 255);\n  border-radius: 25px;\n  transition: transform 0.2s;\n}\n\n.shadow-card:hover {\n  border: 2px solid white;\n  transform: scale(1.1);\n}\n\n.container-item {\n  display: grid;\n  grid-template-rows: auto auto auto;\n  width: 90%;\n  background: transparent;\n  margin: 10px auto;\n  border-radius: 15px;\n  border: 2px solid white;\n  align-items: center;\n  font-size: 17px;\n}\n\nh4,\nbutton {\n  margin-left: 6px;\n}\n\nimg {\n  border-radius: 25px;\n}\n\nbutton {\n  margin-bottom: 6px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nli {\n  list-style: none;\n}\n\n.popup {\n  display: none;\n  position: fixed;\n  box-sizing: border-box;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid black;\n  width: 80vw;\n  height: 98vh;\n  border-radius: 20px;\n  padding: 8px;\n  z-index: 1;\n  overflow: auto;\n  margin: 0;\n  color: black;\n  background: white;\n  box-shadow: 0 0 15px rgb(255, 255, 255);\n}\n\n.detail-items {\n  display: grid;\n  grid-template-columns: 2fr 2fr;\n  justify-content: center;\n  width: 80vh;\n}\n\n.detail-image {\n  width: 30%;\n  margin: 2px;\n}\n\n.close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: transparent;\n  border: none;\n}\n\n.comments-section {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment-form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput,\n#submit {\n  margin: 8px;\n  padding: 6px;\n  box-sizing: border-box;\n  border: 2px solid black;\n  border-radius: 5px;\n  align-items: flex-start;\n}\n\n#username,\n#submit {\n  width: 70%;\n}\n\n#comment {\n  height: 90px;\n  overflow-x: hidden;\n  overflow: auto;\n}\n\n#cards-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n\n@media screen and (max-width: 768px) {\n  .shadow-card {\n    margin: 6vh auto;\n  }\n\n  #cards-container {\n    display: grid;\n    grid-template-columns: auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/bg.jpg":
/*!***************************!*\
  !*** ./src/assets/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eaf422e8a0c12d356c99.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/bg.jpg */ "./src/assets/bg.jpg");
/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/ui.js */ "./modules/ui.js");
/* harmony import */ var _modules_addLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/addLikes.js */ "./modules/addLikes.js");
/* harmony import */ var _modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/itemsCounter.js */ "./modules/itemsCounter.js");
/* harmony import */ var _modules_movieDetails_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/movieDetails.js */ "./modules/movieDetails.js");
/* harmony import */ var _modules_showComments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/showComments.js */ "./modules/showComments.js");
/* harmony import */ var _modules_addComments_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/addComments.js */ "./modules/addComments.js");








// import createApiId from '../modules/involveApi.js';

window.addEventListener('DOMContentLoaded', () => {
  const backGroundImg = document.getElementsByTagName('body');
  backGroundImg.src = _assets_bg_jpg__WEBPACK_IMPORTED_MODULE_1__;

  (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  // createApiId();
});

document.querySelector('#cards-container').addEventListener('DOMSubtreeModified', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    // If button class contains like
    if (button.classList.contains('like')) {
      button.onclick = () => {
        (0,_modules_addLikes_js__WEBPACK_IMPORTED_MODULE_3__["default"])(button.id);
      };
    } else if (button.classList.contains('comment')) {
      button.onclick = (e) => {
        (0,_modules_movieDetails_js__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target.id - 1);
        (0,_modules_showComments_js__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target.id - 1);
        document.querySelector('.popup').style.display = 'flex';
      };
    }
  });
  (0,_modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDc0I7QUFDSDtBQUNLO0FBQ1M7QUFDSjtBQUNJO0FBQ25CO0FBQ25DOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQVk7O0FBRWxDLEVBQUUsMERBQVE7QUFDVjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBTztBQUNmO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsUUFBUSxvRUFBUTtBQUNoQixRQUFRLG9FQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLG9FQUFZO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9tb2R1bGVzL2FkZENvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9tb2R1bGVzL2FkZExpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9tb2R1bGVzL2ZldGNoQXBpVHYuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL21vZHVsZXMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL21vZHVsZXMvaXRlbXNDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9tb2R1bGVzL21vdmllRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbW9kdWxlcy9zaG93Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL21vZHVsZXMvdG90YWxDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvd0NvbW1lbnRzIGZyb20gJy4vc2hvd0NvbW1lbnRzLmpzJztcblxuY29uc3QgYWRkQ29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKTtcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50Jyk7XG4gIGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9YMkh4RXdQa0RvbEpWVjFXQ2dWYy9jb21tZW50cycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgdXNlcm5hbWU6IHVzZXIudmFsdWUsXG4gICAgICBjb21tZW50OiBjb21tZW50LnZhbHVlLFxuICAgIH0pLFxuICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHNob3dDb21tZW50cyhpdGVtSWQpO1xuICAgICAgdXNlci52YWx1ZSA9ICcnO1xuICAgICAgY29tbWVudC52YWx1ZSA9ICcnO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkQ29tbWVudHM7IiwiaW1wb3J0IGdldExpa2VzIGZyb20gJy4vZ2V0TGlrZXMuanMnO1xuXG4vLyBBZGQgbGlrZSB1c2luZyBJbnZvbHZlbWVudCBBUElcbmNvbnN0IGFkZExpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1gySHhFd1BrRG9sSlZWMVdDZ1ZjL2xpa2VzLycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgfSksXG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIGdldExpa2VzKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTGlrZTsiLCJpbXBvcnQgdG90YWxDb21tZW50cyBmcm9tICcuL3RvdGFsQ29tbWVudHMuanMnO1xuXG4vLyBmZXRjaCB0aGUgdHYgQVBJIGFuZCBQb3B1bGF0ZS5cbmNvbnN0IHBvcHVsYXRlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkcy1jb250YWluZXInKTtcbiAgY29uc3QgcmVxdWVzdFVSTCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3RVUkwpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICBjb25zdCByZXN1bHRPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNhcmRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBsZXQgbm9Db21tZW50cyA9IDA7XG4gIHJlc3VsdE9iai5mb3JFYWNoKGFzeW5jIChvYmosIGluZGV4KSA9PiB7XG4gICAgbm9Db21tZW50cyA9IGF3YWl0IHRvdGFsQ29tbWVudHMoaW5kZXgpIHx8IDA7XG4gICAgY2FyZHNDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvdy1jYXJkXCIgaW5kZXg9JHtpbmRleH0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1pdGVtXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7b2JqLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCJBdmF0YXJcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDQ+PGI+ICR7b2JqLm5hbWV9IDwvYj48L2g0PlxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwiZm9udC1zaXplOjE0cHhcIiBpZD1cImxpa2UtJHtvYmouaWR9XCIgY2xhc3M9XCJsaWtlXCIgdHlwZT1cImJ1dHRvblwiPiAwIDxpIGNsYXNzPVwiZmEgZmEtaGVhcnQtb1wiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cImZvbnQtc2l6ZToxNHB4XCIgaWQ9XCIke29iai5pZH1cIiBjbGFzcz1cImNvbW1lbnRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjb21tZW50c1wiPiAke25vQ29tbWVudHN9IENvbW1lbnRzIDxpIGNsYXNzPVwiZmEgZmEtY29tbWVudHMtb1wiPjwvaT48L2J1dHRvbj4gXG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNhcmRzQ29udGFpbmVyLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVsYXRlOyIsImNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9YMkh4RXdQa0RvbEpWVjFXQ2dWYy9saWtlcy8nKTtcbiAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKS5pbmNsdWRlcygnYXBwbGljYXRpb24vanNvbicpKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBkYXRhLmZvckVhY2goKGxpa2UpID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgZXhpc3RzIGJlZm9yZSBhZGRpbmcgbGlrZVxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaWtlLSR7bGlrZS5pdGVtX2lkLnJlcGxhY2UoJ2xpa2UtJywgJycpfWApO1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgJHtsaWtlLmxpa2VzfSA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0LW9cIj48L2k+YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1jb3VudCcpLmZvckVhY2goKGxpa2VDb3VudCkgPT4ge1xuICAgIGxpa2VDb3VudC5pbm5lckhUTUwgPSAnQmUgdGhlIGZpcnN0IHRvIGxpa2UgdGhpcyBwb3N0ISc7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExpa2VzOyIsIi8vIENvdW50IGl0ZW1zXG5jb25zdCBpdGVtc0NvdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGFkb3ctY2FyZCcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1jb3VudCcpLnRleHRDb250ZW50ID0gYE1vdmllcygke2NvbnRhaW5lci5sZW5ndGh9KWA7XG4gIHJldHVybiBjb250YWluZXIubGVuZ3RoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbXNDb3VudGVyOyIsImltcG9ydCBhZGRDb21tZW50cyBmcm9tICcuL2FkZENvbW1lbnRzLmpzJztcblxuY29uc3QgZGV0YWlsU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmRldGFpbFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcblxuZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZGV0YWlsU2VjdGlvbiwgZG9jdW1lbnQuYm9keS5jaGlsZHJlblsxXSk7XG5cbmNvbnN0IGNvbW1lbnRzID0gYXN5bmMgKG51bSkgPT4ge1xuICBjb25zdCByZXF1ZXN0VVJMID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdFVSTCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gIGxldCByZXN1bHRPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJlc3VsdE9iaiA9IHJlc3VsdE9ialtudW1dO1xuICBkZXRhaWxTZWN0aW9uLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY2xvc2UnIGlkPSdjbG9zZSc+PGkgY2xhc3M9J2ZhIGZhLWNsb3NlIGZhLTEweCc+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlc3VsdE9iai5pbWFnZS5tZWRpdW19XCIgY2xhc3M9XCJkZXRhaWwtaW1hZ2VcIiBhbHQ9XCJJbWFnZVwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICR7cmVzdWx0T2JqLm5hbWV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLWl0ZW1zXCI+XG4gICAgICAgICAgICA8bGk+TGFuZ3VhZ2U6ICR7cmVzdWx0T2JqLmxhbmd1YWdlfTwvbGk+XG4gICAgICAgICAgICA8bGk+R2VucmVzOiAke3Jlc3VsdE9iai5nZW5yZXN9PC9saT5cbiAgICAgICAgICAgIDxsaT5QcmVtaWVyZWQ6ICR7cmVzdWx0T2JqLnByZW1pZXJlZH08L2xpPlxuICAgICAgICAgICAgPGxpPkVuZGVkOiAke3Jlc3VsdE9iai5lbmRlZH08L2xpPlxuICAgICAgICAgICAgPGxpPkF2ZXJhZ2UgcmF0aW5nOiAke3Jlc3VsdE9iai5yYXRpbmcuYXZlcmFnZX08L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9JyR7cmVzdWx0T2JqLm9mZmljaWFsU2l0ZX0nIHRhcmdldD0nX2JsYW5rJz5PZmZpY2lhbCBTaXRlPC9hPjwvbGk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdjb21tZW50cy1zZWN0aW9uJz5cbiAgICAgICAgICAgIDxoMz5Db21tZW50czwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSdjb21tZW50LWZvcm0nIGlkPSdmb3JtJz5cbiAgICAgICAgICAgIDxoMz5BZGQgYSBjb21tZW50PC9oMz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0ndXNlcm5hbWUnIHBsYWNlaG9sZGVyPSdZb3VyIG5hbWUnIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdjb21tZW50JyBwbGFjZWhvbGRlcj0nWW91ciBpbnNpZ2h0cycgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3M9J3N1Ym1pdCcgaWQ9J3N1Ym1pdCc+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJykub25jbGljayA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jykub25jbGljayA9ICgpID0+IHtcbiAgICBhZGRDb21tZW50cyhudW0pO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHM7XG4iLCJjb25zdCBzaG93Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1gySHhFd1BrRG9sSlZWMVdDZ1ZjL2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtSWR9YCk7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgY29tbWVudFNlY3Rpb24gPSAnPGgzPkNvbW1lbnRzPC9oMz4nO1xuICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgY29tbWVudFNlY3Rpb24gKz0gYFxuICAgICAgICA8bGk+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fTwvbGk+XG4gICAgICAgIGA7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtc2VjdGlvbicpLmlubmVySFRNTCA9IGNvbW1lbnRTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd0NvbW1lbnRzO1xuIiwiY29uc3QgdG90YWxDb21tZW50cyA9IGFzeW5jIChudW0pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWDJIeEV3UGtEb2xKVlYxV0NnVmMvY29tbWVudHM/aXRlbV9pZD0ke251bX1gKTtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBjb21tZW50cy5sZW5ndGg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3RhbENvbW1lbnRzOyIsImltcG9ydCBwb3B1bGF0ZSBmcm9tICcuL2ZldGNoQXBpVHYuanMnO1xuaW1wb3J0IGdldExpa2VzIGZyb20gJy4vZ2V0TGlrZXMuanMnO1xuXG5jb25zdCBob21lUGFnZSA9ICgpID0+IHtcbiAgcG9wdWxhdGUoKTtcbiAgZ2V0TGlrZXMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgcmdiYSgwLCAwLCAwLCAwLjYxKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgaDMge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmxleGJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjVweCAxMDBweCAwIDA7XFxufVxcblxcbi5tZW51IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubWVudSBhIHtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5zaGFkb3ctY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogMTB2aCBhdXRvO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxufVxcblxcbi5zaGFkb3ctY2FyZDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmNvbnRhaW5lci1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG5oNCxcXG5idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDZweDtcXG59XFxuXFxuaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiA5OHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHotaW5kZXg6IDE7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uZGV0YWlsLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MHZoO1xcbn1cXG5cXG4uZGV0YWlsLWltYWdlIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jb21tZW50cy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCxcXG4jc3VibWl0IHtcXG4gIG1hcmdpbjogOHB4O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiN1c2VybmFtZSxcXG4jc3VibWl0IHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbiNjb21tZW50IHtcXG4gIGhlaWdodDogOTBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jY2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLnNoYWRvdy1jYXJkIHtcXG4gICAgbWFyZ2luOiA2dmggYXV0bztcXG4gIH1cXG5cXG4gICNjYXJkcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWix1RUFBc0Q7RUFDdEQseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWM7RUFDZCxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwyQkFBMkI7RUFDN0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvYmcuanBnXFxcIikgcmdiYSgwLCAwLCAwLCAwLjYxKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgaDMge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmxleGJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjVweCAxMDBweCAwIDA7XFxufVxcblxcbi5tZW51IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubWVudSBhIHtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5zaGFkb3ctY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogMTB2aCBhdXRvO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxufVxcblxcbi5zaGFkb3ctY2FyZDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmNvbnRhaW5lci1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG5oNCxcXG5idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDZweDtcXG59XFxuXFxuaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiA5OHZoO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHotaW5kZXg6IDE7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uZGV0YWlsLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MHZoO1xcbn1cXG5cXG4uZGV0YWlsLWltYWdlIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBtYXJnaW46IDJweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5jb21tZW50cy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCxcXG4jc3VibWl0IHtcXG4gIG1hcmdpbjogOHB4O1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiN1c2VybmFtZSxcXG4jc3VibWl0IHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbiNjb21tZW50IHtcXG4gIGhlaWdodDogOTBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4jY2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLnNoYWRvdy1jYXJkIHtcXG4gICAgbWFyZ2luOiA2dmggYXV0bztcXG4gIH1cXG5cXG4gICNjYXJkcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbXlCYWNrZ3JvdW5kIGZyb20gJy4vYXNzZXRzL2JnLmpwZyc7XG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi4vbW9kdWxlcy91aS5qcyc7XG5pbXBvcnQgYWRkTGlrZSBmcm9tICcuLi9tb2R1bGVzL2FkZExpa2VzLmpzJztcbmltcG9ydCBpdGVtc0NvdW50ZXIgZnJvbSAnLi4vbW9kdWxlcy9pdGVtc0NvdW50ZXIuanMnO1xuaW1wb3J0IGNvbW1lbnRzIGZyb20gJy4uL21vZHVsZXMvbW92aWVEZXRhaWxzLmpzJztcbmltcG9ydCBzaG93Q29tbWVudHMgZnJvbSAnLi4vbW9kdWxlcy9zaG93Q29tbWVudHMuanMnO1xuaW1wb3J0ICcuLi9tb2R1bGVzL2FkZENvbW1lbnRzLmpzJztcbi8vIGltcG9ydCBjcmVhdGVBcGlJZCBmcm9tICcuLi9tb2R1bGVzL2ludm9sdmVBcGkuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgYmFja0dyb3VuZEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gIGJhY2tHcm91bmRJbWcuc3JjID0gbXlCYWNrZ3JvdW5kO1xuXG4gIGhvbWVQYWdlKCk7XG4gIC8vIGNyZWF0ZUFwaUlkKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmRzLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsICgpID0+IHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIC8vIElmIGJ1dHRvbiBjbGFzcyBjb250YWlucyBsaWtlXG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2xpa2UnKSkge1xuICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGFkZExpa2UoYnV0dG9uLmlkKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21tZW50JykpIHtcbiAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29tbWVudHMoZS50YXJnZXQuaWQgLSAxKTtcbiAgICAgICAgc2hvd0NvbW1lbnRzKGUudGFyZ2V0LmlkIC0gMSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG4gIGl0ZW1zQ291bnRlcigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=