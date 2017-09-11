const express = require('express'),
    app = express(),
    path = require('path'),
    fs = require('fs'),
    port = process.env.PORT || 3000;

app.use('/libs', express.static(path.join(__dirname, 'libs')));
app.use('/assets', express.static(path.join(__dirname, 'app')));
app.use('/partials', express.static(path.join(__dirname, 'templates')));


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});