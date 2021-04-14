import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import file from '../assets/icons/file.svg'
import map from '../assets/icons/map.svg'
import envelope from '../assets/icons/envelope.svg'
import phone from '../assets/icons/phone.svg'
import link from '../assets/icons/link.svg'


import mightycoder from '../assets/mightycoder.svg'
import myself from '../assets/myself.jpg'

import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:senzelokuhle@hotmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={myself} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Hi, I am Senzelokuhle <span>Mahaye</span> </div>
            <div className="sidebar__item sidebar__title">Junior Software Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                <img src={file} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
    
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                   <p> <a href='https://github.com/senzelokuhle'target="_blank" rel="noopener noreferrer"><img src={link} alt="github" className="sidebar__icon mr-3" />GitHub</a></p>
                </div>

                <div className="sidebar__location">
                  <p><img src={map} alt="location" className="sidebar__icon mr-3" /></p>  
                Durban, South Africa</div>
                
              
                <div className="sidebar__location">
                   <p><img src={envelope} alt="location" className="sidebar__icon mr-3" /></p> 
                Senzelokuhle@hotmail.com</div>

                
                <div className="sidebar__location">
                  <p><img src={phone} alt="location" className="sidebar__icon mr-3" /></p>  
                (+27) 71 242 2070</div>

            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;