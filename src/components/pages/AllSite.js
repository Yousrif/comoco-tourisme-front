import React from 'react';
import '../css/AllSite.css';

function AllSite() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-8">
              <div className="search-areas">
                <input
                  className="form-controller search"
                  type="text"
                  name="search"
                  placeholder="Entrer your text here"
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSite;
