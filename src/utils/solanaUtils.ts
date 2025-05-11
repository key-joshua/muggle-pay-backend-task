import dotenv from 'dotenv';
import { Connection } from '@solana/web3.js';

dotenv.config();
const connection = new Connection(process.env.SOLONA_CLUSTER === 'mainnet-beta' ? 'https://api.mainnet-beta.solana.com' : 'https://api.devnet.solana.com', { commitment: 'confirmed' });

export async function solanaTransaction(txHash: string) {
  try {
    const txDetails = await connection.getTransaction(txHash, { commitment: 'confirmed' });
    if (!txDetails) throw new Error('Transaction not found');
    return txDetails;
  } catch (error) {
    throw new Error(`${error} Transaction not found`);
  }
}
