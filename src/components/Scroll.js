
import React, { useEffect } from "https://unpkg.com/react@16/umd/react.production.min.js";

export default function Scroll() {
  useEffect(function mount() {
    function onScroll() {
      console.log("scroll!");
      const header = document.querySelector("header");
      const headerPhone = document.querySelector(".link--header_phone");
      const headerIcon = document.querySelector(".img--header").querySelectorAll("path");
      const linkHeader = document.querySelectorAll(".link--header_top");
      if(window.pageYOffset > 714) {
        header.style.color = "#000000";
        headerPhone.style.color = "#000000";
        linkHeader.forEach(item => {
          item.style.color = "#000000";
        })
        headerIcon.forEach(item => {
          item.style.fill = "#000000";
        })
      } else {
        header.style.color = "#ffffff";
        headerPhone.style.color = "#ffffff";
        linkHeader.forEach(item => {
          item.style.color = "#ffffff";
        })
        headerIcon.forEach(item => {
          item.style.fill = "#ffffff";
        })
      }
    }

    window.addEventListener("scroll", onScroll);


    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return null;
}



/* import $ from 'jquery'; 
if (typeof window !== "undefined") {
document.addEventListener("DOMContentLoaded", () => { */

 /*  $(".member__slider").slick({
    // normal options...
    slidesToShow: 4,
    infinite: true,
    variableWidth: true,
    arrows: true,
    appendArrows: ".slider-arrows_staff",
    dots: true,
    prevArrow:
      '<span class="slider-arrow slick-prev"><img src="./img/arrow_left.svg"></span>',
    nextArrow:
      '<span class="slider-arrow slick-next"><img src="./img/arrow_right.svg"></span>'
  });
  $(".blog__slider").slick({
    // normal options...
    slidesToShow: 2,
    infinite: true,
    variableWidth: true,
    arrows: true,
    dots: true,
  }); */
		

/*   document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const headerPhone = document.querySelector(".link--header_phone");
    const headerIcon = document.querySelector(".img--header").querySelectorAll("path");
    const linkHeader = document.querySelectorAll(".link--header_top");
    if(window.pageYOffset > 714) {
      header.style.color = "#000000";
      headerPhone.style.color = "#000000";
      linkHeader.forEach(item => {
        item.style.color = "#000000";
      })
      headerIcon.forEach(item => {
        item.style.fill = "#000000";
      })
    } else {
      header.style.color = "#ffffff";
      headerPhone.style.color = "#ffffff";
      linkHeader.forEach(item => {
        item.style.color = "#ffffff";
      })
      headerIcon.forEach(item => {
        item.style.fill = "#ffffff";
      })
    }
  }) */



  //конец условия загрузки документа
/* })
} */