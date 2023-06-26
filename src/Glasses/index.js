import React, { Component } from "react";
import data from "./dataGlasses.json";
import { render } from "@testing-library/react";
export default class Glasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listGlasses: data,
      urlImg: "./img/v1.png",
    };
  }
  handlChangeGlass(urlImg) {
    this.setState({
      urlImg,
    });
  }
  renderListGlass() {
    const { listGlasses } = this.state;
    return listGlasses.map((glass) => {
      return (
        <div className="col-md-2" key={glass.id}>
          <img className="my-5 mx-4" src={glass.url} alt="hinh anh" />
          <button
            className="btn btn-warning"
            onClick={() => {
              this.handlChangeGlass(glass.url);
            }}
          >
            Try it
          </button>
        </div>
      );
    });
  }
  render() {
    return (
      <>
        <header>
          <div className="text-center bg-dark text-white py-4">
            TRY GLASSES APP ONLINE
          </div>
        </header>
        <div className="carousel row container-fluid">
          <div className="col-sm-6 mt-5">
            <div className="card card1 ">
              <img
                className="putGlass1"
                src={this.state.urlImg}
                alt="Anh minh hoa"
              />
              <img
                className="card-img-top"
                src="./img/model.jpg"
                alt="hinh anh"
              />
              <div className="card-body ">
                <h4 className="card-title">FENDI F8650</h4>
                <p className="card-text">
                  Light pink sqquare lenses define these sunglasses, ending with
                  amother of pearl effect tip
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5">
            <div className="card card2">
              <img
                className="putGlass2"
                src={this.state.urlImg}
                alt="Anh minh hoa"
              />
              <img
                className="card-img-top"
                src="./img/model.jpg"
                alt="hinh anh"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row card3">{this.renderListGlass()}</div>
        </div>
      </>
    );
  }
}
