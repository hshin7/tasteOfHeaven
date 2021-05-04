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
                    <p className = 'foodTypeBorder'><b>{this.props.foodType}</b></p>
                        <div className = 'types0'>
                            <img className = 'shrimpIcon' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTciPbvcH7NRx2GuyMz5DPz4fRqhGiAcUYxw&usqp=CAU ' alt = 'shrimp icon'></img>
                            <p className="margin-right">{this.props.typesOf[0]}</p>
                                <div className = 'types0change'>
                                    <button className = 'types0plus' onClick = {this.IncrementItem1}>+</button>
                                    {this.state.foodQty1}
                                    <button className = 'types0minus' onClick = {this.DecrementItem1}>-</button>
                                    <p>${this.props.price[0]}</p>
                                </div>

                        </div>

                        <div className = 'types1' >
                            <img className = 'cowIcon' src = 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/cow.png' alt = 'cow icon'></img>
                            <p className="margin-right">{this.props.typesOf[1]}</p>
                                <div className = 'types1change'>
                                    <button className = 'types1plus' onClick = {this.IncrementItem2}>+</button>
                                    {this.state.foodQty2}
                                    <button className = 'types1minus' onClick = {this.DecrementItem2}>-</button>
                                    <p>${this.props.price[1]}</p> 
                                </div>
                        </div>

                        <div className = 'types2'>
                            <img className = 'chickenIcon' src = 'data:image/png;base64,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 ' alt = 'chicken icon'></img>
                            <p className="margin-right">{this.props.typesOf[2]}</p>
                                <div className = 'types2change'>
                                
                                    <button className = 'types2plus' onClick = {this.IncrementItem3}>+</button>
                                    {this.state.foodQty3}
                                    <button className = 'types2minus' onClick = {this.DecrementItem3} >-</button>
                                    <p>${this.props.price[2]}</p> 
                                </div>
                        </div>

                        <div className = 'types3'>
                            <img className = 'veggieIcon' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfx-tMxUE41ijQRkqyex3Y0HzxFpkNSKHUoL_dTlA6NknRvVAFRPHEa9YjAnuBKCpCEg&usqp=CAU ' alt = 'veggie icon'></img>
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