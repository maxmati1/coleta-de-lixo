function normalize(text) {
  return text
    .normalize('NFD') 
    .replace(/[\u0300-\u036f]/g, '') 
    .toLowerCase();
}

const cidades = {
  "maringa": [
    {
      nome: "MAGAZINE LUIZA S/A - MARINGÁ - AV BRASIL",
      endereco: "AVENIDA BRASIL, 3409 - MARINGÁ/PR"
    },
    {
      nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA",
      endereco: "AVENIDA COLOMBO, 9357 - MARINGÁ/PR"
    },
    {
      nome: "MUNICÍPIO DE MARINGÁ",
      endereco: "AVENIDA XV DE NOVEMBRO, 701 - CENTRO - MARINGÁ/PR"
    },
    {
      nome: "Paço Municipal",
      endereco: "Av. XV de Novembro, 701 - Maringá/PR"
    },
    {
      nome: "Supermercados Cidade Canção",
      endereco: "Av. Brasil, 7225 - Maringá/PR"
    },
    {
      nome: "SESI",
      endereco: "Rua Antonio Carniel, 499 - Maringá/PR"
    },
    {
      nome: "Tiro de Guerra de Maringá",
      endereco: "Av. Mandacaru, 730 - Maringá/PR"
    },
    {
      nome: "4º Batalhão de Policia Militar",
      endereco: "Rua Mitsuzo Taguchi, 99 - Maringá/PR"
    },
    {
      nome: "Câmara Municipal de Maringá",
      endereco: "Av. Papa João XXIII, 239 - Maringá/PR"
    },
    {
      nome: "UNIFAMMA - Faculdade Metropolitana de Maringá",
      endereco: "Av. Horacio Racanello Filho, 5000 - Maringá/PR"
    }
  ],
  "sarandi": [
    {
      nome: "MAGAZINE LUIZA S/A - SARANDI",
      endereco: "AVENIDA LONDRINA, 443 - SARANDI/PR"
    },
    {
      nome: "MUNICÍPIO DE SARANDI",
      endereco: "RUA JOSÉ EMILIANO DE GUSMÃO, 565 - CENTRO - SARANDI/PR"
    }
  ],
  "londrina": [
    { nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA", endereco: "AVENIDA CELSO GARCIA CID 1, 1 - LONDRINA/PR" },
    { nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA", endereco: "RUA AMERICO DEOLINDO GARLA, 224 - LONDRINA/PR" },
    { nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA", endereco: "RUA BENJAMIN CONSTANT, 1220 - LONDRINA/PR" },
    { nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA", endereco: "AVENIDA THEODORO VICTORELLI, 150 - LONDRINA/PR" },
    { nome: "MUNICÍPIO DE LONDRINA", endereco: "AVENIDA DUQUE DE CAXIAS, 635 - JARDIM MAZZEI II - LONDRINA/PR" },
    { nome: "E-LETRO", endereco: "RUA ERMELINDO LEÃO, 385 - VILA RICA - LONDRINA/PR" }
  ],
  "arapongas": [
    { nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA", endereco: "AVENIDA ARAPONGAS, 318 - ARAPONGAS/PR" }
  ],
  "apucarana": [
    { nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA", endereco: "RUA PROFESSOR JOÃO CÂNDIDO FERREIRA, 333 - APUCARANA/PR" }
  ],
  "curitiba": [
    { nome: "SETE AMBIENTAL", endereco: "RUA CARLOS DE LAET, 4251 - BOQUEIRAO - CURITIBA/PR" },
    { nome: "MAGAZINE LUIZA", endereco: "AV. REPUBLICA ARGENTINA, 4821 - CURITIBA/PR" },
    { nome: "MAGAZINE LUIZA", endereco: "RUA IZAAC FERREIRA DA CRUZ, 3454 - CURITIBA/PR" },
    { nome: "MAGAZINE LUIZA", endereco: "AV. VICTOR FERREIRA DO AMARAL, 2633 - CURITIBA/PR" },
    { nome: "MAGAZINE LUIZA", endereco: "AV. MARECHAL FLORIANO PEIXOTO, 5899 - HAUER - CURITIBA/PR" },
    { nome: "MAGAZINE LUIZA", endereco: "AV. WINSTON CHURCHILL, 2469 - PINHEIRINHO - CURITIBA/PR" },
    { nome: "MAGAZINE LUIZA", endereco: "RUA MARECHAL DEODORO, 37 - CENTRO - CURITIBA/PR" },
    { nome: "LOJA WINE CURITIBA", endereco: "RUA TEIXEIRA COELHO, 182 - CENTRO - CURITIBA/PR" },
    { nome: "MAGAZINE LUIZA - PARK SHOPPING BARIGUI", endereco: "AV. PRESIDENTE KENNEDY, 4121 - PORTAO - CURITIBA/PR" },
    { nome: "CARREFOUR PAROLIN", endereco: "AV. MARECHAL FLORIANO PEIXOTO, 3031 - REBOUCAS - CURITIBA/PR" },
    { nome: "CARREFOUR CURITIBA", endereco: "RUA DEP. HEITOR ALENCAR FURTADO, 1210 - MOSSUNGUE - CURITIBA/PR" },
    { nome: "(MIDEA) SPRINGER CARRIER LTDA", endereco: "AV. PRESIDENTE ARTHUR DA SILVA BERNARDES, 946 - SANTA QUITERIA - CURITIBA/PR" },
    { nome: "CARLOS MEIRA", endereco: "RUA GUABIROTUBA, 851 - PRADO VELHO - CURITIBA/PR" }
  ],
  "colombo": [
    { nome: "RECICLATECH (coleta domiciliar)", endereco: "RUA MARGINAL JOSE DE ANCHIETA, 740 - VILA GUARANI - COLOMBO/PR" },
    { nome: "MUNICIPIO DE COLOMBO", endereco: "RUA XV DE NOVEMBRO, 105 - CENTRO - COLOMBO/PR" }
  ],
  "sao jose dos pinhais": [
    { nome: "MAGAZINE LUIZA", endereco: "RUA QUINZE DE NOVEMBRO, 1831 - SAO JOSE DOS PINHAIS/PR" },
    { nome: "AMBICOM", endereco: "RUA WENCESLAU MAREK, 10 - AGUAS BELAS - SAO JOSE DOS PINHAIS/PR" }
  ],
  "fazenda rio grande": [
    { nome: "MAGAZINE LUIZA", endereco: "RUA CESAR CARELLI, 180 - FAZENDA RIO GRANDE/PR" },
    { nome: "MUNICIPIO FAZENDA RIO GRANDE", endereco: "RUA JACARANDA, 300 - EUCALIPTOS - FAZENDA RIO GRANDE/PR" }
  ],
  "pinhais": [
    { nome: "LIFE AMBIENTAL", endereco: "RUA SANTO INACIO, 787 - PINHAIS/PR" },
    { nome: "CARREFOUR PINHAIS", endereco: "ROD. DEPUTADO JOAO LEOPOLDO JACOMEL, 10154 - PINHAIS/PR" },
    { nome: "MUNICIPIO DE PINHAIS", endereco: "ROD. JOAO LEOPOLDO JACOMEL, 12162 - SALA 01 - CENTRO - PINHAIS/PR" }
  ],
  "piraquara": [
    { nome: "MUNICIPIO DE PIRAQUARA", endereco: "AV. GETULIO VARGAS, 1990 - CENTRO - PIRAQUARA/PR" }
  ],
  "campo largo": [
    { nome: "MUNICIPIO DE CAMPO LARGO", endereco: "AV. PADRE NATAL PIGATTO, 925 - CENTRO - CAMPO LARGO/PR" }
  ],
  "foz do iguacu": [
    { nome: "REFRIGERACAO UNIVERSAL LTDA", endereco: "AVENIDA BRASIL, 891 – FOZ DO IGUACU/PR" },
    { nome: "MAGAZINE LUIZA", endereco: "AVENIDA JOSE MARIA DE BRITO, 1161 – FOZ DO IGUACU/PR" }
  ],
  "paranavai": [
    { nome: "MULTI AR CLIMATIZACAO", endereco: "RUA ETTORE GIOVANE, 2485 - SALA 2 - PARANAVAI/PR" },
    { nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA", endereco: "RUA GETULIO VARGAS, 1025 - PARANAVAI/PR" }
  ],
  "guaratuba": [
    {
      nome: "COLETA ELETRÔNICOS (GUARATUBA)",
      endereco: "RUA MONSENHOR LAMARTINE, 399 - CENTRO - 83.280-000 - GUARATUBA/PR"
    }
  ],
  "guarapuava": [
    {
      nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA",
      endereco: "RUA XV DE NOVEMBRO, 7700 - GUARAPUAVA/PR"
    },
    {
      nome: "MUNICIPIO DE GUARAPUAVA",
      endereco: "RUA BRIGADEIRO ROCHA, 2777 - CENTRO - 85010-210 - GUARAPUAVA/PR"
    }
  ],
  "umuarama": [
    {
      nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA",
      endereco: "AVENIDA PARANA, 4757 - UMUARAMA/PR"
    }
  ],
  "cianorte": [
    {
      nome: "MAGAZINE LUIZA S/A - MAGAZINE LUIZA",
      endereco: "AVENIDA GOIAS, 609 - CIANORTE/PR"
    },
    {
      nome: "MUNICIPIO DE CIANORTE",
      endereco: "RUA BARÃO DO RIO BRANCO, 100 - CENTRO - 87200-001 - CIANORTE/PR"
    }
  ]
};

function buscarPontos() {
  const busca = normalize(document.getElementById("busca").value.trim());
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const cidadeKeys = Object.keys(cidades);
  const cidadeMatch = cidadeKeys.find(key => normalize(key) === busca);

  if (!cidadeMatch || cidades[cidadeMatch].length === 0) {
    resultado.innerHTML = "<li>Nenhum ponto de coleta encontrado para essa cidade.</li>";
    return;
  }

  cidades[cidadeMatch].forEach(ponto => {
    const li = document.createElement("li");
    li.textContent = `${ponto.nome} - ${ponto.endereco}`;
    resultado.appendChild(li);
  });
}