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
import { StyledIdeateSolution } from "./styles";
import { Bulb, ChevronBottom, ChevronTop } from "../../img/file";

export default function IdeateSolutionLayout() {
  const [openProcess, setOpenProcess] = useState(false);
  const [openNote, setOpenNote] = useState(false);
  const [openFirstCheck, setOpenFirstCheck] = useState(false);
  const [openSecondCheck, setOpenSecondCheck] = useState(false);
  const [openThirdCheck, setOpenThirdCheck] = useState(false);
  const [openFourthCheck, setOpenFourthCheck] = useState(false);
  const [openFifthCheck, setOpenFifthCheck] = useState(false);
  const [openSixthCheck, setOpenSixthCheck] = useState(false);
  const [openSeventhCheck, setOpenSeventhCheck] = useState(false);
  const [openEightCheck, setOpenEightCheck] = useState(false);
  const [openNinthCheck, setOpenNinthCheck] = useState(false);

  const handleFirstCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <StyledIdeateSolution>
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
                  3. Ideate and Design Solution (New Product)
                </div>

                <div className="number mb-2">0 out of 9</div>
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
                        Know that after this process, you have pre-designed the
                        solution/product.
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
                              Carry out ideation and come up with the product
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
                          Ideation is the process of generating a broad set of
                          ideas on a given topic with no attempt to judge or
                          evaluate them.
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
                              Brainstorm, think
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
                          <div className="mb-3">
                            Ideation is only one step in the full UX design
                            process; once ideas are generated, separate analysis
                            has to follow to decide which ideas (or parts of
                            ideas) to pursue. The more ideas the better: a broad
                            pool to choose from increases the likelihood that
                            one of the ideas will be the seed for a great design
                            solution.
                          </div>
                          Put into consideration design standards to follow and
                          how to inculcate them inside the product you are
                          building , you can do this in person or in a team
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
                              Check out competitor platforms
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
                          Carry out site/UI audit for the competitor platforms
                          to identify and validate the user&apos;s already
                          existing mental model, product features, and current
                          design patterns, you don&apos;t want to reinvent the
                          wheel.
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
                              Design customer journeys, user flows and
                              information architectures
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
                          Craft user journeys and user flows to have a clear
                          path to building the product.
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
                            <div className="process-title">
                              Gather inspiration
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
                          Check out UI sites to explore design styles you want
                          to follow?
                          <br />
                          Explore interaction design of products of the same
                          industry.
                          <br />
                          Create a moodboard or style scrape to have a style
                          direction.
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-md-flex align-items-center check-box-pointer"
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
                            <div className="process-title">
                              Make sketches or wireframes
                            </div>
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
                          Sketch/wireframe the design appearances and test to
                          confirm every style is serving the goal of the
                          product.
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-md-flex align-items-center check-box-pointer"
                    style={{ position: "relative" }}
                  >
                    <div className="check-wrapper">
                      <Checkbox onChange={handleFirstCheck}></Checkbox>
                    </div>
                    <div className="collapse-form-section">
                      <Button
                        onClick={() => setOpenSeventhCheck(!openSeventhCheck)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openSeventhCheck}
                      >
                        <div className="d-flex align-items-center justify-content-between process-wrapper-mobile">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Test the wireframes/lofi
                            </div>
                          </div>
                          <div>
                            {openSeventhCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openSeventhCheck}>
                        <div
                          className="collapse-text"
                          id="example-collapse-text"
                        >
                          Confirm and test that the lofi/wireframes/sketch is
                          solving the problem as intended.
                        </div>
                      </Collapse>
                    </div>
                  </div>

                  <div
                    className="d-md-flex align-items-center check-box-pointer"
                    style={{ position: "relative" }}
                  >
                    <div className="check-wrapper">
                      <Checkbox onChange={handleFirstCheck}></Checkbox>
                    </div>
                    <div className="collapse-form-section">
                      <Button
                        onClick={() => setOpenEightCheck(!openEightCheck)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openEightCheck}
                      >
                        <div className="d-flex align-items-center justify-content-between process-wrapper-mobile">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Design the Product (Hifi)
                            </div>
                          </div>
                          <div>
                            {openEightCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openEightCheck}>
                        <div
                          className="collapse-text"
                          id="example-collapse-text"
                        >
                          Now is the time to bring your confirmed and
                          data-informed ideas to life.
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
                        onClick={() => setOpenNinthCheck(!openNinthCheck)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openNinthCheck}
                      >
                        <div className="d-flex align-items-center justify-content-between process-wrapper-mobile">
                          <div className="d-flex align-items-center">
                            <div className="process-title">
                              Carry out copy review
                            </div>
                          </div>
                          <div>
                            {openNinthCheck ? ChevronTop : ChevronBottom}
                          </div>
                        </div>
                      </Button>
                      <Collapse in={openNinthCheck}>
                        <div
                          className="collapse-text"
                          id="example-collapse-text"
                        >
                          Work on the UX writing.
                          <br />
                          Review the UI copy with yourself or your team.
                          Simulate how it is going to sound to the potential,
                          representative target users. pay attention to the
                          tone, the language etc
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </Form>

                <div className="next-wrapper mt-md-5">
                  <div className="d-flex justify-content-between">
                    <div
                      className="next"
                      onClick={() => Router.push("/define-problem")}
                    >
                      Previous
                    </div>
                    <div
                      className="next"
                      onClick={() => Router.push("/prototype-solution")}
                    >
                      Next
                    </div>
                  </div>
                  <div className="text-end">
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
    </StyledIdeateSolution>
  );
}
