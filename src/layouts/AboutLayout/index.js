import React from "react";
import FooterNav from "../../components/Footer";

//components
import TopNav from "../../components/TopNav";

//styles
import { StyledAbout } from "./styles";

export default function AboutLayout() {
  return (
    <StyledAbout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <TopNav />

            <main className="col-md-6">
              <header>About</header>
              <div className="page-content">
                <p>
                  Hi there, we are{" "}
                  <a
                    href="https://www.linkedin.com/in/%F0%9F%8C%8D%F0%9F%A5%87olamilekan-adeyemi-654249135/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Olamilekan Adeyemi
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/ummiux/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fatima Ummi Abdulkadir{" "}
                  </a>
                  and other <a href="#link">top-level Product Designers.</a>
                </p>
                <p>
                  We&apos;ve been working as Product Designers for quite a while
                  now, and we&apos;ve been able to resonate with the key
                  challenges people face in understanding product design
                  processes.
                </p>
                <p>
                  Not only that, but oftentimes Product Designers also
                  don&apos;t realize what they are doing wrong with their design
                  processes or fully understand the benefits of conducting
                  certain design processes. Having said that, Problem space is
                  very versed, we can&apos;t begin to streamline the specific
                  processes for the different product problems that require
                  product design solutions in the world.
                </p>
                <p>
                  So, we created this checklist compared to the high-level
                  problem space that most product problems are tailored to and
                  curated a holistic product design process for you and the
                  everyday person to approach problem-solving in a systematic
                  way for product problems.
                </p>
                <p>
                  However, this process checklist is not a definitive approach,
                  it is a set of recommendations for you to keep track of
                  everything you&apos;ll want to check off to provide a solid
                  product design solution with the right user experience.
                </p>
                <p>
                  Everything you see here is open source. If you&apos;d like to
                  see added content on this website or if you have feedback,
                  please contribute <a href="#link">here.</a>
                </p>
              </div>
            </main>

            <FooterNav />
          </div>
        </div>
      </div>
    </StyledAbout>
  );
}
