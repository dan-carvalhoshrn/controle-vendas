import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por 
                        <a href="https://www.linkedin.com/in/daniel-carvalhosh/"> daniel-carvalhoshrn</a>
                    </p>
            </div>
        </header>
    )
}

export default Header
