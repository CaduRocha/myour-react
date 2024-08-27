const Contacts = () => {
  return (
    <div className="section contacts" id="section-contacts">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Contato</div>
          <div className="subtitle">Vamos conversar?</div>
        </div>
        {/* contact form */}
        <div className="contact-form">
          <form id="cform" method="post">
            <div className="group-val">
              <div className="label">
                Nome <strong>*</strong>
              </div>
              <input
                type="text"
                name="name"
                placeholder="ex.: Michelle Obama"
              />
            </div>
            <div className="group-val">
              <div className="label">
                Email  <strong>*</strong>
              </div>
              <input
                type="email"
                name="email"
                placeholder="exemplo@domain.com"
              />
            </div>
            <div className="group-val">
              <div className="label">
                Mensagem <strong>*</strong>
              </div>
              <textarea
                name="message"
                placeholder="To Write"
                defaultValue={""}
              />
            </div>
            <div className="group-bts">
              <button type="submit" className="btn">
                <span className="animated-button">
                  <span>Enviar </span>
                </span>
                <i className="icon fas fa-chevron-right" />
              </button>
            </div>
          </form>
          <div className="alert-success">
            <p>Thanks! Em breve te respondo. :) </p>
          </div>
        </div>
        {/* contact info */}
        <div className="contact-info">
          <div className="name">Cadu Rocha</div>
          <div className="subname"> </div>
           {/*} <div className="info-list">
          <ul>
              <li>
                <strong>Age:</strong> 24
              </li>
              <li>
                <strong>Residence:</strong> USA
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> San Francisco
              </li>
              <li>
                <strong>Phone:</strong> +1 256 254 84 56
              </li>
              <li>
                <strong>E-mail:</strong> alejandroa@gmail.com
              </li>
            </ul>
          </div> */}
          <div className="author">Cadu Rocha</div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Contacts;
