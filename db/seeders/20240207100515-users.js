/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [{
      admin: 1,
      user: 2,
    }], {});

    await queryInterface.bulkInsert('Teas', [{
      name: 'Черный чай',
      location: 'Индия',
      image: 'https://media.istockphoto.com/id/475614605/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D1%87%D0%B0%D0%B9-%D0%B2-%D1%87%D0%B0%D1%88%D0%BA%D1%83.jpg?s=1024x1024&w=is&k=20&c=OfH-k160_OmHZ8sXxJNIcaotk3v2SQobBI6cbiX8WYM=',
      discription: 'вкусный',
    }], {});
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
