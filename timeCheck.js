var moment= require('moment');

// http://stackoverflow.com/questions/26392280/using-momentjs-to-convert-date-to-epoch-then-back-to-date
module.exports = function(val) {
  var unix_stamp = moment.unix(Number(val));
  var dateStr = moment(new Date(val)).unix();
  // console.log(dateStr);
  var result = {
    "unix": null,
    "natural": null
  };
  // Return the natural and unix output of val
  if (!isNaN(dateStr) && Number(dateStr) > 0) {
    result.unix = dateStr;
    result.natural = val;
  } else if (!isNaN(unix_stamp) && unix_stamp > 0) {
      result.unix = val;
      result.natural = unix_stamp.format('MMM DD, YYYY');
    }
    return result;
};
