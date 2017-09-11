const express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 3000;

app.use('/libraries', express.static(path.join(__dirname, 'libs')));
app.use('/assets', express.static(path.join(__dirname, 'app')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`App is listenming on ${port}`);
});