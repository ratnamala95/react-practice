import React from 'react';
// in react we import images like so
import banner from '../img/banner.jpg';



class Banner extends React.Component{
    render(){
        return(
            <div>
                <img src={banner} alt=' ' className='banner'/>
            </div>
        );
    }
}



export default Banner;