
exports.getDate = function(){
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const today = new Date();
  let day = today.toLocaleDateString("en-US", options);
  let time = today.toLocaleTimeString();

  return day + " " + time;
}

exports.getDay = function(){
  const options = {
    weekday: 'long',
  };
  const today = new Date();
  return day = today.toLocaleDateString("en-US", options);

}
