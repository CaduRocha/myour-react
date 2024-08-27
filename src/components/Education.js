import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Education = () => {
  return (
    <div className="section resume" id="section-education">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Formação Acadêmica</div>
          <div className="subtitle">Cursos & WorkShop</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.education}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">2005-2009</div>
                <div className="name">
                  Análise de Sistemas - Universidade Candido Mendes 
                </div>
                <div className="single-post-text">
                  <p>
Me formei em análise de sistemas com enfase em gerenciamento de projetos pela universidade de Cândido Mendes em 2009.         </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2017</div>
                <div className="name">Espanhol B1 - AIL Madri, ESPANHA
                  
                </div>
                <div className="single-post-text">
                  <p>
                   Passei 3 meses estudando espanhol na AIL Madrid Spanish Language School. 
                  </p>
                </div>
              </div>
            </SwiperSlide><br></br>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2021</div>
                <div className="name">
                 Formação de Líderes (32h) - Dale Carnegie Training</div>
                 <div className="single-post-text">
                 <p> liderança estratégica, comunicação eficaz e desenvolvimento de equipes de alta performance
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2017</div>
                <div className="name">
                  Product Manager Mobile (18h) <br /> Product Arena
                  
                </div>
                <div className="single-post-text">
                  <p>
                    2 dias de WorkShop com os Instrutores Horácio Soares e Arthur Castro, na época, era  uma grande novidade o universo de produtos. Foi muito enriquecedor. 
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2014-2015</div>
                <div className="name">
Formação Completa Em Gerenciamento de Projetos (72h) - PMI - ProjectLab         </div>
                <div className="single-post-text">
                  <p>
                    Intensivo para tirar a certificação PMP ao qual eu conseguir obter no ano seguinte.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2016</div>
                <div className="name">
Curso de Negóciaçao (16h)- Fundação Getulio Vargas             </div> 
  <div className="single-post-text">
                  <p>
                  Curso intensivo de 16 horas, oferecido pela FGV, focado em técnicas e estratégias de negociação. Abrange desde o planejamento até a execução de negociações em diferentes contextos, com ênfase em habilidades como comunicação, persuasão e resolução de conflitos.                   </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2019</div>
                <div className="name">
                Formação Blueprint - Meta
                </div> 
  <div className="single-post-text">
                  <p>
                  Treinamento oficial oferecido pela Meta, especializado em marketing digital e publicidade nas plataformas Facebook e Instagram.    </p>            </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2024</div>
                <div className="name">
               Bootcamp - Agile Expert - XP Educação
                </div> 
  <div className="single-post-text">
                  <p>
O bootcamp tem como objetivo abordar de forma intensiva conceitos e práticas de gerenciamento ágil de projetos, habilitando atuar em times ágeis como Agile Coach, Product Owners ou Scrum Master.     </p> </div>
</div> 
            </SwiperSlide>
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="education_prev prev fas fa-chevron-left" />
            <span className="education_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
