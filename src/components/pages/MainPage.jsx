import React, { useEffect } from 'react';

export default function MainPage({ data }) {
  console.log(data);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=9f394631-b2c2-4ca8-b83e-243b66560c6b&lang=ru_RU';
    script.async = true;
    script.onload = () => {
      ymaps.ready(() => {
        const map = new ymaps.Map('map', {
          center: [53.331704, 75.458295],
          zoom: 2,

        });
        for (let i = 0; i < data.length; i += 1) {
          // eslint-disable-next-line max-len
          const placemark = new ymaps.Placemark([Number(data[i].latitude), Number(data[i].longitude)], {
            balloonContentHeader: `${data[i].name}`,
            balloonContent: `<a href='/teaPage/${data[i].id}'>Подробнее</a>`,
            balloonContentFooter: `${data[i].location}`,
          }, {

            iconLayout: 'default#image',
            iconImageHref: 'https://img.icons8.com/?size=50&id=15936&format=png',
            iconImageSize: [40, 40],
            iconImageOffset: [-19, -44],
          });

          map.geoObjects.add(placemark);
        }
        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('rulerControl'); // удаляем контрол правил
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '100px',
    }}
    >
      <div id="map" className="map">
        {/* The map will be rendered here */}
      </div>
    </div>
  );
}
