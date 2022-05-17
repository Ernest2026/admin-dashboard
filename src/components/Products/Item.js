import React, { useState } from "react";

const Item = ({
  name,
  image,
  images,
  description,
  net_price,
  taxes,
  price,
}) => {
  const [leadImage, setLeadImage] = useState(image);
  const handleClick = (e) => setLeadImage(e.target.src);
  return (
    <div className="card product-card col-12 col-sm-6 col-lg-4 p-0 mt-3 rounded-3 overflow-hidden">
      <div
        className="overflow-hidded card-img-container"
        style={{ position: "relative" }}
      >
        {image !== leadImage ? (
          <img
            className="card-img-top"
            src={leadImage}
            alt={name}
            width="100%"
          />
        ) : (
          <img
            className="card-img-top"
            src={leadImage}
            alt={name}
            width="100%"
          />
        )}
        <div className="mini-img">
          <div
            className="m-1"
            style={{
              width: "50px",
            }}
            key="0"
            onClick={handleClick}
          >
            <img src={image} alt="others" width="100%" />
          </div>
          {images &&
            images.map((data, index) => {
              return (
                <div
                  className="m-1"
                  style={{
                    width: "50px",
                  }}
                  key={index + 1}
                  onClick={handleClick}
                >
                  <img src={data.url} alt="others" width="100%" />
                </div>
              );
            })}
        </div>
      </div>
      <div className="card-body p-sm-2 p-md-3">
        <h6 className="card-title m-0">
          <b>{name}</b>
        </h6>
        <p className="m-0 text-primary">
          <b>
            <small>Price: #{price}</small>
          </b>
        </p>
        <p className="card-text m-0 text-break-all">
          <small>
            {description &&
              description.length >= 100 &&
              `${description.split("").splice(0, 70).join("")}...`}
          </small>
        </p>

        <div className="d-flex justify-content-between">
          <p className="m-0">
            <small>
              <b>Net Price: #{net_price}</b>
            </small>
          </p>
          <p className="m-0">
            <small>
              <b>Taxes: {taxes}</b>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
