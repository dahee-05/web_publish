import React from 'react';
import DetailImage from './DetailImage.jsx';
import DetailInfo from './DetailInfo.jsx';
import DetailInfoNotice from './DetailInfoNotice.jsx';


export default function ProductDetail({imgList}) {

  return (
    <>
      <DetailImage imgList={imgList} />
      <DetailInfo />
      <DetailInfoNotice />
    </>
  );
}

