import React from 'react';

export default function GaugeGrade({title, good, small, big, name1, name2, name3}) {
    return (
        <div className="gauge_box">
            <div className="tit">{title}</div>
            <ul>
                <li>
                    <div>{name1}</div>
                    <div className="bar_area"><span style={{width:good}}></span></div>
                    <div>{good}%</div>
                </li>
                <li>
                    <div>{name2}</div>
                    <div className="bar_area"><span style={{width:small}}></span></div>
                    <div>{small}%</div>
                </li>
                <li>
                    <div>{name3}</div>
                    <div className="bar_area"><span style={{width:big}}></span></div>
                    <div>{big}%</div>
                </li>
            </ul>
        </div>
    );
}

