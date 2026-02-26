using app.sales from '../db/schema';

service SalesService {
    @odata.draft.enabled
    entity SalesOrders as projection on sales.SalesOrders;
    
    entity SalesOrderItem as projection on sales.SalesOrderItems;
    
    action submitOrder(ID : UUID) returns Boolean;

}