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
            placeholder="Сорт"
            style={{ marginTop: '2px', borderRadius: '5px' }}
          />
          <span className="input-group-label" />
        </label>

        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="location"
            value={input.location || ''}
            placeholder="Страна"
            style={{ marginTop: '2px', borderRadius: '5px' }}
          />
          <span className="input-group-label" />
        </label>

        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="latitude"
            value={input.latitude || ''}
            placeholder="Широта"
            style={{ marginTop: '2px', borderRadius: '5px' }}
          />
          <span className="input-group-label" />
        </label>
        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="longitude"
            value={input.longitude || ''}
            placeholder="Долгота"
            style={{ marginTop: '2px', borderRadius: '5px' }}
          />
          <span className="input-group-label" />
        </label>

        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="image"
            value={input.image || ''}
            placeholder="Картинка"
            style={{ marginTop: '2px', borderRadius: '5px' }}
          />
          <span className="input-group-label" />
        </label>

        <label className="input-group col-1-3">
          <input
            onChange={changeHandler}
            className="input-group-input"
            type="text"
            name="discription"
            value={input.discription || ''}
            placeholder="Описание"
            style={{ marginTop: '2px', borderRadius: '5px' }}

          />
          <span className="input-group-label" />
        </label>
        <button style={{ marginLeft: '50px', marginTop: '20px', marginBottom: '30px' }} type="submit" className="button dark">Добавить</button>
      </form>
    </>
  );
}
