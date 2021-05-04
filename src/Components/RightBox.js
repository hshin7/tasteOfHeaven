import React, {Component} from 'react';
import Order from '../Components/Order.js';

function RightBox(props){
    return(
        <div>
            <Order updateOrderArray={props.updateOrderArray}/>
        </div>
    )
}

export default RightBox;