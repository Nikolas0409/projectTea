import React, { useEffect } from 'react';

export default function MainPage({ hello }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=147df303-e99f-4bbb-b6c2-dc588fce9f73&lang=ru_RU';
    script.async = true;
    script.onload = () => {
      ymaps.ready(() => {
        const map = new ymaps.Map('map', {
          center: [55.70711175262821, 37.59748726002942],
          zoom: 1,

        });

        const placemark = new ymaps.Placemark([55.70711175262821, 37.59748726002942], {
          balloonContentHeader: 'Хедер балуна',
          balloonContent: '<a href="https://www.flaticon.com/ru/free-icon/tea-leaf_4038148?term=%D1%87%D0%B0%D0%B9&related_id=4038148">Click</a>',
          balloonContentFooter: 'Хедер балуна',
        }, {

          iconLayout: 'default#image',
          iconImageHref: 'https://img.icons8.com/?size=50&id=8366&format=png',
          iconImageSize: [40, 40],
          iconImageOffset: [-19, -44],
        });

        map.controls.remove('searchControl');
        map.geoObjects.add(placemark);
        // map.controls.remove('trafficControl');
        // map.controls.remove('typeSelector');

        // const control = map.controls.get('routePanelControl');
        // Assuming the first track from the array is used
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div id="map" className="map">
        {/* The map will be rendered here */}
      </div>
    </div>
  );
}
