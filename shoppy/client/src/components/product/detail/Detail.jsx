import React,{useEffect, useState} from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import GaugeGrade from './GaugeGrade.jsx';


export default function Detail() {
    const review = [
        {
            "reviewSize":"적당함",
            "reviewColor":"같음",
            "reviewTexture":"같음",
            "size":"small",
            "star":4.7,
            "reviewTxt":"사이즈가 넉넉해서 안에 두꺼운 니트를 입을 수 있어요. 그래서 추운날에도 따뜻하게 입고 다닐수 있어요. 무게도 엄청 가볍구요. 예쁜 경량패딩점퍼 엄청 찾았는데 이 제품이 딱이네요",
            "image":"https://media.wconcept.co.kr/review/306182087/306182087_1733542286789.jpeg?RS=300",
            "height": 162,
            "weight":57
        },
        {
            "reviewSize":"작음",
            "reviewColor":"비슷함",
            "reviewTexture":"다름",
            "size":"large",
            "star":3.5,
            "reviewTxt":"색상 고민 많았는데 넘 이쁘고 소재도 좋고 기장도 길어서 좋네요 다만 살짝 무게감은 있고 xs인데도 어깨가 장난아니네요ㅋㅋ",
            "image":"https://media.wconcept.co.kr/review/306064733/306064733_1737187461795.jpg?RS=600",
            "height": 168,
            "weight":51
        },
    ];

    let sumStar = 0;
    review.map(item => sumStar += item.star);

    // GaugeGrade
    const names = [
        {
            "label1":"적당함",
            "label2":"작음",
            "label3":"큼"
        },
        {
            "label1":"같음",
            "label2":"비슷함",
            "label3":"다름"
        },
        {
            "label1":"같음",
            "label2":"비슷함",
            "label3":"다름"
        }
    ];
    const sizeData = [
        {
            "title":"사이즈",
            "isGood": 37,
            "isSmall": 0,
            "isBig":63
        },
        {
            "title":"색상",
            "isGood": 63,
            "isSmall": 33,
            "isBig":4
        },
        {
            "title":"소재",
            "isGood": 73,
            "isSmall": 27,
            "isBig":0
        }
    ];

    return (
        <div className="box review" id='review'>
            
            {/* 리뷰 상단 */}
            <div className="review_avg">
                <div className="tit">상품 만족도(2)</div>
                <div className="detail">
                    <div className="left_num">
                        <p>구매하신 분들의 상품에 대한 평점입니다.</p>
                        <div className="star_grade_box">
                            <div className="star_grade"><span style={{width: (sumStar / review.length) * 36.4}}></span></div>
                            <div><strong>{sumStar / review.length}</strong> / 5.0</div>
                        </div>
                    </div>
                    <div className="right_graph">
                        {
                            sizeData.map((item, idx) =>(
                                <GaugeGrade title={item.title} good={item.isGood} small={item.isSmall} big={item.isBig} name1={names[idx].label1} name2={names[idx].label2} name3={names[idx].label3} />
                            ))
                        }
                        
                        {/* <div className="gauge_box">
                            <div className="tit">사이즈</div>
                            <ul>
                                <li>
                                    <div>적당함</div>
                                    <div className="bar_area"><span style={{width:'60%'}}></span></div>
                                    <div>50%</div>
                                </li>
                                <li>
                                    <div>적당함</div>
                                    <div className="bar_area"><span style={{width:'60%'}}></span></div>
                                    <div>50%</div>
                                </li>
                                <li>
                                    <div>적당함</div>
                                    <div className="bar_area"><span style={{width:'60%'}}></span></div>
                                    <div>50%</div>
                                </li>
                            </ul>
                        </div>
                        <div className="gauge_box">
                            <div className="tit">사이즈</div>
                            <ul>
                                <li>
                                    <div>적당함</div>
                                    <div className="bar_area"><span style={{width:'60%'}}></span></div>
                                    <div>50%</div>
                                </li>
                                <li>
                                    <div>적당함</div>
                                    <div className="bar_area"><span style={{width:'60%'}}></span></div>
                                    <div>50%</div>
                                </li>
                                <li>
                                    <div>적당함</div>
                                    <div className="bar_area"><span style={{width:'60%'}}></span></div>
                                    <div>50%</div>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <ul className="photo">
                    {
                        review.map((item) => (
                            <li><img src={item.image} alt="" /></li>
                        ))
                    }
                </ul>
            </div>
            {/* end 리뷰 상단 */}

            <div className="review_sort_tab">
                <ul>
                    <li className="on">최신순</li>
                    <li>평점 높은순</li>
                    <li>평점 낮은순</li>
                    <li>추천순</li>
                </ul>
                <button><AiOutlineQuestionCircle /></button>
            </div>
            {/* start 리뷰 테이블 */}
            <div className="review_list_box">
                
                    {
                        review.map((item) => (
                            <div className='wrap'>
                            <div className="star_grade"><span style={{width:item.star*20}}></span></div>
                            <div className="detail_info">
                                <div className="top_infomation">
                                    <ul>
                                        <li><span>구매옵션 : </span><span>{item.size}</span></li>
                                        <li><span>사이즈정보 : </span><span>{item.height}cm,{item.weight}kg</span></li>
                                    </ul>
                                    <div className="review_evaluation">
                                        <div><span>사이즈</span><span>{item.reviewSize}</span></div>
                                        <div><span>색상</span><span>{item.reviewColor}</span></div>
                                        <div><span>소재</span><span>{item.reviewTexture}</span></div>
                                    </div>
                                    <div className="user_info">
                                        <span>nj******** </span>
                                        <span>2024.12.07</span>
                                    </div>
                                </div>
                                <ul className="photo">
                                    <li><img src={item.image} alt="" /></li>
                                </ul>
                                <div className="review_txt">{item.reviewTxt}</div>
                                <div className="btns">
                                    <button>신고</button>
                                    <button>숨김</button>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                {/* <div className='wrap'>
                    <div className="star_grade"><span style={{width:'100%'}}></span></div>
                    <div className="detail_info">
                        <div className="top_infomation">
                            <ul>
                                <li><span>구매옵션 : </span><span>MEDIUM</span></li>
                                <li><span>사이즈정보 : </span><span>164cm,61kg</span></li>
                            </ul>
                            <div className="review_evaluation">
                                <div><span>사이즈</span><span>적당함</span></div>
                                <div><span>색상</span><span>같음</span></div>
                                <div><span>소재</span><span>같음</span></div>
                            </div>
                            <div className="user_info">
                                <span>nj******** </span>
                                <span>2024.12.07</span>
                            </div>
                        </div>
                        <ul className="photo">
                            <li><img src="https://media.wconcept.co.kr/review/306182087/306182087_1733542286789.jpeg?RS=300" alt="" /></li>
                        </ul>
                        <div className="review_txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi optio provident dolorem! Nam exercitationem dolore quae minus corporis eos quis?</div>
                        <div className="btns">
                            <button>신고</button>
                            <button>숨김</button>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* end 리뷰 테이블 */}

            {/* paging */}
            <div className="paging">
                <button className="btn_first"><MdKeyboardDoubleArrowLeft /></button>
                <button className="btn_prev"><MdOutlineKeyboardArrowLeft /></button>
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <button className="btn_next"><MdOutlineKeyboardArrowRight /></button>
                <button className="btn_last"><MdKeyboardDoubleArrowRight /></button>
            </div>
            {/* paging */}
        </div>
    );
}

