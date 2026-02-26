const UPDATE = require("@sap/cds/lib/ql/UPDATE");

module.exports = (srv) => {
    const { SalesOrders } = srv.entities;

    srv.before('CREATE',SalesOrders,async (req) => {
        const items = req.data.items;

        if(items){
            let total = 0;

            for(let item of items){
                item.amount = item.quantity * item.price;
                total += item.amount;
            }

            req.data.totalAmount = total;
            req.data.status = 'NEW';
        }
    });

    //Custom Action
    srv.on('submitOrder', async (req) => {
        const { ID } = req.data;

        await UPDATE(SalesOrders).set({status: 'SUBMITTED'}).where({ ID });
        return true;
    });

    // Validate quantity 
    srv.before('CREATE', SalesOrders, async (req) =>{
        const quantity = req.data.quantity;

        if(quantity <= 0){
            req.error(400, 'Quantity must be greater than zero');
        }

        
    });
}