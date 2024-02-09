import axios from 'axios';
import React from 'react';

export default function EditTeaPage({ tea }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    try {
      await axios.patch(`/api/edit/${tea.id}`, formData);
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
        <label htmlFor="inputLangitude" className="form-label">
          Долгота
          <input name="langitude" type="text" className="form-control" id="langitudeId" />
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
