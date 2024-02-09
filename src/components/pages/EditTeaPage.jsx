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
    <form className="mt-3" onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Сорт
          <input name="name" type="text" className="form-control" id="nameId" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputLocation" className="form-label">
          Страна
          <input name="location" type="text" className="form-control" id="locationId" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputLatitude" className="form-label">
          Широта
          <input name="latitude" type="text" className="form-control" id="latitudeId" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputLongitude" className="form-label">
          Долгота
          <input name="longitude" type="text" className="form-control" id="longitudeId" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputImage" className="form-label">
          Картинка
          <input name="image" type="text" className="form-control" id="imageId" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputDiscription" className="form-label">
          Описание
          <input name="discription" type="text" className="form-control" id="discriptionId" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Редактировать</button>
    </form>
  );
}
