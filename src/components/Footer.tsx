import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer>
            <div id="footernav">
                <ul>
                    <li>
                        <Link to="/" title="Home" className="homelink">
                            <b>Word Add-in</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addinmanual" title="Word Add-in Manual" className="addinmanuallink">
                            <b>Word Add-in Manual</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/programpicker" title="Program Picker" className="programpickerlink">
                            <b>Program Picker</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/programpickermanual" title="Program Picker Manual" className="ppmanuallink">
                            <b>Program Picker Manual</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/support" title="Support" className="supportlink">
                            <b>Support</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/terms" title="Terms and Conditions" className="termslink">
                            <b>Terms and Conditions</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacypolicy" title="Privacy Policy" className="privacypolicylink">
                            <b>Privacy Policy</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacynotice" title="Privacy Notice" className="privacynoticelink">
                            <b>Privacy Notice</b>
                        </Link>
                    </li>
                    <li>
                        <Link to="/refundpolicy" title="Refund Policy" className="refundpolicylink">
                            <b>Refund Policy</b>
                        </Link>
                    </li>
                </ul>
            </div>

            <div id="copy">
                <div className="copybox">
                    <img
                        src="images/logosmallwhite.png"
                        width="150"
                        height="27"
                        alt="Bond Logo"
                    />
                </div>

                <div className="copybox2">
                    <img
                        src="images/logosmallblack.png"
                        width="150"
                        height="27"
                        alt="Bond Logo"
                    />
                </div>

                <div className="copyboxdetails">
                    <p>
                        &#169; Bond Interface Design Ltd<br />
                        Company no. 09226830 <br />
                        Registered in England and Wales<br /><br />
                        Registered address:<br />
                        16 Blenman Close,
                        Bristol, BS16 1JH
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;