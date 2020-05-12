const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('build'));

    app.get('/', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

app.listen(PORT, function(){
    console.log(`app running on port ${PORT}`);
});