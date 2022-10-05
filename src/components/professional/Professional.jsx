import React from 'react'
import './professional.css'

//icons
import { AiOutlineCheck } from 'react-icons/ai'
import { FaHardHat } from 'react-icons/fa'

//data
import { professional } from '../../data/data'

const Professional = () => {
    return (
        <section id="prof">
            <h2>Berufserfahrung</h2>
            <div className="container professional__container">
                <div className="professional__container-jobs">
                    {
                        professional.map(({ index, company, dates, position, tasks }) => {
                            return (
                                <article key={index} className="job">
                                    <h3>{company}</h3>
                                    <h5>{dates}</h5>
                                    <p><FaHardHat /> {position}</p>
                                    <ul>
                                        {
                                            tasks.map((task) => {
                                                return (
                                                    <li><AiOutlineCheck /> {task}</li>
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

export default Professional