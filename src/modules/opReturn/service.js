import { Sequelize, Transaction, Block } from "../../../models";
import { blockDetails } from "../../utils/constants";

export const getLastBlock = () => {
    return  Block.findAll({ limit: 1, order: [["createdAt", "DESC"]], attributes: blockDetails })
        .catch( error => logger.error(error.message) );
};

export const createBlock = (block) => {
    return Block.create(block).catch(error => logger.error(error.message));
};

export const createTransaction = (transaction) => {
    return  Transaction.create(transaction).catch(error => logger.error(error.message));
};

export const getTransaction = (txid) => {
    return  Transaction.findOne({ where: { txid }, attributes: ['vout'] })
        .catch(error => logger.error(error.message));
};
