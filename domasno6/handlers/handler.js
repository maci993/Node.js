function welcome(req, res) {
    res.end("Welcome to our page!");
}

function test(req, res) {
    res.end("Welcome to our test page");
}

function handleUser(req, res, emailaddress) {
    const emailaddressPattern = /^[a-zA-Z\d_.+-]+@[a-zA-Z\d-]+.[a-zA-Z\d-.]+$/;
    if (emailaddressPattern.test(emailaddress)) {
        res.end(`Email: ${emailaddress} is verified`);
    } else {
        res.end("Invalid email format");
    }
}

function handleNotFound(req, res) {
    res.end("404 Not Found")
}

module.exports = {
    welcome,
    test,
    handleUser,
    handleNotFound,
};