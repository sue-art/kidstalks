import React, { useRef } from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import TopicCards from "views/IndexSections/TopicCards";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/page-7.png"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/page-1.png"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/page-2.png"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function Index() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />

        <div className="main">
          <TopicCards />
          <section className="section">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">
                    Having a conversation with your children
                  </h1>
                  <h3 className="text-center">
                    Science has shown that the best way to help our kids become
                    independent, confident, kind, empathetic, and happy is by
                    talking with them.
                  </h3>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section">
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">
                    Make more family moments
                  </h1>
                  <h5 className="text-on-back">01</h5>
                  <p>
                    Spark fun conversations at the dinner table or during family
                    game night. Make meals and family trips more memorable by
                    having interesting talks with your loved ones. Great for
                    simple get-togethers at home and special occasions like road
                    trips, family vacations, birthday or anniversary parties,
                    and family reunions.
                  </p>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6"></Col>
              </Row>
            </Container>
          </section>

          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="5"></Col>
                <Col md="5">
                  <h1 className="profile-title text-left">
                    Understand and learn
                  </h1>
                  <h5 className="text-on-back">02</h5>
                  <p>
                    spend more quality time with your kids and family getting
                    their perspective, sharing yours, and having lots of laughs.
                    Really listen to what others have to say, come to a better
                    understanding, build trust and confidence, and create a safe
                    space for the whole family.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>

          <section className="section">
            <Container>
              <Row>
                <Col md="6">
                  <h1 className="profile-title text-left">
                    Grow closer together
                  </h1>
                  <h5 className="text-on-back">03</h5>
                  <p>
                    Ask kids fun questions, gain wisdom from elders, and discuss
                    what it means to be a family. Learn essential family values
                    and build a stronger relationship as you share fun stories,
                    life lessons, memories, and aspirations through this family
                    card game. Engage in a deep, meaningful group conversation
                    or a simple chat over coffee and strengthen your bonds. ds
                  </p>
                </Col>
                <Col className="ml-auto" md="4">
                  <div className="info info-horizontal"></div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
