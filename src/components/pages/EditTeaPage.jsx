import axios from 'axios';
import React from 'react';

export default function EditTeaPage({ tea }) {
  console.log(tea);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/${tea.id}`, Object.fromEntries(new FormData(e.target)));
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form className="mt-3" onSubmit={submitHandler} style={{ marginLeft: '650px' }}>
      <div className="mb-3" style={{ marginTop: '100px' }}>
        <label htmlFor="inputName" className="form-label">

          <input name="name" type="text" className="form-control" id="nameId" placeholder="Сорт" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputLocation" className="form-label">

          <input name="location" type="text" className="form-control" id="locationId" placeholder="Страна" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputLatitude" className="form-label">

          <input name="latitude" type="text" className="form-control" id="latitudeId" placeholder="Широта" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputLongitude" className="form-label">

          <input name="longitude" type="text" className="form-control" id="longitudeId" placeholder="Долгота" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputImage" className="form-label">

          <input name="image" type="text" className="form-control" id="imageId" placeholder="Картинка" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputDiscription" className="form-label">

          <input name="discription" type="text" className="form-control" id="discriptionId" placeholder="Описание" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary" style={{ marginLeft: '37px' }}>Редактировать</button>
    </form>
  );
}
