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
import { StyledPrototype } from "./styles";
import { Bulb, ChevronBottom, ChevronTop } from "../../img/file";

export default function PrototypeSolutionLayout() {
  const [openProcess, setOpenProcess] = useState(false);
  const [openNote, setOpenNote] = useState(false);
  const [openFirstCheck, setOpenFirstCheck] = useState(false);
  const [openSecondCheck, setOpenSecondCheck] = useState(false);
  const [openThirdCheck, setOpenThirdCheck] = useState(false);

  const handleFirstCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <StyledPrototype>
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
                  4. Prototype the Solution (New Product)
                </div>

                <div className="number mb-2">0 out of 3</div>
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
                              Prototype the UI
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
                          A prototype is a draft version of a product that
                          allows you to explore your ideas and show the
                          intention behind a feature or the overall design
                          concept to users before investing time and money into
                          development.
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
                              Design the high fidelity UIs of the product
                              covering the features that completes the
                              product/solution
                            </div>
                          </div>
                          <div>
                            {openSecondCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openSecondCheck}>
                        <div
                          className="collapse-text collapse-text-mobile"
                          id="example-collapse-text"
                        >
                          Produce a number of inexpensive, scaled-down versions
                          of the product or specific features within the
                          product, so they can investigate the problem solutions
                          generated in the previous stage.
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
                              Prototype the UI using any prototyping
                              (interaction design) tool
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
                          The aim is to identify the best possible solution for
                          each of the problems identified during the first three
                          stages . Imagine the most useful, actionable research
                          results possible. What did they tell you? How did you
                          use them?
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </Form>

                <div className="next-wrapper mt-md-5">
                  <div className="d-flex justify-content-between">
                    <div
                      className="next"
                      onClick={() => Router.push("/ideate-solution")}
                    >
                      Previous
                    </div>
                    <div
                      className="next"
                      onClick={() => Router.push("/test-solution")}
                    >
                      Next
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="note">Test the Solution (New Product)</div>
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
    </StyledPrototype>
  );
}
