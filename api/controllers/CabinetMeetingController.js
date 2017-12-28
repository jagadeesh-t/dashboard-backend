import _ from 'lodash';


const createCabinetMeetingTopic = (req, res) => {
  const meetingDetails = _.assign({}, req.body)
  return CabinetMeeting.create(meetingDetails).then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};


const getCabinetMeetingTopic = (req, res) => {
  return CabinetMeeting.find().then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};


const updateCabinetMeetingTopic = (req,res) => {
	const meetingDetails = _.assign({}, req.body)
	const meetingTopic = meetingDetails.topic
	return CabinetMeeting.update({
		topic : meetingTopic
	}, meetingDetails).then((u) => {
		console.log(u);
		return res.status(200).json(u);
	}).catch((err) => {
		return res.status(500).json(err);
	});
}

module.exports = {
	createCabinetMeetingTopic,
	getCabinetMeetingTopic,
	updateCabinetMeetingTopic
}