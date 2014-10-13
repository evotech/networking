var custService = require('custService');
var customers = Alloy.Collections.customers;

custService.getCustomer();
customers.fetch();
Ti.API.info(customers.length);
//custService.deleteDatabase();

function showCustomer(event) {

	var selectedSection = $.listview.sections[event.sectionIndex];
	var selectedItem = selectedSection.getItemAt(event.itemIndex);

	var args = customers.get(selectedItem.lblID.text);
	
	var customerView = Alloy.createController("customerView", args).getView();

	customerView.open();
	
}

$.index.open();
