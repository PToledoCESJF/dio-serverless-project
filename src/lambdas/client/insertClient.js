"use strict";
const AWS = require("aws-sdk");
const {v4} = require("uuid");

const insertClient = async(event) => {
    const {name, mail} = JSON.parse(event.body);
    const id = v4();
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const newClient = {
        id,
        name,
        mail
    };

    await dynamodb.put({
        TableName: "ClientTable",
        Item: newClient
    }).promise();

    return {
        statusCode: 201,
        body: JSON.stringify(newClient)
    };
};

module.exports = {
    handler: insertClient
};
