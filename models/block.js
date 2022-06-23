const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Block extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Block.hasMany(models.Transaction, { foreignKey: 'blockId', as: 'block' });
    }
  }
  Block.init({
    hash: { type: DataTypes.STRING, unique: true },
    confirmations: { type: DataTypes.REAL },
    size: { type: DataTypes.REAL },
    strippedsize: { type: DataTypes.REAL },
    weight: { type: DataTypes.REAL },
    height: { type: DataTypes.REAL },
    version: { type: DataTypes.REAL },
    versionHex: { type: DataTypes.STRING },
    merkleroot: { type: DataTypes.STRING },
    time: { type: DataTypes.REAL },
    mediantime: { type: DataTypes.REAL },
    nonce: { type: DataTypes.REAL },
    bits: { type: DataTypes.STRING },
    difficulty: { type: DataTypes.REAL },
    chainwork: { type: DataTypes.STRING },
    nTx: { type: DataTypes.REAL },
    previousblockhash: { type: DataTypes.STRING },
    nextblockhash: { type: DataTypes.STRING }
  }, {
    sequelize,
    modelName: 'Block',
  });
  return Block;
};