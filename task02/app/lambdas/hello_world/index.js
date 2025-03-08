exports.handler = async (event) => {
    const path = event?.rawPath || "Unknown";
    const method = event?.requestContext?.http?.method || "Unknown";

    // Allow only GET /hello
    if (method === "GET" && path === "/hello") {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            message: "Hello from Lambda" // Directly include the message here
        };
    }

    // Return 400 Bad Request for all other cases
    return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
    };
};