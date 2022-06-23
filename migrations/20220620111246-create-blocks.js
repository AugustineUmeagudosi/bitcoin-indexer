module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Blocks', {
      id: { allowNull: false, primaryKey: true, type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, unique: true },
      hash: { type: Sequelize.STRING, unique: true },
      confirmations: { type: Sequelize.REAL },
      size: { type: Sequelize.REAL },
      strippedsize: { type: Sequelize.REAL },
      weight: { type: Sequelize.REAL },
      height: { type: Sequelize.REAL },
      version: { type: Sequelize.REAL },
      versionHex: { type: Sequelize.STRING },
      merkleroot: { type: Sequelize.STRING },
      time: { type: Sequelize.REAL },
      mediantime: { type: Sequelize.REAL },
      nonce: { type: Sequelize.REAL },
      bits: { type: Sequelize.STRING },
      difficulty: { type: Sequelize.REAL },
      chainwork: { type: Sequelize.STRING },
      nTx: { type: Sequelize.REAL },
      previousblockhash: { type: Sequelize.STRING },
      nextblockhash: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Blocks');
  }
};