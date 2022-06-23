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
import { StyledNewProduct } from "./styles";
import { Bulb, ChevronBottom, ChevronTop } from "../../img/file";

const Questions = [
  {
    id: 1,
    title: "Empathize with the target users of the product in question",
    content:
      "At this point, you want to identify the user's pain points, needs, wants, and the problems that underline the development of the particular product you are trying to work on.",
  },
  {
    id: 2,
    title: "Identify the methods you want to use to gather requirements",
    content: (
      <div>
        What method is most suitable for you to gather requirements for the
        product you are working on?
        <br />
        Ask yourself questions like &quot;what do I want to uncover after this
        research?&quot;
        <br />
        What method of research will help me uncover these insights?
      </div>
    ),
  },
  {
    id: 3,
    title: "Identify and select the explicit research needs",
    content: (
      <div>
        What are your three wishes for intelligence about your users,
        competitors, the marketplace? etc <br />
        Imagine the most useful, actionable research results possible. What
        would they tell you?
        <br />
        How would you use them? Recruit/source for the right research personas.
      </div>
    ),
  },
  {
    id: 4,
    title: "Do a quick inventory of what data is currently available",
    content: (
      <div>
        What research initiatives have been carried out before now? Maybe by the
        product owners
        <br />
        What have you learned from these current research findings if any?
        <br />
        What kinds of research efforts have been most/least valuable to this
        product endeavours in the past? Why?
      </div>
    ),
  },
  {
    id: 5,
    title: "Identify and select your research deliverables",
    content: (
      <div>
        What results are you expecting after the research?
        <br />
        e.g Survey entries, interview recordings, affinity maps.
      </div>
    ),
  },
  {
    id: 6,
    title: "Identify and select the impact of the research",
    content: (
      <div>
        What will you do with the research results?
        <br />
        When is the latest date I can deliver results that will still be useful?
      </div>
    ),
  },
];

export default function NewProduct() {
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

  return (
    <StyledNewProduct>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md px-md-0">
            <main>
              <Juxebox />
              <header className="mb-5">
                <div className="title mb-4">What are you designing for?</div>
                <div className="product">A New Product</div>
                <div className="takeaway mb-4">
                  Key takeaways that identify a new product
                </div>
                <div className="product-list mb-5 pb-5">
                  <div>
                    - It hasn&apos;t already been built by your product owners.
                  </div>
                  <div>- Might have existing competitors or not.</div>
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
                        These processes are better used when one needs to solve
                        problems that meets their use cases considering the goal
                        and motivation of the supposed problem in question.
                      </div>
                    </div>
                  </Collapse>
                </div>
              </header>

              <div className="content-page">
                <div className="gather d-none d-lg-block ps-2 mb-1">
                  1. Gather requirements (Product, User, Market)
                </div>
                <div className="gather gather-mobile ps-2 mb-1">
                  1. Gather requirements
                </div>

                <div className="number mb-1">
                  <span className={checkList.length > 0 && "number-color"}>
                    {checkList.length}
                  </span>{" "}
                  out of 6
                </div>
                <ProgressBar now={step} />
                <div className="question mt-4 mb-4">What you need to do</div>
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
                        By approaching requirements gathering holistically as
                        above, you will be able to uncover quality insights that
                        will help inform your next design process and design
                        decisions at a later time.
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
              </div>
            </main>

            <div className="next-container">
              <div className="next-wrapper">
                <div className="text-end">
                  <div
                    className="next"
                    onClick={() => Router.push("/define-problem")}
                  >
                    Next
                  </div>
                </div>
                <div className="text-end">
                  <div className="note">
                    Define the problem (the need for the New Product)
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
    </StyledNewProduct>
  );
}
