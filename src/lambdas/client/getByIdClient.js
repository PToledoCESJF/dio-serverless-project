"use strict";
const AWS = require("aws-sdk");

const getByIdClient = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    let client;

    try {
        const result = await dynamodb.get({
            TableName: "ClientTable",
            Key: { id }
        }).promise();

        client = result.Item
        

    } catch (error) {
        console.log(error)
    };

    return {
        statusCode: 200,
        body: JSON.stringify(client)
    };
};

module.exports = {
    handler: getByIdClient
};
