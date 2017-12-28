
module.exports = {
	attributes: {
		requestType: {
			type: 'string',
			required:true
		},
		request:{
			type:'string'
		},
		date:{
			date:'date',
			required:true
		},

		ministry: {
			type : 'string',
			required : true
		},
		status: {
			type: 'string',
			enum: ['Approved','Rejected'],
			defaultsTo: 'Approved'
		}

	},

};
