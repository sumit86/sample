
function isNullOrEmpty(input) {
 // Returns true if the input is either undefined, null, or empty, false otherwise
   return (input === undefined || input === null || input === '');
}
module.exports = isNullOrEmpty;
