import './Home.scss'
//import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";

import Fade from 'react-reveal/Fade'
import Slider from "react-slick";
import {Link} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import Particle_slider from '../../component/particle-slider/Particle-slider';
import HomeBanner from '../../component/home-banner/Home-banner';
import StudentMapCounter from '../../component/student-map-counter/Student-map-counter';
import KeyInitiatives from '../../component/key-initiatives/Key-initiatives';
import Testimonial from '../../component/testimonial/Testimonial';

const users = [
    {
        name: 'John D.',
        title: 'CO FOUNDER',
        label: '/images/Layer 21 copy 3.png',
        avatar: '/images/Layer 10 copy 3.png'
    },
    {
        name: 'Daphne T.',
        title: 'FOUNDER',
        label: '/images/Layer 19 copy 3.png',
        avatar: '/images/Layer 14 copy 3.png'
    },
    {
        name: 'Emily S.',
        title: 'CEO',
        label: '/images/Layer 17 copy 3.png',
        avatar: '/images/Layer 13 copy 3.png'
    },
    {
        name: 'Mike W.',
        title: 'DIRECTOR',
        label: '/images/Layer 16 copy 3.png',
        avatar: '/images/Layer 12 copy 3.png'
    },
    {
        name: 'Adam W.',
        title: 'CTO',
        label: '/images/Layer 18 copy 3.png',
        avatar: '/images/Layer 11 copy 3.png'
    },
    {
        name: 'Carla O.',
        title: 'CO FOUNDER',
        label: '/images/Layer 20 copy 3.png',
        avatar: '/images/Layer 15 copy 3.png'
    }
];
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
  };

const programPost = [
    {
        name: '1',
        title: 'Quantum Computing: Summer Camps,Research Opportunities & Internships',
        img: '/images/pro-post1.png',
        link:'https://www.qubitbyqubit.org'
    },
    {
        name: '1',
        title: 'Introduction to Machine Learning for high school students',
        img: '/images/ai III.jpg',
        link:'/train'
    },
    {
        name: '1',
        title: 'Classical coding: 1:1 lessons, camps, research opportunities',
        img: '/images/996F0475-AC41-418B-BF94-0703D5240BA3 (2).jpg',
        link:'https://codeconnects.org'
    }
];
const programPostUniversity = [
    {
        name: '1',
        title: 'Quantum Computing: year-long course, research opportunities, internships',
        img: '/images/pro-post1.png',
        link:'https://www.qubitbyqubit.org'
    },
    {
        id: '2',
        title: 'Classical Coding: 1:1 and small group lessons, research opportunities',
        img: '/images/ai III.jpg',
        link:'/train'
    },
    {
        id: '3',
        title: 'Artificial intelligence: year-long course',
        img: '/images/996F0475-AC41-418B-BF94-0703D5240BA3 (2).jpg',
        link:'https://codeconnects.org'
    }
];
const programPostEducators = [
    {
        name: '1',
        title: 'Educators Programs:   Professional Development Training in Artificial Intelligence ',
        img: '/images/pro-post1.png',
        link:'https://www.qubitbyqubit.org'
    },
];
const keyPost = [
    {
        name: '1',
        title: 'CodeConnects is the online learning initiative that aims to empower the next generation through computer science education.',
        img: '../../../images/code-connect.png',
        link:'https://codeconnects.org',
        anim:'left'
    },
    {
        name: '1',
        title: 'Qubit by Qubit is a first-of-its kind course designed to make quantum computing accessible to high school students. ',
        img: '/images/qubit.png',
        link:'https://www.qubitbyqubit.org',
        anim:'top'
    },
    {
        name: '1',
        title: 'TRAIN offers two first-of-its-kind programs focused on Machine Learning (ML), a subfield of AI.',
        img: '/images/train.png',
        link:'/train',
        anim:'right'
    }
];
const imgContainerStyle = {
  width: "440px"
}
const imageStyle = {
  maxWidth: "100%"
}
function Home() {

    // function onLoad() {
    //     var ps = new window.ParticleSlider({
    //         ptlGap: 0,
    //         mouseForce: 1000,
    //         monochrome: true,
    //         color: '#86a1b2',
    //         ptlSize: 1,
    //     });
    //     var ptl = new ps.Particle(ps);
    //     ptl.ttl = 10;
    // }

    //useEffect(onLoad, [])

    return (
        <div id='Home'>
            <div className='container'>
                <HomeBanner></HomeBanner>

            </div>
            <div id="" className="KeyInitiatives mb-80">
        <div className='container'>
            <div className='visual-text text-center mb-30'>
                <h3>
                Key Initiatives
                </h3>
            </div>
        </div>
        <div className='container container-1660'>
            <div className='row'>
            {keyPost.map((item,index)=>{
                return (
                //<li key={index}>{item['title']}</li>
                {...index / 2 ?

                <Fade left>
                <div className='col-md-4 postBox'>
                    <div className='postBox-wrap'>

                    <img src={item["img"]} alt='students' />
                    <h6>{item["title"]}</h6>
                    <a className='link' href={item["link"]} >Learn More</a>
                    </div>
                </div>
                </Fade>
                :
                <Fade right>
                <div className='col-md-4 postBox'>
                    <div className='postBox-wrap'>

                    <img src={item["img"]} alt='students' />
                    <h6>{item["title"]}</h6>
                    <a className='link' href={item["link"]} >Learn More</a>
                    </div>
                </div>
                </Fade>
                }
                )
            })}
            </div>
        </div>
        </div>
            <StudentMapCounter></StudentMapCounter>
            <div className='container container-1660'>
                <KeyInitiatives></KeyInitiatives>
            </div>

            <div className='brown-sec'>
                <img src='/images/arrow-down.svg' className='before' />
                <div className='container'>
                    <h2>Upcoming Programs</h2>
                </div>
            </div>
            <div className='student_programs'>
                <div className='student_programs-wrap'>
                    <div className='row mt-50 ml-0'>
                        <div className='col-lg-6 col-md-12'>
                            <div className='k2-collage nav nav-tabs' role="tablist">
                                    <a className="nav-link active" id="k2-pro-tab" data-toggle="tab" href="#k2-pro" role="tab" aria-controls="k2-pro" aria-selected="true">
                                    <Fade left><img src='images/k2-1.png'  /></Fade>
                                </a>
                                <a className="nav-link" id="k2-pro2-tab" data-toggle="tab" href="#k2-pro2" role="tab" aria-controls="k2-pro2" aria-selected="false">
                                    <Fade right><img src='images/k2-2.png'  /></Fade>
                                </a>
                                <a className="nav-link" id="k2-pro3-tab" data-toggle="tab" href="#k2-pro3" role="tab" aria-controls="k2-pro3" aria-selected="false">
                                    <Fade top><img src='images/k2-3.png'  /></Fade>
                                </a>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12 pr-0'>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="k2-pro" role="tabpanel" aria-labelledby="k2-pro-tab">
                                    <Fade right>
                                        <div className='visual-text mt-50'>
                                            <h3>For K-12 Programs</h3>
                                        </div>
                                    </Fade>
                                    <div className='programPost'>
                                        <div className='programPost-wrap'>
                                            <ul className='programPost-items'>
                                                <Slider {...settings}>
                                                    {programPost.map((item,index)=>{
                                                        return (
                                                            <Fade top>
                                                                <li className='programPost-item'>
                                                                    <div className='programPost-img'>
                                                                        <img src={item["img"]} className="img-fluid" />
                                                                    </div>
                                                                    <div className='programPost-desc'>
                                                                        <h4>{item["title"]}</h4>
                                                                        <a className='link' href={item["link"]}>Learn More</a>
                                                                    </div>
                                                                </li>
                                                            </Fade>
                                                        )
                                                    })}
                                                </Slider>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="k2-pro2" role="tabpanel" aria-labelledby="k2-pro2-tab">
                                    <Fade right>
                                        <div className='visual-text mt-50'>
                                            <h3>For University Programs</h3>
                                        </div>
                                    </Fade>
                                    <div className='programPost'>
                                        <div className='programPost-wrap'>
                                            <ul className='programPost-items'>
                                                <Slider {...settings}>
                                                    {programPostUniversity.map((item,index)=>{
                                                        return (
                                                            <Fade top>
                                                                <li className='programPost-item'>
                                                                    <div className='programPost-img'>
                                                                        <img src={item["img"]} className="img-fluid" />
                                                                    </div>
                                                                    <div className='programPost-desc'>
                                                                        <h4>{item["title"]}</h4>
                                                                        <a className='link' href={item["link"]}>Learn More</a>
                                                                    </div>
                                                                </li>
                                                            </Fade>
                                                        )
                                                    })}
                                                </Slider>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="k2-pro3" role="tabpanel" aria-labelledby="k2-pro3-tab">
                                    <Fade right>
                                        <div className='visual-text mt-50'>
                                            <h3>For Educators Programs</h3>
                                        </div>
                                    </Fade>
                                    <div className='programPost'>
                                        <div className='programPost-wrap'>
                                            <ul className='programPost-items row'>
                                                    {programPostEducators.map((item,index)=>{
                                                        return (
                                                            <Fade top>
                                                                <li className='programPost-item col-12 col-md-6'>
                                                                    <div className='programPost-img'>
                                                                        <img src={item["img"]} className="img-fluid" />
                                                                    </div>
                                                                    <div className='programPost-desc'>
                                                                        <h4>{item["title"]}</h4>
                                                                        <a className='link' href={item["link"]}>Learn More</a>
                                                                    </div>
                                                                </li>
                                                            </Fade>
                                                        )
                                                    })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='eng-bg' style={{ backgroundImage: `url("/images/eng-bg-old-1.png")` }} >
                <div className='container container-1660'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                            <Fade left>
                            <h3>We’ve Created a Learning Model That’s Making Real Impact.</h3>
                            <p>To expand the pool of qualified talent and increase diversity in tech, every student needs access to high quality computer science education. We’re making that a reality. Taught by PhD researchers and professional software engineers, our students gain in-depth knowledge and real world skills in emerging technologies, such as AI and Quantum Computing, that they would not otherwise have access to. </p>
                            <p>Our model offers virtual courses with live instruction, teaching nearly 10,000 students in a single course with staggeringly impressive outcomes.</p>
                            <p>Through this model, every student in the U.S. can have access to high-quality computer science instruction.</p>
                            </Fade>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                        <Fade right>
                            <img className='img-responsive' src='/images/eng-bg-hand.png' />
                        </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <div className='school-partner mb-80'>
                <div className='container container-1660'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5 col-md-12'>
                        <Fade left>
                            <img src='/images/k2-program.svg' />
                        </Fade>
                        </div>
                        <div className='col-lg-7 col-md-12'>
                            <div className='school-box'>
                                <div className='visual-text text-center'>
                                <Fade top>
                                    <h3>School <span className='highlight-underline font-normal'>Partners</span></h3>
                                </Fade>
                                <Fade bottom>
                                    <p>Accredited by the Western Association of Schools and Colleges (WASC), your K-12 students can earn transcript credit in emerging technologies such as AI and Quantum Computing. </p>
                                    <p>Hundreds of schools and districts across the U.S. from the Hawaii Department of Education to the Cleveland School District have partnered with The Coding School to ensure their students receive the highest quality and most cutting-edge STEM education possible. The Coding School's Qubit by Qubit Introduction to Quantum Computing Course is also A-G approved by the University of California as an accepted college preparatory course. </p>
                                    <div className='row home-banner mt-30 p-0'>
                                        <div className='col-md-6 text-right'>
                                        <Link className='btn btn-outline link' to='/about_us' > CONNECT WITH US</Link>
                                        </div>
                                        <div className='col-md-6 text-left'>
                                            <Link className='btn btn-outline link' to='/about_us' > SEE OUR PARTNER SCHOOLS</Link>
                                        </div>
                                    </div>
                                </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonial />
        </div>
    );
}

export default Home;
