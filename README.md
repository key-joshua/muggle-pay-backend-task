# MAGGLEPAY BACKEND TASK

This muggle pay backend APIs service for monitoring Solana USDC transactions using webhooks and querying transaction details.

- A webhook API to capture incoming transactions via Webhooks.

- A query API to fetch transaction details from the Solana.

## MAGGLEPAY TASK FEATURES

- Webhook Listener: Automatically logs USDC transactions to a designated Solana address.

- Transaction Lookup: Allows users to fetch transaction details using a txHash.

- Solana Support: Primarily focused on USDC but can extend to other SPL tokens.

### INSTALLATION AND TESTING

1. Clone the repository: ```git clone https://github.com/key-joshua/muggle-pay-backend-task.git```.
2. Use NVM (Node Version Manager) to switch to the Node Version ```v22.12.0```.
3. Install all the dependencies required by the project:```npm install```.
4. Refer to `.env.example` then add `.env` file with all the variables.
5. Start the server and test:```npm run dev``` or ```npm run dev```.


#### API ENDPOINTS COMPLETED ARE:

Open ```POSTMAN``` or ```THUNDER CLIENT``` and then call the APIs endpoints as I showed in the example below.

##### Webhook API

- POST ```http://localhost:3000/api/transactions/muggle-pay-webhook```
- Description: Handles incoming transactions and logs 0.01 USDC payments.
- Payload Example:
    ```json
    {
        "amount": 0.01,
        "token": "USDC",
        "anyOtherField": "optional data"
    }

##### Query API

- GET ```http://localhost:3000/api/transactions/3nUpk9DHyS...```
- Description: Fetches and logs transaction details from Solana..
- Response Example:
    ```json
    {
        "amount": 0.01,
        "token": "USDC",
        "status": "confirmed",
        "txHash": "example-hash"
    }