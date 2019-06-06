//// <reference path="./@types/old-stuff.d.ts" />

function getFullname(user) {
  return user.firstName + " " + user.lastName;
}

export default {
  getFullname,
};

module.exports = {
  getFullname,
};
