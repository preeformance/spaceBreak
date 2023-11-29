//connect to Cats
function getCat() {
    fetch(`URL`)
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
      name: 'nap',
      description: 'sends cat photo and encourages nap',
      execute(message, args) {
        message.channel.send(CAT IMG)
      }
  
  }
  