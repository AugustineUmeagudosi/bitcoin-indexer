module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: { allowNull: false, primaryKey: true, type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, unique: true },
      blockId: { type: Sequelize.UUID, allowNull: false, foreignKey: true, references: { model: 'Blocks' } },
      in_active_chain: { type: Sequelize.BOOLEAN },
      hex: { type: Sequelize.TEXT },
      txid: { type: Sequelize.STRING, unique: true },
      hash: { type: Sequelize.STRING },
      size: { type: Sequelize.REAL },
      vsize: { type: Sequelize.REAL },
      weight: { type: Sequelize.REAL },
      version: { type: Sequelize.REAL },
      locktime: { type: Sequelize.REAL },
      vin: { type: Sequelize.ARRAY(Sequelize.JSONB) },
      vout: { type: Sequelize.ARRAY(Sequelize.JSONB) },
      fee: { type: Sequelize.FLOAT },
      blockhash: { type: Sequelize.STRING },
      confirmations: { type: Sequelize.REAL },
      blocktime: { type: Sequelize.REAL },
      time: { type: Sequelize.REAL },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};