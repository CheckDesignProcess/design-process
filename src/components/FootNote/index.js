import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

//styles
import { StyledFootNote } from "./styles";
import { Flag, ChevronBottom, ChevronTop } from "../../img/file";

export default function FootNote() {
  const [openProcess, setOpenProcess] = useState(false);

  return (
    <StyledFootNote>
      <div className="foot-note col-md-10">
        <div className="collapse-section">
          <Button
            onClick={() => setOpenProcess(!openProcess)}
            aria-controls="example-collapse-text"
            aria-expanded={openProcess}
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="me-2">{Flag}</div>
                <div className="process-title">
                  Resources you can refer to for this section
                </div>
              </div>
              <div>{openProcess ? ChevronTop : ChevronBottom}</div>
            </div>
          </Button>
          <Collapse in={openProcess}>
            <div className="collapse-text" id="example-collapse-text">
              <div className="">
                How to create affinity maps Creating surveys that convert How to
                create affinity maps Creating surveys that convert How to create
                affinity maps Creating surveys that convert How to create
                affinity maps Creating surveys that convert How to create
                affinity maps Creating surveys that convert
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </StyledFootNote>
  );
}
