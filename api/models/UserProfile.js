module.exports = {
  attributes: {
    name: {
      type: 'string',
      required:true
    },
    
    email: {
      type: 'email',
      required:true,
      unique: true
    },
    password:{
    	type:'string',
    	required:true
    },
    ministry : {
      model : 'Ministry',
      
    }
  },
  
};
