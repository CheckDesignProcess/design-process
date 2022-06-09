import React, { useState } from "react";
import { Button, Collapse, ProgressBar } from "react-bootstrap";
import { Form, Checkbox } from "antd";

//components
import FootNote from "../../components/FootNote";
import FooterNav from "../../components/Footer";
import TopNav from "../../components/TopNav";

//styles and images
import { StyledNewProduct } from "./styles";
import { Bulb, ChevronBottom, ChevronTop } from "../../img/file";
import Juxebox from "../../components/Juxebox";

export default function NewProduct() {
  const [openProcess, setOpenProcess] = useState(false);
  const [openNote, setOpenNote] = useState(false);
  const [openFirstCheck, setOpenFirstCheck] = useState(false);
  const [openSecondCheck, setOpenSecondCheck] = useState(false);
  const [openThirdCheck, setOpenThirdCheck] = useState(false);
  const [openFourthCheck, setOpenFourthCheck] = useState(false);
  const [openFifthCheck, setOpenFifthCheck] = useState(false);
  const [openSixthCheck, setOpenSixthCheck] = useState(false);

  const handleFirstCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <StyledNewProduct>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <TopNav />

            <main className="col-md-7">
              <Juxebox />
              <header className="mb-5">
                <div className="title mb-3">What are you designing for?</div>
                <div className="product">A New Product</div>
                <div className="takeaway mb-4">
                  Key takeaways that identify a new product
                </div>
                <div className="product-list mb-5">
                  <div>
                    - It hasn&apos;t already been built by your product owners
                  </div>
                  <div>- Might have existing competitors or not</div>
                </div>
                <div className="collapse-section">
                  <Button
                    onClick={() => setOpenProcess(!openProcess)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openProcess}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="me-2">{Bulb}</div>
                        <div className="process-title">
                          Processes to design a new product
                        </div>
                      </div>
                      <div>{openProcess ? ChevronTop : ChevronBottom}</div>
                    </div>
                  </Button>
                  <Collapse in={openProcess}>
                    <div className="collapse-text" id="example-collapse-text">
                      <div className="mb-2">
                        The processes used to design a new product might vary or
                        are believed to vary depending on the kind of product
                        one wants to design and the goal one seeks to achieve at
                        the end of designing the product.
                      </div>
                      <div>
                        These procesesses are better used when one needs to
                        solve problems that meets their use cases considering
                        the goal and motivation of the supposed problem in
                        question.
                      </div>
                    </div>
                  </Collapse>
                </div>
              </header>

              <div className="content-page">
                <div className="gather ps-2 mb-1">
                  1. Gather requirements (Product, User, Market)
                </div>
                <div className="number mb-2">1 out of 6</div>
                <ProgressBar now={16.6} />
                <div className="question mt-3 mb-4">What you need to do</div>
                <div className="collapse-section">
                  <Button
                    onClick={() => setOpenNote(!openNote)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openNote}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="me-2">{Bulb}</div>
                        <div className="process-title">Quick Note</div>
                      </div>
                      <div>{openNote ? ChevronTop : ChevronBottom}</div>
                    </div>
                  </Button>
                  <Collapse in={openNote}>
                    <div className="collapse-text" id="example-collapse-text">
                      <div>
                        By approaching requirements gathering holistically as
                        above, you will be able to uncover quality insights that
                        will help inform your next design process and design
                        decisions at a later time.
                      </div>
                    </div>
                  </Collapse>
                </div>
                <Form className="mt-5 pt-3">
                  <div
                    className="d-flex align-items-center mb-4"
                    style={{ position: "relative" }}
                  >
                    <div className="check-wrapper">
                      <Checkbox onChange={handleFirstCheck}></Checkbox>
                    </div>
                    <div className="collapse-form-section">
                      <Button
                        onClick={() => setOpenFirstCheck(!openFirstCheck)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openFirstCheck}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Empathize with the target users of the product in
                              question
                            </div>
                          </div>
                          <div>
                            {openFirstCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openFirstCheck}>
                        <div
                          className="collapse-text collapse-text-bottom"
                          id="example-collapse-text"
                        >
                          At this point, you want to identify the user&apos;s
                          pain points, needs, wants, and the problems that
                          underlie the development of the particular product you
                          are trying to work on.
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center mb-4"
                    style={{ position: "relative" }}
                  >
                    <div className="check-wrapper">
                      <Checkbox onChange={handleFirstCheck}></Checkbox>
                    </div>
                    <div className="collapse-form-section">
                      <Button
                        onClick={() => setOpenSecondCheck(!openSecondCheck)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openSecondCheck}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Identify the methods you want to use to gather
                              requirements
                            </div>
                          </div>
                          <div>
                            {openSecondCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openSecondCheck}>
                        <div
                          className="collapse-text"
                          id="example-collapse-text"
                        >
                          What method is most suitable for you to gather
                          requirements for the product you are working on?
                          <br />
                          Ask yourself questions like &quot;what do I want to
                          uncover after this research?&quot;
                          <br />
                          What method of research will help me uncover these
                          insights?
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center mb-4"
                    style={{ position: "relative" }}
                  >
                    <div className="check-wrapper">
                      <Checkbox onChange={handleFirstCheck}></Checkbox>
                    </div>
                    <div className="collapse-form-section">
                      <Button
                        onClick={() => setOpenThirdCheck(!openThirdCheck)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openThirdCheck}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Identify and select the explicit research needs
                            </div>
                          </div>
                          <div>
                            {openThirdCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openThirdCheck}>
                        <div
                          className="collapse-text"
                          id="example-collapse-text"
                        >
                          What are your three wishes for intelligence about your
                          users, competitors, the marketplace? etc <br />
                          Imagine the most useful, actionable research results
                          possible. What would they tell you?
                          <br />
                          How would you use them? Recruit/source for the right
                          research personas.
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center mb-4"
                    style={{ position: "relative" }}
                  >
                    <div className="check-wrapper">
                      <Checkbox onChange={handleFirstCheck}></Checkbox>
                    </div>
                    <div className="collapse-form-section">
                      <Button
                        onClick={() => setOpenFourthCheck(!openFourthCheck)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openFourthCheck}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Do a quick inventory of what data is currently
                              available
                            </div>
                          </div>
                          <div>
                            {openFourthCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openFourthCheck}>
                        <div
                          className="collapse-text"
                          id="example-collapse-text"
                        >
                          What research initiatives have been carried out before
                          now? Maybe by the product owners
                          <br />
                          What have you learned from these current research
                          findings if any?
                          <br />
                          What kinds of research efforts have been most/least
                          valuable to this product endeavours in the past? Why?
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center mb-4"
                    style={{ position: "relative" }}
                  >
                    <div className="check-wrapper">
                      <Checkbox onChange={handleFirstCheck}></Checkbox>
                    </div>
                    <div className="collapse-form-section">
                      <Button
                        onClick={() => setOpenFifthCheck(!openFifthCheck)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openFifthCheck}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Identify and select your research deliverables
                            </div>
                          </div>
                          <div>
                            {openFifthCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openFifthCheck}>
                        <div
                          className="collapse-text"
                          id="example-collapse-text"
                        >
                          What results are you expecting after the research?
                          <br />
                          e.g Survey entries, interview recordings, affinity
                          maps
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center mb-4"
                    style={{ position: "relative" }}
                  >
                    <div className="check-wrapper">
                      <Checkbox onChange={handleFirstCheck}></Checkbox>
                    </div>
                    <div className="collapse-form-section">
                      <Button
                        onClick={() => setOpenSixthCheck(!openSixthCheck)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openSixthCheck}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Identify and select the impact of the research
                            </div>
                          </div>
                          <div>
                            {openSixthCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openSixthCheck}>
                        <div
                          className="collapse-text collapse-text-bottom"
                          id="example-collapse-text"
                        >
                          What will you do with the research results?
                          <br />
                          When is the latest date I can deliver results that
                          will still be useful?
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </Form>

                <div className="next-wrapper text-end mt-5">
                  <div className="next">Next</div>
                  <div className="note">
                    Define the problem (the need for the New Product)
                  </div>
                </div>
              </div>
            </main>

            <div className="mb-5">
              <FootNote />
            </div>
            <FooterNav />
          </div>
        </div>
      </div>
    </StyledNewProduct>
  );
}
