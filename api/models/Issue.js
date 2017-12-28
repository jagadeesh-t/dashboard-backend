
module.exports = {
	attributes: {
		topic: {
			type: 'string',
			required:true
		},
		description:{
			type:'string'
		},
		date:{
			date:'date',
			required:true
		},

		category: {
			type : 'string',
			required : true
		},

		notes:{
			type:'string'
		},

		archived: {
			type: 'boolean',
			defaultsTo : false
		},
		comments: {
			type : 'array'
		},
		ministry:{
			type: 'string',
			required: true
		},
		status: {
			type: 'string',
			enum: ['Pending','Closed'],
			defaultsTo: 'Pending'
		},

	},

};
