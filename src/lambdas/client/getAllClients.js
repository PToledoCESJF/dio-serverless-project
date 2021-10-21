"use strict";
const AWS = require("aws-sdk");

const getAllClients = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    let clients;

    try {
        const result = await dynamodb.scan({
            TableName: "ClientTable",
        }).promise();

        clients = result.Items;

    } catch (error) {
        console.log(err);
    }

    return{
        statusCode: 200,
        body: JSON.stringify(clients)
    };
};

module.exports = {
    handler: getAllClients
}