import React from 'react'

function ProfilePage() {
  return (
    <>
        <div class="mt-5">
            <h1>Profile</h1>

            <h3>General</h3>
            <div class="row">
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <p>Age: 27</p>
                    <p>Location: Downey, CA</p>
                    <p>Current Industry: Customer Service</p>                    
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <span class="badge rounded-pill text-bg-success">Success</span>
                    <span class="badge rounded-pill text-bg-success">Success</span>
                    <span class="badge rounded-pill text-bg-success">Success</span>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <span class="badge rounded-pill text-bg-primary">Success</span>
                    <span class="badge rounded-pill text-bg-primary">Success</span>
                    <span class="badge rounded-pill text-bg-info">Success</span>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <span class="badge rounded-pill text-bg-info">Success</span>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col">
                    <div class="card">
                        <img src="/profile-images/linkedin.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href=""><h5 class="card-title">LinkedIn</h5></a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="/profile-images/current-resume.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                           <a href=""><h5 class="card-title">Current Resume</h5></a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="/profile-images/past-resume.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href=""><h5 class="card-title">Past Resume</h5></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfilePage