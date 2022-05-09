exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello World!</h1>');
};

exports.haiThere = (req, res, next) => {
    res.send('<h1>Hallo apa kabar?</h1>');
};

exports.endPage = (req, res, next) => {
    res.send('<h1>Good Byeeee</h1>');
};