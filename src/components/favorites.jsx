import React from 'react'

function Favorites() {
  return (
    <>
        <div class="mt-5">
            <h3>Favorites</h3>
            <div class="row">
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src="/profile-images/girl.png" alt="" />
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <img src="/profile-images/man.png" alt="" />
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <img src="/profile-images/woman.png" alt="" />
                    </div>
                </div>
            </div>

            <h3>All Matches</h3>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0" id='matches-buttons'>
                    <button type="button" class="btn btn-light">Top Matches</button>
                    <button type="button" class="btn btn-light">Contacted</button>
                    <button type="button" class="btn btn-dark">Not Contacted</button>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    Match 1
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    Match 2
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    Match 3
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    Match 4
                </div>
            </div>



        </div>
    </>
  )
}

export default Favorites