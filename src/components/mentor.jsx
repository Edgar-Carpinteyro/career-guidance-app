import React from 'react'
import './styles/home.css'
import './styles/mentor.css'

function Mentor() {
  return (
    <>
        <div class="mt-5">

            <div class="user-name-picture mb-5">
                <div class="col-md-8">
                    <div id="mentor-profile-img">
                    </div>
                </div>

                <div class="col-md-4">
                    <p class='mentor-name'>Val Lance</p>
                    <p class='mentor-company'>@Microsoft</p>
                    <p class="mentor-job">Software Engineer</p>
                </div>
                
            </div>

            <div class="app-mentor-container mb-5">
                <div class="text-content-container">
                    <p class="text-content-title">1:1 Mentorship | $25 per session</p>
                    <p class="text-content-message">Hey, I'm Val Lance, and I'm excited to embark on this journey with you into software engineering. With my experience at Microsoft, I've honed my skills in crafting both user-friendly interfaces and robust backend systems.</p>
                    <p class="text-content-message">But what really fuels my passion is guiding aspiring developers like you through this dynamic field. Whether you're a beginner or looking to refine your skills, I'm dedicated to providing the support you need to succeed.</p>
                    <p class="text-content-message">Together, let's dive into real-world projects, from understanding user needs to creating impactful solutions. Whether you're new to software engineering or a seasoned pro, I'm here to help you every step of the way as we craft something extraordinary!</p>
                </div>
            </div>

            <div class="mentor-booking-container mb-5">
                <div class="text-content-container">
                    <p class="mentor-content-title">Workshop available  May 5th</p>
                    <p class="mentor-content-message">Learn fundamentals</p>
                </div>
            </div>

            <div class="d-grid gap-2 mb-5">
                <button class="btn btn-success" type="button">Book a Session</button>
            </div>


        </div>
    </>
  )
}

export default Mentor;