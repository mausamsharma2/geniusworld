import React from "react";

function Carousal (){

    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://jkeducate.b-cdn.net/content/uploads/2024/05/classroom-2093744_1920.jpg" className="d-block w-100" alt="school1" />
            </div>
            <div className="carousel-item">
              <img src="https://assets.architecturaldigest.in/photos/6576f9c729d6f7e4c6dc621e/master/w_1600%2Cc_limit/DSC00242.jpg" className="d-block w-100" alt="school2" />
            </div>
            <div className="carousel-item">
              <img src="https://resources.finalsite.net/images/v1640631948/santacatalina/xrvre0hkdkk9xijrowls/Admissionblog-girls.jpg" className="d-block w-100" alt="school3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      );
      
}

export default Carousal;