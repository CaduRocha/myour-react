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
              Sou um profissional generalista em tecnologia, projetos e marketing digital, com mais de 15 anos de experiência conectando estratégia, produto e execução. Atuo na criação de sites, sistemas, produtos digitais e operações de marketing, unindo visão de negócio com conhecimento técnico em desenvolvimento web, gestão de projetos, tráfego pago e experiência do usuário. Ao longo da minha trajetória, liderei equipes multidisciplinares, coordenei projetos de tecnologia e participei da construção de soluções digitais para empresas de diferentes segmentos, sempre com foco em performance, organização e crescimento sustentável. Hoje, meu trabalho é transformar ideias em soluções digitais funcionais, escaláveis e bem estruturadas. 🚀
</div>
            {/* button */}
            <a href="https://api.whatsapp.com/send?phone=5521972832408&text=Ol%C3%A1,%20entrei%20no%20seu%20site%20e%20quero%20saber%20mais"  className="btn">
              <span className="animated-button">
                <span>Bora Conversar </span>
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
