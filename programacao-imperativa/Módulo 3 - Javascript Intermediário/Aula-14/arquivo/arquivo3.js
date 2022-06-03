const axios = require('axios').default;

// Faz uma requisição a um usuarío com um ID expecifico
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })
  .then(function () {
    // sempre será executado
  });

  //npm install axios
