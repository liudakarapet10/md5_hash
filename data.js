const fs = require('fs');

let rawdata = fs.readFileSync('users.json');
let userDB = JSON.parse(rawdata);
console.log(userDB);

const addUsers = (usersData) => {
    let data = JSON.stringify(usersData, null, 4);
    fs.writeFileSync('users.json', data);
}
  
module.exports = { userDB, addUsers };
