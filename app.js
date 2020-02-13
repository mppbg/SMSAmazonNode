// Carregando o pacote AWS SDK para o Node.js
var AWS = require('aws-sdk');

//Carregando as configurações de segurança
AWS.config.loadFromPath('./security.json');

//Configurando a região
AWS.config.update({ region: 'us-east-1' });

//Parâmetros da mensagem
var params = {
  Message: 'Olá, sua inscrição para o treinamento no linkedin foi confirmada. Obrigado.', 
  PhoneNumber: '5562999999999',
};

//Criando o objeto do serviço para o envio
var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
publishTextPromise.then(
  function (data) {
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function (err) {
      console.error(err, err.stack);
    });
