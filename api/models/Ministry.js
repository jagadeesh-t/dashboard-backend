module.exports = {
  attributes: {
   
   ministryName : {
    type: 'string',
    required : true
   },
   minister : {
    model: 'UserProfile',
	
   }
    
  },
 
};
