exports.getCustomer = function(callback) {
	var xhr = Ti.Network.createHTTPClient();
	
	xhr.onload = function(e) {
		Ti.API.info('starting on load event');
		deleteDatabase();
		Ti.API.info(JSON.stringify(this));
		
		if (this.responseText !== "") {
			var response = JSON.parse(this.responseText);
			var records = response.Records;
			for (var i = 0; i < records.length; i++) {
				var customer = Alloy.createModel('customers', {
					id : records[i].ID,
					firstName : records[i].FirstName,
					lastName : records[i].LastName,
					email : records[i].Email,
					companyName : records[i].CompanyName,
					position : records[i].Position,
					phone : records[i].Phone
				});
				customer.save();

			}
		}
	};

	xhr.onerror = function(e) {
		alert('ERROR');
	};

	xhr.open('GET', 'http://services.evotech-event.com/JSON.php');
	// xhr.setRequestHeader('Content-Type','application/json','charset=utf-8');
	xhr.send();
};


var deleteDatabase = function() {
	var db = Ti.Database.open('_alloy_');
	var deleteRecords = db.execute('DELETE FROM customers');
	Ti.API.info('Affected Rows    ' + db.getRowsAffected());
	db.close();
};
