import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Button, Collapse, ProgressBar } from "react-bootstrap";
import { Form, Checkbox } from "antd";

//components
import TopNav from "../../components/TopNav";
import FooterNav from "../../components/Footer";
import FootNote from "../../components/FootNote";
import Juxebox from "../../components/Juxebox";

//styles and images
import { StyledDefinedProblem } from "./styles";
import { Bulb, ChevronBottom, ChevronTop } from "../../img/file";

const Questions = [
  {
    id: 1,
    title: "Make sense of your research findings",
    content: (
      <div>
        At this point, you have a problem you want to understand from the
        user&apos;s shoes and outside of the user&apos;s shoe . You want to
        analyze and synthesize your research findings/insight to come up with an
        informed data and metrics to design for the new product . The outcome
        here will inform your remaining processes.
      </div>
    ),
  },
  {
    id: 2,
    title: "Synthesize your research findings",
    content: (
      <div>
        What was the key intelligence you seek from the user? Use them in
        clusters/categories You could explore affinity diagraming to identify
        trends and patterns . For example; use global tags (for
        clusters/categories) as follows: goal, need, motivation, painpoint,
        task, tools.
      </div>
    ),
  },
  {
    id: 3,
    title: "Have a debriefing session with yourself or (and) your team",
    content: (
      <div>
        This will help bring to light the valuable insights you must have missed
        Get/uncover other ideas . Identify feasibility issues and way forward
        Agree on a direction to take.
      </div>
    ),
  },
];

export default function DefineProblemLayout() {
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
    if (checkList.length == 1) setStep(33.3);
    if (checkList.length == 2) setStep(66.6);
    if (checkList.length == 3) setStep(100);
  }, [checkList.length]);

  return (
    <StyledDefinedProblem>
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
                  2. Define Problem (The need for the New Product)
                </div>

                <div className="number mb-2">
                  <span className={checkList.length > 0 && "number-color"}>
                    {checkList.length}
                  </span>{" "}
                  out of 3
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
                        With the insights sifted from your findings, you will be
                        able to design a systematic way to carry out your
                        ideations, have sense of direction and build the product
                        (solution) to meet the needs of the users as expected
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
                            className="collapse-text"
                            id="example-collapse-text"
                          >
                            {el.content}
                          </div>
                        </Collapse>
                      </div>
                    </div>
                  ))}
                </Form>

                <div className="next-wrapper mt-md-5">
                  <div className="d-flex justify-content-between">
                    <div
                      className="next"
                      onClick={() => Router.push("/new-product")}
                    >
                      Previous
                    </div>
                    <div
                      className="next"
                      onClick={() => Router.push("/ideate-solution")}
                    >
                      Next
                    </div>
                  </div>
                  <div className="text-end">
                    <div className="note">
                      Ideate and Design Solution (New Product)
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <div className="mb-5">
              <FootNote />
            </div>
          </div>
        </div>
      </div>
      <FooterNav />
    </StyledDefinedProblem>
  );
}
