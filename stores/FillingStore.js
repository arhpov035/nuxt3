import { defineStore } from "pinia";
import { ref } from "vue";

export const useFillingStore = defineStore("fillingStore", () => {
  const nextSlide = () => {
    const slideFilling = document.querySelectorAll(".page_filling .flilslide");
    const arrSrc = [];
    slideFilling.forEach(function (el, key) {
      // arrSrc.push(el.getAttribute("src"));
      let arr = [];
      arr['src'] =  el.getAttribute("src");
      arr['name'] =  el.getAttribute("alt");
      arrSrc.push(arr);
    });
    arrSrc.forEach(function (el, key) {
      if (key + 1 == arrSrc.length) {
        // slideFilling[arrSrc.length - 1].src = arrSrc[0];
        // slideFilling[arrSrc.length - 1].src = arrSrc[0]['src'];
        slideFilling[arrSrc.length - 1].setAttribute('src', arrSrc[0]['src']);
        slideFilling[arrSrc.length - 1].setAttribute('alt', arrSrc[0]['name']);
        document.querySelector("#fillingName").innerHTML = arrSrc[0]['name'];
      } else {
        // slideFilling[key].src = arrSrc[key + 1];
        // slideFilling[key].src = arrSrc[key + 1]['src'];;
        slideFilling[key].setAttribute('src', arrSrc[key + 1]['src']);
        slideFilling[key].setAttribute('alt', arrSrc[key + 1]['name']);
      }
      console.log("key " + key + "arrSrc.length: " + arrSrc.length);
    });
    console.log(arrSrc[0 + 1]['name']);
    document.querySelector("#fillingName").innerHTML = arrSrc[2]['name'];
  };

  const prevSlide = () => {
    const slideFilling = document.querySelectorAll(".page_filling .flilslide");
    const arrSrc = [];

    slideFilling.forEach(function (el, key) {
      // arrSrc.push(el.getAttribute("src"));
      let arr = [];
      arr['src'] =  el.getAttribute("src");
      arr['name'] =  el.getAttribute("alt");
      arrSrc.push(arr);
    });

    arrSrc.forEach(function (el, key) {
      if (key == 0) {
        // slideFilling[0].src = arrSrc[arrSrc.length - 1];
        // slideFilling[0].src = arrSrc[arrSrc.length - 1]['src'];
        slideFilling[0].setAttribute('src', arrSrc[arrSrc.length - 1]['src']);
        slideFilling[0].setAttribute('alt', arrSrc[arrSrc.length - 1]['name']);
      } else {
        // slideFilling[key].src = arrSrc[key - 1];
        // slideFilling[key].src = arrSrc[key - 1]['src'];
        slideFilling[key].setAttribute('src', arrSrc[key - 1]['src']);
        slideFilling[key].setAttribute('alt', arrSrc[key - 1]['name']);

      }
      console.log("key " + key + "arrSrc.length: " + arrSrc.length);
    });
    document.querySelector("#fillingName").innerHTML = arrSrc[0]['name'];
  };

  return {
    nextSlide,
    prevSlide,
  };
});
