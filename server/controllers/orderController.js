
let order = []
let id = 0;


module.exports = {
    getOrder: (req, res) => {
        res.status(200).send(order)
    },
    addOrder: (req, res) => {
        const {food} = req.body
        food.id = id;
        order.push(food);
        res.status(200).send(food)
        id++
    },
    deleteOrder: (req, res) => {
        const {id} = req.params
        const index = order.findIndex((e) => {
            return e.id === +id
        })
        if(index === -1){
            return res.status(500).send('Food not found')
        }
        order.splice(index,1)
        res.status(200).send(order)
    },
    editOrder: (req, res) => {
        const {id} = req.params
        
        const {food} = req.body
        let index;
        for(let i = 0; i < order.length; i++) {
            if(order[i].id === parseInt(id)) index = i
        }
        order[index] = food
        res.status(200).send(order) 
    },
    deleteOrderArray: (req, res) =>  {
        order = [];
        res.sendStatus(200)
    }
}
