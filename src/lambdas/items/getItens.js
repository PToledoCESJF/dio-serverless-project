"use strict";

const AWS = require("aws-sdk");

const getItens = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    let itens;

    try {
        const result = await dynamodb.scan({
            TableName: "ItemTableNew"
        }).promise();
        itens = result.Items;
    } catch (error) {
        console.log(error);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(itens)
    };
};

module.exports = {
    handler: getItens
};
