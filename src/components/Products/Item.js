import React from 'react';

const Item = ({name, imgSrc, net_price, taxes, price}) => {
    return (
        <div className="showcase-to section4-to" style={{width: "25%"}}>
            <div className="containflex-toer-to box-">
                <div className="product-item">
                    <img className="card-img-top" src={imgSrc} alt="Car" />
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <div className="flex-gerne-to">
                        <p className="">Net price: {net_price}</p>
                        <p className=''>Taxes: {taxes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Item;