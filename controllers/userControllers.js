const test = (req, res) => {
    res.send('Hello world');
    res.end();
};
const test2 = (req, res) => {
    res.send('Hello my name is lanre');
    res.end();
};

module.exports = {
    test,
    test2
};