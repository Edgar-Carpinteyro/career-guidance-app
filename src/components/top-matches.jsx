import React from 'react'

function TopMatches() {
  return (
    <>
        <div class="mt-5">
            <h3>Top Matches</h3>
            <div class="row">
                <div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="card">
                        <img src="public/profile-images/girl.png" alt="" />
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <img src="public/profile-images/man.png" alt="" />
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <img src="public/profile-images/woman.png" alt="" />
                    </div>
                </div>
            </div>

            <h3>All Matches</h3>
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

export default TopMatches