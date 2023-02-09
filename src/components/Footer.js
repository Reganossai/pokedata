import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className="all-footer">
      <div className="footer-div">
        <div className="first-col">
          <h4>
            <FontAwesomeIcon icon={faCopyright} className="copyright" />
            pokedata 2023
          </h4>
          <h4>Privacy</h4>
          <h4>Terms and Conditions</h4>
        </div>

        <div className="second-col">
          <h4>Affiliates</h4>
          <h4>/r/PokémonTCG · Discord</h4>
          <h4>/r/PKMNTCGTrades · Discord</h4>
        </div>
      </div>
      <div className="third-col">
        <h4>Contact</h4>
        <h4>Reddit</h4>
        <h4>Discord</h4>
        <h4>Email</h4>
      </div>
    </div>
  );
};

export default Footer;
