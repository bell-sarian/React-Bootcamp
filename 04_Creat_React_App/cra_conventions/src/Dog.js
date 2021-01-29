import React, {Component} from 'react';
import './Dog.css';
import Cat from "./Cat.jpg"

class Dog extends Component{
    render() {
        return(
            <div className="Dog">
                <h1>DOG!</h1>
                <img className="Dog-Cat" src={Cat} />
            </div>
        )
    }
}

export default Dog;