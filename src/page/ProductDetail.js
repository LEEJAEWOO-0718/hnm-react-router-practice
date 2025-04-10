import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let{id} = useParams();
  const[product, setProduct]=useState(null);
  const getProductDetail = async()=>{
    let url=`https://my-json-server.typicode.com/LEEJAEWOO-0718/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url)
    let data = await response.json()
    console.log("product detail data", data);
    setProduct(data);
  };

  useEffect(()=>{
    getProductDetail()
  },[]);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>
            <DropdownButton title="사이즈">
              <Dropdown.Item>대</Dropdown.Item>
              <Dropdown.Item>중</Dropdown.Item>
              <Dropdown.Item>소</Dropdown.Item>
            </DropdownButton>
          </div>
          <div>
            <Button variant="danger">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
