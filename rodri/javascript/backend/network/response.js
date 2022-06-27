exports.success = (req, res, message, status) => {
    res
    .status(status || 200)
    .send({
        error: "",
        message: message
    });
}

exports.error = (req, res, message, status) => {
    res
    .status(status || 500)
    .send({
        error: message,
        message: ""
    });
}