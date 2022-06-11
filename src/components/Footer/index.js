import React from "react";

//styles
import { StyledFooter } from "./styles";

//image
import { Instagram, LinkedIn, Facebook, Twitter } from "../../img/file";

export default function FooterNav() {
  return (
    <StyledFooter>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md px-0">
              <div className="d-none d-lg-block">
                <div className="d-md-flex justify-content-between align-items-center">
                  <div className="copyright">Ⓒ 2021 All Rights Reserved</div>
                  <div className="social-icon d-flex align-items-center">
                    <div>
                      <a href="#link">{Instagram}</a>
                    </div>
                    <div>
                      <a href="#link">{LinkedIn}</a>
                    </div>
                    <div>
                      <a href="#link">{Twitter}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* mobile display */}
              <div className="mobile-footer">
                <div className="social-icon d-flex align-items-center">
                  <div>
                    <a href="#link">{Instagram}</a>
                  </div>
                  <div>
                    <a href="#link">{LinkedIn}</a>
                  </div>
                  <div>
                    <a href="#link">{Twitter}</a>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center pt-3">
                  <div className="copyright">Ⓒ 2021 All Rights Reserved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </StyledFooter>
  );
}
