import React, { useEffect } from 'react';

export default function MainPage({ data }) {
  console.log(data);
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
        for (let i = 0; i < data.length; i += 1) {
          // eslint-disable-next-line max-len
          const placemark = new ymaps.Placemark([Number(data[i].latitude), Number(data[i].longitude)], {
            balloonContentHeader: `${data[i].name}`,
            balloonContent: `<a href='/teaPage/${data[i].id}'>Click</a>`,
            balloonContentFooter: `${data[i].location}`,
          }, {

            iconLayout: 'default#image',
            iconImageHref: 'https://img.icons8.com/?size=50&id=8366&format=png',
            iconImageSize: [40, 40],
            iconImageOffset: [-19, -44],
          });

          map.controls.remove('searchControl');
          map.geoObjects.add(placemark);
        }
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
