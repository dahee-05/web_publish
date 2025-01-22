import React from 'react'; 
import { useState, useEffect } from "react";
import { SlLock } from "react-icons/sl";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

export default function Qna() {
    const [qnaList, setQnaList] = useState([])
    useEffect(()=>{
        fetch("/data/qna.json")
        .then(data=> data.json())
        .then(jsonData=> setQnaList(jsonData.qnaList))
        .catch(error=> console.log(error))
        }, [])
    function handleWrite() {
        alert('시스템 점검중')
    }
    function handleOpen() {
        alert('비밀글은 작성자만 열람 가능합니다.')
    }
    return (
        <>
            {/* <div className="tab_nav">
                <ul>
                    <li >DETAIL</li>
                    <li>REVIEW</li>
                    <li className="on">Q&A</li>
                    <li>RETURN & DELIVERY</li>
                </ul>
            </div> */}
            {/* start cont */}
            <div className="tab_content_area" id='qna'>
                <div className="button_box">
                    <button type="button" 
                    className="qna_button"
                    onClick={handleWrite}>문의 등록</button>
                </div>
                <table className="qna_table">
                    <tbody className="qna_body">
                        {qnaList && qnaList.map((item)=>{
                            return(
                        <tr className="qna_content">
                            <td className="qna_check"><span className={item.qna_icon}>{item.qna_result}</span></td>
                            <td className="qna_title"
                                onClick={handleOpen}>
                                <span>{item.title}</span>
                                <span><SlLock /></span>
                            </td>
                            <td className="qna_id"><span>{item.id}</span></td>
                            <td className="qna_date"><span>{item.date}</span></td>
                        </tr>
                        )})}
                    </tbody>
                </table>
                    <ul className="qna_bottom">
                        <li><FiChevronsLeft /></li>
                        <li><FiChevronLeft /></li>
                        <li>1</li>
                        <li><FiChevronRight /></li>
                        <li><FiChevronsRight /></li>
                    </ul>
            </div>
            {/* end cont */}
        </>
    );
}

