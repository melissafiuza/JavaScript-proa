let nomeHotel
let nomeUsuario
function inicioPrograma() {
  nomeHotel = prompt("Digite o nome do Hotel: ");
  nomeUsuario = prompt("Digite seu nome de usuário: ");
  let senha;
  while (senha != 2678) {
    senha = Number(prompt("Digite sua senha: "));
    if (senha === 2678) {
      alert(
        `Seja Bem vindo ao ${nomeHotel} ${nomeUsuario}. É um imenso prazer ter você aqui!`,
      );
      menuPrincipal();
    } else {
      alert("Senha incorreta. Tente novamente!");
    }
  }
}

function menuPrincipal() {
  let opcao;
  do {
    opcao = Number(
      prompt(`Escolha uma opção:
    1 - Reservar Quartos
    2 - Cadastro de Hóspedes
    3 - Cadastrar e Pesquisar
    4 - Reserva Garçons
    5 - Buffet
    6 - Auditório
    7 - Horário Restaurante
    8 - Álcool ou Gasolina
    9 - Ar Condicionado
    0 - Sair`),
    );

    switch (opcao) {
      case 1:
        reservarQuartos();
        break;
      case 2:
        cadastroHospedes();
        break;
      case 3:
        cadastrarEPesquisar();
        break;
      case 4:
        reservaGarcons();
        break;
      case 5:
        buffet();
        break;
      case 6:
        auditorio();
        break;
      case 7:
        horario();
        break;
      case 8:
        alcoolGasolina();
        break;
      case 9:
        arCondicionado();
        break;
      case 0:
        alert(`Muito obrigado e até logo, ${nomeUsuario}.`);
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== 0);
}
let diariaValor = 0;
function reservarQuartos() {
  diariaValor = parseFloat(prompt("Qual o valor padrão da diária? "));
  if (diariaValor <= 0) {
    alert("Informação inválida. Tente novamente.");
    menuPrincipal();
  } else {
    let diasHospedagem = Number(prompt("Quantos dias serão necessários?"));
    if (diasHospedagem <= 0 || diasHospedagem > 30) {
      alert("Informação inválida. Tente novamente.");
      menuPrincipal();
    } else {
      let valorHospedagem = (diariaValor * diasHospedagem).toFixed(2);
      let nomeHospede = prompt("Qual o nome do hóspede: ");
      let confirmarReserva = Number(
        prompt(`${nomeUsuario}, você Confirma a reserva?
        1 - SIM
        2 - NÂO`),
      );
      switch (confirmarReserva) {
        case 1:
          alert(
            `${nomeUsuario}, reserva efetuada para ${nomeHospede}. O valor é de ${valorHospedagem}`,
          );
          break;
        case 2:
          alert(`${nomeUsuario}, reserva não efetuada.`);
          break;
      }
    }
  }
}

function cadastroHospedes() {
  diariaValor = Number(prompt("Qual o valor padrão da diária?"));
  let hospedesNomes = [];
  let hospedesIdades = [];
  let hospedesMeia = [];
  let hospedesGratuidade = [];

  while (true) {
    let nome = prompt("Qual o nome do hóspede? Digite PARE encerrar.");
    if (nome.toUpperCase() === "PARE") {
      let passagem =
        hospedesNomes.length * diariaValor +
        (hospedesMeia.length / 2) * diariaValor;
      alert(
        `${nomeUsuario}, o valor total das passagens é: ${passagem.toFixed(2)}; ${hospedesGratuidade.length} gratuidade(s); ${hospedesMeia.length} meia(s)`,
      );
      return;
    }
    let idade = Number(prompt("Qual a idade do hóspede?"));
    if (idade <= 6) {
      alert(`${nome} cadastrado(a) com sucesso. ${nome} possui gratuidade.`);
      hospedesGratuidade.push(nome);
    } else if (idade > 60) {
      alert(`${nome} cadastrado(a) com sucesso. ${nome} paga meia.`);
      hospedesMeia.push(nome);
    } else {
      hospedesNomes.push(nome);
      hospedesIdades.push(idade);
      alert(`${nome} cadastrado(a) com sucesso.`);
    }
  }
}

function cadastrarEPesquisar() {
  let hospedes = [];
  while (true) {
    let opcao = Number(
      prompt("Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair."),
    );
    switch (opcao) {
      case 1:
        let nome = prompt("Qual o nome do hóspede?");
        if (hospedes.length >= 15) {
          alert("Máximo de cadastros atingido.");
        } else {
          hospedes.push(nome);
          alert(`Hóspede ${nome} foi cadastrado(a) com sucesso!`);
        }
        break;
      case 2:
        let nomePesquisa = prompt("Qual o nome do hóspede?");
        let resultadoPesquisa = hospedes.filter(
          (nome) => nome === nomePesquisa,
        );
        if (resultadoPesquisa.length != 0) {
          alert(`Hóspede ${nomePesquisa} foi encontrado(a)!`);
        } else {
          alert(`Hóspede ${nomePesquisa} não foi encontrado(a)!`);
        }
        break;
      case 3:
        return;
    }
  }
}

function reservaGarcons() {
  let duracaoEvento = parseFloat(prompt("Qual a duração do evento em horas?"));
  let garconsNecessarios = Number(prompt("Quantos garçons são necessários?"));
  let custo = 10.5 * duracaoEvento * garconsNecessarios;
  alert(`Custo total: R$ ${custo}.`);
  let reserva = prompt("Gostaria de efetuar a reserva? S/N");
  if (reserva.toUpperCase() === "S") {
    alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
  } else {
    alert("Reserva não efetuada.");
  }
}

function buffet() {
  let convidadosQuantidade = Number(
    prompt("Qual o número de convidados para o evento?"),
  );
  if (convidadosQuantidade > 350) {
    alert("Quantidade de convidados superior à capacidade máxima.");
  } else {
    let aguaLitro = 0.5 * convidadosQuantidade;
    let cafeLitro = 0.2 * convidadosQuantidade;
    let salgados = 7 * convidadosQuantidade;
    let salgadoCento = salgados / 100;
    let custo = aguaLitro * 0.4 + cafeLitro * 0.8 + salgadoCento * 34;

    alert(
      `O evento precisará de ${cafeLitro} litros de café, ${aguaLitro} litros de água, ${salgados} salgados.\nO custo total do evento será de R$ ${custo.toFixed(2)}`,
    );
  }
}

function auditorio() {
  let auditorioUser = Number(
    prompt("Qual o número de convidados para o seu evento? "),
  );

  if (auditorioUser <= 0) {
    alert("Número de convidados inválido");
  } else if (auditorioUser > 350) {
    alert("Quantidade de convidados superior à capacidade máxima");
  } else if (auditorioUser <= 150) {
    alert("Use o auditório Laranja.");
  } else if (auditorioUser <= 220) {
    let faltam = auditorioUser - 150;
    alert(`Use o auditório Laranja (inclua mais ${faltam} cadeiras)`);
  } else {
    alert("Use o auditório Colorado");
  }

  let continuar = prompt("Gostaria de efetuar a reserva? S/N");
  if (continuar.toUpperCase() === "S") {
    alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
  } else {
    alert(`${nomeUsuario}, reserva não efetuada.`);
  }
}

function horario() {
  let diasSemana = ["segunda", "terça", "quarta", "quinta", "sexta"];
  let fimSemana = ["sabado", "domingo"];

  let diaSemana = prompt("Qual o dia do seu evento? ");
  let hora = Number(prompt("Qual a hora do seu evento?"));

  if (
    (diasSemana.includes(diaSemana.toLowerCase()) && hora >= 7 && hora < 23) ||
    (fimSemana.includes(diaSemana.toLowerCase()) && hora >= 7 && hora < 15)
  ) {
    let empresa = prompt("Qual o nome da empresa? ");
    alert(`Restaurante reservado para ${empresa}. ${diaSemana} às ${hora}hrs`);
  } else {
    alert("Restaurante indisponível.");
  }
}

function alcoolGasolina() {
  let custoWay, custoStark, combustivelWay, combustivelStark;

  let alcoolWay = parseFloat(
    prompt("Qual o valor do álcool no posto Wayne Oil?"),
  );
  let gasolinaWay = parseFloat(
    prompt("Qual o valor da gasolina no posto Wayne Oil?"),
  );
  let alcoolStark = parseFloat(
    prompt("Qual o valor do álcool no posto Stark Petrol?"),
  );
  let gasolinaStark = parseFloat(
    prompt("Qual o valor da gasolina no posto Stark Petrol?"),
  );

  if (alcoolWay <= gasolinaWay * 0.7) {
    custoWay = alcoolWay * 42;
    combustivelWay = "álcool";
  } else {
    custoWay = gasolinaWay * 42;
    combustivelWay = "gasolina";
  }

  if (alcoolStark <= gasolinaStark * 0.7) {
    custoStark = alcoolStark * 42;
    combustivelStark = "álcool";
  } else {
    custoStark = gasolinaStark * 42;
    combustivelStark = "gasolina";
  }

  if (custoWay < custoStark) {
    alert(
      `${nomeUsuario}, é mais barato abastecer com ${combustivelWay} no posto Wayne Oil.`,
    );
  } else {
    alert(
      `${nomeUsuario}, é mais barato abastecer com ${combustivelStark} no posto Stark Petrol.`,
    );
  }
}

function arCondicionado() {
  let nomes = [];
  let totais = [];
  let continuar;

  do {
    let nomeEmpresa = prompt("Qual o nome da empresa?");
    let valorPorAparelho = Number(prompt("Qual o valor por aparelho?"));
    let quantidadeAparelhos = Number(prompt("Qual a quantidade de aparelhos?"));
    let porcentagemDesconto = Number(prompt("Qual a porcentagem de desconto?"));
    let minimoAparelhosDesconto = Number(
      prompt("Qual o número de aparelhos para conseguir o desconto?"),
    );

    let total = quantidadeAparelhos * valorPorAparelho;
    let totalFinal;

    if (quantidadeAparelhos > minimoAparelhosDesconto) {
      let desconto = total * (porcentagemDesconto / 100);
      totalFinal = total - desconto;
    } else {
      totalFinal = total;
    }

<<<<<<< HEAD
    nomes.push(nomeEmpresa)
    totais.push(totalFinal)
    alert(`O serviço de ${nomeEmpresa} custará R$ ${totalFinal}.`)

    continuar = prompt("Deseja informar novos dados? S/N")
  } while (continuar.toUpperCase() === "S")

  let menorValor = Math.min(...totais)
  let indiceMenor = totais.indexOf(menorValor)

  alert(
    `O orçamento de menor valor é o de ${nomes[indiceMenor]} por R$ ${menorValor}`,
  )
}

inicioPrograma()
=======
    nomes.push(nomeEmpresa);
    totais.push(totalFinal);
    alert(`O serviço de ${nomeEmpresa} custará R$ ${totalFinal}.`);

    continuar = prompt("Deseja informar novos dados? S/N");
  } while (continuar.toUpperCase() === "S");

  let menorValor = Math.min(...totais);
  let indiceMenor = totais.indexOf(menorValor);

  alert(
    `O orçamento de menor valor é o de ${nomes[indiceMenor]} por R$ ${menorValor}`,
  );
}

inicioPrograma();
>>>>>>> b9fc63d (Exercício hotel)
