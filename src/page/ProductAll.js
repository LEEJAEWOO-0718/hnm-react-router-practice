import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  //
  const [ProductList, setProductList]=useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts=async()=>{
    let searchQuery=query.get('q') || "";
    let url=`https://my-json-server.typicode.com/LEEJAEWOO-0718/hnm-react-router-practice/products?q=${searchQuery}`;
    let response=await fetch(url);
    let data=await response.json();
    console.log('data:', data);
    setProductList(data);
  };
  
  useEffect(()=>{
    getProducts();
  },[query]);

  return (
    <div>
      <Container>
        <Row>
          {ProductList.map(menu=>(
            <Col lg={3}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
};

export default ProductAll
