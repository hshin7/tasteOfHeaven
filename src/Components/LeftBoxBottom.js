// import { render } from '@testing-library/react';
import axios from 'axios';
import React, {Component} from 'react';
import Swal from 'sweetalert2';

class LeftBoxBottom extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            pickUpTime: '',
            totalPrice: 0
        }
    }

    clearServerArray = () => {
        axios.delete('/api/deleteOrder')
    }

    handleName = (value) => {
        this.setState({name: value})
    }

    handleTime = (value) => {
        this.setState({pickUpTime: value})
    }

    handleSave = () => {
        
        axios.get('/api/order').then((res) => {
            let totalPrice = 0;
            for(let i = 0; i < res.data.length; i++) {
                totalPrice += res.data[i].priceQty1;
                totalPrice += res.data[i].priceQty2;
                totalPrice += res.data[i].priceQty3;
                totalPrice += res.data[i].priceQty4;
            }
            this.setState({totalPrice: totalPrice})
        }).then(() => {
            Swal.fire({
                title: 'Coming right up!',
                text: `${this.state.name}, your order will be ready at ${this.state.pickUpTime}. The total cost is $${this.state.totalPrice}`,
                imageUrl: 'https://images.unsplash.com/photo-1579932709647-3a151893f730?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            this.clearServerArray()
            this.props.updateOrderArray()
            this.setState({name: ''})
            this.setState({pickUpTime: ''})
            this.setState({totalPrice: 0})
        })
        
        
    }

    incrementFoodQty1 = (order) => {
        axios.put(`/api/order/${order.id}`, { food: {
            foodName: order.foodName,
            foodQty1: order.foodQty1 + 1,
            foodQty2: order.foodQty2,
            foodQty3: order.foodQty3,
            foodQty4: order.foodQty4,
            meatName1: order.meatName1,
            meatName2: order.meatName2,
            meatName3: order.meatName3,
            meatName4: order.meatName4,
            priceQty1: order.priceQty1 + order.price1,
            priceQty2: order.priceQty2,
            priceQty3: order.priceQty3,
            priceQty4: order.priceQty4,
            price1: order.price1,
            price2: order.price2,
            price3: order.price3,
            price4: order.price4,
            id: order.id
        }}).then(() => {
            this.props.updateOrderArray()
        }).catch((e) => {
            console.log(e)
        })
    }
    decrementFoodQty1 = (order) => {
        if(order.foodQty1 > 0) order.foodQty1 -= 1
        if(order.priceQty1 - order.price1 >= 0) order.priceQty1 -= order.price1

        axios.put(`/api/order/${order.id}`, { food: {
            foodName: order.foodName,
            foodQty1: order.foodQty1,
            foodQty2: order.foodQty2,
            foodQty3: order.foodQty3,
            foodQty4: order.foodQty4,
            meatName1: order.meatName1,
            meatName2: order.meatName2,
            meatName3: order.meatName3,
            meatName4: order.meatName4,
            priceQty1: order.priceQty1,
            priceQty2: order.priceQty2,
            priceQty3: order.priceQty3,
            priceQty4: order.priceQty4,
            price1: order.price1,
            price2: order.price2,
            price3: order.price3,
            price4: order.price4,
            id: order.id
        }}).then(() => {
            this.props.updateOrderArray()
        }).catch((e) => {
            console.log(e)
        })
    }
    incrementFoodQty2 = (order) => {
        axios.put(`/api/order/${order.id}`, { food: {
            foodName: order.foodName,
            foodQty1: order.foodQty1,
            foodQty2: order.foodQty2 + 1,
            foodQty3: order.foodQty3,
            foodQty4: order.foodQty4,
            meatName1: order.meatName1,
            meatName2: order.meatName2,
            meatName3: order.meatName3,
            meatName4: order.meatName4,
            priceQty1: order.priceQty1,
            priceQty2: order.priceQty2 + order.price2,
            priceQty3: order.priceQty3,
            priceQty4: order.priceQty4,
            price1: order.price1,
            price2: order.price2,
            price3: order.price3,
            price4: order.price4,
            id: order.id
        }}).then(() => {
            this.props.updateOrderArray()
        }).catch((e) => {
            console.log(e)
        })
    }
    decrementFoodQty2 = (order) => {
        if(order.foodQty2 > 0) order.foodQty2 -= 1
        if(order.priceQty2 - order.price2 >= 0) order.priceQty2 -= order.price2

        axios.put(`/api/order/${order.id}`, { food: {
            foodName: order.foodName,
            foodQty1: order.foodQty1,
            foodQty2: order.foodQty2,
            foodQty3: order.foodQty3,
            foodQty4: order.foodQty4,
            meatName1: order.meatName1,
            meatName2: order.meatName2,
            meatName3: order.meatName3,
            meatName4: order.meatName4,
            priceQty1: order.priceQty1,
            priceQty2: order.priceQty2,
            priceQty3: order.priceQty3,
            priceQty4: order.priceQty4,
            price1: order.price1,
            price2: order.price2,
            price3: order.price3,
            price4: order.price4,
            id: order.id
        }}).then(() => {
            this.props.updateOrderArray()
        }).catch((e) => {
            console.log(e)
        })
    }
    incrementFoodQty3 = (order) => {
        axios.put(`/api/order/${order.id}`, { food: {
            foodName: order.foodName,
            foodQty1: order.foodQty1,
            foodQty2: order.foodQty2,
            foodQty3: order.foodQty3 + 1,
            foodQty4: order.foodQty4,
            meatName1: order.meatName1,
            meatName2: order.meatName2,
            meatName3: order.meatName3,
            meatName4: order.meatName4,
            priceQty1: order.priceQty1,
            priceQty2: order.priceQty2,
            priceQty3: order.priceQty3 + order.price3,
            priceQty4: order.priceQty4,
            price1: order.price1,
            price2: order.price2,
            price3: order.price3,
            price4: order.price4,
            id: order.id
        }}).then(() => {
            this.props.updateOrderArray()
        }).catch((e) => {
            console.log(e)
        })
    }
    decrementFoodQty3 = (order) => {
        if(order.foodQty3 > 0) order.foodQty3 -= 1
        if(order.priceQty3 - order.price3 >= 0) order.priceQty3 -= order.price3

        axios.put(`/api/order/${order.id}`, { food: {
            foodName: order.foodName,
            foodQty1: order.foodQty1,
            foodQty2: order.foodQty2,
            foodQty3: order.foodQty3,
            foodQty4: order.foodQty4,
            meatName1: order.meatName1,
            meatName2: order.meatName2,
            meatName3: order.meatName3,
            meatName4: order.meatName4,
            priceQty1: order.priceQty1,
            priceQty2: order.priceQty2,
            priceQty3: order.priceQty3,
            priceQty4: order.priceQty4,
            price1: order.price1,
            price2: order.price2,
            price3: order.price3,
            price4: order.price4,
            id: order.id
        }}).then(() => {
            this.props.updateOrderArray()
        }).catch((e) => {
            console.log(e)
        })
    }
    incrementFoodQty4 = (order) => {
        axios.put(`/api/order/${order.id}`, { food: {
            foodName: order.foodName,
            foodQty1: order.foodQty1,
            foodQty2: order.foodQty2,
            foodQty3: order.foodQty3,
            foodQty4: order.foodQty4 + 1,
            meatName1: order.meatName1,
            meatName2: order.meatName2,
            meatName3: order.meatName3,
            meatName4: order.meatName4,
            priceQty1: order.priceQty1,
            priceQty2: order.priceQty2,
            priceQty3: order.priceQty3,
            priceQty4: order.priceQty4 + order.price4,
            price1: order.price1,
            price2: order.price2,
            price3: order.price3,
            price4: order.price4,
            id: order.id
        }}).then(() => {
            this.props.updateOrderArray()
        }).catch((e) => {
            console.log(e)
        })
    }
    decrementFoodQty4 = (order) => {
        if(order.foodQty4 > 0) order.foodQty4 -= 1
        if(order.priceQty4 - order.price4 >= 0) order.priceQty4 -= order.price4

        axios.put(`/api/order/${order.id}`, { food: {
            foodName: order.foodName,
            foodQty1: order.foodQty1,
            foodQty2: order.foodQty2,
            foodQty3: order.foodQty3,
            foodQty4: order.foodQty4,
            meatName1: order.meatName1,
            meatName2: order.meatName2,
            meatName3: order.meatName3,
            meatName4: order.meatName4,
            priceQty1: order.priceQty1,
            priceQty2: order.priceQty2,
            priceQty3: order.priceQty3,
            priceQty4: order.priceQty4,
            price1: order.price1,
            price2: order.price2,
            price3: order.price3,
            price4: order.price4,
            id: order.id
        }}).then(() => {
            this.props.updateOrderArray()
        }).catch((e) => {
            console.log(e)
        })
    }

    render() {
        return(
            <div className = 'reviewOrder'>
                <h4>Order:</h4>
                <div className = 'inputBox'>
                    <input type ='text' placeholder = 'insert your name' value = {this.state.name} onChange = {(e) => this.handleName(e.target.value)}/>
                    <br/>
                    <input type ='text' placeholder = 'insert pick-up time' value = {this.state.pickUpTime} onChange = {(e) => this.handleTime(e.target.value)}/>
                </div>

                <div>
                    {this.props.orderArray.map((order) => {
                        return (
                            <div>
                            <p>{order.foodName}</p>
                            <p>----------</p>
                            {order.foodQty1 ? <div> <p>{order.meatName1}: {order.foodQty1}</p> <p>${order.priceQty1}</p> <button onClick={() => {
                                this.decrementFoodQty1(order)
                            }}>-</button><button onClick={() => {
                                this.incrementFoodQty1(order)
                            }}>+</button> </div>: null}
                            
                            {order.foodQty2 ? <div> <p>{order.meatName2}: {order.foodQty2}</p> <p>${order.priceQty2}</p> <button onClick={() => {
                                this.decrementFoodQty2(order)
                            }}>-</button><button onClick={() => {
                                this.incrementFoodQty2(order)
                            }}>+</button></div> : null}
                       
                            {order.foodQty3 ? <div> <p>{order.meatName3}: {order.foodQty3}</p> <p>${order.priceQty3}</p> <button onClick={() => {
                                this.decrementFoodQty3(order)
                            }}>-</button><button onClick={() => {
                                this.incrementFoodQty3(order)
                            }}>+</button></div> : null}
                            
                            {order.foodQty4 ? <div> <p>{order.meatName4}: {order.foodQty4}</p> <p>${order.priceQty4}</p> <button onClick={() => {
                                this.decrementFoodQty4(order)
                            }}>-</button><button onClick={() => {
                                this.incrementFoodQty4(order)
                            }}>+</button></div> : null}
                            <br></br>
                            
                            </div>
                        )
                    })}
                </div>
    
                <br/>
                <button className = 'button' onClick = {() => {
                    this.handleSave()
                }}>Check Out</button>
            </div>
            
        )
    };
}

export default LeftBoxBottom;