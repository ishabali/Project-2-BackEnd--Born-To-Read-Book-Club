const User = require('../Classes/user');

exports.create = async (request, response) => {
    const user = new User(request.body);
    await user.insertToUserDB();
    response.json(user.toLiteral());
}

exports.createReview = async (request, response) => {
    const user = new User(request.body);
    await user.insertToBookDB();
    response.json(user.toLiteral());
}

exports.getUserById = async (request, response) => {
    const user = new User(request.params.id);
    await user.populateUserFromId();
    response.json(user.toLiteral());
}

exports.getReviewById = async (request, response) => {
    const user = new User(request.params.id);
    await user.populateBookFromId();
    response.json(user.toLiteral());
}

exports.deleteUser = async (request, response) => {
  const user = new User(request.params.id);
  await user.deleteFromUserDB();
  response.json(user.toLiteral());
}