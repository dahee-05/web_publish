import React from 'react';

export default function ReturnDeliveryItem({title, text1, text2, text3, text4}) {
    return (
        <div className='notice'>
            <div><b>{title}</b></div>
            <div>
                <ul className='notice-text'>
                    <li>{text1}</li>
                    <li>{text2}</li>
                    <li>{text2}</li>
                    <li>{text3}</li>
                    <li>{text4}</li>
                </ul>
            </div>
        </div>
    );
}

