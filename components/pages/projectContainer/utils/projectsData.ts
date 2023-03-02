type project = {
  name: string;
  txt: string;
  stack: string;
  scope: string;
  github: string;
};

export const projectsData: project[] = [
  {
    name: "WordList",
    txt: "WordList é um site feito para te ajudar a aprender um idioma, mais precisamente para te ajudar a memorizar algumas palavras.",
    stack: "nextjs, styled-components, graphql, mongodb, vitest, typescript",
    scope: "Full-Stack",
    github: "http://github.com/rafael-cesario/wordlist",
  },

  {
    name: "Algorithms",
    txt: "Uma coleção de algoritmos.",
    stack: "Javascript",
    scope: "",
    github: "https://github.com/Rafael-Cesario/Algorithms",
  },

  {
    name: "Portfólio",
    txt: "Meu site pessoal para salvar meus projetos.",
    stack: "nextjs, styled-components, vitest, typescript",
    scope: "Frontend",
    github: "http://github.com/rafael-cesario/portfolio-2.0",
  },

  {
    name: "Login Page",
    txt: "Uma pagina para fazer login ou criar uma conta.",
    stack: "nextjs, graphql, tailwindcss, typescript, mongodb, JWT",
    scope: "Full-Stack",
    github: "https://github.com/Rafael-Cesario/Projects/tree/main/08-login",
  },

  {
    name: "User Crud - Graphql",
    txt: "Um simples crud de usuario utilizando graphql.",
    stack: "graphql, mongodb, typescript, vitest",
    scope: "backend",
    github: "https://github.com/Rafael-Cesario/Projects/tree/main/05-user-crud-graphql",
  },

  {
    name: "Projects",
    txt: "Alguns pequenos projetos focados em algo especifico.",
    stack: "",
    scope: "Full-Stack",
    github: "https://github.com/Rafael-Cesario/Projects",
  },
];
