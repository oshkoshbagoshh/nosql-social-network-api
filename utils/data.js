// set up the data
const userNames = [
    'John Doe',
    'Jane Doe',
    'Jack Doe',
    'Jill Doe',
    'Jim Doe',
    'Jenny Doe',
    'Joe Doe',
    'Judy Doe',
    'Claudia Lloyd',
    'Nannie Moss',
    'Ophelia Lamb',
    'Lizzie Mccoy',
    'Lottie Mccoy'
];
// trim the usernames and make them lowercase
userNames.forEach((userName, index) => {
    userNames[index] = userName.trim().toLowerCase();
});
console.log(userNames);

const emailAddresses = [
    'JohnDoe@gmail.com',
    'JaneDoe@gmail.com',
    'JackDoe@gmail.com',
    'JillDoe@gmail.com',
    'JimDoe@gmail.com',
    'JennyDoe@gmail.com',
    'JoeDoe@gmail.com',
    'JudyDoe@gmail.com',
    'ClaudiaLloyd@gmail.com',
    'NannieMoss@gmail.com',
    'OpheliaLamb@gmail.com',
    'LizzieMccoy@gmail.com',
    'LottieMccoy@gmail.com'
];

//export the data
module.exports = { userNames, emailAddresses };




