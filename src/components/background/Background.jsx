import React from 'react'
import './background.css'

//data
import { background } from '../../data/data'

const Background = () => {
    return (
        <section id="school">
            <h2>Bildungswed</h2>
            <div className="container background__container">
                <div className="background__container-courses">
                    {
                        background.map(({ index, subject, dates, degree, location }) => {
                            return (
                                <article key={index} className="course">
                                    <h3>{subject}</h3>
                                    <p>{degree}</p>
                                    <p>{location}</p>
                                    <h5>{dates}</h5>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Background