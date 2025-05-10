import httpStatus from 'http-status';
import responseUtils from '../../../utils/responseUtils';
import { solanaTransaction } from '../../../utils/solanaUtils';

const mugglePayWebhook = async (req, res) => {
  try {
    const body = req.body;
    console.log('✅ Transaction Received:', body);

    responseUtils.handleSuccess(httpStatus.OK, 'success.', body);
    return responseUtils.response(res);
  } catch (error) {    
    responseUtils.handleError(error.status || httpStatus.INTERNAL_SERVER_ERROR, `${error}`);
    return responseUtils.response(res);
  }
};

const getTransaction = async (req, res) => {
  try {
    const txHash = req.params.txhash;
    const txDetails = await solanaTransaction(txHash);

    if (!txDetails) {
      responseUtils.handleError(httpStatus.NOT_FOUND, `Transaction not found: ${txDetails}`);
      return responseUtils.response(res);
    }

    console.log(`✅ Transaction Found: ${JSON.stringify(txDetails)}`);
    responseUtils.handleSuccess(httpStatus.OK, 'success.', txDetails);
    return responseUtils.response(res);
  } catch (error) {    
    responseUtils.handleError(error.status || httpStatus.INTERNAL_SERVER_ERROR, `${error}`);
    return responseUtils.response(res);
  }
};

export default { mugglePayWebhook, getTransaction };
