import React from "react";


class Clock extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            date: new Date()  //setting up initial state
        }
    }

    // changing state
    tick(){
        this.setState({date: new Date()});
    }


    // adding timer on component mount
    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000);
    }

    // freeing up resources on component destructions
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;