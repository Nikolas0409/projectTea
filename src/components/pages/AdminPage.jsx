import React, { useState } from 'react';
import NewPage from './NewPage';

export default function AdminPage({ teas }) {
  const [allTeas, setAllTeas] = useState(teas);
  const [showComponent, setShowComponent] = useState(false);
  const [err, setErr] = useState(false);

  const deleteHandler = async (id) => {
    try {
      await fetch(`/api/admin/${id}`, { method: 'DELETE' });
      setAllTeas((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  //   const clickHandler = async (e) => {
  //     e.preventDefault();

  // const data = Object.fromEntries(new FormData(e.target));

  // const res = await fetch('/edit', {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8',
  //   },
  //   body: JSON.stringify(data),
  // });
  // if (res.ok) {
  //   window.location = '/edit';
  // } else {
  //   setErr(true);
  // }

  return (
    <div className="container mt-3">

      <div className="track1c mb-3">
        <button type="submit" style={{ width: '100px', height: '200px' }} className="button dark" onClick={() => setShowComponent(true)}>Добавить чай</button>
        <div>
          {showComponent && <NewPage setShowComponent={setShowComponent} setAllTeas={setAllTeas} />}
        </div>
        {allTeas?.map((el) => (
          <div key={el.id} className="row justify-content-center">
            <div className="col-8 card mb-3">
              <div className="d-flex flex-row justify-content-between">

                {el?.image && <img style={{ width: '200px', height: '200px' }} src={el?.image} className="card-img-top" alt={el?.name} />}
                <div className="card-body mt-3">
                  <p className="card-text m-0">
                    {' '}
                    Название:
                    {el?.name}
                  </p>
                  <p className="card-text  m-0">
                    {' '}
                    Страна:
                    {el?.location}
                  </p>

                </div>
                <div className="d-grid gap-2 d-md-block">
                  <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <a href={`/edit/${el.id}`}>Редактировать</a>
                  </button>
                  <button onClick={() => deleteHandler(el?.id)} className="btn btn-danger" type="button">Удалить</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
