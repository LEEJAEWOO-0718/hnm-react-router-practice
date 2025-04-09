import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  // console.log('item:', item);
  const navigate=useNavigate()
  const showDetail=()=>{
    navigate(`/product/${item.id}`);
  };

  return (
    <div onClick={showDetail}>
      <img src={item?.img} className="product-image hover-image" />
      <div>{item?.choice == true? "choice":""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new == true? "신제품":""}</div>
    </div>
  );
};

export default ProductCard
