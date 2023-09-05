import React from "react";
import ProductData from "./productData";
import "./product.css";

const Product = () => {
  const redirectToWhatsApp = () => {
    const phoneNumbe = '9111575948';
    const message = 'I want to Purchase Shivling';
    
    // Create a valid WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumbe}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappUrl;
  };
  const handlePhoneCall = () => {
    const phoneNumber = '9131200544'; 
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
    <div className="Product-Main">
    <h1 className="product-heading">OUR Products</h1>
      <div className="productMain">
        
        {ProductData.map((curElm) => {
          return (
            <>
              <div className="box">
                <div className="contant">
                  
                    <img src={curElm.img} className="images"></img>
                    
                    
                    <h3 className="h3">{curElm.name}</h3>
                    <ul>
                        <li><i className="fa fa-star checked">  </i></li>
                        <li><i className="fa fa-star checked">  </i></li>
                        <li><i className="fa fa-star checked">  </i></li>
                        <li><i className="fa fa-star checked">  </i></li>
                        <li><i className="fa fa-star checked">  </i></li>
                    </ul>

                    <div className="icon-container">
  <i
    className="fa-brands fa-square-whatsapp Whatsapp"
    onClick={redirectToWhatsApp}
  ></i>
  <i
    className="fa-solid fa-square-phone"
    onClick={handlePhoneCall}
  ></i>
</div>
                
                </div>
                </div>
                
            </>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Product;
