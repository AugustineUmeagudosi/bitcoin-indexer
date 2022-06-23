import { Response, Helpers } from "../../utils";
import { getTransaction } from "./service";

/**
 * Fetches transaction information for a given op_return data
 * @param {Request} req - The request from the endpoint.
 * @param {Response} res - The response returned by the method.
 * @returns { JSON } A JSON response containing the details of the category added
 * @memberof TransactionController
 */
export const getOpReturnData = async (req, res) => {
    let { opReturnData } = req.params;
    opReturnData = Helpers.stringSanitizer(opReturnData);
    if (opReturnData.length !== 64) return Response.error(res, `Invalid opReturnData`, 400);

    const transaction = await getTransaction(opReturnData);
    if (!transaction) return Response.error(res, `No transaction with the ID ${opReturnData} found`, 404);

    return Response.info(res, 'OP_Return data fetched successfully!', 200, transaction.vout);
};
