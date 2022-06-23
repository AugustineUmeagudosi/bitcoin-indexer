import fetch from 'node-fetch';
import 'dotenv/config';

export const fetchBestBlock = async() => {
    const body = `{"jsonrpc": "1.0", "id": "fetchCurrentBlock", "method": "getblockchaininfo", "params": []}`;
    const response = await fetch(process.env.RPC_HOST, {
        method: 'post',
        body,
        headers: {'Content-Type': 'application/json'}
    });
    return response.json();
};

export const getblock = async(blockhash) => {
    const body = `{"jsonrpc": "1.0", "id": "curltest", "method": "getblock", "params": ["${blockhash}",1]}`;
    const response = await fetch(process.env.RPC_HOST, {
        method: 'post',
        body,
        headers: {'Content-Type': 'application/json'}
    });
    return response.json();
};

export const getrawtransaction = async(txid, blockhash) => {
    const body = `{"jsonrpc": "1.0", "id": "curltest", "method": "getrawtransaction", "params": ["${txid}",true, "${blockhash}"]}`;
    const response = await fetch(process.env.RPC_HOST, {
        method: 'post',
        body,
        headers: {'Content-Type': 'application/json'}
    });
    return response.json();
};
