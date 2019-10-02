import React, {Component} from "react"
import { Link } from "gatsby"



import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import pic3 from "../images/nokia.jpg"


class Contact extends Component {

  state = {
    show: 1,
    num: 1
  }



  componentDidMount() {
    this.timeout = setInterval(() => {
      let num = this.state.num;
      this.setState({ num: num + 1 });
    }, 1500);
  }

handleReset =() =>{
  this.setState({ num: 1});
}

 render(){



let display =""

if (this.state.num === 1) {
  display = "CALL"
} else if (this.state.num === 2) {
  display = "E MAIL"
} else if (this.state.num === 3) {
  display = <span className="spe"> RING </span>
}  else if (this.state.num === 4) {
  display = "TEXT"
}  else if (this.state.num === 5) {
  this.handleReset()
}



    return(


    <div className="pres">
      <h3>  <img  src={pic3} className="phone-pic" alt="fireSpot" /> <span className="j"> {display} </span> ME  </h3>
     </div>



)
}}

export default Contact
