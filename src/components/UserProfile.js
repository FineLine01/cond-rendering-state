//First import the useStat hook
import { useState } from 'react';
export default function UserProfile() {

    // Initiate the state variable
    
        const img1 = 'https://cdn.pixabay.com/photo/2023/02/05/17/25/leaves-7770035_960_720.jpg';
    
        const img2 = 'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_960_720.jpg';
        
    const [imageSrc, setImageSrc ] = useState(img1);

    const userName = "Greenery"

    function changeImage(){

        if (imageSrc === img1){
        setImageSrc(img2);
    } else {
        setImageSrc(img1);
    }
    }
        
        return (
        <div className="userProfile">
        <h3>{userName}</h3>
        <img src={imageSrc} alt="" width="250"/>
        <button className="btn-img" onClick={changeImage}>Change image</button>
        </div>
    )
}   
