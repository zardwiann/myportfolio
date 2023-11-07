import '../about/about.css'
import Image from 'next/image'
import myImage from '../../../../public/images/1.png'
export default function AboutMe() {
    return (

            <section className="about-me" id="about-me mt-5">
                
                <div className="container-fluid">
                    <hr />
                    <div className="about-me-container gap-5">
                        <div className="about-me-flex-container d-flex justify-content-center mt-5">
                            <div className="about-me-image mx-5 mt-5">
                                <div className="back-div"></div>
                                <div className="black-image">
                                    <Image className='img-fluid  '
                                        src={myImage}
                                        alt="My Image"
                                    />
                                </div>
                                <div className="main-image">
                                    <Image className='img-fluid '
                                        src={myImage}
                                        alt="My Image"
                                    />
                                </div>
                            </div>
                            <div className="about-me-content text-center mt-5">

                                <p className='descriptions fw-light'> I was pursuing my Bachelor of Science in Information
                                    Technology at Philippine
                                    Advent College. Both front-end and back-end web development technologies
                                    allowed me to get practical experience. I have expertise working with cutting-edge
                                    web frameworks like Angular, Laravel, and React JS, as well as databases PHP
                                    MY SQL, and I am fluent in HTML, CSS, and JavaScript. I also have knowledge
                                    of version control systems like Git.</p>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
 
    )
}