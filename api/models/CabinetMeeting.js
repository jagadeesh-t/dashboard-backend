
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
			model : 'category',
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
		approvedUsers: {
			type : 'array'
		},
		ministry:{
			type: 'string',
			required: true
		},
		status: {
			type: 'string',
			enum: ['PENDING','PENDING_CABINET','APPROVED','REJECTED'],
			defaultsTo: 'PENDING'
		},

	},

};
