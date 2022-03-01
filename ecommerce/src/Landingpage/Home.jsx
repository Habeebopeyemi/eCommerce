import React, { Component } from "react";
import "./Home.css";
import PageHeader from "./Welcome";
import PurposeSection from "./Purpose";
import GrowthSection from "./Growth";
import GetStartedBtn from "./Getstartedbtn";
import FutureSection from "./future";
import Footer from "./footer";
export default class Home extends Component {
  state = {
    welcomeImage: {
      src: "https://images.unsplash.com/photo-1628102491629-778571d893a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      alt: "shopping",
    },
    getStartedBtnIcon: {
      src: "../../img/icons8-double-right.gif",
      alt: "Get Started",
    },
  };
  render() {
    return (
      <main>
        <header className="container-fluid">
          <PageHeader image={this.state.welcomeImage }/>
        </header>
        <section className="container-fluid">
          <PurposeSection />
        </section>
        <section className="container-fluid">
          <GrowthSection />
        </section>
        <section className="container-fluid">
          <GetStartedBtn animatedIcon={this.state.getStartedBtnIcon} />
        </section>
        <section className="container-fluid">
          <FutureSection />
        </section>
        <footer className="container-fluid">
          <Footer />
        </footer>
      </main>
    );
  }
}
