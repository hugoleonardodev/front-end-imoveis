This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

For TESTING:

```bash
npm run text
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Considerações Finais

### Instruções Iniciais Obrigatórias

1 - Optei por utilizar o NextJS na ultima versão 14. A última vez que trabalhei com Next, não tem tanto tempo, mas eles atualizão rapido. Era versão 12 ainda,
então achei interessante dar uma conferida. Acabei perdendo um pouco de tempo tento que lembrar algumas features e aprendendo a usar a ultima versão. Investi
um pouco de tempo na questão das imagens. Não estou otimizando imagens pequenas como ícones. Mas estou otimizandoa imagem de fundo da moça tomando café. Mesmo
aplicando alguma otimização e fazendo lazy loading, ainda assim, pode ter um fallback menor. E a imagem final também pode ser menor. Outra questão que não
preocupei muito foi com a estrutura do projeto. Então tem context em lugar que não é pra colocar.

2 - TailwindCSS já havia trabalhado anteriormente também. Porém acabei cometendo alguns erros por tentar utilizar a AI do Figma que cria os componentes em React
e TailwindCSS. Funciona parcialmente. Pois acaba criando muitas camadas de div e inserindo classes CSS desnecessárias. Então prejudicou muito o desenvolvimento.
Foi uma epxeriencia ruim, mas valeu o aprendizado. Não vou mais confiar nessas AI. Vou consultar minha base pessoal mesmo.

3 - Foi utilizdo classes para os dados. É importatnte para encapsulamento dos dados e métodos. Onde não queremos que sejam acessados facilmente. E ainda melhora
a questão da reusabilidade.

4 - Seguindo o protótipo do Figma. Como disse, acabei confiando demais nessas AI. Agora sei que nenhuma presta. Acabei comentendo erros para criar os inputs,
dropdowns e reponsividade. Principalmente porque ele cria muitas camadas de div e não usa HTML semantico. E acabei perdendo referencia do input na hora de
adicionar a interatividade. E o dropdown a mesma coisa. Sem a referencia da list que ele moestra, fica mais dificil implementar a função de clicar fora e fechar.
Perdi tempo corrigindo e não ficou bom. Mas pelo menos temos alguo pra discutir. Optei pelo caminho mais dificil de construir do zero os componentes pois sei que
ficar baixando dependecias para o projeto só piora performance. Também dei uma atenção na questão da acessibilidade. Não está 100%. Mas já tem bastante coisa
implementada. Sempre priorizando React/TypeScript e a API do JavaScript.

#### Formulário

Aprensenta a interatividade proposta. Com possibilidade de acessar somente pelo teclado. A questão das sombras não ficou muito boa, pois acredito que estou
usando as cores padrões do TailwindCSS. Não configurei elas. O hover funciona. E eu deveria reduzir as camadas de div, usar somente um input. E criar um dropdown
reutilizavel com referencia propria. Vai resolver a maioria dos problemas que eu mesmo criei durante o desenvolvimento. Mas pelo menos um fluxo de interatividade
está contemplado.

O botão está com uma animação e só é animado após selecionar um termo de busca. Porém está numa posição ruim para o mobile. Eu deveria ter feito mobile first.
Mas fiquei um pouco afobado e acabei indo direto pra Web. Porque era o que tinha mais detalhes das interatividades no Figma.

Também é nessário um loading. Ou pelo menos um spinner pra carregar as informações. Mas não encontrei no Figma.

#### Listagem

1 - Criei um Carousel responsivo que atende bem as ncessidades. Mas precisa melhorar o CSS. Não tem nenhuma lib externa de componentes. ELe também pode ser
reutilizado no Card com imagens das propriedades. Mas não cheguei a desenvolver isso.

#### Extras

1 - Não desenhei os demais componentes. Eu estava animado com a ideia de usar o Figma com AI para desenhar os componentes. Mas quebrei a cara e desanimei.
Então acabei optando por entregar o máximo de React/TypeScript que eu conseguisse.

2 - Configurei o ambiente de testes para componentes React e de unidade. Estou fazendo testes de unidade para as classes que manipulam dados. E também um
teste unitário para um componente React. Testando o componente Button. Então acredito que esteja contemplado. Tenho epxeriencia com testes também.

3 - Header flutuante, acredito que seja o Header fixo do Figma. Ou talvez uma animação. Eu segui o Figma. Posso criar uma animação pra ele e apra o Carousel
também. Usando o TailwindCSS, sem problemas.
