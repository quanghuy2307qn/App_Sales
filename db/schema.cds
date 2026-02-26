namespace app.sales;

using { cuid , managed } from '@sap/cds/common';

entity SalesOrders : cuid, managed {
    orderNo        : String(20);
    customer       : String(100);
    currency       : String(5);
    totalAmount    : Decimal(15,2);
    status         : String(20);

    items          : Composition of many SalesOrderItems
                     on items.parent = $self;
}

entity SalesOrderItems : cuid, managed {
    parent         : Association to SalesOrders;
    product        : String(100);
    quantity       : Integer;
    price          : Decimal(15,2);
    amount         : Decimal(15,2);
}