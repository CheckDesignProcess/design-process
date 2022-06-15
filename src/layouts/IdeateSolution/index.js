import React, { useState, useEffect } from "react";
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

const Questions = [
  {
    id: 1,
    title: "Carry out ideation and come up with the product",
    content:
      "Ideation is the process of generating a broad set of ideas on a given topic with no attempt to judge or evaluate them.",
  },
  {
    id: 2,
    title: "Brainstorm, think",
    content: (
      <div>
        <div className="mb-3">
          Ideation is only one step in the full UX design process; once ideas
          are generated, separate analysis has to follow to decide which ideas
          (or parts of ideas) to pursue. The more ideas the better: a broad pool
          to choose from increases the likelihood that one of the ideas will be
          the seed for a great design solution.
        </div>
        Put into consideration design standards to follow and how to inculcate
        them inside the product you are building , you can do this in person or
        in a team
      </div>
    ),
  },
  {
    id: 3,
    title: "Check out competitor platforms",
    content: (
      <div>
        Carry out site/UI audit for the competitor platforms to identify and
        validate the user&apos;s already existing mental model, product
        features, and current design patterns, you don&apos;t want to reinvent
        the wheel.
      </div>
    ),
  },
  {
    id: 4,
    title: "Design customer journeys, user flows and information architectures",
    content:
      "Craft user journeys and user flows to have a clear path to building the product.",
  },
  {
    id: 5,
    title: "Gather inspiration",
    content: (
      <div>
        Check out UI sites to explore design styles you want to follow?
        <br />
        Explore interaction design of products of the same industry.
        <br />
        Create a moodboard or style scrape to have a style direction.
      </div>
    ),
  },
  {
    id: 6,
    title: "Make sketches or wireframes",
    content:
      "Sketch/wireframe the design appearances and test to confirm every style is serving the goal of the product.",
  },
  {
    id: 7,
    title: "Test the wireframes/lofi",
    content:
      "Confirm and test that the lofi/wireframes/sketch is solving the problem as intended.",
  },
  {
    id: 8,
    title: "Design the Product (Hifi)",
    content:
      "Now is the time to bring your confirmed and data-informed ideas to life.",
  },
  {
    id: 9,
    title: "Carry out copy review",
    content: (
      <div>
        Work on the UX writing.
        <br />
        Review the UI copy with yourself or your team. Simulate how it is going
        to sound to the potential, representative target users. pay attention to
        the tone, the language etc
      </div>
    ),
  },
];

export default function IdeateSolutionLayout() {
  const [openProcess, setOpenProcess] = useState(true);
  const [openNote, setOpenNote] = useState(true);
  const [openFirstCheck, setOpenFirstCheck] = useState(false);
  const [state, setState] = useState(true);
  const [checkList, setCheckList] = useState([]);
  const [step, setStep] = useState(0);

  const handleCollapseButton = (id) => {
    setOpenFirstCheck((prevCheck) => ({ ...prevCheck, [id]: !prevCheck[id] }));
    setState((prevState) => !prevState);
  };

  const handleCheckbox = (e, id) => {
    if (checkList.includes(id)) {
      const filteredIds = checkList.filter((selectedId) => selectedId !== id);
      setCheckList(filteredIds);
    } else {
      setCheckList([...checkList, id]);
    }
  };

  useEffect(() => {
    if (checkList.length == 0) setStep(0);
    if (checkList.length == 1) setStep(11.1);
    if (checkList.length == 2) setStep(22.2);
    if (checkList.length == 3) setStep(33.3);
    if (checkList.length == 4) setStep(44.4);
    if (checkList.length == 5) setStep(55.5);
    if (checkList.length == 6) setStep(66.6);
    if (checkList.length == 7) setStep(77.7);
    if (checkList.length == 8) setStep(88.8);
    if (checkList.length == 9) setStep(100);
  }, [checkList.length]);

  return (
    <StyledIdeateSolution>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md px-md-0">
            <TopNav />

            <main>
              <Juxebox />
              <header className="mb-5">
                <div className="title mb-3">What are you designing for?</div>
                <div className="product">A New Product</div>
                <div className="takeaway mb-4">
                  Key takeaways that identify a new product
                </div>
                <div className="product-list mb-5 pb-5">
                  <div>
                    - It hasn&apos;t already been built by your product owners
                  </div>
                  <div>- Might have existing competitors or not</div>
                </div>
                <div className="collapse-section">
                  <Button
                    // onClick={() => setOpenProcess(!openProcess)}
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
                      {/* <div>{openProcess ? ChevronTop : ChevronBottom}</div> */}
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

                <div className="number mb-2">
                  <span className={checkList.length > 0 && "number-color"}>
                    {checkList.length}
                  </span>{" "}
                  out of 9
                </div>
                <ProgressBar now={step} />
                <div className="question mt-3 mb-4">What you need to do</div>
                <div className="collapse-section">
                  <Button
                    // onClick={() => setOpenNote(!openNote)}
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
                      {/* <div>{openNote ? ChevronTop : ChevronBottom}</div> */}
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
                  {Questions.map((el) => (
                    <div
                      key={el.id}
                      className="d-flex align-items-center check-box-pointer"
                      style={{ position: "relative" }}
                    >
                      <div className="check-wrapper">
                        <Checkbox
                          onChange={(e) => handleCheckbox(e, el.id)}
                          checked={checkList.includes(el.id)}
                        ></Checkbox>
                      </div>
                      <div className="collapse-form-section">
                        <Button
                          onClick={() => handleCollapseButton(el.id)}
                          aria-controls="example-collapse-text"
                          aria-expanded={openFirstCheck}
                        >
                          <div className="d-flex align-items-center justify-content-between process-wrapper-mobile">
                            <div className="d-flex align-items-center">
                              <div className="process-title">{el.title}</div>
                            </div>
                            <div>
                              {openFirstCheck[el.id]
                                ? ChevronTop
                                : ChevronBottom}
                            </div>
                          </div>
                        </Button>
                        <Collapse in={openFirstCheck[el.id]}>
                          <div
                            className={
                              el.id == 4
                                ? "collapse-text collapse-text-bottom"
                                : "collapse-text"
                            }
                            id="example-collapse-text"
                          >
                            {el.content}
                          </div>
                        </Collapse>
                      </div>
                    </div>
                  ))}
                </Form>
              </div>
            </main>

            <div className="next-container">
              <div className="next-wrapper">
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

            <div className="mb-5">
              <FootNote />
            </div>
          </div>
        </div>
      </div>
      <FooterNav />
    </StyledIdeateSolution>
  );
}
