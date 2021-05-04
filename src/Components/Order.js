import axios from 'axios';
import react, {Component} from 'react';
import Food from '../Components/Food';

class Order extends Component {

    constructor(){
        super()
    }

   
    render(){
        return (
            <div>
                <div className = 'leftFood'>
                     <div className = 'Tacos'>
                        <Food updateOrderArray={this.props.updateOrderArray} foodType = 'Tacos' typesOf = {['shrimp', 'steak', 'chicken', 'veggie']} price = {[4.50, 2.50, 2.00, 1.50]}/> 
                    </div>
                  
                    
                    <div className = 'Burritos'>
                        <Food updateOrderArray={this.props.updateOrderArray} foodType = 'Burritos' typesOf = {['shrimp', 'steak', 'chicken', 'veggie']} price = {[9.00, 8.00, 7.00, 6.50]}/>
                    </div>
                </div>
                
                <div className = 'rightFood'>
                    <div className = 'Quesadilla'>
                        <Food updateOrderArray={this.props.updateOrderArray} foodType = 'Quesadilla' typesOf = {['shrimp', 'steak', 'chicken', 'veggie']} price = {[5.00, 6.50,6.00, 5.50]}/>
                    </div>
                    <div className = 'Nachos'>
                        <Food updateOrderArray={this.props.updateOrderArray} foodType = 'Nachos' typesOf = {['shrimp', 'steak', 'chicken', 'veggie']} price = {[5.00,7.00, 8.00,6.00]} />
                    </div>
                </div>

            </div>
        )
    }
}


export default Order;