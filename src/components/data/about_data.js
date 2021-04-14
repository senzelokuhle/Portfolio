import React from 'react';

import api from '../../assets/icons/api.svg'
import backend from '../../assets/icons/backend.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'
import laptop from '../../assets/icons/laptop.svg'
import database from '../../assets/icons/database.svg'
import code from '../../assets/icons/code.svg'
import wrench from '../../assets/icons/wrench.svg'
import sync from '../../assets/icons/sync.svg'







const skills = [
    {
        icon: laptop,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable Apps using ASP.NET MVC, XML, JSON, Web Components, HTML, CSS, Redux and React.js"
    },
    {
        icon: database,
        title: "Backend  Development",
        about: "MS SQL Server, MySQL, Node.js, Express.js, Entity Framework",
    },
    {
        icon: wrench,
        title: "API Development",
        about: ["I can develop robust REST API using Express.js"]
    },
    {
        icon: code,
        title: "Object-Oriented Programming",
        about: "C#, JavaScript, Java"
    },
    {
        icon: laptop,
        title: "Android Developement",
        about: "Kotlin, Android SDK, Firebase, Android studio"
    },
    {
        icon: sync,
        title: "SDLC",
        about: "Scrum, Agile, Waterfall"
    },
]

export default skills;