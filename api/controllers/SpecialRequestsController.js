import _ from 'lodash';


const CreateSpecialRequest = (req, res) => {
  const requestDetails = _.assign({}, req.body)
  return SpecialRequest.create(requestDetails).populateAll().then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};


const getRequests = (req, res) => {
  return SpecialRequest.find().then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};

const updateSpecialRequest = (req,res) => {
	const requestDetails = _.assign({}, req.body)
	const request = requestDetails.request
	return SpecialRequest.update({
		request : request
	}, requestDetails).then((u) => {
		console.log(u);
		return res.status(200).json(u);
	}).catch((err) => {
		return res.status(500).json(err);
	});
}

module.exports = {
	CreateSpecialRequest,
	getRequests,
	updateSpecialRequest
}