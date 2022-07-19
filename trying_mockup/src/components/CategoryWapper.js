import React from 'react';
import Component from './categoryComponent';
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';

class CategoryWapper extends React.Component{
    render(){
        return(
            <div>
                <div className='wrapper'>
                    <Component category={image1}/>
                    <Component category={image2}/>
                    <Component category={image3}/>
                </div>
            </div>
        );
    }
}

export default CategoryWapper;