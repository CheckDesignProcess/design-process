import React, { useState } from "react";
import Router from "next/router";
import { Button, Collapse, ProgressBar } from "react-bootstrap";
import { Form, Checkbox } from "antd";

//components
import FootNote from "../../components/FootNote";
import FooterNav from "../../components/Footer";
import TopNav from "../../components/TopNav";
import Juxebox from "../../components/Juxebox";

//styles and images
import { StyledTestSolution } from "./styles";
import { Bulb, ChevronBottom, ChevronTop } from "../../img/file";

export default function TestSolutionLayout() {
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
    <StyledTestSolution>
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
                <div className="gather  ps-2 mb-1">
                  5. Test the Solution (New Product)
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
                        <div className="process-title process-title-plain">
                          Quick Note
                        </div>
                      </div>
                      <div>{openNote ? ChevronTop : ChevronBottom}</div>
                    </div>
                  </Button>
                  <Collapse in={openNote}>
                    <div className="collapse-text" id="example-collapse-text">
                      <div>
                        At this point, you are going to have a full product
                        (maybe an MVP) depending on your objective at the
                        initial stage of the product process.
                      </div>
                    </div>
                  </Collapse>
                </div>
                <Form className="mt-md-5 pt-md-3">
                  <div
                    className="d-flex align-items-center check-box-pointer"
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
                        <div className="d-flex align-items-center justify-content-between process-wrapper-mobile">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Test the product, iterate and refine
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
                          The solutions are implemented within the prototypes,
                          and, one by one, they are investigated and either
                          accepted, improved, and re-examined or rejected on the
                          basis of the users&apos; experiences.
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center check-box-pointer"
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
                        <div className="d-flex align-items-center justify-content-between process-wrapper-mobile">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Test the prototype interaction internally
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
                          Have yourself/team use the prototype to uncover
                          design/functionality issues
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center check-box-pointer"
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
                        <div className="d-flex align-items-center justify-content-between process-wrapper-mobile">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Test the prototype interaction with the target
                              users/representative users
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
                          Have the target users/representative users use the
                          prototype to get their feedback and ensure the
                          solution sits well with the target users.
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center check-box-pointer"
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
                        <div className="d-flex align-items-center justify-content-between process-wrapper-mobile">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Refine the product to address all the feedback
                              gotten from the previous step
                            </div>
                          </div>
                          <div>
                            {openFourthCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openFourthCheck}>
                        <div
                          className="collapse-text collapse-text-mobile"
                          id="example-collapse-text"
                        >
                          Use the feedback gotten from the target users to
                          improve the UX and UI of the product and test again if
                          the solution is optimally improved.
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-flex align-items-center check-box-pointer"
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
                            <div className="process-title">Hand-off</div>
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
                          Prepare the developer handoff
                          <br />
                          Make assets accessible.
                          <br />
                          Create a style guide or components library for
                          developers.
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-md-flex align-items-center check-box-pointer check-box-pointer-mobile"
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
                        <div className="d-flex align-items-center justify-content-between process-wrapper-mobile">
                          <div className="d-flex align-items-center">
                            <div className="process-title">Keep iterating</div>
                          </div>
                          <div>
                            {openSixthCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openSixthCheck}>
                        <div
                          className="collapse-text"
                          id="example-collapse-text"
                        >
                          UX is never complete, at intervals, carry out
                          benchmark studies to uncover new trends /feedback from
                          the customers after the product launch.
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </Form>

                <div className="next-wrapper mt-md-5">
                  <div className="d-flex justify-content-start">
                    <div
                      className="next"
                      onClick={() => Router.push("/prototype-solution")}
                    >
                      Previous
                    </div>
                  </div>
                  <div className="text-start">
                    <div className="note">
                      Prototype the Solution (New Product)
                    </div>
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
    </StyledTestSolution>
  );
}
