import "./footer.scss";

function Footer() {
    const githubLogo = "/github.png";

  return <footer className="c-footer">
    <div className="c-container">
    <a href="https://github.com/elizeuO" target="_blank" title="github">
        <img src={githubLogo} alt="github"/>
    </a>

    © Desenvolvido por Elizeu Oliveira da Silva
    </div>
  </footer>;
}
export default Footer;
