




import React, { Component } from "react";
import Link from "gatsby-link";
import Slider from "react-slick";

export default class sliderMember extends Component {
  render() {
    const settings = {
      slidesToShow: 2,
      infinite: true,
      variableWidth: true,
      arrows: true,
      dots: true,
    };
    return (
      <>
        <Slider {...settings} className="member__list member__slider">


        <div className="member__item">
        <div className="member__pic">
          <img src="./img/members--lovers.png" alt="img--member" className="img img--member"/>
        </div>
        <div className="member__content">
          <div className="member__title">
            <p className="title title--small title--member">Art&amp;History lovers</p>
          </div>
          <div className="member__text">
            <p className="text text--member">Appreciate the diversity and high quality of&nbsp;our online tours and
              lectures</p>
          </div>
          <div className="member__link">
            <Link href="" className="link link-member">More</Link>
          </div>
        </div>
      </div>
      <div className="member__item">
        <div className="member__pic">
          <img src="./img/members--lovers.png" alt="img--member" className="img img--member"/>
        </div>
        <div className="member__content">
          <div className="member__title">
            <p className="title title--small title--member">Art&amp;History lovers</p>
          </div>
          <div className="member__text">
            <p className="text text--member">Appreciate the diversity and high quality of&nbsp;our online tours and
              lectures</p>
          </div>
          <div className="member__link">
            <Link href="" className="link link-member">More</Link>
          </div>
        </div>
      </div>
      <div className="member__item">
        <div className="member__pic">
          <img src="./img/members--lovers.png" alt="img--member" className="img img--member"/>
        </div>
        <div className="member__content">
          <div className="member__title">
            <p className="title title--small title--member">Art&amp;History lovers</p>
          </div>
          <div className="member__text">
            <p className="text text--member">Appreciate the diversity and high quality of&nbsp;our online tours and
              lectures</p>
          </div>
          <div className="member__link">
            <Link href="" className="link link-member">More</Link>
          </div>
        </div>
      </div>
      <div className="member__item">
        <div className="member__pic">
          <img src="./img/members--lovers.png" alt="img--member" className="img img--member"/>
        </div>
        <div className="member__content">
          <div className="member__title">
            <p className="title title--small title--member">Art&amp;History lovers</p>
          </div>
          <div className="member__text">
            <p className="text text--member">Appreciate the diversity and high quality of&nbsp;our online tours and
              lectures</p>
          </div>
          <div className="member__link">
            <Link href="" className="link link-member">More</Link>
          </div>
        </div>
      </div>
      <div className="member__item">
        <div className="member__pic">
          <img src="./img/members--lovers.png" alt="img--member" className="img img--member"/>
        </div>
        <div className="member__content">
          <div className="member__title">
            <p className="title title--small title--member">Art&amp;History lovers</p>
          </div>
          <div className="member__text">
            <p className="text text--member">Appreciate the diversity and high quality of&nbsp;our online tours and
              lectures</p>
          </div>
          <div className="member__link">
            <Link href="" className="link link-member">More</Link>
          </div>
        </div>
      </div>
      <div className="member__item">
        <div className="member__pic">
          <img src="./img/members--lovers.png" alt="img--member" className="img img--member"/>
        </div>
        <div className="member__content">
          <div className="member__title">
            <p className="title title--small title--member">Art&amp;History lovers</p>
          </div>
          <div className="member__text">
            <p className="text text--member">Appreciate the diversity and high quality of&nbsp;our online tours and
              lectures</p>
          </div>
          <div className="member__link">
            <Link href="" className="link link-member">More</Link>
          </div>
        </div>
      </div>
      <div className="member__item">
        <div className="member__pic">
          <img src="./img/members--lovers.png" alt="img--member" className="img img--member"/>
        </div>
        <div className="member__content">
          <div className="member__title">
            <p className="title title--small title--member">Art&amp;History lovers</p>
          </div>
          <div className="member__text">
            <p className="text text--member">Appreciate the diversity and high quality of&nbsp;our online tours and
              lectures</p>
          </div>
          <div className="member__link">
            <Link href="" className="link link-member">More</Link>
          </div>
        </div>
      </div>
   


        </Slider>

      </>
    );
  }
}

