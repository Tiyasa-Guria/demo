exports.handler = async (event) => {
    event.Records.forEach(record => {
        const messageBody = record.body;
        console.log("Message received from SQS:", messageBody);
    });

    return { statusCode: 200 };
};