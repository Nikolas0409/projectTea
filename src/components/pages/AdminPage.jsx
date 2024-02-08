import React from 'react';

export default function AdminPage({ teas }) {
  return (
    <div className="container mt-3">

      <div className="track1c mb-3">

        {teas?.map((el) => (
          <div key={el.id} className="row justify-content-center">
            <div className="col-8 card mb-3">
              <div className="d-flex flex-row justify-content-between">

                {el?.image && <img src={el?.img} className="card-img-top" alt={el?.name} />}
                <div className="card-body mt-3">
                  <p className="card-text m-0">
                    {' '}
                    Name:
                    {el?.name}
                  </p>
                  <p className="card-text  m-0">
                    {' '}
                    Location:
                    {el?.location}
                  </p>

                </div>
                <div className="d-grid gap-2 d-md-block">
                  <button onClick={() => setCurElement(el)} type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    edit
                  </button>
                  <button onClick={() => deleteHandler(el?.id)} className="btn btn-danger" type="button">delete</button>
                </div>
              </div>
            </div>
          </div>1
        ))}
      </div>
    </div>
  );
}
