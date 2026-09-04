import perfil from "./assets/perfil.svg";
import audio from "./assets/apresentacao.wav";

function App() {
  return (
    <>
      <header className="topo">
        <nav className="menu" aria-label="Menu principal">
          <a href="#inicio" className="logo">Meu Portfólio</a>
          <div className="links">
            <a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a>
          </div>
        </nav>
      </header>
      <main>
        <section id="inicio" className="hero">
          <div>
            <p className="boas-vindas">Olá! Bem-vindo ao meu cantinho na web.</p>
            <h1 className="pulse">Olá, eu sou JoaoPedro</h1>
            <p>Sou estudante de Engenharia de Software, apaixonado por desenvolvimento web. Aqui compartilho projetos, aprendizados e experimentos enquanto aprimoro minhas habilidades.</p>
            <a className="botao" href="#projetos">Ver meus projetos</a>
          </div>
          <img src={perfil} alt="Ilustração de perfil para o portfólio" />
        </section>

        <section id="sobre" className="secao">
          <h2>Sobre mim</h2>
          <p>Estou cursando Engenharia de Software e me concentro em front-end, acessibilidade e boas práticas. Neste portfólio você encontra um pouco da minha trajetória, habilidades e projetos — alguns em andamento e outros concluídos.</p>
        </section>

        <section id="projetos" className="secao">
          <h2>Projetos e habilidades</h2>
          <div className="cards">
            <article className="card"><h3>HTML e CSS</h3><p>Crio páginas responsivas e bem estruturadas, focando em usabilidade e visual limpo.</p></article>
            <article className="card"><h3>JavaScript e TypeScript</h3><p>Desenvolvo interações e aprendo a construir aplicações mais robustas usando TypeScript.</p></article>
            <article className="card"><h3>Projetos em andamento</h3><p>Trabalho em projetos próprios para praticar conceitos e experimentar novas tecnologias.</p></article>
          </div>
        </section>

        <section className="secao midia">
          <h2>Apresentação rápida</h2>
          <p>Além da imagem, há um áudio curto com uma apresentação pessoal — uma forma diferente de me conhecer.</p>
          <audio controls><source src={audio} type="audio/wav" />Seu navegador não suporta áudio.</audio>
        </section>

        <section id="contato" className="secao contato">
          <h2>Contato</h2>
          <p>Quer conversar ou trocar ideias? Me encontre pelos links abaixo:</p>
          <div className="contatos">
            <a href="mailto:jr2809574@gmail.com">Enviar e-mail</a>
            <a href="https://github.com/joaoplayzx" target="_blank" rel="noreferrer">Ver meu GitHub</a>
          </div>
        </section>
      </main>
      <footer><p>© 2026 - Portfólio pessoal desenvolvido para Laboratório de Programação Front End.</p></footer>
    </>
  );
}
export default App;