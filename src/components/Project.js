import React from 'react'
import Budget from "../img/budget.png"
import Note from "../img/note.png"
import Team from "../img/team.png"
import Backend from "../img/backend.png"

const Project = () => {
    return (
        <div class="row row-cols-1 row-cols-md-2" id="Project">
            <div class="col mb-4">
                <div class="card">
                    <img src={Budget} class="card-img-top" alt="..." />
                    <div class="card-bod">
                        <h5 class="project-title">Progressive-Budget</h5>
                        <p class="card-text">Using progressive budget app, users will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.</p>
                        <a href="https://ancient-journey-11256.herokuapp.com/" className="deployed">Deployed Site</a>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card">
                    <img src={Note} class="card-img-top" alt="..." />
                    <div class="card-bod">
                        <h5 class="project-title">Note Taker</h5>
                        <p class="card-text">An application that can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a file.</p>
                        <a href="https://entrys.herokuapp.com/" className="deployed">Deployed Site</a>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card">
                    <img src={Team} class="card-img-top" alt="..." />
                    <div class="card-bod">
                        <h5 class="project-title">Team profile</h5>
                        <p class="card-text">Team Generator will help create an HTML displaying a team of workers. Teams include a manager, engineers, and interns. Users will be prompted with a series of questions about their team and will be presented with a webpage displaying the team with their info.</p>
                        <a href="https://github.com/snk-99/Team-profile" className="deployed">Github</a>
                    </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card">
                    <img src={Backend} class="card-img-top" alt="..." />
                    <div class="card-bod">
                        <h5 class="project-title">E-Commerce-Back-End</h5>
                        <p class="card-text">This project is the creation of the back end for an e-commerce site. This application used Express.js API and Sequelize to interact with a MySQL database.</p>
                        <a href="https://github.com/snk-99/E-Commerce-Back-End" className="deployed">Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
