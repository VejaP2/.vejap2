var larguraViewport = window.innerWidth;

class criarPagina {
    constructor(pessoa) {
        document.querySelectorAll('.text-color').forEach((tab) => {
            tab.addEventListener('click', function () {
                // Remove a classe 'active' de todas as abas
                document.querySelectorAll('.text-color').forEach((tab) => {
                    tab.classList.remove('active');
                });
        
                // Adiciona a classe 'active' à aba clicada
                this.classList.add('active');
            });
        });
        document.getElementById('nome').textContent = pessoa.nome;
        document.getElementById('descricao').textContent = pessoa.descricao;
        document.getElementById('fotoPerfil').src = pessoa.fotoPerfilGrande;
        document.getElementById('gmail').href = "mailto:" + pessoa.gmail;
        if (pessoa.likedin) {
          document.getElementById('likedin').href = pessoa.likedin;
          document.getElementById('likedin').style.display = 'inline'; // Mostra o link
        } else {
          document.getElementById('likedin').style.display = 'none'; // Oculta o link
        }

        if (pessoa.github) {
          document.getElementById('github').href = pessoa.github;
          document.getElementById('github').style.display = 'inline'; // Mostra o link
        } else {
          document.getElementById('github').style.display = 'none'; // Oculta o link
        }
        
    }
};

class criarPaginaAcontur {
    constructor(pessoa) {
        document.getElementById('nome').textContent = pessoa.nome;
        document.getElementById('descricao').textContent = pessoa.descricao;
        document.getElementById('primeiraImagem').src = pessoa.imagem1;
        document.getElementById('segundaImagem').src = pessoa.imagem2;
        document.getElementById('terceiraImagem').src = pessoa.imagem3;
        document.getElementById('primeiraImagem').setAttribute('data-src', pessoa.imagem1);
        document.getElementById('segundaImagem').setAttribute('data-src', pessoa.imagem2);
        document.getElementById('terceiraImagem').setAttribute('data-src', pessoa.imagem3);
        document.getElementById('primeiraimagem').href = pessoa.imagem1;
        document.getElementById('segundaimagem').href = pessoa.imagem2;
        document.getElementById('terceiraimagem').href = pessoa.imagem3;
        document.getElementById('gmail').href = "mailto:" + pessoa.gmail;
        document.getElementById('facebook').href = pessoa.facebook;
        document.getElementById('whatsapp').href = pessoa.whatsapp;
        document.getElementById('instagram').href = pessoa.instagram;
    }
};

let pessoas = {
    Acontur: acontur = {
        nome: 'Acontur',
        descricao: 'uma breve descrição',
        gmail: 'email@mail.com',
        facebook: '@user1',
        instagram: '@user1',
        whatsapp: '86999555000',
        imagem1: 'https://via.placeholder.com/400x400.png?text=placeholder',
        imagem2: 'https://via.placeholder.com/400x400.png?text=placeholder',
        imagem3: 'https://via.placeholder.com/400x400.png?text=placeholder'
    },
    Messias: messias = {
        nome: 'Messias Alves',
        descricao: 'Membro desde 2022 e lider dos programadores do projeto. Desenvolvedor Fullstack responsável pelo Front-End e Back End do Site.',
        gmail: 'messiasalvesdesousa098@gmail.com',
        likedin: 'https://www.linkedin.com/in/messias-alves-de-sousa-a5182923a/',
        github: 'https://github.com/ksy5',
        fotoPerfilGrande: '/static/img/messiasgrande.jpeg'
    },
    Bruno: bruno = {
        nome: 'Bruno Brito',
        descricao: 'Lider do projeto desde sua criação em 2022, programador full-stack responsável pelo Front-End e Back End do site.',
        gmail: 'brunobritovd1@gmail.com',
        likedin: 'https://www.linkedin.com/in/bruno-brito-veloso-dantas-bb6b54321/',
        github: 'https://github.com/Bruno-britovd',
        fotoPerfilGrande: '/static/img/brunogrande.jpeg'
    },
    Matheus: matheus = {
        nome: 'Matheus',
        descricao: 'Membro do projeto desde 2022, programador e pentester oficial do site.',
        gmail: 'mbaroscastrom@mail.com',
        likedin: '',
        github: '',
        fotoPerfilGrande: '/static/img/matheusgrande.jpeg'
    },
    Diego: diego = {
        nome: 'Diego',
        descricao: 'Membro do projeto desde 2023, lider da equipe de Design do site.',
        gmail: 'brunobritovd1@gmail.com',
        likedin: '',
        github: 'https://github.com/Diegodearaujo244',
        fotoPerfilGrande: '/static/img/diegogrande.png'
    },
    Igor: igor = {
        nome: 'Igor',
        descricao: 'Membro do projeto desde 2022, integrante da equipe de Design e Marketing do site.',
        gmail: 'brunobritovd1@gmail.com',
        likedin: '',
        github: '',
        fotoPerfilGrande: '/static/img/igorgrande.jpeg'
    },
    Riquelme: riquelme = {
        nome: 'Riquelme',
        descricao: 'Membro do projeto desde 2022, integrante da equipe de programação do site e marketing.',
        gmail: 'brunobritovd1@gmail.com',
        likedin: '',
        github: 'https://github.com/Riquelme-404',
        fotoPerfilGrande: '/static/img/riquelmegrande.jpeg'
    },
    Daniel: daniel = {
        nome: 'Daniel',
        descricao: 'Membro do projeto desde 2023, integrante da equipe de programação do site.',
        gmail: 'brunobritovd1@gmail.com',
        likedin: '',
        github: 'https://github.com/danieluchoaa',
        fotoPerfilGrande: '/static/img/danielgrande.jpeg'
    },
    Vitor: vitor = {
        nome: 'Vitor',
        descricao: 'Membro desde 2022, integrante da equipe de marketing do site.',
        gmail: 'brunobritovd1@gmail.com',
        likedin: '',
        github: '',
        fotoPerfilGrande: '/static/img/vitorgrande.jpeg'
    }
};

if (window.location.pathname.includes('/acontur')) {
    new criarPaginaAcontur(pessoas.Acontur);
}

else {
    new criarPagina(pessoas.Messias);
}


// Exemplo de array em JavaScript com pessoas
const items = [
    {
      nome: "Messias",
      objeto: 'Messias',
      funcao: 'criarPagina(pessoas.Messias)'
    },
    {
      nome: "Bruno",
      objeto: 'Bruno',
      funcao: 'criarPagina(pessoas.Bruno)'
    },
    {
      nome: "Diego",
      objeto: 'Diego',
      funcao: 'criarPagina(pessoas.Diego)'
    },
    {
      nome: "Igor",
      objeto: 'Igor',
      funcao: 'criarPagina(pessoas.Igor)'
    },
    {
      nome: "Daniel",
      objeto: 'Daniel',
      funcao: 'criarPagina(pessoas.Daniel)'
    },
    {
      nome: "Matheus",
      objeto: 'Matheus',
      funcao: 'criarPagina(pessoas.Matheus)'
    },
    {
      nome: "Riquelme",
      objeto: 'Riquelme',
      funcao: 'criarPagina(pessoas.Riquelme)'
    },
    {
      nome: "Vitor",
      objeto: 'Vitor',
      funcao: 'criarPagina(pessoas.Vitor)'
    }
  ];

  // Função para gerar os itens de lista dinamicamente
  function gerarNavItems(items) {
    const navItemsContainer = document.getElementById('nav-items');
    navItemsContainer.innerHTML = ''; // Limpa o conteúdo anterior, se houver

    items.forEach((pessoa, index) => {
      const liClass = index === 0 ? "nav-link text-color active" : "nav-link text-color"; // A primeira pessoa ativa por padrão
      const liItem = `
        <li class="nav-item item">
          <a class="${liClass}" onclick="new ${pessoa.funcao}">${pessoa.nome}</a>
        </li>
      `;

      navItemsContainer.insertAdjacentHTML('beforeend', liItem);
    });
  }

  // Chama a função passando o array 'pessoas'
  gerarNavItems(items);