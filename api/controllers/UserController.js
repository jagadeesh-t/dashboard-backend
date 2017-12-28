import _ from 'lodash';

const signup = (req, res) => {
  const userDetails = _.assign({}, req.body)
  return UserProfile.create(userDetails).then((sc) => {
    res.status(200).json(sc);
  }).catch(err => res.status(500).json(err));
};


const getUser = (req, res) => {
  const userId = req.user.id;
  return UserProfile.findOne({id: userId}).populateAll().then((u) => {
    if (!u) {
      return res.status(404).json({message: 'user not present'});
    }
    return res.status(200).json(u);
  }).catch((err) => res.status(500).json(err));
};


const getUsers = (req, res) => {
  
  return UserProfile.find().populateAll().then((u) => {
    if (!u) {
      return res.status(404).json({message: 'No users Pesent'});
    }
    return res.status(200).json(u);
  }).catch((err) => res.status(500).json(err));
};





module.exports = {
  signup,
  getUser,
  getUsers
};