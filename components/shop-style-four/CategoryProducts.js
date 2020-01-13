import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, addToCompare } from "../../store/actions/cartActions";
import Link from "next/link";
import ReactTooltip from "react-tooltip";
import { ToastContainer, toast, Slide } from "react-toastify";
import QuickView from "../Modal/QuickView";
import fetch from "isomorphic-unfetch";
import { category } from "../../CategoryProducts";

//

class CategoryProducts extends Component {
  state = {
    modalOpen: false,
    modalImage: "",
    price: 0,
    idd: null
  };

  componentDidMount() {
    // call api
    console.log(category);
  }

  static async getInitialProps() {
    // let res = await fetch('http://localhost:3000/CategoryProducts.json')
    // let brandsObj = await res.json()
    console.log(category);
    //console.log(brandsObj)
    //return {brands: brandsObj}
  }

  render() {
    return (
      <section className="best-sellers-area pb-60">
        <ReactTooltip />
        <ToastContainer transition={Slide} />
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> All Brands
            </h2>
          </div>
          <div className="row">
            {category.map((brand, id) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={id}>
                <div className="single-product-box">
                  <div className="product-image">
                    <Link href={`/brands/?id=${brand.id}`}>
                      hello
                      {/* <a>
                                                <img src={data.image} alt="image" />
                                                <img src={data.imageHover} alt="image" />
                                            </a> */}
                    </Link>
                  </div>
                  <div className="product-content">
                    <h3>
                      <Link href={`/brands/?id=${brand.id}`}>
                        <a>{brand.title}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryProducts;