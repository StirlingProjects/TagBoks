import React from "react";

import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p className="footer__title">Please Note:</p>
                <br />
                <p>
                    All information contained on this website is confidential
                    and should never be shared with anyone outside of the
                    TagBOKS squad. New players shall be provided access by the
                    coaching and management team.
                </p>
                <br />
                <p>
                    Anybody found to be sharing this information with any
                    outside party will be reported to the International Tag
                    Federation, Tag SA and Try Tag Rugby and face a ban from all
                    tag rugby events.
                </p>
            </div>
            <br />
            <div className="footer__links">
                <div className="footer__useful">Useful</div>
                <div className="footer__socials">Socials</div>
            </div>
        </div>
    );
};

export default Footer;
