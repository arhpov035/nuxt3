import { defineStore } from "pinia";
import { ref } from "vue";

export const useFillingStore = defineStore("fillingStore", () => {
  const nextSlide = () => {
    const slideFilling = document.querySelectorAll(".page_filling .flilslide");
    const arrSrc = [];
    slideFilling.forEach(function (el, key) {
      arrSrc.push(el.getAttribute("src"));
    });
    arrSrc.forEach(function (el, key) {
        if(key+1 == arrSrc.length) {
            slideFilling[arrSrc.length - 1].src = arrSrc[0];
        }else {
            slideFilling[key].src = arrSrc[key+1];
        }
        console.log('key ' + key + 'arrSrc.length: ' + arrSrc.length);
    });
    
  };
  const prevSlide = () => {
    const slideFilling = document.querySelectorAll(".page_filling .flilslide");
    const arrSrc = [];
    
    slideFilling.forEach(function (el, key) {
      arrSrc.push(el.getAttribute("src"));
    });

    arrSrc.forEach(function (el, key) {
        if(key == 0) {
            slideFilling[0].src = arrSrc[arrSrc.length - 1];
        }else {
            slideFilling[key].src = arrSrc[key-1];
        }
        console.log('key ' + key + 'arrSrc.length: ' + arrSrc.length);
    });
    
  };

  return {
    nextSlide,
    prevSlide
  };
});
