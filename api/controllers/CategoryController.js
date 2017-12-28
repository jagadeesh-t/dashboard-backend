import _ from 'lodash';

const createCategory = (req, res) => {
  const categoryDetails = _.assign({}, req.body)
  return Category.create(categoryDetails).populateAll().then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};

const getAllCategory = (req, res) => {
  return Category.find().populateAll().then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};

const deleteCategory = (req,res) => {
	const categoryName = req.query.name;
	return Category.destroy({name:categoryName}).then((cat)=>{
		res.status(200).json({"message":"Successfully deleted"});
	}).catch(err=> res.statusd(500).json(err));
}


module.exports={
	createCategory,
	getAllCategory,
	deleteCategory
};