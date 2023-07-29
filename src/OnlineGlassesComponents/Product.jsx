import React, { useState, useEffect } from 'react';

const Product = () => {
  const [dataGlasses, setDataGlasses] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    fetch('dataGlasses.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setDataGlasses(data);
        // mặc định load data thứ 1
        setSelectedProduct(data[0]);
      })
      .catch(error => console.error(error));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  }

  return (
    <div className='product-zone container d-flex justify-content-center flex-wrap mt-5'>
      <div className="product-model d-flex justify-content-between">
        <div className="product-model-img">
          <img src='glassesImage/model.jpg' alt="đeo kính" />
          {selectedProduct && <img src={selectedProduct.url} id="product-wear" />}
          <div className="product-info p-1">
            {selectedProduct && (
              <>
                <h3 id="product-name">{selectedProduct.name}</h3>
                <p id="product-desc">{selectedProduct.desc}</p>
              </>
            )}
          </div>
        </div>
        <div className="product-model-img">
          <img src='glassesImage/model.jpg' alt="đeo kính" />
        </div>
      </div>
      <div className="product-show d-flex flex-wrap align-items-center justify-content-center">
        {dataGlasses.map((product, index) => (
          <div key={index} className="product" onClick={() => handleProductClick(product)}>
            <img src={`glassesImage/g${index + 1}.jpg`} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product;
