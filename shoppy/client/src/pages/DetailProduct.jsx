import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import Detail from "../components/detail_tabs/Detail.jsx";
import Review from "../components/detail_tabs/Review.jsx";
import ImageList from '../components/commons/ImageList.jsx';
import StarRating from "../components/commons/StarRating.jsx";
import axios from "axios";


export default function DetailProduct({ addCart }) {
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  const [imgList, setImgList] = useState([]);
  const [ detailImgList, setDetailImgList ] = useState([]);
  const [size, setSize] = useState("XS");
  const [tabName, setTabName] = useState('detail');
  const tabLabels = ['DETAIL', 'REVIEW', 'Q&A', 'RETURN & DELIVERY'];
  const tabEventNames = ['detail', 'review', 'qna', 'return'];

  useEffect(() => {
    axios
      .post("http://localhost:9000/product/detail", {pid}) //넘어갈때 {}형태 
      .then((res) => {
       console.log('detail porduct res.data -->',res.data);
       setProduct(res.data);
       // uploadFile 배열의 3개 이미지를 출력형태로 생성하여 배열에 저장
        // const imgList = res.data.uploadFile.filter((image, i)=>(i<3) && image);
        setImgList(res.data.imgList);
        setDetailImgList(res.data.detailImgList);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log('imgList-->', imgList);
  

  //장바구니 추가 버튼 이벤트
  const addCartItem = () => {
    //장바구니 추가 항목 : { pid, size, count, price }
    // alert(`${pid} --> 장바구니 추가 완료!`);
    // console.log(product.pid, product.price, size, 1);
    const cartItem = {
      pid: product.pid,
      size: size,
      qty: 1,
      price: product.price,
    };
    addCart(cartItem); // App.js의 addCart 함수 호출
  };

  return (
    <div className="content">
      <div className="product-detail-top">
        <div className="product-detail-image-top">
          <img src={product.image}   />
          <ImageList className="product-detail-image-top-list"
                      imgList={imgList}/>
        </div>

        <ul className="product-detail-info-top">
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{`${parseInt(
            product.price
          ).toLocaleString()}원`}</li>
          <li className="product-detail-subtitle">{product.info}</li>
          <li className="product-detail-subtitle-star">
            <StarRating totalRate={4.2} className="star-coral"/> <span>572개 리뷰 &nbsp;&nbsp; {">"}</span>
          </li>
          <li>
            <p className="product-detail-box">신규회원, 무이자 할부 등</p>
          </li>
          <li className="flex">
            <button className="product-detail-button size">사이즈 </button>
            <select
              className="product-detail-select2"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </li>
          <li className="flex">
            <button type="button" className="product-detail-button order">
              바로 구매
            </button>
            <button
              type="button"
              className="product-detail-button cart"
              onClick={addCartItem}
            >
              쇼핑백 담기
            </button>
            <div type="button" className="gift">
              <PiGiftThin />
              <div className="gift-span">선물하기</div>
            </div>
          </li>
          <li>
            <ul className="product-detail-summary-info">
              <li>상품 요약 정보</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
      <div className="product-detail-tab">

        {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY */}
        <ul className="tabs">
          {
            tabLabels.map((label, i) => 
                <li className={tabName === tabEventNames[i] ? "active": ''}>
                  <button type="button" onClick={(e)=> setTabName(tabEventNames[i])}>{ label }</button>
                </li>
            )
          }
        </ul>      
        

        {/* <ul className="tabs">
          <li className={tabName==="detail" ? "active": ''}>
            <button type="button" onClick={(e)=> setTabName("detail")}>DETAIL</button>
          </li>
          <li className={tabName==="review" ? "active": ''}>
            <button type="button" onClick={(e)=> setTabName("review")}>REVIEW</button>
          </li>
          <li className={tabName==="qna" ? "active": ''}>
            <button type="button" onClick={(e)=> setTabName("qna")}>Q&A</button>
          </li>
          <li className={tabName==="return" ? "active": ''}>
            <button type="button" onClick={(e)=> setTabName("return")}>RETURN & DELIVERY</button>
          </li>
        </ul> */}
        <div className="tabs_contents">
          { tabName === "detail" && <Detail imgList={detailImgList} /> }
          { tabName === "review" && <Review /> }
        </div>
      </div>
    </div>
  );
}

// path를 통해 넘어오는 값은 useParams 를 사용해 값을 가져옴
// 이벤트를 전역으로 사용할려면 {함수이름}
// 이벤트를 해당 페이진 내에서만 사용하려면 (()=>{})