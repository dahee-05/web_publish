import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailProductDesc from './DetailProductDesc.jsx';
import DetailProductInfo from './DetailProductInfo.jsx';

export default function DetailProductList() {
  const [ productInfo, setProductInfo ] = useState([]);
  const [ productDesc, setProductDesc ] = useState([]);
  const [ isMoreView, setIsMoreView ] = useState(false);

  useEffect(()=> {
    axios.get('/data/productDetail.json')
         .then((res)=> {
          setProductInfo(res.data.product_information_list);
          setProductDesc(res.data.product_description_list);
         })
         .catch((error)=>console.log(error));
  },{});
  
  const handleMoreView = () =>{
    setIsMoreView(!isMoreView);
  };
  
  
  return (
    <div className='product_detail_content' id='detail'>
      <div className='product_notice'>
        <img src='/images/product_detail1.jpg'></img>
      </div>
      <div className='product_images'>
        <img src='/images/product_detail2.jpg'></img>
        <img src='/images/product_detail3.jpg'></img>
      </div>
      <div className='product_description'>
        <ul className='product_description_list'>
          { productDesc && productDesc.map((item)=>(
              <DetailProductDesc {...item}/>
          ))}
        </ul>
      </div>
      <div className='product_information_disclosure'>
        <h4>상품 정보 고시</h4>
        <div className='noti_prod_info'>
          <table>
            <colgroup>
              <col style={{'width':'315px'}}/>
              <col />
            </colgroup>
            <tbody> 
              {productInfo && (isMoreView? productInfo : productInfo.slice(0,4)).map((proInfo, idx)=>(
                  <DetailProductInfo key={idx} {...proInfo} idx={idx} isMoreView={isMoreView} />
              ))}
            </tbody>
          </table>
        </div>
        <p className='prod_info'>본 상품 정보 및 거래 조건의 내용은 판매자가 직접 등록한 것으로서 등록된 정보에 대한 책임은 판매자에게 있습니다.</p>
         <p className='prod_info_more'>
            <button type='button' className='btn_prod_info' onClick={handleMoreView}>
            <span>{isMoreView ? '접기':'상품 정보 고시 더보기'} </span>
            </button>
          </p>
        {/* {isMoreView === false &&
          <p className='prod_info_more'>
            <button type='button' className='btn_prod_info' onClick={handleMoreView}> 
              <span>상품 정보 고시 더보기 </span>
            </button>
          </p>
        } */}
      </div>
    </div>
  );
}

