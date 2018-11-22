import React, { Component } from 'react';
import './App.css';

class credit_card extends Component {
  render() {
    return (
      <div className="credit_card">
        <span id="credit">CREDIT CARD</span>
        <div className="body">
          <div className="details">
            <img src="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/45593385_251802722355470_125865760366002176_n.png?_nc_cat=100&_nc_ht=scontent.ftun1-1.fna&oh=538a708f4893316305bf9298af561f11&oe=5C8589A8" />
            <span id="card_number">XXXX XXXX XXXX XXXX</span>
            <div className="CVC-Experation">
              <span id="cvc">XXXX</span>
              <div class="Experation">
                <div id="valid">
                  <span>VALID</span>
                  <span>THRU</span>
                </div>
                <div id="date">
                  <span id="my">MONTH/YEAR</span>
                  <span id="expd">XX/XX</span>
                </div>
              </div>
            </div>
            <span id="card-holder">CARDHOLDER</span>
          </div>
          <img
            src="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/45555749_344209416329554_4669036209924734976_n.jpg?_nc_cat=111&_nc_ht=scontent.ftun1-1.fna&oh=35fc24cde38ce547e6f7ee74c01b84ab&oe=5C7D024E"
            id="type"
          />
        </div>
      </div>
    );
  }
}

export default credit_card;

