import axios from 'axios';
import react, {Component} from 'react';


class Food extends Component {
    constructor(){
        super()

        this.state = {
            foodQty1: 0,
            foodQty2: 0,
            foodQty3: 0,
            foodQty4: 0,
            priceQty1: 0,
            priceQty2: 0,
            priceQty3: 0,
            priceQty4: 0
        }
    }

    IncrementItem1 = () => {
        this.setState({foodQty1: this.state.foodQty1 + 1});
        this.setState({priceQty1: this.state.priceQty1 + this.props.price[0]})
    }

    IncrementItem2 = () => {
        this.setState({foodQty2: this.state.foodQty2 + 1});
        this.setState({priceQty2: this.state.priceQty2 + this.props.price[1]})
    }
    IncrementItem3 = () => {
        this.setState({foodQty3: this.state.foodQty3 + 1});
        this.setState({priceQty3: this.state.priceQty3 + this.props.price[2]})
    }
    IncrementItem4 = () => {
        this.setState({foodQty4: this.state.foodQty4 + 1});
        this.setState({priceQty4: this.state.priceQty4 + this.props.price[3]})
    }

    DecrementItem1 = () => {
        if(this.state.foodQty1 > 0) {
            this.setState({foodQty1: this.state.foodQty1 - 1});
        }
        if(this.state.priceQty1 - this.props.price[0] >= 0 ) this.setState({priceQty1: this.state.priceQty1 - this.props.price[0]})
    }

    DecrementItem2 = () => {
        if(this.state.foodQty2 > 0) this.setState({foodQty2: this.state.foodQty2 - 1});
        if(this.state.priceQty2 - this.props.price[1] >= 0 ) this.setState({priceQty2: this.state.priceQty2 - this.props.price[1]})
    }
    DecrementItem3 = () => {
        if(this.state.foodQty3 > 0) this.setState({foodQty3: this.state.foodQty3 - 1});
        if(this.state.priceQty3 - this.props.price[2] >= 0 ) this.setState({priceQty3: this.state.priceQty3 - this.props.price[2]})
    }
    DecrementItem4 = () => {
        if(this.state.foodQty4) this.setState({foodQty4: this.state.foodQty4 - 1});
        if(this.state.priceQty4 - this.props.price[3] >= 0 ) this.setState({priceQty4: this.state.priceQty4 - this.props.price[3]})
    }

    ToggleClick = () => {
        this.setState({show: !this.state.show});
    }




    addOrder = (food) => {
        axios.post('/api/order', {food: food})
        .then((res) => {
            this.setState({foodQty1: 0}) 
            this.setState({foodQty2: 0}) 
            this.setState({foodQty3: 0}) 
            this.setState({foodQty4: 0}) 
            this.props.updateOrderArray()
        })
        .catch((err) => {
            console.log(err) 
        })
    }


    render(){
        return (

            <div className = 'foodName'>
                <div className = 'foodItem'>
                    <p><b>{this.props.foodType}</b></p>
                        <div className = 'types0'>
                            <p className="margin-right">{this.props.typesOf[0]}</p>
                                <div className = 'types0change'>
                                    <button className = 'types0plus' onClick = {this.IncrementItem1}>+</button>
                                    {this.state.foodQty1}
                                    <button className = 'types0minus' onClick = {this.DecrementItem1}>-</button>
                                    <p>${this.props.price[0]}</p>
                                </div>

                        </div>

                        <div className = 'types1' >
                            <p className="margin-right">{this.props.typesOf[1]}</p>
                                <div className = 'types1change'>
                                    <button className = 'types1plus' onClick = {this.IncrementItem2}>+</button>
                                    {this.state.foodQty2}
                                    <button className = 'types1minus' onClick = {this.DecrementItem2}>-</button>
                                    <p>${this.props.price[1]}</p> 
                                </div>
                        </div>

                        <div className = 'types2'>
                        <p className="margin-right">{this.props.typesOf[2]}</p>
                                <div className = 'types2change'>
                                
                                    <button className = 'types2plus' onClick = {this.IncrementItem3}>+</button>
                                    {this.state.foodQty3}
                                    <button className = 'types2minus' onClick = {this.DecrementItem3} >-</button>
                                    <p>${this.props.price[2]}</p> 
                                </div>
                        </div>

                        <div className = 'types3'>
                            <p className="margin-right">{this.props.typesOf[3]}</p>
                                <div className = 'types3change'>
                                    <button className = 'types3plus' onClick = {this.IncrementItem4}>+</button>
                                    {this.state.foodQty4}
                                    <button className = 'types3minus' onClick = {this.DecrementItem4}>-</button>
                                    <p>${this.props.price[3]}</p> 
                                 </div>
                        </div>
                <button className = "addToOrderButton" onClick = {() => {
                    this.addOrder({
                        foodName: this.props.foodType,
                        foodQty1: this.state.foodQty1,
                        foodQty2: this.state.foodQty2,
                        foodQty3: this.state.foodQty3,
                        foodQty4: this.state.foodQty4,
                        meatName1: this.props.typesOf[0],
                        meatName2: this.props.typesOf[1],
                        meatName3: this.props.typesOf[2],
                        meatName4: this.props.typesOf[3],
                        priceQty1: this.state.priceQty1,
                        priceQty2: this.state.priceQty2,
                        priceQty3: this.state.priceQty3,
                        priceQty4: this.state.priceQty4,
                        price1: this.props.price[0],
                        price2: this.props.price[1],
                        price3: this.props.price[2],
                        price4: this.props.price[3],
                        id: null
                    }) 
                }}> Add to order </button>
                    
                
                </div>
            </div>
        );
    }
}


export default Food; 