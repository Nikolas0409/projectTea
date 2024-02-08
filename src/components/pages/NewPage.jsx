import React, { useState } from 'react';

export default function New({ setShowComponent, setAllTeas }) {
  const [input, setInput] = useState({
    name: '', location: '', latitude: '', longitude: '', image: '', discription: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/add', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(input),
    });
    const data = await response.json();
    setAllTeas((prev) => [data, ...prev]);
    setShowComponent(false);
    setInput({
      name: '', location: '', latitude: '', longitude: '', image: '', discription: '',
    });
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* <h1 className="big">Add a Horse</h1> */}

      <form id="new-tea-form" className="flex flex-row" onSubmit={submitHandler}>
        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="name"
            value={input.name || ''}
          />
          <span className="input-group-label">Сорт:</span>
        </label>

        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="location"
            value={input.location || ''}
          />
          <span className="input-group-label">Страна:</span>
        </label>

        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="latitude"
            value={input.latitude || ''}
          />
          <span className="input-group-label">Широта:</span>
        </label>
        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="longitude"
            value={input.longitude || ''}
          />
          <span className="input-group-label">Долгота:</span>
        </label>

        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="image"
            value={input.image || ''}
          />
          <span className="input-group-label">Картинка:</span>
        </label>

        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="discription"
            value={input.discription || ''}
          />
          <span className="input-group-label">Описание:</span>
        </label>
        <button type="submit" className="button dark">Добавить</button>
      </form>
    </>
  );
}
