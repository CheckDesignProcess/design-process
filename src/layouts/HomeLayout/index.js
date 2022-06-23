import React from "react";
import Router from "next/router";
import Link from "next/link";
import { Button, Badge } from "react-bootstrap";

//components
import TopNav from "../../components/TopNav";
import FooterNav from "../../components/Footer";

//styles
import { HomeContainer } from "./styles";

export default function HomeLayout() {
  return (
    <HomeContainer>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <main>
              <header>
                <div className="mb-md-3">
                  Great design process births <span>useable</span> product
                </div>
                <p>
                  Checkdp helps teams validate design process and build better
                  products.
                </p>
                <Link href="/new-product">
                  <Button>Get Started</Button>
                </Link>
              </header>
              <div className="page-content">
                <div className="title">What are you designing for?</div>
                <Link href="/new-product">
                  <div
                    className="product product-border-bottom"
                    // onClick={() => Router.push("/new-product")}
                  >
                    <div className="head mb-2">A new product</div>
                    <div className="content mb-2">
                      A holistic curation of product design processes for your
                      every day product building and process validation
                    </div>
                    <div className="number">0 out of 27</div>
                  </div>
                </Link>

                <Link href="/existing-product">
                  <div
                    className="product product-border-bottom"
                    // onClick={() => Router.push("/existing-product")}
                  >
                    <div className="head mb-2">An existing product</div>
                    <div className="content mb-2">
                      A holistic curation of product design processes for your
                      every day product building and process validation
                    </div>
                    <div className="number">0 out of 25</div>
                  </div>
                </Link>

                <div className="product product-border-bottom">
                  <div className="head-gray mb-2">
                    A new feature <Badge>Coming soon</Badge>
                  </div>
                  <div className="content mb-2">
                    A holistic curation of product design processes for your
                    every day product building and process validation
                  </div>
                  <div className="number">0 out of 30</div>
                </div>
                <div className="product">
                  <div className="head-gray mb-2">
                    An existing feature <Badge>Coming soon</Badge>
                  </div>
                  <div className="content mb-2">
                    A holistic curation of product design processes for your
                    every day product building and process validation
                  </div>
                  <div className="number">0 out of 30</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <FooterNav />
    </HomeContainer>
  );
}
