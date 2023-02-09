import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBuilding} from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from '../logo.jpg';

const Home = () => {
    return(
        <div className="body-container">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="icons">
                <FontAwesomeIcon icon={faEnvelope} className="iconic"/>
                <FontAwesomeIcon icon={faBuilding} className="iconic"/>
            </div>
            <div className="body-text">
                <h1 className="we-provide">We provide complete sales</h1>
                <h1 className="prices-on">prices on Pokemon cards and</h1>
                <h1 className="products">products.</h1>
                <h4 className="analyze-trends">Analyze trends and statistics for CGC, PSA and Raw card values</h4>
                <h4 className="as-well-as">as well as Sealed Products. Create a portfolio to track your</h4>
                <h4 className="collections-worth">collection’s worth or monitor your Pokemon investments.</h4>
            </div>
            <div className="images">
                <img src="https://www.pokedata.io/static/media/cards_diagonal.4c833803.png" alt="first img"/>
                    </div>

                    <div className="button-div">
<button type="button"><h3 className="cls">Sets</h3></button>
<button type="button"><h3 className="cls">Sealed Products</h3></button>
<button type="button"><h3 className="cls">Portfolio Tracker</h3></button>
                    </div>

                    <div className="search">
                        <input type="text" placeholder="Unsure of Set? Search Card Names" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-btn"/>
                    </div>
<hr/>
        </div>





    );



}

export default Home;