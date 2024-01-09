import React from "react";
import "../styles/card.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const tech = [
  {
    techUsed: "Html",
    techSrc:
      "https://imgs.search.brave.com/5E_3ouC-8qAebTs4ZAz6VouIwo7Wxr9yVTxBkFpcoh0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL0hUTUw1X2xv/Z29fYW5kX3dvcmRt/YXJrLnN2Zw.svg",
  },
  {
    techUsed: "CSS",
    techSrc:
      "https://imgs.search.brave.com/_L-kl-i8i-UK9FO7hwiZAqQB_NchiM9Hvfx_75-lW0A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA5/L0NTUy1Mb2dvLTUw/MHgzMTMucG5n",
  },
  {
    techUsed: "Javascript",
    techSrc:
      "https://imgs.search.brave.com/obi6waBHrXy0h09CpHCRdyvOQ2aBOPtlj-OcC6xcJ3g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9sb2dvLWphdmFz/Y3JpcHQuc3Zn.svg",
  },
  {
    techUsed: "React",
    techSrc:
      "https://imgs.search.brave.com/kdhAvDDas6D9BZffTojqoSUyJxxDJW7VgITEc8id15Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/cmVhY3Quc3Zn.svg",
  },
  {
    techUsed: "Github",
    techSrc:
      "https://imgs.search.brave.com/b20GAw5dHFdFadqg6JqUsOdDmk9-lmNFm_E7cKm3mD8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9HaXRIdWIv/R2l0SHViLUljb24t/V2hpdGUtRGFyay1C/YWNrZ3JvdW5kLUxv/Z28ud2luZS5zdmc.svg",
  },
  {
    techUsed: "Java",
    techSrc:
      "https://imgs.search.brave.com/VKfHE2SnperH7uQKUz15UXOQK3vA-x3ADe9n0csYUvo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9qYXZhLWxvZ28t/MS5wbmc",
  },
  {
    techUsed: "Python",
    techSrc:
      "https://imgs.search.brave.com/M-FiGkB1jPVADW6xtp-i7TJcdhipqz463z8s2cuR3WY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n",
  },
  {
    techUsed: "CPP",
    techSrc:
      "https://imgs.search.brave.com/-aqoL7TbF81YYKKNWeBQt95KSjJ7exTkEElmLx4-xmk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2lz/b2NwcC9sb2dvcy9t/YXN0ZXIvY3BwX2xv/Z28ucG5n",
  },
  {
    techUsed: "NPM",
    techSrc:
      "https://imgs.search.brave.com/qpWu0RoFndDqGNK_qWXsNBdiQCbJdPLM-Dag1M2-diU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE3NTU1MjIyMzM0/M2ZiYzIyMDdkMGUu/cG5n",
  },
  {
    techUsed: "vs code",
    techSrc:
      "https://imgs.search.brave.com/N6niJKv4Wf015u8jCykcuaw3-v-MzEWY1Mva_N0gAAM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dnMtY29kZS5zdmc.svg",
  },
  {
    techUsed: "Mysql",
    techSrc:
      "https://imgs.search.brave.com/fckhLwL7zNh0gyvm_Vjce0Da0UxVMu1xDaTZIPIYcYk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9teXNxbC1sb2dv/LnN2Zw.svg",
  },
];

const Card = () => {

    
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="card">
    <div className="stack">My Tech Stack</div>
    <Slider {...settings}>
      {tech.map((obj) => {
        return (
          <>
            <div className="techSrc">
              <div className="image">
                <img
                  src={obj.techSrc}
                  alt={obj.techUsed}
                  className="techimage"
                />
              </div>
              <div className="used">
                <span>{obj.techUsed}</span>
              </div>
            </div>
          </>
        );
      })}
    </Slider>
    </div>
  );
};

export default Card;
