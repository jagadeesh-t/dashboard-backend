import _ from 'lodash';


const createIssue = (req, res) => {
  const issueDetails = _.assign({}, req.body)
  return Issue.create(issueDetails).populateAll().then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};


const getIssues = (req, res) => {
  return Issue.find().populateAll().then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};


const updateIssue = (req,res) => {
	const issueDetails = _.assign({}, req.body)
	const issueTopic = issueDetails.topic;
	return Issue.update({
		topic : issueTopic
	}, issueDetails).then((u) => {
		console.log(u);
		return res.status(200).json(u);
	}).catch((err) => {
		return res.status(500).json(err);
	});
}

const getIssueByCategory = (req, res) => {
	const category = req.params;
  return Issue.find({category}).populateAll().then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};

module.exports = {
	createIssue,
	getIssues,
	updateIssue,
	getIssueByCategory
}