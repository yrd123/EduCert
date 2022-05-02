import React, { Component } from 'react';
import backend from '../config.json';

import '../static/css/assets/css/style.css';

import hero from '../static/css/assets/img/hero-img.png' ;

//import '../static/css/assets/vendor/aos/aos.css';

//import '../static/css/assets/vendor/bootstrap/css/bootstrap.min.css';
// import '../static/css/assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import '../static/css/assets/vendor/boxicons/css/boxicons.min.css';
// import '../static/css/assets/vendor/glightbox/css/glightbox.min.css';

const url = String(backend.backend) + "";


class Home extends Component {
    state = { 
      applicant:{}
     } 
    componentDidMount(){
      
    }
    
    render() { 
        return (
          
          <div>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>EduCert</title>
          <meta content name="description" />
          <meta content name="keywords" />
          
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        
          {/* <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
          <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
          <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
          <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" /> */}

<link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet" />




<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>

          {/* Template Main CSS File */}
          {/* <link href="assets/css/style.css" rel="stylesheet" /> */}
          {/* ======= Hero Section ======= */}
          <section id="hero" className="d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 data-aos="fade-up">Your documents, our responsibility</h1>
                  <h2 data-aos="fade-up" data-aos-delay={400}>We are team of blockchain architects developing solutions for the future</h2>
                  <div data-aos="fade-up" data-aos-delay={800}>
                    <a href="#about" className="btn btn-get-started">Get Started</a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay={200}>
                  <img src={hero} className="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
          </section>{/* End Hero */}
          <main id="main">
            {/* ======= Clients Section ======= */}
            <section id="clients" className="clients clients">
              {/* <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-6">
                    <img src="https://www.somaiya.edu/assets/university/img/homepage/university-logo.svg" className="img-fluid" alt="" data-aos="zoom-in" />
                  </div>
                </div>
              </div> */}
            </section>{/* End Clients Section */}
            {/* ======= About Us Section ======= */}
            <section id="about" className="about">
              <div className="container">
                <div className="section-title" data-aos="fade-up">
                  <h2>About Us</h2>
                </div>
                <div className="row content">
                  <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
                    <p>
                      Our solutions provide security, portability and saves you efforts of manually verifying documents. You can always trust documents on our platform as you are involved in the consortium.
                    </p>
                    <ul>
                      <li><i className="ri-check-double-line" />Immutability of Blockchain</li>
                      <li><i className="ri-check-double-line" />Decentralized and Distributed Ledgers</li>
                      <li><i className="ri-check-double-line" />Consensus driven platform</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay={300}>
                    <p>
                      Candidates CV verification is a major task for hiring for an organization and accepting students for education. In both cases, we need to verify that the candidate provides correct and legible information to the system. Certificate and documents forgery is a major hurdle in this process. 
                      Under the existing system, organizations are not able to efficiently differentiate between true and forged documents which may be submitted by some applicants.
                      In order to tackle this, some organizations directly contact the institution which has issued the credential for verification, but this process is long and cumbersome and often involves monetary compensation. 
                    </p>
                    <a href="#" className="btn btn-learn-more">Learn More</a>
                  </div>
                </div>
              </div>
            </section>{/* End About Us Section */}
            {/* ======= Services Section ======= */}
            <section id="services" className="services">
              <div className="container">
                <div className="section-title" data-aos="fade-up">
                  <h2>Services</h2>
                  <p>Don't worry, we belive in reliability!</p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                      <div className="icon"><i className="bx bx-alarm" /></div>
                      <h4 className="title"><a href>Time is money</a></h4>
                      <p className="description">Our service make the verification and on boarding of Student/Employee faster so you can focus on your forte</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                      <div className="icon"><i className="bx bx-file" /></div>
                      <h4 className="title"><a href>Documents verification magic</a></h4>
                      <p className="description">We use blockchain magic to verify the documents</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                      <div className="icon"><i className="bx bx-code-block" /></div>
                      <h4 className="title"><a href>Smart Contracts</a></h4>
                      <p className="description">We make the smart contracts with your input, ensuring fulfillment of your needs</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                      <div className="icon"><i className="bx bx-world" /></div>
                      <h4 className="title"><a href>World is small</a></h4>
                      <p className="description">We bring together all the organizations together in our consortium. </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Services Section */}
            {/* ======= Features Section ======= */}
            <section id="features" className="features">
              <div className="container">
                <div className="section-title" data-aos="fade-up">
                  <h2>Features</h2>
                  <p>Oh! Some extra perks</p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={300}>
                  <div className="col-lg-3 col-md-4">
                    <div className="icon-box">
                      <i className="ri-secure-payment-line" style={{color: '#ffbb2c'}} />
                      <h3><a href>Security is at Our Core</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div className="icon-box">
                      <i className="ri-shield-cross-fill" style={{color: '#5578ff'}} />
                      <h3><a href>Immutability of Blockchain</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                    <div className="icon-box">
                      <i className="ri-phone-lock-line" style={{color: '#e80368'}} />
                      <h3><a href>Documents Locked in</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                    <div className="icon-box">
                      <i className="ri-magic-line" style={{color: '#e361ff'}} />
                      <h3><a href>With Blockchain Magic</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                      <i className="ri-database-2-line" style={{color: '#47aeff'}} />
                      <h3><a href>Distributed Database among organizations</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                      <i className="ri-speed-line" style={{color: '#ffa76e'}} />
                      <h3><a href>I am Speed!</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                      <i className="ri-file-list-3-line" style={{color: '#11dbcf'}} />
                      <h3><a href>Document Creation</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                      <i className="ri-price-tag-2-line" style={{color: '#4233ff'}} />
                      <h3><a href>Minimize drastically cost of verification</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                      <i className="ri-file-cloud-line" style={{color: '#b2904f'}} />
                      <h3><a href>Send Documents via Cloud</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                      <i className="ri-file-history-line" style={{color: '#b20969'}} />
                      <h3><a href>Get History</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                      <i className="ri-base-station-line" style={{color: '#ff5828'}} />
                      <h3><a href>Every transaction asks for Consensus</a></h3>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                    <div className="icon-box">
                      <i className="ri-fingerprint-line" style={{color: '#29cc61'}} />
                      <h3><a href>Secured by one way Hash Functions</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Features Section */}
            {/* ======= Team Section ======= */}
            {/* <section id="team" class="team section-bg">
                  <div class="container">
            
                    <div class="section-title" data-aos="fade-up">
                      <h2>Team</h2>
                      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                    </div>
            
                    <div class="row">
            
                      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="100">
                          <div class="member-img">
                            <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="">
                            <div class="social">
                              <a href=""><i class="bi bi-twitter"></i></a>
                              <a href=""><i class="bi bi-facebook"></i></a>
                              <a href=""><i class="bi bi-instagram"></i></a>
                              <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                          </div>
                          <div class="member-info">
                            <h4>Walter White</h4>
                            <span>Chief Executive Officer</span>
                          </div>
                        </div>
                      </div>
            
                      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="200">
                          <div class="member-img">
                            <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="">
                            <div class="social">
                              <a href=""><i class="bi bi-twitter"></i></a>
                              <a href=""><i class="bi bi-facebook"></i></a>
                              <a href=""><i class="bi bi-instagram"></i></a>
                              <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                          </div>
                          <div class="member-info">
                            <h4>Sarah Jhonson</h4>
                            <span>Product Manager</span>
                          </div>
                        </div>
                      </div>
            
                      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="300">
                          <div class="member-img">
                            <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="">
                            <div class="social">
                              <a href=""><i class="bi bi-twitter"></i></a>
                              <a href=""><i class="bi bi-facebook"></i></a>
                              <a href=""><i class="bi bi-instagram"></i></a>
                              <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                          </div>
                          <div class="member-info">
                            <h4>William Anderson</h4>
                            <span>CTO</span>
                          </div>
                        </div>
                      </div>
            
                      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="400">
                          <div class="member-img">
                            <img src="assets/img/team/team-4.jpg" class="img-fluid" alt="">
                            <div class="social">
                              <a href=""><i class="bi bi-twitter"></i></a>
                              <a href=""><i class="bi bi-facebook"></i></a>
                              <a href=""><i class="bi bi-instagram"></i></a>
                              <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                          </div>
                          <div class="member-info">
                            <h4>Amanda Jepson</h4>
                            <span>Accountant</span>
                          </div>
                        </div>
                      </div>
            
                    </div>
            
                  </div>
                </section>End Team Section */}
            {/* ======= F.A.Q Section ======= */}
            <section id="faq" className="faq">
              <div className="container">
                <div className="section-title" data-aos="fade-up">
                  <h2>Frequently Asked Questions</h2>
                </div>
                <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                  <div className="col-lg-5">
                    <i className="ri-question-line" />
                    <h4>Non consectetur a erat nam at lectus urna duis?</h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                  </div>
                </div>{/* End F.A.Q Item*/}
                <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                  <div className="col-lg-5">
                    <i className="ri-question-line" />
                    <h4>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                    </p>
                  </div>
                </div>{/* End F.A.Q Item*/}
                <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
                  <div className="col-lg-5">
                    <i className="ri-question-line" />
                    <h4>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.
                    </p>
                  </div>
                </div>{/* End F.A.Q Item*/}
                <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
                  <div className="col-lg-5">
                    <i className="ri-question-line" />
                    <h4>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.
                    </p>
                  </div>
                </div>{/* End F.A.Q Item*/}
                <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500}>
                  <div className="col-lg-5">
                    <i className="ri-question-line" />
                    <h4>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                    </p>
                  </div>
                </div>{/* End F.A.Q Item*/}
              </div>
            </section>{/* End F.A.Q Section */}
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
              <div className="container">
                <div className="section-title" data-aos="fade-up">
                  <h2>Contact Us</h2>
                </div>
                <div className="row">
                  <div className="col-5" data-aos="fade-up" data-aos-delay={100}>
                    <div className="contact-about">
                      <h3>Educert</h3>
                      <p>Got many doubts? Don't let them breed. Ask away. We'd love to hear from you</p>
                      <div className="social-links">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-7" data-aos="fade-up" data-aos-delay={200}>
                    <div className="info">
                      <div>
                        <i className="ri-map-pin-line" />
                        <p>KJSCE<br />Vidya Vihar, Mumbai</p>
                      </div>
                      <div>
                        <i className="ri-mail-send-line" />
                        <p>manish.parihar@somaiya.edu</p>
                      </div>
                      <div>
                        <i className="ri-phone-line" />
                        <p>+91 9029043112</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Contact Section */}
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 text-lg-left text-center">
                  <div className="copyright">
                    © Copyright <strong>Educert</strong>. All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </footer>{/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
          {/* Vendor JS Files */}
          {/* Template Main JS File */}
        </div>
        );
    }
}
 
export default Home;