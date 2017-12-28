import _ from 'lodash';

const createMinistry = (req, res) => {
  const ministryDetails = _.assign({}, req.body)
  return Ministry.create(ministryDetails).populateAll().then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};

const getAllMinistry = (req, res) => {
  return Ministry.find().populateAll().then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};


const deleteMinistry = (req,res) => {
	const name = req.query.ministryName;
	return Ministry.destroy({ministryName:name}).then((cat)=>{
		res.status(200).json({"message":"Successfully deleted"});
	}).catch(err=> res.status(500).json(err));
}

module.exports={
	createMinistry,
	getAllMinistry,
	deleteMinistry
};