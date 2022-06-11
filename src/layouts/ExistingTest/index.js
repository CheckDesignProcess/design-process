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
import { StyledExistingTest } from "./styles";
import { Bulb, ChevronBottom, ChevronTop } from "../../img/file";

const Questions = [
  {
    id: "1",
    title: "Test the product, iterate and refine",
    content: (
      <div>
        The solutions are implemented within the prototypes, and, one by one,
        they are investigated and either accepted, improved, and re-examined or
        rejected on the basis of the users&apos; experiences.
      </div>
    ),
  },
  {
    id: "2",
    title:
      "Test the prototype interaction with the target users/representative users",
    content:
      "Have the target users/representative users use the prototype to get their feedback and ensure the solution sits well with the target users.",
  },
  {
    id: "3",
    title:
      "Refine the product to address all the feedback gotten from the previous step",
    content:
      "Use the feedback gotten from the target users to improve the UX and UI of the product and test again if the solution is optimally improved.",
  },
  {
    id: "4",
    title: "Hand-off",
    content: (
      <div>
        Prepare the developer handoff
        <br />
        Make assets accessible.
        <br />
        Create a style guide or components library for developers.
      </div>
    ),
  },
  {
    id: "5",
    title: "Keep iterating",
    content:
      "UX is never complete, at intervals, carry out benchmark studies to uncover new trends /feedback from the customers after the product launch.",
  },
];

export default function ExistingTestLayout() {
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
    if (checkList.length == 1) setStep(16.6);
    if (checkList.length == 2) setStep(33.2);
    if (checkList.length == 3) setStep(49.8);
    if (checkList.length == 4) setStep(66.4);
    if (checkList.length == 5) setStep(83);
    if (checkList.length == 6) setStep(100);
  }, [checkList.length]);

  const handleFirstCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <StyledExistingTest>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <TopNav />

            <main className="col-md-7">
              <Juxebox />
              <header className="mb-5">
                <div className="title mb-3">What are you designing for?</div>
                <div className="product">An Existing Product</div>
                <div className="takeaway mb-4">
                  Key takeaways that identify a existing product
                </div>
                <div className="product-list mb-5 pb-5">
                  <div>
                    - It hasn&apos;t already been built by your product owners.
                  </div>
                  <div>- Might have existing competitors.</div>
                  <div>- Have existing competitors.</div>
                </div>
                <div className="collapse-section">
                  <Button
                    // onClick={() => setOpenProcess(!openProcess)}
                    aria-controls="example-collapse-text"
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
                      <div className="mb-3">
                        The processes used to design an existing product might
                        vary or are believed to vary depending on the kind of
                        product one wants to design and the goal one seeks to
                        achieve at the end of designing the product.
                      </div>
                      <div>
                        Here, you are considering either improving the existing
                        product or you are looking to add additional features to
                        the product, or revamping the whole product.
                      </div>
                    </div>
                  </Collapse>
                </div>
              </header>

              <div className="content-page">
                <div className="gather  ps-2 mb-1">
                  5. Test the Solution (New Product)
                </div>

                <div className="number mb-2">
                  <span className={checkList.length > 0 && "number-color"}>
                    {checkList.length}
                  </span>{" "}
                  out of 6
                </div>
                <ProgressBar now={step} />
                <div className="question mt-3 mb-4">What you need to do</div>
                <div className="collapse-section">
                  <Button
                    // onClick={() => setOpenNote(!openNote)}
                    aria-controls="example-collapse-text"
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
                        After this step, you are going to have an improved
                        solution depending on your objective at the initial
                        stage of the product process.
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
                              el.id == 2 || el.id == 3
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
          </div>
        </div>
      </div>
      <FooterNav />
    </StyledExistingTest>
  );
}
