import React from "react";
import image from "./images/Raghvendra_verma(099).jpg";

const Sidebar = () => {
  return (
    <div className="">
      <section className="sidebar">
        <div>
          <img src={image} alt="Something went wrong" className="img" />
        </div>
        <div>
          <h2>Hi Mike,</h2>
          <p>welcome back</p>
        </div>
      </section>
      <div className="sidebar">
        <h3>Today</h3>
        <h4>$19,892</h4>
        <p>
          <span>Account Balance</span>
        </p>
        <h4>$4,000</h4>
        <p>
          <span>Year-In-Done contribution</span>
        </p>
        <h4>$1,892</h4>
        <p>
          <span>Total Interest</span>
        </p>
        <button>I want to</button>
      </div>
      <div className="sidebar">
        <div>
            <h2>Recent Transactions</h2>
        </div>
        <div>
            <p>2020-08-07</p>
            <h6>Withdrawl Transfer to bank-xxx11</h6>
            <p>2020-07-21</p>
            <h6>Withdrawl Transfer to bank-xxx11</h6>
            <p>2020-07-16</p>
            <h6>Withdrawl Transfer to bank-xxx11</h6>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
