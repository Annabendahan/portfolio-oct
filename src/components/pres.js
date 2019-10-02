import React, {Component} from "react"
import { Link } from "gatsby"



import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


class Pres extends Component {

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
  display = "AM A DEVELOPER"
} else if (this.state.num === 2) {
  display = "DESIGN & CODE"
} else if (this.state.num === 3) {
  display = <span> <span className="spe"> BUILD </span> YOUR  WEBSITE  </span>
}  else if (this.state.num === 4) {
  display = "PLAY FOOTBALL"
}  else if (this.state.num === 5) {
  display = "AM BASED IN PARIS"
} else if (this.state.num === 6) {
  display = <span> CREATE <span className="spe"> STUFF </span> </span>
} else if (this.state.num === 7) {
  this.handleReset()
}



    return(


    <div className="pres">
      <h3> I  <span className="j"> {display} </span>  </h3>
      <p> Hello, welcome to my portfolio! I am Anna Bendahan, full-stack developer specialised
       in Front-End and UIUX design. I create modern and original websites. Need a website?
       <span className="blue"> Contact-me ;) </span> </p>
     </div>



)
}}

export default Pres
