
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash); 
//     });
// });

var hashedPassword = '$2a$10$AOKXqCblf0tu.OUbOspQauFR5NCKI8sxs5EaQkWRMvQ6xdY3Cc2Yu';

bcrypt.compare(password,hashedPassword, (err, res) => {
    console.log(res);
});
// var data = {
//     id: 10
// };
// var token = jwt.sign(data,'123abc');
// console.log(token);

// var decoded = jwt.verify(token,'123abc');
// console.log('\n Decoded:', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// //console.log(hash);
// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();


// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('Data was changed, Do not trust');
// }