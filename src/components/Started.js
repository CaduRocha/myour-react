import TypingAnimation from "./TypingAnimation";

const Started = () => {
  return (
    <div className="section started" id="section-started">
      <div className="centrize full-width">
        <div className="vertical-center">
          {/* title */}
          <h1 className="h-title ">
            Cadu <br/> Rocha.me
          </h1>
          {/* content started */}
          <div className="started-content">
            {/* subtitle */}
            <div className="h-subtitles">
              <div className="h-subtitle typing-subtitle">
                <TypingAnimation />
              </div>
              <span className="typed-subtitle" />
            </div>
            {/* text */}
            <div className="h-text">
            Profissional com mais de 15 anos de experiência em Tecnologia, Gestão de Projetos (Web e TI), Marketing Digital e Infraestrutura. Com uma trajetória em setores como publicidade, moda, governo e mercado financeiro, possuo sólidos conhecimentos em metodologias de gerenciamento de projetos PMI e Ágil. Minha experiência inclui coordenação de equipes, entrega contínua de valor, e inovação. Atuei como Product Owner, Scrum Master, e Head of Marketing Communication, com foco em automação e desenvolvimento de estratégias de marketing.
            </div>
            {/* button */}
            <a href="#" className="btn">
              <span className="animated-button">
                <span>Bora Conversar?</span>
              </span>
              <i className="icon fas fa-chevron-right" />
            </a>
            {/* mosue button */}
            <a href="#" className="btn mouse-btn" style={{ display: "none" }}>
              <i className="icon fas fa-chevron-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Started;
