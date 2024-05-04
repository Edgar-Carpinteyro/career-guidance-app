import React from 'react'

function UploadPage() {
  return (
    <>
        <div class="mt-5">
            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Upload your file</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple/>
            </div>
            
            <h3>Past Uploads</h3>
            
            <div class="card">
                <div class="card-body">
                    Upload 1
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    Upload 2
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    Upload 3
                </div>
            </div>        

        </div>
    </>
  )
}

export default UploadPage