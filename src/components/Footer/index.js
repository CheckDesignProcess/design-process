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
                      <a
                        href="https://www.instagram.com/holargrapher/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {Instagram}
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/%F0%9F%8C%8D%F0%9F%A5%87olamilekan-adeyemi-654249135/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {LinkedIn}
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://twitter.com/holargrapher"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {Twitter}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* mobile display */}
              <div className="mobile-footer">
                <div className="social-icon d-flex align-items-center">
                  <div>
                    <a
                      href="https://www.instagram.com/holargrapher/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {Instagram}
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/%F0%9F%8C%8D%F0%9F%A5%87olamilekan-adeyemi-654249135/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {LinkedIn}
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://twitter.com/holargrapher"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {Twitter}
                    </a>
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
