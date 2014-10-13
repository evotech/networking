exports.definition = {
	config: {
		columns: {
		    "id": "string",
		    "firstName": "string",
		    "lastName": "string",
		    "email": "string",
		    "companyName": "string",
		    "position": "string",
		    "phone": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "customers",
			idAttribute: "id"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};