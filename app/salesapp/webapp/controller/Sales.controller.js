sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("app.sales.salesapp.controller.Sales", {
        onInit() {
        },
        onPressDetail(oEvent) {
            const oContext = oEvent.getSource().getBindingContext();
            const sID = oContext.getProperty("ID");

            this.getOwnerComponent().getRouter().navTo("detail",{
                ID: sID
            })
        }
    });
});