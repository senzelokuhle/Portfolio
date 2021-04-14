import React from 'react';

import Bar from './Bar';
import { motion } from 'framer-motion'
import { tools, languages } from './data/resume_data'


const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume"

            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            BSc(hons) Computer Science
                        </h5>
                        <p className="resume-card__name">
                            University of South Africa(2021-2022)
                        </p>
                        <p className="resume-card__details">I am currently persuing BSc honours in Computing majoring in computer science and information systems.</p>
                        <p>Major subjects include software engineering and information systems</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Advanced diploma:Information Resource Management
                        </h5>
                        <p className="resume-card__name">
                            University of South Africa(2020-2020)
                        </p>
                        <p className="resume-card__details">
                            <p>Graduated in Absentia on April 2021</p>
                            <p>Major subjects included software engineering and database systems </p>
                            <p>Academic average of 65%</p>
 </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        National Diploma in ICT Applications Development
                        </h5>
                        <p className="resume-card__name">
                            Durban University of Technology(2017-2019)
                        </p>
                        <p className="resume-card__details">
                           <p>Graduated in Absentia on November 2019</p> 
                            <p>Major subjects included software engineering and information systems</p>
                            <p>Academic average of 60%</p>
 </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Junior Systems consultant
                        </h5>
                        <p className="resume-card__name">
                            Scon IT services (2020-present)
                        </p>
                        <p className="resume-card__details">I provide technical software support for Scon IT services on Freshservice, Freshdesk and Kissflow.</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Freelance Software Developer
                        </h5>
                        <p className="resume-card__name">
                            Detail Tech (2017-2019)
                        </p>
                        <p className="resume-card__details">
                            <p>Programmed web solutions for clients using HTML,CSS and Javascript frameworks</p>
                            <p>Providing clear documentation and technical support for users</p>
                            <p>Testing functionality of the websites created</p>
                            <p>Manipulating WordPress and Wix templates to fulfil the client’s need</p>
</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;