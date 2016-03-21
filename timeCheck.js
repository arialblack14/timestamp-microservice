var moment= require('moment');

// http://stackoverflow.com/questions/26392280/using-momentjs-to-convert-date-to-epoch-then-back-to-date
module.exports = function(val) {
  var unix_stamp = moment.unix(Number(val));
  var dateStr = moment(new Date(val)).unix();
  // console.log(dateStr);

  // Return the natural and unix output of val
  if (!isNaN(dateStr)) {
    return {
      "unix": dateStr,
      "natural": val
    };
  } else if (!isNaN(unix_stamp)) {
      return {
        "unix": val,
        "natural": unix_stamp.format('MMM DD, YYYY')
      };
    }
};
