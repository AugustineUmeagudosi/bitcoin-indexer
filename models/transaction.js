const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Block, { foreignKey: 'blockId', as: 'transactions' });
    }
  }
  Transaction.init({
    in_active_chain: { type: DataTypes.BOOLEAN },
    hex: { type: DataTypes.TEXT },
    txid: { type: DataTypes.STRING, unique: true },
    hash: { type: DataTypes.STRING },
    size: { type: DataTypes.REAL },
    vsize: { type: DataTypes.REAL },
    weight: { type: DataTypes.REAL },
    version: { type: DataTypes.REAL },
    locktime: { type: DataTypes.REAL },
    vin: { type: DataTypes.ARRAY(DataTypes.JSONB) },
    vout: { type: DataTypes.ARRAY(DataTypes.JSONB) },
    fee: { type: DataTypes.FLOAT },
    blockhash: { type: DataTypes.STRING },
    confirmations: { type: DataTypes.REAL },
    blocktime: { type: DataTypes.REAL },
    time: { type: DataTypes.REAL }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};