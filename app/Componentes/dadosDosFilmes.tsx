export const dadosDosFilmes = () => {
    const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#1a1a2e", imagem: "https://th.bing.com/th/id/OIP.Oxz4RD27JiIxX-sP4Che0gHaLH?w=120&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
      { id: "1b", titulo: "The Odyssey", cor: "#16213e", imagem: "https://ingresso-a.akamaihd.net/prd/img/movie/a-odisseia/91713f7f-195b-4d60-89c2-8c94588f7aa5.webp" },
      { id: "1c", titulo: "O Caminho para El Dourado", cor: "#0f3460", imagem: "https://1.bp.blogspot.com/_X643PcxIPVk/Sm2sifpU54I/AAAAAAAAYP4/qUaFZbuwio0/s1600/zmla2w.jpg" },
      { id: "1d", titulo: "Homem-Aranha:UM Novo Dia", cor: "white", imagem: "https://th.bing.com/th/id/OSK.zXW5QqjW2GCYxKN7smuMdtEEympc4FxKvzZZj53boP0?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "1e", titulo: "The Boys", cor: "#2b2d42", imagem: "https://tse1.mm.bing.net/th/id/OIP.7O1XGMVIldnKYa1TfVZZUQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f", imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiikzgr47XJyTSVFJelDl2bpkKs-Sl9i0TJC3CqQmW_aMmo-wRRZkjoHX6Y2AhQA-JK8CMyFSVn_l7FGiUFkbyL5TRw3WS1wYF6Ok1f9Fm0_DIUskYXJp7wTh9CtkRBfQytEwXQO9ovA6-vhiyCq8cqoc7Jav5W2dBYXVTu8dTq1IDcDoWwYO7WedIUIA1s/s2000/John-Wick-4-22.jpg"},
      { id: "2b", titulo: "The Batman", cor: "#162447", imagem:"https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
      { id: "2c", titulo: "Deadpool e Wolverine", cor: "#1f4068", imagem: "https://www.picclickimg.com/ikAAAOSw3jBnBzJK/Deadpool-amp-Wolverine-Dynamic-Duo-Poster-Marvel-Wall.webp"},
      { id: "2d", titulo: "Homem-Aranha:UM Novo Dia", cor: "white", imagem: "https://th.bing.com/th/id/OSK.zXW5QqjW2GCYxKN7smuMdtEEympc4FxKvzZZj53boP0?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Corra que a polícia vem aí!", cor: "#2d132c", imagem: "https://image.tmdb.org/t/p/w500/iYCWSKbC4fwzaKEJ9QFx8MsH7bJ.jpg"},
      { id: "3b", titulo: "Free Guy", cor: "#1c3334", imagem: "https://th.bing.com/th/id/OIP.HmHVyFjJ-aVRWSQvm6LXegHaEK?w=285&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
      { id: "3c", titulo: "Superbad: é hoje", cor: "#2c003e", imagem: "https://th.bing.com/th/id/OIP.np-HkYbEh_mGYLPxsH4-6gHaJ4?w=132&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
    ],
  },
  {
    id: "4",
    titulo: "Suspense",
    filmes: [
      { id: "4a", titulo: "A empregada", cor: "#0d0d0d", imagem: "https://th.bing.com/th/id/OIP.VvN7aAPcXJoZclkbUU4T0AHaK4?w=115&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
      { id: "4b", titulo: "Onde os fracos não tem vez", cor: "#001011", imagem: "https://tse3.mm.bing.net/th/id/OIP.UgmJU1e50hdHKVItMHaAJQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { id: "4c", titulo: "Os sete crimes capitais", cor: "#002b36", imagem: "https://tse2.mm.bing.net/th/id/OIP.x3bQ8IgMSaMD9l-X0Jxp7AHaKk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "O massacre da serra elétrica", cor: "#200122", imagem: "https://m.media-amazon.com/images/S/pv-target-images/cff84e44ed59ac9d501d53806f8cecd270759722fd045ba694c352658cc363e5.jpg" },
      { id: "5b", titulo: "Sexta-Feira 13", cor: "#190a05", imagem: "https://images.justwatch.com/poster/257268078/s718/sexta-feira-13-2009.%7Bformat%7D" },
      { id: "5c", titulo: "O Pânico 7", cor: "#0a0a0a", imagem: "https://ingresso-a.akamaihd.net/b2b/production/uploads/articles-content/a6419da9-9c6f-4ca0-b7e1-1f60cb3455aa.jpg" },
    ],
  },
];
    return({
       categorias
    })
}