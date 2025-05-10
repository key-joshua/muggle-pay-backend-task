import dotenv from 'dotenv';
import { Connection } from '@solana/web3.js';

dotenv.config();
const connection = new Connection(process.env.SOLANA_RPC_URL, 'confirmed');

export async function solanaTransaction(txHash: string) {
  console.log('Fetching txHash:', txHash);
  console.log('Using RPC URL:', process.env.SOLANA_RPC_URL);
  try {
    const txDetails = await connection.getTransaction(txHash, { commitment: 'confirmed' });
    if (!txDetails) throw new Error('Transaction not found');
    return txDetails;
  } catch (error) {
    throw new Error(`${error} Transaction not found`);
  }
}
