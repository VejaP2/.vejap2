document.addEventListener('DOMContentLoaded', () => {
    const pontosTuristicos = [
        {
            "id": "1",
            "nome": "Cachoeira do Urubu Rei",
            "descricao": "PASSEIOS com Visita e banho em uma das mais altas cascatas do Piauí. Ideal sair de Pedro II,  pela manhã, até 8h.  ACESSO: Duas opções: 1. De transporte, até o mirante do Gritador e de lá, iniciar caminhada descendo a serra na trilha de +/-  3,5 km DIFÍCIL ACESSO em +/- 1 hora e meia de ida. Terreno com pedregulhos.2. Se em transporte tipo 4 x 4,  ao chegar no Gritador, desce a serra por estrada sinuosa e íngreme até o povoado Caranguejo, no pé da serra. De lá início da caminhada na trilha de cerca de 2,3km  em +/- 01 hora de ida em ACESSO DIFÍCIL, terreno com pedregulhos.  PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO.DISTANTE: 16KM DA CIDADE.         DURAÇÃO: CERCA DE 05 HORAS *  INICIAR SEMPRE PELA MANHÃ RECOMENDADO CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER" ,
            "valor_uma_pessoa": "175.00",
            "valor_duas_cinco_pessoas": "200.00",
            "valor_seis_dez_pessoas": "215.00",
            "valor_acima_dez_pessoas": "21.50",
            "descricao_resumida": "PASSEIOS com  Visita e banho em uma das mais altas cascatas do Piauí.",
            "fotos1": "/static/img/cachoeira_urubu_rei1.png",
            "fotos2": "/static/img/cachoeira_urubu_rei2.png",
            "fotos3": "/static/img/cachoeira_urubu_rei2.png",
            "categoria": "Cachoeiras",
            "grau_dificuldade": "Dificil",
            "distancia": "16",
            "tempo_passeio": "5"
        },
    
        {
            "id": "2",
            "nome": "Circuito dos Minerais",
            "descricao": "Passeio panorâmico nos garimpos de extração da pedra Opala e finalizando com visita na cidade, aos centros de beneficiamento e confecção de joias artesanais em arranjos produtivos, oportunizando ao visitante, a experiência de contemplar a atividade garimpeira, bem como a Confecção Manual das Joias em mineral agregando o metal como prata ou ouro. Acesso moderado com caminhada  em terrenos ora com pedregulhos, ora argiloso, quando das visitas aos garimpos. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. DISTANTE 10KM mas com acesso bom para carro de passeio. DURAÇÃO DESTE PASSEIO: CERCA DE 03 HORAS PASSEIO MEDIANTE AGENDAMENTO, E RECOMENDADO SEMPRE COM NOSSOS GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "120.00",
            "valor_duas_cinco_pessoas": "155.00",
            "valor_seis_dez_pessoas": "175.00",
            "valor_acima_dez_pessoas": "17.50",
            "descricao_resumida": "Passeio panorâmico nos garimpos de extração da pedra Opala e finalizando com visita na cidade, aos centros de beneficiamento e confecção de joias artesanais.",
            "fotos1": "/static/img/circuito_minerais1.png",
            "fotos2": "/static/img/circuito_minerais2.png",
            "fotos3": "/static/img/circuito_minerais3.png",
            "categoria": "Histórico e Cultural",
            "grau_dificuldade": "Facil",
            "distancia": "10",
            "tempo_passeio": "3" 
        },
    
        {
            "id": "3",
            "nome": "City Tour",
            "descricao": "Visita panorâmica ao Casario do final do século XIX, sempre com explanações dos guias de turismo credenciados e experientes; Conhecimento e compras de arranjos produtivos locais em joias artesanais de Opala; Visita ao mercado do artesão com vasta exposição de artesanato em tecelagem no fio de algodão,  PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. DURAÇÃO DESTE PASSEIO: CERCA DE ATÉ 03 HORAS PASSEIO MEDIANTE AGENDAMENTO. RECOMENDADO SEMPRE COM NOSSOS GUIAS DE TURISMO CREDENCIADOS",
            "valor_uma_pessoa": "85.00",
            "valor_duas_cinco_pessoas": "120.00",
            "valor_seis_dez_pessoas": "175.00",
            "valor_acima_dez_pessoas": "17.50",
            "descricao_resumida": "Visita panorâmica ao Casario do final do século XIX.",
            "fotos1": "/static/img/city_tour1.png",
            "fotos2": "/static/img/city_tour2.png",
            "fotos3": "/static/img/city_tour3.png",
            "categoria": "Histórico e Cultural",
            "grau_dificuldade": "Facil",
            "distancia": "0",
            "tempo_passeio": "3"
        },
    
        {
            "id": "4",
            "nome": "Mirante do Gritador",
            "descricao": "Contato direto com a natureza, 30 min. de transporte em estrada pavimentada para se chegar um Ponto de Contemplação da paisagem, com vista bucólica a 729m de Altitude, GRAU DE DIFICULDADE LEVE PERÍODO BOM PARA ESTE PASSEIO : O ANO TODO. DISTANTE 12KM DA CIDADE. DURAÇÃO: CERCA DE 01 HORA RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS.",
            "valor_uma_pessoa": "65.00",
            "valor_duas_cinco_pessoas": "85.00",
            "valor_seis_dez_pessoas": "105.00",
            "valor_acima_dez_pessoas": "10.50",
            "descricao_resumida": "Contemplação da paisagem, com vista bucólica a 729m de Altitude.",
            "fotos1": "/static/img/mirante_gritador1.png",
            "fotos2": "/static/img/mirante_gritador2.png",
            "fotos3": "/static/img/mirante_gritador3.png",
            "categoria": "Mirantes e Paisagens",
            "grau_dificuldade": "Facil",
            "distancia": "12",
            "tempo_passeio": "1"
        },
    
        {
            "id": "5",
            "nome": "Cachoeira do Salto Liso",
            "descricao": "PASSEIO com Visita e banho em uma das mais bonitas cascatas do Piauí.ACESSO: De transporte até o povoado Mangabeira, distante 14km de Pedro II, sendo 06km no asfalto, 06km estrada de chão (carro pequeno chega), + 02km de caminhada em trilha leve moderada feito +/- 30 minutos até chegar a uma linda cascata de cerca de 25m com um lago que dá pra nadar. DURAÇÃO do passeio, +/- 04 horas e meia. PERÍODO BOM PARA ESTE PASSEIO: FEVEREIRO A AGOSTO. GRAU DE DIFICULDADE: MÉDIO DISTANTE: 16KM INICIAR SEMPRE PELA MANHÃ RECOMENDADO CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "145.00",
            "valor_duas_cinco_pessoas": "180.00",
            "valor_seis_dez_pessoas": "195.00",
            "valor_acima_dez_pessoas": "19.50",
            "descricao_resumida": "PASSEIO com Visita e banho em uma das mais bonitas cascatas do Piauí.",
            "fotos1": "/static/img/cachoeira_salto_liso1.png",
            "fotos2": "/static/img/cachoeira_salto_liso2.png",
            "fotos3": "/static/img/cachoeira_salto_liso2.png",
            "categoria": "Cachoeiras",
            "grau_dificuldade": "Medio",
            "distancia": "16",
            "tempo_passeio": "4.5"
        },
    
        {
            "id": "6",
            "nome": "Circuito Samambaia",
            "descricao": "PASSEIO com: Visita e banho em 02 cachoeiras (Buriti, Samambaia, e uma piscina natural). Local ideal pra banho em águas frias e cristalinas. ACESSO: De transporte até o gritador e de lá, caminhada na trilha com descidas em pedras mas de nível médio com cerca de 02km, feita em média em 70 minutos de ida considerando o ritmo de crianças a partir de 10 anos se houver no grupo. Considerar bom preparo físico para trilha. Terreno com pedregulhos. DURAÇÃO:  4 a 4,5 horas. Retorno na trilha ao mirante do Gritador e finalizando, retornando a cidade de Pedro II. PERÍODO BOM PARA ESTE PASSEIO: FEVEREIRO A NOVEMBRO. GRAU DE DIFICULDADE: MÉDIO DISTANCIA DA CIDADE: 14KM INICIAR SEMPRE PELA MANHÃ RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "165.00",
            "valor_duas_cinco_pessoas": "180.00",
            "valor_seis_dez_pessoas": "195.00",
            "valor_acima_dez_pessoas": "19.50",
            "descricao_resumida": "PASSEIO com: Visita e banho em 02 cachoeiras (Buriti, Samambaia, e uma piscina natural). Local ideal pra banho em águas frias e cristalinas.",
            "fotos1": "/static/img/circuito_samambaia1.png",
            "fotos2": "/static/img/circuito_samambaia2.png",
            "fotos3": "/static/img/circuito_samambaia3.png",
            "categoria": "Cachoeiras",
            "grau_dificuldade": "Medio",
            "distancia": "14",
            "tempo_passeio": "4.5"
        },
    
        {
            "id": "7",
            "nome": "Cachoeira do Tombador",
            "descricao": "PASSEIO com: Visita e banho em linda cascata de águas cristalinas. ACESSO: De Transporte por 20 km no asfalto, + 19 km em estrada de piçarra (carro de passeio chega) até o povoado Olho D água dos Alexandrinos, e de lá, uma trilha leve - moderada em areia por cerca de 25 minutos, sendo de van. Indo de carro de passeio, caminhonete ou moto, a trilha é somente em 10 minutos. Ainda contemplamos as formações rochosas e a vegetação predominante em Caatinga, Cerrado e então chegar a uma Linda CASCATA com cerca de 15 mt de águas cristalinas. PERÍODO BOM PARA ESTE PASSEIO: FEVEREIRO A JUNHO. DURAÇÃO: Cerca de 06 horas. Ideal sair pela manhã, até umas 8h. GRAU DE DIFICULDADE: LEVE DISTANCIA DA CIDADE: 39KM INICIAR SEMPRE PELA MANHÃ RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "170.00",
            "valor_duas_cinco_pessoas": "190.00",
            "valor_seis_dez_pessoas": "200.00",
            "valor_acima_dez_pessoas": "20.00",
            "descricao_resumida": "PASSEIO com: Visita e banho em linda cascata de águas cristalinas.",
            "fotos1": "/static/img/cachoeira_tombador1.png",
            "fotos2": "/static/img/cachoeira_tombador2.png",
            "fotos3": "/static/img/cachoeira_tombador2.png",
            "categoria": "Cachoeiras",
            "grau_dificuldade": "Facil",
            "distancia": "40",
            "tempo_passeio": "6"
        },
    
        {
            "id": "8",
            "nome": "Sítios Arqueológicos Povoado Torre",
            "descricao": "PASSEIO com visita aos Sítios Arqueológicos com pinturas rupestres: ACESSO: Com 25 min de carro, - uma trilha a pé em cerca de 150 mt, e se chega  a Inúmeros Painéis de Inscrições Rupestres que nos relatam a presença de civilizações de povos originários em nossa região  DURAÇÃO DO PASSEIO: Cerca de 02 horas. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. GRAU DE DIFICULDADE: LEVE DISTANCIA DA CIDADE: 08KM RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "95.00",
            "valor_duas_cinco_pessoas": "125.00",
            "valor_seis_dez_pessoas": "145.00",
            "valor_acima_dez_pessoas": "14.50",
            "descricao_resumida": "PASSEIO com visita aos Sítios Arqueológicos com pinturas rupestres.",
            "fotos1": "/static/img/sitio_arqueologico_torre1.png",
            "fotos2": "/static/img/sitio_arqueologico_torre2.png",
            "fotos3": "/static/img/sitio_arqueologico_torre3.png",
            "categoria": "Histórico e Cultural",
            "grau_dificuldade": "Facil",
            "distancia": "8",
            "tempo_passeio": "2"
        },
    
        {
            "id": "9",
            "nome": "Sítio Buritizinho",
            "descricao": "PASSEIO para: Conhecer todo o processo do beneficiamento da cana de açúcar, em estilo colonial Com 15 min de carro a se chegar em um Engenho Puxado a boi e Casa de Farinha Temática em Estilo Antigo, o Visitante degusta o Caldo de cana, Rapadura e a Tapioca, todos fresquinhos, além de poder interagir com o processo. DURAÇÃO DO PASSEIO: Cerca de 02 horas. PERÍODO BOM PARA ESTE PASSEIO: DATAS ESPECIAIS OU AGENDADO. GRAU DE DIFICULDADE: LEVE DISTANCIA DA CIDADE: 03KM RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS",
            "valor_uma_pessoa": "110.00",
            "valor_duas_cinco_pessoas": "135.00",
            "valor_seis_dez_pessoas": "155.00",
            "valor_acima_dez_pessoas": "15.50",
            "descricao_resumida": "PASSEIO para: Conhecer todo o processo do beneficiamento da cana de açúcar, em estilo colonial.",
            "fotos1": "/static/img/sitio_buritizinho1.png",
            "fotos2": "/static/img/sitio_buritizinho2.png",
            "fotos3": "/static/img/sitio_buritizinho2.png",
            "categoria": "Histórico e Cultural",
            "grau_dificuldade": "Facil",
            "distancia": "3",
            "tempo_passeio": "2"
        },
    
        {
            "id": "10",
            "nome":"Crepúsculo Mirante da Arára" ,
            "descricao": "PASSEIO DE CONTEMPLAÇÃO: Contato direto com a natureza n alto da serra. ACESSO: Um tracking com 15 minutos de caminhada, com bucólica visão dos povoados Arara e Mangabeira e em dias claros, chegando a vislumbrar um magnífico CREPÚSCULO. DURAÇÃO DO PASSEIO: Cerca de 02 horas. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. GRAU DE DIFICULDADE: LEVE DISTANCIA DA CIDADE: 12KM RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER ",
            "valor_uma_pessoa": "105.00",
            "valor_duas_cinco_pessoas": "135.00",
            "valor_seis_dez_pessoas": "145.00",
            "valor_acima_dez_pessoas": "14.50",
            "descricao_resumida": "PASSEIO DE CONTEMPLAÇÃO:  Contato direto com a natureza no alto da serra.",
            "fotos1": "/static/img/crepusculo_mirante_arara1.png",
            "fotos2": "/static/img/crepusculo_mirante_arara2.png",
            "fotos3": "/static/img/crepusculo_mirante_arara3.png",
            "categoria": "Mirantes e Paisagens",
            "grau_dificuldade": "Facil",
            "distancia": "12",
            "tempo_passeio": "2"
        },
    
        {
            "id": "11",
            "nome": "Parque Ambiental Pirapora",
            "descricao": "PASSEIO CONTEMPLATIVO: ACESSO: Um passeio a pé pela história, ecologia,  com muitas revelações nas explanações dos guias de turismo credenciados e experientes, além de uma exuberante paisagem em uma reserva ambiental a cerca de 600 m do centro da cidade. DURAÇÃO DO PASSEIO: Cerca de 02 horas. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. GRAU DE DIFICULDADE: LEVE DISTANCIA DA CIDADE: 600M INICIAR SEMPRE PELA MANHÃ RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER ",
            "valor_uma_pessoa": "85.00",
            "valor_duas_cinco_pessoas": "105.00",
            "valor_seis_dez_pessoas": "130.00",
            "valor_acima_dez_pessoas": "13.00",
            "descricao_resumida": "Um passeio a pé pela história e ecologia, além de uma exuberante paisagem em uma reserva ambiental.",
            "fotos1": "/static/img/parque_ambiental_pirapora1.png",
            "fotos2": "/static/img/parque_ambiental_pirapora2.png",
            "fotos3": "/static/img/parque_ambiental_pirapora2.png",
            "categoria": "Mirantes e Paisagens",
            "grau_dificuldade": "Facil",
            "distancia": "0.6",
            "tempo_passeio": "2"
        },
    
        {
            "id": "12",
            "nome": "Assentamento Salobro - Turismo Comunitário",
            "descricao": "PASSEIO CONTEMPLATIVO DE TRILHA ECOLÓGICA, VISTA DE MIRANTE BUCÓLICO: ACESSO: Com 30 min de carro, até chegar no povoado, de lá, seguindo por trilha a pé em cerca de 01 km, e se chega a um exuberante mirante e voltando, passa –se por Inúmeros Painéis de Inscrições Rupestres que nos relatam a presença de civilizações de povos originários em nossa região, e finalizando com a apreciação dos produtos artesanais da comunidade. E pode –se também ser incluído um lanche no local no orçamento. DURAÇÃO DO PASSEIO: Cerca de 03 horas. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. GRAU DE DIFICULDADE: LEVE DISTANTE: 10km INICIAR SEMPRE PELA MANHÃ RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "140.00",
            "valor_duas_cinco_pessoas": "155.00",
            "valor_seis_dez_pessoas": "170.00",
            "valor_acima_dez_pessoas": "17.00",
            "descricao_resumida": "PASSEIO CONTEMPLATIVO DE TRILHA ECOLÓGICA, VISTA DE MIRANTE BUCÓLICO.",
            "fotos1": "/static/img/assentamento_salobro1.png",
            "fotos2": "/static/img/assentamento_salobro2.png",
            "fotos3": "/static/img/assentamento_salobro3.png",
            "categoria": "Mirantes e Paisagens",
            "grau_dificuldade": "Facil",
            "distancia": "10",
            "tempo_passeio": "3"
        },
    
        {
            "id": "13",
            "nome": "Trilha Cânion Apertado da Hora",
            "descricao": "PASSEIO DE AVENTURA ACESSO: De transporte até o povoado Carnaúbas. De lá, inicio da caminhada em trilha de nível alto, numa descida íngreme, por um Cânion Exótico chamado de Apertado da Hora (trecho antigamente utilizado pelos moradores povoados interligados), e chegando no Povoado Caranguejo no pé da serra. É um local que oferece uma incrível aventura onde se pode contemplar a formação das rochas mais antigas da região, dada a profundidade dos paredões. O retorno pode ser feito pela mesma trilha, ou por uma estrada de acesso ao Mirante do Gritador. DURAÇÃO DO PASSEIO: Cerca de 03 horas e meia, em média. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. GRAU DE DIFICULDADE: ALTO DISTANTE: 13km INICIAR SEMPRE PELA MANHÃ  RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "170.00",
            "valor_duas_cinco_pessoas": "195.00",
            "valor_seis_dez_pessoas": "215.00",
            "valor_acima_dez_pessoas": "21.50",
            "descricao_resumida": "PASSEIO DE AVENTURA: É um local que oferece uma incrível aventura onde se pode contemplar  a formação das rochas mais antigas da região.",
            "fotos1": "/static/img/trilha_canion_apertado_da_hora1.png",
            "fotos2": "/static/img/trilha_canion_apertado_da_hora2.png",
            "fotos3": "/static/img/trilha_canion_apertado_da_hora3.png",
            "categoria": "Mirantes e Paisagens",
            "grau_dificuldade": "Dificil",
            "distancia": "13",
            "tempo_passeio": "3"
        },
    
        {
            "id": "14",
            "nome": "Pedra do Leão",
            "descricao": "PASSEIO DE AVENTURA ACESSO: De transporte até o Povoado, De onde se inicia a caminhada em circuito, por trilha com grau de dificuldade variando entre médio e alto, com descidas íngreme e subidas acentuadas, até chegar no topo da serra, na chamada Juba do Leão, de onde se tem uma vista magnifica de toda a região, sendo este local, o ponto das maiores altitudes de Pedro II. É uma verdadeira aventura percorrendo cerca de 11 km de muita diversão passando por vários mirantes e chegando no povoado Carnaúbas onde se pode ainda seguir ao mirante do Gritador, ou já retornar ao local de partida. DURAÇÃO DO PASSEIO: Cerca de 05 horas. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. GRAU DE DIFICULDADE: ALTO DISTANTE: 14km INICIAR SEMPRE PELA MANHÃ RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "200.00",
            "valor_duas_cinco_pessoas": "225.00",
            "valor_seis_dez_pessoas": "265.00",
            "valor_acima_dez_pessoas": "26.50",
            "descricao_resumida": "PASSEIO DE AVENTURA de onde se tem uma vista magnifica de toda a região, sendo este local, o ponto das maiores altitudes de Pedro II.",
            "fotos1": "/static/img/pedra_leao1.png",
            "fotos2": "/static/img/pedra_leao2.png",
            "fotos3": "/static/img/pedra_leao3.png",
            "categoria": "Mirantes e Paisagens",
            "grau_dificuldade": "Dificil",
            "distancia": "14",
            "tempo_passeio": "5"
        },
    
        {
            "id": "15",
            "nome": "Trilha dos Mirantes",
            "descricao": "PASSEIO DE ECOTURISMO E AVENTURA ACESSO: De transporte até o Povoado, De onde se inicia a caminhada em trilha médio moderada, passando pelos MIRANTE DO LUIZ JÚLIO, guia cona a História deste icônico Personagem, Pelo MIRANTE DA PEDRA LASCADA, de onde já se tem uma VISTA PRIVILEGIADA da vasta e bucólica paisagem. E no final da caminhada, o MIRANTE DO RETORNO, de onde se tem uma VISTA MAGNIFICA DE TODA A REGIÃO, sendo este local, o ponto das maiores altitudes de Pedro II. DURAÇÃO  DO PASSEIO: Cerca de 05 horas. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. GRAU DE DIFICULDADE: MÉDIO MODERADO DISTANTE: 14km INICIAR SEMPRE PELA MANHÃ, OU ATÉ UMAS 15H00 RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "100.00",
            "valor_duas_cinco_pessoas": "140.00",
            "valor_seis_dez_pessoas": "150.00",
            "valor_acima_dez_pessoas": "15.00",
            "descricao_resumida": "PASSEIO DE ECOTURISMO E AVENTURA de onde se tem uma VISTA MAGNIFICA DE TODA A REGIÃO, sendo este local, o ponto das maiores altitudes de Pedro II.",
            "fotos1": "/static/img/trilha_mirante1.png",
            "fotos2": "/static/img/trilha_mirante2.png",
            "fotos3": "/static/img/trilha_mirante2.png",
            "categoria": "Mirantes e Paisagens",
            "grau_dificuldade": "Medio",
            "distancia": "14",
            "tempo_passeio": "5"
        },
    
        {
            "id": "16",
            "nome": "Turismo de Base Comunitária",
            "descricao": "PASSEIO CULTURAL E ECOLÓGICO. ACESSO: De transporte por cerca de 07 km da cidade, com estrada em parte pavimentada e outra parte em piçarra, até chegar ao povoado Olho D’água do Meio, e de lá saída para visitar vários sítios arqueológicos com pinturas rupestres, em uma caminhada em grau médio por cerca de 30 minutos, contemplando os registros e vestígios dos povos originários no entorno do povoado. Em seguida, em época chuvosa, um banho de riacho e algumas piscinas naturais, e na volta ao povoado, contemplação do artesanato local e ainda,  vivencia no dia a dia da comunidade onde se pode ter a experiência comunitária no lugar, e também por agendamento, pode servir um almoço. DURAÇÃO DO PASSEIO: CERCA DE 05 HORAS. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. GRAU DE DIFICULDADE: LEVE DISTANTE: 10km INICIAR SEMPRE PELA MANHÃ  RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "155.00",
            "valor_duas_cinco_pessoas": "160.00",
            "valor_seis_dez_pessoas": "180.00",
            "valor_acima_dez_pessoas": "18.00",
            "descricao_resumida": "PASSEIO CULTURAL E ECOLÓGICO saída para visitar vários sítios arqueológicos com pinturas rupestres, contemplando os registros e vestígios dos povos originários no entorno do povoado.",
            "fotos1": "/static/img/turismo_base_comunitaria1.png",
            "fotos2": "/static/img/turismo_base_comunitaria2.png",
            "fotos3": "/static/img/turismo_base_comunitaria3.png",
            "categoria": "Histórico e Cultural",
            "grau_dificuldade": "Facil",
            "distancia": "10",
            "tempo_passeio": "5"
        },
    
        {
            "id": "17",
            "nome": "Sítios Aqueológicos Povoado Lapa",
            "descricao": "POV. LAPA. ACESSO: De transporte por cerca de 57 km da cidade, com estrada em parte pavimentada e outra parte em piçarra, até chegar ao povoado LAPA para visita aos sítios arqueológicos com pinturas rupestres, em uma caminhada em grau médio por cerca de 60 minuto em circuitos, contemplando os registros e vestígios dos povos originários no entorno do povoado. Com lindas e bucólicas formações rochosas e na volta ao povoado, contemplação do artesanato local e ainda,  vivencia no dia a dia da comunidade onde se pode ter a experiência comunitária no lugar, e também por agendamento, pode servir um almoço. DURAÇÃO  DO PASSEIO: Cerca de 07 horas. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. GRAU DE DIFICULDADE: MÉDIO DISTANTE: 57 km INICIAR SEMPRE PELA MANHÃ RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "200.00",
            "valor_duas_cinco_pessoas": "230.00",
            "valor_seis_dez_pessoas": "265.00",
            "valor_acima_dez_pessoas": "26.50",
            "descricao_resumida": "Visita aos sítios arqueológicos com pinturas rupestres Com lindas e bucólicas formações rochosas, contemplando os registros e vestígios dos povos originários no entorno do povoado.",
            "fotos1": "/static/img/sitio_arqueologico_lapa1.png",
            "fotos2": "/static/img/sitio_arqueologico_lapa2.png",
            "fotos3": "/static/img/sitio_arqueologico_lapa3.png",
            "categoria": "Histórico e Cultural",
            "grau_dificuldade": "Medio",
            "distancia": "57",
            "tempo_passeio": "7"
        },
    
        {
            "id": "18",
            "nome": "Sítios Arqueológicos Serra do Quinto e Ladeira da Nolisa",
            "descricao": "POV. BURITI GRANDE DOS AQUILES. ACESSO: De transporte por cerca de 08 km da cidade, até entrada na trilha a pé aos Sítios Arqueológicos, com estrada em piçarra, até chegar ao povoado LAPA para visita aos sítios arqueológicos com pinturas rupestres, em uma caminhada em grau médio por cerca de 25 minutos, a contemplar os registros e vestígios dos povos originários no hoje povoado. Com lindas e bucólicas formações rochosas e na volta, retomada ao veiculo e seguir descendo pela Lendária LADEIRA DA NOLISA, antiga estrada pela qual se tinha acesso a Pedro II, vindo do Ceará. Importante, em CARRO tipo 4 x 4. DURAÇÃO DO PASSEIO: Cerca de 04 horas. PERÍODO BOM PARA ESTE PASSEIO: O ANO TODO. GRAU DE DIFICULDADE: MÉDIO DISTANTE: 09 km INICIAR SEMPRE PELA MANHÃ RECOMENDADO SEMPRE CONTRATAR GUIAS DE TURISMO CREDENCIADOS, CALÇADOS E ROUPAS ADEQUADOS PARA TRILHAS, LANCHE, E BASTANTE ÁGUA P/ BEBER",
            "valor_uma_pessoa": "160.00",
            "valor_duas_cinco_pessoas": "175.00",
            "valor_seis_dez_pessoas": "205.00",
            "valor_acima_dez_pessoas": "20.50",
            "descricao_resumida": "Visita aos sítios arqueológicos com pinturas rupestres, a contemplar os registros e vestígios dos povos originários no hoje povoado Lapa.",
            "fotos1": "/static/img/sitio_arqueologico_buriti_grande_aquiles1.png",
            "fotos2": "/static/img/sitio_arqueologico_buriti_grande_aquiles2.png",
            "fotos3": "/static/img/sitio_arqueologico_buriti_grande_aquiles3.png",
            "categoria": "Histórico e Cultural",
            "grau_dificuldade": "Medio",
            "distancia": "9",
            "tempo_passeio": "4"
        }
    ];

    const pontoId = window.location.hash.substring(1);
    console.log(pontoId);

    const ponto = pontosTuristicos.find(p => p.id === pontoId);

    

    if (ponto) {
        // Criar a estrutura HTML dinamicamente
        const gridSection = document.querySelector('.grid3');
        gridSection.innerHTML = `
            <div class="grid3-item">
                <a href="${ponto.fotos1}">
                    <img src="/static/img${ponto.fotos1}" data-src="${ponto.fotos1}" class="lazyload lazyloading lazyloaded">
                </a>
            </div>
            <div class="grid3-item columns">
                <a href="${ponto.fotos2}">
                    <img src="/static/img${ponto.fotos2}" data-src="${ponto.fotos2}" class="lazyload lazyloading lazyloaded">
                </a>
            </div>
            <div class="grid3-item columns">
                <a href="${ponto.fotos3}">
                    <img src="/static/img${ponto.fotos3}" data-src="${ponto.fotos3}" class="lazyload lazyloading lazyloaded">
                </a>
            </div>
        `;

        const container = document.getElementById('container-ponto');
        container.innerHTML = `
            <h1 id="nome">${ponto.nome}</h1>
            <div>
                <div id="item-1">
                    <h4>Descrição</h4>
                    <p id="descricao">${ponto.descricao}</p>
                </div>
                <div id="item-2">
                    <h4>Valores</h4>
                    <p>Valores Serviço de Guias: Transporte do Cliente.</p>
                    <table class="table-sm container-fluid my-2">
                        <tr>
                            <th>Quantidade de Pessoas</th>
                            <th>Preço</th>
                        </tr>
                        <tr class="table table-striped">
                            <td>
                                <select id="quantidadeSelect" class="form-select" onchange="atualizarPrecoPorSelecao()">
                                    <option value="1">1</option>
                                    <option value="2-5">2 a 5</option>
                                    <option value="6-10">6 a 10</option>
                                    <option value="acima10">Acima de 10</option>
                                </select>
                                <div id="controleAcimaDez" class="btn-group mt-2 d-none" role="group" aria-label="Controle de quantidade">
                                    <button onclick="quantidadePessoas(-1)" type="button" class="btn">-</button>
                                    <button id="contadorPessoas" class="btn">0</button>
                                    <button onclick="quantidadePessoas(1)" type="button" class="btn">+</button>
                                </div>
                            </td>
                            <td id="preco">R$ 0,00</td>
                        </tr>
                    </table>
                </div>
                <div id="item-3">
                    <h4>Distância</h4>
                    <p id="distancia">${ponto.distancia} km</p>
                </div>
                <div id="item-4">
                    <h4>Tempo Médio do Passeio</h4>
                    <p id="tempo">${ponto.tempo_passeio} hrs</p>
                </div>
                <div id="item-5">
                    <a class="btn btn-success my-0" href="#" id="whatsapp">Entre em Contato</a>
                </div>
            </div>
        `;

        const nomeLocal = ponto.nome;
        const mensagem = `Olá, vi sobre ${nomeLocal} no Veja Pedro II. Gostaria de obter informações sobre as opções de roteiros e como participar.`;
        const whatsappUrl = `https://wa.me/558694109118?text=${encodeURIComponent(mensagem)}`;
        document.getElementById('whatsapp').href = whatsappUrl;

        window.valoresPonto = {
            valorUmaPessoa: parseFloat(ponto.valor_uma_pessoa),
            valorDuasCincoPessoas: parseFloat(ponto.valor_duas_cinco_pessoas),
            valorSeisDezPessoas: parseFloat(ponto.valor_seis_dez_pessoas),
            valorAcimaDezPessoas: parseFloat(ponto.valor_acima_dez_pessoas)
        };

        atualizarPrecoPorSelecao();
    } else {
        console.log("Ponto turístico não encontrado na lista.");
    }
});

function quantidadePessoas(delta) {
    const contadorElement = document.getElementById('contadorPessoas');
    let quantidade = parseInt(contadorElement.innerText) + delta;

    if (quantidade < 10) {
        quantidade = 10;
        document.getElementById('quantidadeSelect').value = '6-10';
        document.getElementById('controleAcimaDez').classList.add('d-none');
    }

    contadorElement.innerText = quantidade;
    atualizarPreco(quantidade);
}

function atualizarPreco(quantidade) {
    const precoElement = document.getElementById('preco');
    let preco = 0;

    if (quantidade === 1) {
        preco = window.valoresPonto.valorUmaPessoa;
    } else if (quantidade > 1 && quantidade <= 5) {
        preco = window.valoresPonto.valorDuasCincoPessoas;
    } else if (quantidade > 5 && quantidade <= 10) {
        preco = window.valoresPonto.valorSeisDezPessoas;
    } else if (quantidade > 10) {
        preco = window.valoresPonto.valorAcimaDezPessoas * quantidade;
    }

    precoElement.innerText = `R$ ${preco.toFixed(2)}`;
}

function atualizarPrecoPorSelecao() {
    const selectElement = document.getElementById('quantidadeSelect');
    const selectedValue = selectElement.value;
    const controleAcimaDez = document.getElementById('controleAcimaDez');
    const contadorElement = document.getElementById('contadorPessoas');

    if (selectedValue === 'acima10') {
        controleAcimaDez.classList.remove('d-none');
        contadorElement.innerText = 10;
        atualizarPreco(10);
    } else {
        controleAcimaDez.classList.add('d-none');
        contadorElement.innerText = 0;
        let quantidade = 0;
        if (selectedValue === '1') {
            quantidade = 1;
        } else if (selectedValue === '2-5') {
            quantidade = 5;
        } else if (selectedValue === '6-10') {
            quantidade = 10;
        }
        atualizarPreco(quantidade);
    }
}
