/**
 * 0 - Obter o usuário
 * 1 - Obter o número de telefone do usuário a partir do seu id
 * 2 - Obter o endereço do usuário pelo id
 */

function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: "Aladim",
      birthDate: new Date(),
    });
  }, 1000);
}

function getPhoneNumber(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      phoneNumber: "1199002",
      ddd: 11,
    });
  }, 2000);
}

function getAddress(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      streetAddress: "Rua Tal",
      number: 29,
    });
  }, 2000);
}

function resolveUser(err, user) {
  console.log("user: " + user);
}

getUser(function resolveUser(error, user) {
  if (error) {
    console.error("Deu ruim em usuário", error);
    return;
  }
  getAddress(user.id, function resolveAddress(error1, address) {
    if (error1) {
      console.error("Deu erro");
    }

    console.log(`
    Nome: ${user.name}
    Endereço: ${user.address}
    `);
  });
});

const user = getUser();
