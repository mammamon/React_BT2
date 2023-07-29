import React from 'react'
const Product = () => {
  return (
    <div className='product-zone container d-flex justify-content-center flex-wrap mt-5'>
        <div className="product-model d-flex justify-content-between">
            <div className="product-model-img">
                <img src='glassesImage/model.jpg'/>
                <img src='glassesImage/v9.png' id="product-wear"/>
                <div className="product-info p-1">
                    <h3 id="product-name">fdsfdfdsf</h3>
                    <p id="product-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, dolorem suscipit? Fugiat saepe nemo ut!</p>
                </div>
            </div>
            <div className="product-model-img">
                <img src='glassesImage/model.jpg'/>
            </div>
        </div>
        <div className="product-show d-flex flex-wrap align-items-center justify-content-center">
            <div className="product">
                <img src='glassesImage/g1.jpg' alt="" />
            </div>
            <div className="product">
                <img src='glassesImage/g2.jpg' alt="" />
            </div>
            <div className="product">
                <img src='glassesImage/g3.jpg' alt="" />
            </div>
            <div className="product">
                <img src='glassesImage/g4.jpg' alt="" />
            </div>
            <div className="product">
                <img src='glassesImage/g5.jpg' alt="" />
            </div>
            <div className="product">
                <img src='glassesImage/g6.jpg' alt="" />
            </div>
            <div className="product">
                <img src='glassesImage/g7.jpg' alt="" />
            </div>
            <div className="product">
                <img src='glassesImage/g8.jpg' alt="" />
            </div>
            <div className="product">
                <img src='glassesImage/g9.jpg' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Product