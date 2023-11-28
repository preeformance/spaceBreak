//connect to NASA
function getSpace() {
  fetch(`https://api.nasa.gov/planetary/apod?=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//Bot instructions
module.exports = {
    name: 'break',
    description: 'sends space photo and encourages break',
    execute(message, args) {
      message.channel.send(NASA IMG)
    }

}
