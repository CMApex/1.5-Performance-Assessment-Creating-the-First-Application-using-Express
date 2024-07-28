// index.server.controller.js
exports.render = function (req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    
    const definitions = [
        { name: 'MongoDB', definition: 'A NoSQL database that uses JSON-like documents with optional schemas.' },
        { name: 'Express', definition: 'A web application framework for Node.js, designed for building web applications and APIs.' },
        { name: 'Angular', definition: 'A platform for building mobile and desktop web applications, using TypeScript/JavaScript and other languages.' },
        { name: 'Node.js', definition: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, designed for building scalable network applications.' }
    ];
    
    res.render('index', {
        title: 'Colby McPherson',
        name: 'Colby McPherson',
        header: 'The MEAN Stack',
        definitions: definitions
    });
};
