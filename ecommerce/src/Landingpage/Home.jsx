import React, { Component } from "react"
import "./Home.css"
import PageHeader from "./Welcome"
import PurposeSection from "./Purpose"
import GrowthSection from "./Growth"
import FutureSection from "./future"
import Footer from "./footer"
export default class Home extends Component{
    render() {
        return (
          <main>
            <header className="container-fluid">
              <PageHeader />
            </header>
            <section className="container-fluid">
              <PurposeSection />
            </section>
            <section className="container-fluid">
              <GrowthSection />
            </section>
            <section className="container-fluid">
              <FutureSection />
            </section>
            <footer className="container-fluid">
              <Footer/>
            </footer>
          </main>
        );
       
        
    }
}