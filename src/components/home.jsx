import React from 'react'
import './styles/home.css'

function Home() {
  return (
    <>
        <div class="mt-5">

            <div class="user-name-picture mb-5">
                <div class="col-md-6">
                    <p id='hello'>Hello</p>
                    <p id='user-name'>Alexander Zimmer</p>
                </div>

                <div class="col-md-6">
                    <div id="user-profile-img">
                    </div>
                </div>
            </div>

            <div class="app-mission-container mb-5">
                <div class="text-content-container">
                    <p class="text-content-title">Connect with tech experts</p>
                    <p class="text-content-message">Eager to embark on a journey into the dynamic world of technology but find yourself unsure of where to begin? Look no further than Forge, your personal guide to navigating the vast landscape of tech careers.</p>
                </div>
            </div>

            <div class="search-bar">
                <input type="text" class="form-control search-bar-text" placeholder="Search Mentor" aria-label="Username" aria-describedby="basic-addon1"/>
                <button type="button" class="btn btn-outline-primary" id='search-button'><img src="./profile-images/search.svg" alt="" /></button>
            </div>

            <div class="container mb-5">
                <div class="carousel slide" data-bs-ride="carousel" id="carouselExampleSlidesOnly">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card">
                                        <div class="box front">
                                            <img alt="" src="/mentor-images/val.jpeg"/>
                                            <h2>Val Lance</h2>
                                            <h4>Microsoft</h4>
                                            <p>Software Engineer</p>
                                        </div>
                                        <div class="box back">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta quidem dolorem debitis. Minima, optio illum magni exercitationem eum laborum! Incidunt sequi repellat vero.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card">
                                        <div class="box front">
                                            <img alt="" src="/mentor-images/bob.jpeg"/>
                                            <h2>Bob Devado</h2>
                                            <h4>Google</h4>
                                            <p>UX Designer</p>
                                            
                                        </div>
                                        <div class="box back">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta quidem dolorem debitis. Minima, optio illum magni exercitationem eum laborum! Incidunt sequi repellat vero.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card">
                                        <div class="box front">
                                            <img alt="" src="/mentor-images/nea.jpeg"/>
                                            <h2>Nea Ivanov</h2>
                                            <h4>Facebook</h4>
                                            <p>Product Manager</p>
                                        </div>
                                        <div class="box back">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta quidem dolorem debitis. Minima, optio illum magni exercitationem eum laborum! Incidunt sequi repellat vero.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card">
                                        <div class="box front">
                                            <img alt="" src="/mentor-images/keith.jpeg"/>
                                            <h2>Keith Durand</h2>
                                            <h4>Apple</h4>
                                            <p>Full-stack Engineer</p>
                                        </div>
                                        <div class="box back">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta quidem dolorem debitis. Minima, optio illum magni exercitationem eum laborum! Incidunt sequi repellat vero.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card">
                                        <div class="box front">
                                            <img alt="" src="/mentor-images/maya.jpg"/>
                                            <h2>Maya Lee</h2>
                                            <h4>Netflix</h4>
                                            <p>Data Engineer</p>
                                            
                                        </div>
                                        <div class="box back">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta quidem dolorem debitis. Minima, optio illum magni exercitationem eum laborum! Incidunt sequi repellat vero.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="box front">
                                            <img alt="" src="/mentor-images/steve.jpg"/>
                                            <h2>Steve Park</h2>
                                            <h4>Amazon</h4>
                                            <p>Backend Engineer</p>
                                            
                                        </div>
                                        <div class="box back">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta quidem dolorem debitis. Minima, optio illum magni exercitationem eum laborum! Incidunt sequi repellat vero.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>			
                </div>
	        </div>

        </div>
    </>
  )
}

export default Home