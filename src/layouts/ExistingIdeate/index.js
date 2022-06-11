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
import { StyledExistingIdeate } from "./styles";
import { Bulb, ChevronBottom, ChevronTop } from "../../img/file";

const Questions = [
  {
    id: 1,
    title: "Carry out ideation and come up with the product",
    content: (
      <div>
        Ideation is only one step in the full UX design process; once ideas are
        generated, separate analysis has to follow to decide which ideas (or
        parts of ideas) to pursue. The more ideas the better: a broad pool to
        choose from increases the likelihood that one of the ideas will be the
        seed for a great design solution.
        <br />
        <br />
        Put into consideration design standards to follow and how to inculcate
        them inside the product you are building.
        <br /> Put into consideration the existing branding of the product You
        can do this in person or in a team
      </div>
    ),
  },
  {
    id: 2,
    title: "Check out competitor platforms",
    content: (
      <div>
        Carry out site/UI audit for the competitor platforms to identify and
        validate users already existing mental model, product features and
        current design patterns, you don&apos;t want to reinvent the wheel
      </div>
    ),
  },
  {
    id: 3,
    title:
      "Audit the customer journeys, user flows, and information architectures",
    content: (
      <div>
        Audit and craft new user journeys and user flows to have a clear path to
        improving the product
      </div>
    ),
  },
  {
    id: 4,
    title: "Gather inspiration",
    content: (
      <div>
        Explore interaction design of products of the same industry.
        <br />
        Create a mood board or style scrape to have a style direction.
      </div>
    ),
  },
  {
    id: 5,
    title: "Make sketches or wireframes",
    content:
      "Sketch/wireframe the design appearances and test to confirm every style is serving the goal of the product.",
  },
  {
    id: 6,
    title: "Test the wireframes/lofi",
    content:
      "Confirm and test that the lofi/wireframes/sketch is solving the problem as intended.",
  },
  {
    id: 7,
    title: "Design the Product (Hifi)",
    content:
      "Now is the time to bring your confirmed and data-informed ideas to life.",
  },
];

export default function ExistingIdeateLayout() {
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
    if (checkList.length == 1) setStep(14.2);
    if (checkList.length == 2) setStep(28.4);
    if (checkList.length == 3) setStep(42.6);
    if (checkList.length == 4) setStep(56.8);
    if (checkList.length == 5) setStep(71);
    if (checkList.length == 6) setStep(85.2);
    if (checkList.length == 7) setStep(100);
  }, [checkList.length]);

  return (
    <StyledExistingIdeate>
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
                <div className="gather ps-2 mb-1">
                  3. Ideate and Design Solution (New Product)
                </div>

                <div className="number mb-2">
                  <span className={checkList.length > 0 && "number-color"}>
                    {checkList.length}
                  </span>{" "}
                  out of 7
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
                        Note that, after this step, you will have pre-designed
                        the solution/product.
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
                              el.id == 3
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
                  <div className="d-flex justify-content-between">
                    <div
                      className="next"
                      onClick={() => Router.push("/existing-define-problem")}
                    >
                      Previous
                    </div>
                    <div
                      className="next"
                      onClick={() =>
                        Router.push("/existing-prototype-solution")
                      }
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
          </div>
        </div>
      </div>
      <FooterNav />
    </StyledExistingIdeate>
  );
}
