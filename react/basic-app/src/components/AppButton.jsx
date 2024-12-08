import { useEffect, useState } from 'react';
import Button from './Button.jsx';
import ButtonList from './ButtonList.jsx';

export default function AppButton() {
    const [propsList, setPropsList] = useState([]);    

    useEffect(()=>{
        fetch('data/button_names.json')
            .then((result) => result.json())
            .then((jsonData) => setPropsList(jsonData))
            .catch();
    },[]);

    console.log(`propsList -> ${propsList}`);
    console.log(propsList);
    
    return (
        <>
            <div style={{display: 'flex'}}>
                <Button name="All" type="button"/>
                <Button name="Front-end" type="button"/>
                <Button name="Back-end" type="button"/>
                <Button name="Mobile" type="button"/>
                <Button name="Submit" type="submit"/>
                <Button name="Reset" type="reset"/>
            </div>
            <div style={{display: 'flex'}}>
                <ButtonList list={propsList} />
            </div>
        </>
    );
}