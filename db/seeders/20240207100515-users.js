/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Johny',
      email: 'salam@123.ru',
      password: '1234',
      isAdmin: true,
    }], {});

    await queryInterface.bulkInsert('Teas', [
      {
        name: 'Черный чай',
        location: 'Индия',
        latitude: '12.306001',
        longitude: '76.648868',
        image: 'https://media.istockphoto.com/id/475614605/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D1%87%D0%B0%D0%B9-%D0%B2-%D1%87%D0%B0%D1%88%D0%BA%D1%83.jpg?s=1024x1024&w=is&k=20&c=OfH-k160_OmHZ8sXxJNIcaotk3v2SQobBI6cbiX8WYM=',
        discription: 'Вкусный. Реально очень вкусный. Честно очень вкусный.',
      },
      {
        name: 'Шен Пуэр',
        location: 'Китай',
        latitude: '29.588476',
        longitude: '120.819435',
        image: 'https://static.insales-cdn.com/images/products/1/5529/397710745/medals1.jpg',
        discription: 'Выдержка 7 лет. Пу Эр - легендарный черный чай, который производится только в Китае и обладает необычным "земляным" вкусом и запахом. Сильный насыщенный аромат, ярко-рыжий цвет настоя. Плотный вкус с умеренной горчинкой и древесной сладостью, объемное послевкусие.',
      },
      {
        name: 'Да Хун Пао',
        location: 'Китай',
        latitude: '22.375355',
        longitude: '112.671006',
        image: 'https://kitayskiy-chay.ru/upload/resize_cache/iblock/beb/qo8akpiu1hh411416j8z58kcjn2l3v4u/680_680_2/chay_da_khun_pao_bolshoy_krasnyy_khalat_v_portsionnykh_paketikakh.jpg',
        discription: 'Да Хун Пао или Большой красный халат - настоящая легенда в чайном мире. Вкус у него сладкий с отчетливой фруктовой ноткой и ароматом свежей выпечки. Да Хун Пао прекрасно бодрит тело и ум, помогает сосредоточиться, гармонизирует эмоциональное состояние, снимает нервное напряжение.',
      },
      {
        name: 'Пэн Фэн Улун',
        location: 'Тайвань',
        latitude: '23.750724',
        longitude: '120.971053',
        image: 'https://ir.ozone.ru/s3/multimedia-3/c1000/6295136931.jpg',
        discription: 'Редкий тайваньский улун. Пьянящие ноты меда и спелых фруктов присутствуют как в душистом аромате, так и в сложном вкусе. Его приятный аромат и неповторимый вкус манят чувства к идеальному чаепитию. можно использовать как вяжущее очищающее средство для кожи, чтобы помочь при проблемах, связанных с акне.',
      },
      {
        name: 'Каркаде листовой',
        location: 'Египет',
        latitude: '30.050755',
        longitude: '31.246909',
        image: 'https://101tea.ru/upload/resize_cache/iblock/482/529_529_118ade429667f31b699080c7cadfe31a8/482aecdec3a7f95884d33f5283d120af.jpg',
        discription: 'Этот удивительный напиток получается из сушеных цветков гибискуса, выращенных в экологически чистых регионах. Он обладает ярким красным цветом и свежим фруктовым ароматом. Каждая чашка предлагает неповторимую комбинацию сладости и кислинки. Помимо своего потрясающего вкуса, чай каркаде также известен своими полезными свойствами.',
      },
      {
        name: 'Иван Чай',
        location: 'Россия',
        latitude: '57.000353',
        longitude: '40.973930',
        image: 'https://img.vkusvill.ru/pim/images/site_LargeWebP/89bd3b18-108d-4330-a080-4870d0a8dd7c.webp?1663018830.5538',
        discription: 'Напиток на основе иван-чая имеет сложный цветочный аромат и чуть сладковатый, терпкий вкус с фруктовыми нотками. Благодаря богатому химическому составу такой напиток благотворно влияет на весь организм, оказывает легкое седативное действие, помогает бороться с авитаминозом, укрепляет иммунную систему, повышает общий тонус организма.',
      },
      {
        name: 'Масала',
        location: 'Индия',
<<<<<<< HEAD
        // latitude: DataTypes.STRING,
        // longitude: DataTypes.STRING,
=======
        latitude: '20.455856',
      },
      {
        location: 'Япония',
<<<<<<< HEAD
        // latitude: DataTypes.STRING,
        // longitude: DataTypes.STRING,
=======
        latitude: '32.581991',
        longitude: '131.665047',
>>>>>>> main
        image: 'https://palaisdesthes.ru/upload/resize_cache/iblock/93e/586_586_1/2jdumwjqsztqpivn74lc93z7k2n89fyd.jpg',
        discription: 'Японский зеленый листовой чай Сенча — это самый популярный вид чая в Японии. Главное отличие сенчи от других видов зеленого чая заключается в способе его обработки. Верхние листики весеннего сбора пропариваются, а не прожариваются, в отличие, к примеру, от большинства китайских сортов.',
      },
      {
        name: 'Калмыцкий чай',
        location: 'Россия',
        latitude: '46.480483',
        longitude: '45.051042',
        image: 'https://tea-lavka.ru/wp-content/uploads/2017/09/kch-3-800.jpg',
        discription: 'Основа для приготовления калмыцкого чая — черный или зеленый спрессованный в виде кирпичика чай. Второй по важности ингредиент – это жирное молоко (коровье, верблюжье, кобылье или овечье). Обязательно добавляется соль. Калмыцкий чай очень питателен, он поддерживает силы и препятствует переутомлению.',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
