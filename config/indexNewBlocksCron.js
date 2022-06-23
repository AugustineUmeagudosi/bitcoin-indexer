import { CronJob } from 'cron';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { blockDetails, transactionDetails } from '../src/utils/constants';
import { fetchBestBlock, getblock, getrawtransaction } from '../src/utils/bitcoinService';
import { getLastBlock, createTransaction, createBlock } from '../src/modules/opreturn/service';

const indexNewBlocks = new CronJob(
  '* * * * *', // runs every 1 minute
  (async () => {
    const lastMinnedblock = await getLastBlock();
    const { result: { bestblockhash } } = await fetchBestBlock();

    if (!lastMinnedblock[0] || lastMinnedblock[0].hash !== bestblockhash) {
      logger.info(`### New block found ${bestblockhash} ###`);
      const blockinfo = await getblock(bestblockhash);
      saveBlock(blockinfo, bestblockhash);
    }
  }),
  null,
  true,
  'America/Los_Angeles'
);

async function saveBlock(block, blockhash){
  const blockId = uuidv4();

  const blockData = _.pick(block.result, blockDetails);
  blockData.id = blockId;
  createBlock(blockData)
    .then(() => saveBlockTransactions(block.result.tx, blockId, blockhash));
}

async function saveBlockTransactions(transactions, blockId, blockhash){
  for(const txid of transactions){ 
    const transaction = await getrawtransaction(txid, blockhash);
    const transactionData = _.pick(transaction.result, transactionDetails);
    transactionData.blockId = blockId;
    transactionData.id = uuidv4();
    await createTransaction(transactionData);
  }
}
