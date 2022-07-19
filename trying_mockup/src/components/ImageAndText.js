function ImageandText(props){
    return(
        <div className="component_div1">
            <img src={props.left_image} className='component_image1' alt=" "/>
            <div>
                <p className="right_text_para">
                    {props.right_text}
                </p>
            </div>
        </div>
    );
}

export default ImageandText;