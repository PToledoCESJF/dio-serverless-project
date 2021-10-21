"use strict";
const AWS = require("aws-sdk");

const updateClient = async (event) => {

    const { mail, nameClient } = JSON.parse(event.body);
    const { id } = event.pathParameters;
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    await dynamodb.update({
        TableName: "ClientTable",
        Key: { id },
        UpdateExpression: 
            'set nameClient = :nameClient, mail = :mail', 
        ExpressionAttributeValues: {
            ':nameClient': nameClient,
            ':mail': mail
        },
        ReturnValues: "ALL_NEW"
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(
            { msg: 'Client updated' }
        )
    };
};

module.exports = {
    handler: updateClient
};
