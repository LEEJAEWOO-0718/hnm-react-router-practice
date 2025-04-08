import React, { useEffect, useState } from 'react'

const ProductAll = () => {
  const [ProductList, setProductList]=useState([]);
  const getProducts=async()=>{
    let url='http://localhost:5000/products';
    let response=await fetch(url);
    let data=await response.json();
    console.log('data:', data);

  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
    </div>
  )
};

export default ProductAll
