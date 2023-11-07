import Image from 'next/image';
import '../../app/portfolio/style.css'
import myImage from '../../../public/images/1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AboutMe from './about/page';
import Project from './projects/page';
export default function Pages() {
      return (
            <section className="">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand fw-bold" href="#">J</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">
                                    <li className="nav-item active">
                                          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                          <a className="nav-link text-dark" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                          <a className="nav-link text-dark" href="#">Portfolio</a>
                                    </li>
                              </ul>
                        </div>
                  </nav>
                  <div className="container-fluid  bg-dark">
                        <div className="row g-2">
                              <div className="col-md-6 ">
                                    <div className="text-center">
                                          <div className='d-flex justify-content-center'>
                                                <Image className='img-fluid myimage'
                                                      src={myImage}
                                                      alt="My Image" style={{ animation: 'fadeIn 4s' }}
                                                />
                                          </div>
                                          <hr />
                                          <h1 className='fw-light myname text-white'>JO ANN GA-AS </h1>
                                          <hr />
                                          <div className='icon mt-5'>
                                                <FontAwesomeIcon icon={faLinkedin} className='mx-5 icon text-white' />
                                                <FontAwesomeIcon icon={faEnvelope} className='mx-5 icon text-white' />
                                                <FontAwesomeIcon icon={faFacebook} className='mx-5 icon text-white ' />
                                          </div>
                                    </div>
                              </div>
                              <div className="col-md-6 p-5">
                                    <div className="text-center ">
                                          <p className='description mt-5 text-white'  >I'm always eager to work with others
                                                on new initiatives and opportunities.
                                                Please contact us at any time. I'd love to hear from you whether
                                                you have a project in mind or are simply want to say hi.
                                                Together, let's make something incredible.
                                          </p>
                                          <button className='btn btn-primary col-md-6'>Hire Me...</button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <hr />
                  <div className='container-fluid mt-5'>
                        <div className='text-center'>
                              <h1 className='header1 fw-light'>What I do</h1>
                        </div>

                        <div className="d-flex flex-column flex-lg-row panel mt-5 ">
                              <div className="p-4 flex mx-2 text-white ">
                                    <p className="h4 text-center mb-5 font-weight-light">Web Development</p>
                                    <strong className="mt-2 font-weight-light">I specialize in creating responsive and user-friendly
                                          websites that are
                                          tailored to your
                                          specific needs.
                                    </strong>
                              </div>
                              <div className="p-4 flex text-white mx-2">
                                    <p className="h4 text-center mb-5 font-weight-light">Front-end Development</p>
                                    <strong className="mt-2 font-weight-light">I design and develop intuitive user interfaces using
                                          HTML, CSS, and
                                          JavaScript to bring
                                          your ideas to life.
                                    </strong>
                              </div>

                              <div className="p-4 flex text-white mx-2">
                                    <p className="h4  text-center mb-5 font-weight-light">Responsive Design</p>
                                    <strong className="mt-2 font-weight-light"> I ensure that websites look and function perfectly
                                          on
                                          all devices, from
                                          desktops to smartphones.
                                    </strong>
                              </div>

                              <div className="p-4 flex text-white mx-2">
                                    <p className="h4 text-center mb-5 font-weight-light ">Version Control</p>
                                    <strong className="mt-2 font-weight-light">I use Git and other version control systems to track
                                          changes and
                                          collaborate
                                          effectively with teams.
                                    </strong>
                              </div>

                              <div className="p-4 flex text-white mx-2">
                                    <p className="h4 text-center mb-5 font-weight-light">Proble Solving</p>
                                    <strong className="mt-2 font-weight-light">I enjoy tackling complex challenges and finding
                                          creative
                                          solutions to
                                          technical issues.
                                    </strong>
                              </div>
                        </div>
                  </div>
                  <AboutMe />

                  <hr />
                  <Project />

            </section>






      )
}