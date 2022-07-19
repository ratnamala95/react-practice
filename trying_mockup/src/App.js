import React from 'react';
import Banner  from './components/banner';
import Paragraph from './components/Paragraph';
import Text from './components/text';
import ImageandText from './components/ImageAndText';
import CategoryWapper from './components/CategoryWapper';
import FourWrapper from './components/fourWrapper';
import VideoComponent from './components/videoComponent';
import leftimage1 from'./img/leftimage1.jpg';
import leftimage2 from'./img/leftimage2.jpg';
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';



class App extends React.Component{
    render(){
        const newline = "'\n";
        return(
            <div>
                <Banner />
                <Text text='SHOP BY CATEGORY'/>
                <CategoryWapper />
                <Paragraph 
                    text={"Lorem Ipsum dolo sit amet."+{newline}+" Lipsum dummy text"}
                />
                <ImageandText 
                    left_image={leftimage1} 
                    right_text='Lorem Ipsum dolo sit amet'
                />
                <Text text="CHECK OUT WHAT'S NEW " />
                <FourWrapper renderImage1={image1} 
                    renderImage2={image2}
                    renderImage3={image3}
                    renderImage4={leftimage1}
                />
                <Paragraph
                    text='dummy text'
                />
                <ImageandText 
                    left_image={leftimage2} 
                    right_text='Lorem Ipsum dolo sit amet'
                />
                <Text text='Lorem Ipsum Dolo' />
                <FourWrapper renderImage1={image1} 
                    renderImage2={image2}
                    renderImage3={image3}
                    renderImage4={leftimage1}
                />
                {/* <VideoComponent /> */}
            </div>
        );
    }
}

export default App;