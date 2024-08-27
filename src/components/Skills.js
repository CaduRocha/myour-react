import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title"> Skills</div>
          <div className="subtitle">Projetos, Produtos, Infraestrutura, Análise de Dados & Marketing
          </div>
        </div>
        {/* skills items */}
        <div className="skills percent">
          <ul>
            <li>
              <div className="name">Jira
              </div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "50%" }}>
                  <span className="percent">50%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Microsoft Project</div>
              <div className="single-post-text">
               
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">TeamWorks</div>
              <div className="single-post-text">
               
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "65%" }}>
                  <span className="percent">65%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">WBS e BMC</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
            
           
            <li>
              <div className="name">HubSpot</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "65%" }}>
                  <span className="percent">65%</span>
                </div>
              </div>
            </li>

            <li>
              <div className="name">Bitrix.24</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }}>
                  <span className="percent">75%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Supeset</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">PowerBI</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "30%" }}>
                  <span className="percent">30%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Googe Analytics</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
              <li>
              <div className="name">Googe Analytics</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>

   <li>
              <div className="name">CloudFlare</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "45%" }}>
                  <span className="percent">55%</span>
                </div>
              </div>
            </li>
             <li>
              <div className="name">Servidores DNS (Zone)</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
              <li>
              <div className="name">Domain Name</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
             <li>
              <div className="name">AWS Cloud</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "30%" }}>
                  <span className="percent">30%</span>
                </div>
              </div>
            </li>

   <li>
              <div className="name">Meta Business</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "93%" }}>
                  <span className="percent">93%</span>
                </div>
              </div>
            </li>
<li>
              <div className="name">RD Station</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "83%" }}>
                  <span className="percent">83%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Zapier, Make e Softwares de Automação</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "68%" }}>
                  <span className="percent">68%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">GitHub</div>
              <div className="single-post-text">
                <p>
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "72%" }}>
                  <span className="percent">72%</span>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Language Skills</div>
          <div className="subtitle">Reading and writing</div>
        </div>
        {/* skills items */}
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">German</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Italian</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "55%" }}>
                  <span className="percent">55%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">French</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Coding Skills</div>
          <div className="subtitle">Developing on</div>
        </div>
        {/* skills items*/}
        <div className="skills circles">
          <ul>
            <li>
              <div className="progress p40">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>40%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">React,Next.js</div>
              
            </li>
            <li>
              <div className="progress p60">
                {" "}
                {/* p75 = 75% circle fill color */}
                <div className="percentage" />
                <span>60%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">PHP, MYSQL</div>
            
            </li>
            <li>
              <div className="progress p25">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage" />
                <span>25%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">API Rest</div>
             
            </li>
            <li>
              <div className="progress p90">
                {" "}
                {/* p80 = 80% circle fill color */}
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">WordPress</div>
             
            </li>
            <li>
              <div className="progress p80">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage" />
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">HTML, CSS, Bootstrap</div>
           
            </li>
            <li>
              <div className="progress p25">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>25$%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Supabase</div>
            
            </li>
          </ul>
 
        
        </div>
      </div>
    </div>
  );
};
