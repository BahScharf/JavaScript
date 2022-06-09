const user = "Bah";           // The constants
const password = "123";

for (let tentativas = 3; tentativas > 0; tentativas--) {
    var sentry = prompt("Coloque seu usuário");
    var checker = prompt("Coloque sua senha");
    if (sentry == user && checker == password) {
      alert("Concluido!");                                     
      break;                                                    //Enquanto a senha e o usuário não estiverem corretos, faz um loop até 3 vezes
    }                                                       
    else {
        alert("Usuário e/ou senha inválidos!")
    }
}

if (sentry != user || checker != password) {
    alert("Você foi bloqueado.");                                       //Só acontece se todas as 3 tentativas forem usadas
}