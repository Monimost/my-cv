import React from 'react'
import './skills.css'

//icons
import { CgGoogleTasks } from 'react-icons/cg'

//data
import { skills } from '../../data/data'

const Skills = () => {
    return (
        <section id="skills">
            <h2>Kenntnisse</h2>
            <div className="container skills__container">
                <div className="skills__container-skills">
                    {
                        skills.map(({ index, field, skills }) => {
                            return (
                                <article key={index} className="skill">
                                    <h3><CgGoogleTasks /> {field}</h3>
                                    <ul>
                                        {
                                            skills.map((skill) => {
                                                return (
                                                    <li>
                                                        {skill}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills