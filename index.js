const express = require('express');
const path = require('path');

const app = express();


members = [
    {
        id: 1,
        name: 'John',
        email:  'John@gmail.com',
        status: 'acitve'
    }
];

//Gets all members
app.get('/api/members', (req, res) => 
    res.json(members)
);

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT =  process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port number ${PORT}`));

