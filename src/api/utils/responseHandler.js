// Response handler utility

/**
 * Creates a success response object
 * @param {any} data - The data to be sent in the response
 * @param {number} [statusCode=200] - The HTTP status code
 * @returns {Object} The formatted response object
 */
const successResponse = (data, statusCode = 200) => {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(data)
    };
};

/**
 * Creates an error response object
 * @param {Error} error - The error object
 * @param {number} [statusCode=500] - The HTTP status code
 * @returns {Object} The formatted error response object
 */
const errorResponse = (error, statusCode = 500) => {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            error: error.message
        })
    };
};

module.exports = {
    successResponse,
    errorResponse
}; 