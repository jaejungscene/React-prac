import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios';
import './index.css'

export default function ProductPage(){
  const {id} = useParams(); // App.js에 ":id" 부분에 들어가는 값이 전달됨
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
    .get(`https://ecfd1ca3-5759-43ab-802e-43e743c81c63.mock.pstmn.io/products/${id}`)
    .then((result) => {
      setProduct(result.data);
        console.log(result);
      })
    .catch((error) => {
      console.error(error);
    });
  }, [])

  if(product === null){
    return (
      <h1>상품 정보를 받고 있습니다...</h1>
    )
  }

  console.log('check')

  return(
    <div>
      <div id='image-box'>
        <img src={"/"+product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id='createAt'>2022년 12년 8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}