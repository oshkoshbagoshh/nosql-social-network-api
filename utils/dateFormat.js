// set up the date format
const dateFormat = (createdAt) => {
    return `${createdAt.getMonth() + 1}/${createdAt.getDate()}/${createdAt.getFullYear()}`;
}
// export the date format
module.exports = dateFormat;