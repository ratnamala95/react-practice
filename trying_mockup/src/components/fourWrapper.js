import Component from "./categoryComponent";


function FourWrapper(props){
    return(
        <div className="fourWrapper">
            <Component category={props.renderImage1}/>
            <Component category={props.renderImage2}/>
            <Component category={props.renderImage3}/>
            <Component category={props.renderImage4}/>
        </div>
    );
}

export default FourWrapper;