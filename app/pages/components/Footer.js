import React, {Component} from 'react';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "15px",
    width: "100%",
    fontFamily: "Roboto, sans-serif", 
    fontSize: "12px"
};

var phantom = {
  display: 'block',
  padding: '20px',
  height: '30px',
  width: '100%',
}

const Footer = React.createClass({
    render: function() {
        return (
            <div>
                <div style={phantom} />
                <div style={style}>
                    InfoFinder &mdash; A Service from Authentical.Info <sup>SM</sup>   |  Website &copy;2017 Terri Hammons  
                </div>
            </div>
        );
    }
});

export default Footer;