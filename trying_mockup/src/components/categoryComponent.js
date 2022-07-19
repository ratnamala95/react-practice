
function Component(props){
    return(
        <div className='componentdiv'>
            <img src={props.category} alt='steps' className="component_image"/>
        </div>
    );
}

export default Component;