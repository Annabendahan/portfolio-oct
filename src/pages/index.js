import React from "react"
import { Link } from "gatsby"
import '../components/index.css'
import Pres from "../components/pres"
import Contact from "../components/contact"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import picHome from "../images/dmitriy-ilkevich-449331.png"
import pic1 from "../images/IMG-20180422-WA0052.png"
import pic2 from "../images/P1010718.png"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landing">
      <div className="header">
        <h2> AB. </h2>
        <h3>
        <Link className="ong"> WORK <svg width="23" height="2" viewBox="0 0 23 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="22.3607" y2="1" stroke="#34FFFF" stroke-opacity="0.84" stroke-width="2"/>
                    </svg>
        </Link>
        <Link className="ong2">  CONTACT  <svg width="23" height="2" viewBox="0 0 23 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="22.3607" y2="1" stroke="#34FFFF" stroke-opacity="0.84" stroke-width="2"/>
                    </svg>
        </Link>
        </h3>
      </div>
      <div className="landing-pic">
        <h1>Anna <span className="space"> Bendahan </span> </h1>
        <div className="skills">
          <p>FRONT END DEVELOPMENT </p>
          <p>MOBILE & WEB DESIGN </p>
          <p>ANIMATION </p>
        </div>
         <img  src={picHome} className="picHome" alt="fireSpot" />
      </div>
      <svg className="scroll" width="45" height="69" viewBox="0 0 45 69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2929 68.7071C22.6834 69.0976 23.3166 69.0976 23.7071 68.7071L30.0711 62.3431C30.4616 61.9526 30.4616 61.3195 30.0711 60.9289C29.6805 60.5384 29.0474 60.5384 28.6569 60.9289L23 66.5858L17.3431 60.9289C16.9526 60.5384 16.3195 60.5384 15.9289 60.9289C15.5384 61.3195 15.5384 61.9526 15.9289 62.3431L22.2929 68.7071ZM22 28L22 68H24L24 28H22Z" fill="#34FFFF" fill-opacity="0.84"/>
      <path d="M3.924 2.96C4.66 2.96 5.292 3.084 5.82 3.332C6.348 3.572 6.812 3.956 7.212 4.484L6.072 5.6C5.864 5.168 5.588 4.848 5.244 4.64C4.9 4.424 4.464 4.316 3.936 4.316C3.456 4.316 3.084 4.408 2.82 4.592C2.564 4.768 2.436 5.004 2.436 5.3C2.436 5.572 2.568 5.788 2.832 5.948C3.096 6.108 3.572 6.248 4.26 6.368C4.98 6.504 5.552 6.672 5.976 6.872C6.4 7.072 6.708 7.324 6.9 7.628C7.1 7.924 7.2 8.296 7.2 8.744C7.2 9.232 7.06 9.656 6.78 10.016C6.508 10.368 6.124 10.64 5.628 10.832C5.14 11.024 4.58 11.12 3.948 11.12C3.076 11.12 2.36 11 1.8 10.76C1.248 10.512 0.8 10.14 0.456 9.644L1.44 8.468C1.736 8.956 2.076 9.296 2.46 9.488C2.844 9.672 3.32 9.764 3.888 9.764C4.4 9.764 4.788 9.684 5.052 9.524C5.324 9.364 5.46 9.136 5.46 8.84C5.46 8.624 5.332 8.444 5.076 8.3C4.828 8.156 4.38 8.02 3.732 7.892C2.988 7.74 2.392 7.56 1.944 7.352C1.504 7.144 1.184 6.888 0.984 6.584C0.784 6.28 0.684 5.904 0.684 5.456C0.684 4.984 0.812 4.56 1.068 4.184C1.324 3.8 1.696 3.5 2.184 3.284C2.68 3.068 3.26 2.96 3.924 2.96ZM14.9229 8.816C14.6909 9.576 14.2789 10.152 13.6869 10.544C13.0949 10.928 12.3869 11.12 11.5629 11.12C10.7869 11.12 10.1109 10.956 9.53494 10.628C8.95894 10.3 8.51494 9.832 8.20294 9.224C7.89894 8.608 7.74694 7.88 7.74694 7.04C7.74694 6.2 7.89894 5.476 8.20294 4.868C8.51494 4.252 8.95494 3.78 9.52294 3.452C10.0989 3.124 10.7709 2.96 11.5389 2.96C12.3629 2.96 13.0589 3.132 13.6269 3.476C14.2029 3.82 14.5989 4.332 14.8149 5.012L13.3149 5.648C13.1869 5.176 12.9869 4.836 12.7149 4.628C12.4429 4.42 12.0749 4.316 11.6109 4.316C10.9389 4.316 10.4109 4.552 10.0269 5.024C9.65094 5.496 9.46294 6.168 9.46294 7.04C9.46294 7.912 9.64694 8.584 10.0149 9.056C10.3829 9.528 10.9029 9.764 11.5749 9.764C12.5429 9.764 13.1509 9.296 13.3989 8.36L14.9229 8.816ZM18.8543 7.964H17.3663V11H15.7343V3.08H19.2263C20.1303 3.08 20.8343 3.296 21.3383 3.728C21.8503 4.152 22.1063 4.752 22.1063 5.528C22.1063 6.096 21.9663 6.572 21.6863 6.956C21.4063 7.34 21.0063 7.616 20.4863 7.784L22.5743 11H20.7143L18.8543 7.964ZM17.3663 6.704H19.0103C19.4903 6.704 19.8423 6.612 20.0663 6.428C20.2983 6.236 20.4143 5.944 20.4143 5.552C20.4143 5.16 20.2983 4.872 20.0663 4.688C19.8423 4.496 19.4903 4.4 19.0103 4.4H17.3663V6.704ZM26.6286 2.96C27.4046 2.96 28.0766 3.124 28.6446 3.452C29.2206 3.78 29.6606 4.252 29.9646 4.868C30.2766 5.476 30.4326 6.2 30.4326 7.04C30.4326 7.88 30.2766 8.608 29.9646 9.224C29.6606 9.832 29.2206 10.3 28.6446 10.628C28.0766 10.956 27.4046 11.12 26.6286 11.12C25.8526 11.12 25.1766 10.956 24.6006 10.628C24.0246 10.3 23.5806 9.832 23.2686 9.224C22.9646 8.608 22.8126 7.88 22.8126 7.04C22.8126 6.2 22.9646 5.476 23.2686 4.868C23.5806 4.252 24.0246 3.78 24.6006 3.452C25.1766 3.124 25.8526 2.96 26.6286 2.96ZM26.6286 4.316C25.9566 4.316 25.4366 4.552 25.0686 5.024C24.7086 5.488 24.5286 6.16 24.5286 7.04C24.5286 7.92 24.7086 8.596 25.0686 9.068C25.4366 9.532 25.9566 9.764 26.6286 9.764C27.2926 9.764 27.8046 9.532 28.1646 9.068C28.5326 8.596 28.7166 7.92 28.7166 7.04C28.7166 6.16 28.5326 5.488 28.1646 5.024C27.8046 4.552 27.2926 4.316 26.6286 4.316ZM37.3351 9.668V11H31.5031V3.08H33.1591V9.668H37.3351ZM43.9421 9.668V11H38.1101V3.08H39.7661V9.668H43.9421Z" fill="#34FFFF"/>
      </svg>
    </div>

    <div className="iam">
      <Pres/>
    </div>


    <div className="projet">
      <div className="pic">
        <img  src={pic1} className="pic1" alt="fireSpot" />
      </div>
      <div className="desc">
        <h4> DESIGN & CODE </h4>
        <h3> Alice </h3>
        <p> Alice is a young fashion designer and modelist and wanted a website to show her collections</p>
      </div>
    </div>

     <div className="projet">
      <div className="desc">
        <h4> DESIGN & CODE </h4>
        <h3> Quentin </h3>
        <p> Alice is a young fashion designer and modelist and wanted a website to show her collections</p>
      </div>
       <div className="pic">
        <img  src={pic2} className="pic1" alt="fireSpot" />
      </div>
    </div>


    <div className="projet">
      <div className="pic">
        <img  src={pic1} className="pic1" alt="fireSpot" />
      </div>
      <div className="desc">
        <h4> DESIGN & CODE </h4>
        <h3> Alice </h3>
        <p> Alice is a young fashion designer and modelist and wanted a website to show her collections</p>
      </div>
    </div>

    <div className="contact">
      <Contact />
      <p> Want to work together? Ask something?  <span className="blue"> Reach me :) </span> </p>
    </div>

  </Layout>
)

export default IndexPage
