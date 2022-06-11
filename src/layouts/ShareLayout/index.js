import React from "react";
import { Button } from "react-bootstrap";

//components
import TopNav from "../../components/TopNav";
import FooterNav from "../../components/Footer";

//styles
import { StyledShareLayout } from "./styles";

export default function ShareLayout() {
  return (
    <StyledShareLayout>
      <TopNav />
      <div className="container-fluid" style={{ position: "relative" }}>
        <div className="row">
          <div className="col-md">
            <main>
              <header>Share your progress</header>
              <div className="page-content">
                <p>
                  We&apos;ve designed this process checklist so that you can
                  share your progress with your team and keep track of it all
                  together.
                </p>
                <p>
                  This checklist will include the items you&apos;ve already
                  checked as well as your progress toward completing the
                  processes.
                </p>
                <Button className="mt-2">Coming Soon</Button>
              </div>
            </main>
          </div>
        </div>
      </div>
      {/* <div className="footer-share-position">
        <FooterNav />
      </div> */}
      <FooterNav />
    </StyledShareLayout>
  );
}
