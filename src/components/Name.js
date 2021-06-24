import React from 'react';
import Letter from './Letter';

export default class Name extends React.Component{
    constructor(props){
        super(props); 
        this.state = {  name: this.props.name,
                        nameDisplay: Array.from(this.props.name),
                        displayArray: [],
                        isClicked: false,
                        isCheckedOrNot: false
                    };
        this.HandleClick = this.HandleClick.bind(this);
        // WHEN AN INTERNAL ELEMENT NEEDS TO USE A METHOD > THEN WE NEED TO BIND IT TO THE ELEMENT > NOTICE THE EXTERNAL CALL DOES NOT REQUIRE
        // this.ResetElement = this.ResetElement(this);
    }

    HandleClick(){
        this.setState((state) => {return {isCheckedOrNot: !state.isCheckedOrNot}});
        for(let item of this.state.nameDisplay){
            
            if (this.state.nameDisplay.indexOf(item) > 0){
                this.state.displayArray.push(item);
            }
        }               
    }
    // TRIGGER THE RESET ACTION > NEED TO PASS THE CLASS OBJECT
    ResetElement = () => {
        setTimeout(DisplayReset, 5000, this);
    }

    render() {

        return (<h1 onClick={ this.state.isCheckedOrNot ? undefined : this.HandleClick }> { this.state.nameDisplay[0] } 

            { this.state.displayArray.map((letter, index) => {
                return ( 
                    <Letter letter={letter} 
                    key={index} 
                    id={index} 
                    length={this.state.displayArray.length} 
                    resetFunction={this.ResetElement} /> 
                );
            }) } 
        </h1>);
    }
}

// EXTERNAL FOR THE SET-TIMER > STATE PAIN IN THE A > STAY AWAY FROM NORMAL EVENT NAMES AS IT WAS MAKING DUPLICATES
function DisplayReset(obj){
    console.log("THIS MOFO!");
    obj.setState({isCheckedOrNot: false, displayArray: []});
}

