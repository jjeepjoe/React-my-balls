import React from "react";
import './Letter.css';
import CN from 'classnames';

export default class Letter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arrLength: this.props.length,
            letter: this.props.letter,
            id: this.props.id,
            actionOpacityOut: false,
            actionOut: false,
            actionIn: false
        };        
    }
    // START THE TRANSITION > ATTACH THE TIMEOUT WITH REVERSE DELAY
    componentDidMount(){
        this.setState({ actionOut: true });
        let number = (this.state.arrLength - this.state.id);
        // THIS IS THE TIMER FOR THE OUT TO DISPLAY AND THE IN TO START. > AND SPEED BETWEEN LETTERS
        setTimeout(CloseElement.bind(this), (2500 * number)); 
    }

    // USING CLASSNAMES WE CAN DYNAMICALLY CHANGE THE CSS CLASS
    render() {  
        let spanClass = CN({
            'span-opactiy-out': this.state.actionOpacityOut,
            'span-actionOut': this.state.actionOut,
            'span-actionIn': this.state.actionIn
        });
        return (<span name={this.props.id} className={spanClass}><a href='#'>{this.props.letter}</a></span> );
    }
}

// HAD TO EXTERNALIZE THE INTERNAL FUNCTION SINCE THE SET-TIME WASN'T ACCEPTING IT
function CloseElement(){
    console.log("CLOSING ACTION");
    let valueID = this.state.id;
    this.setState({ actionOpacityOut: true, actionOut: false, actionIn: true });
    // some trigger to do action
    if (valueID === 0) {
        this.props.resetFunction();
    }
}