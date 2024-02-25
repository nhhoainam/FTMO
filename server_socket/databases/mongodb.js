const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://hoainam:Tokarin123456@appkiemke.xsemub7.mongodb.net/testing?retryWrites=true&w=majority&appName=appKiemKe', { useNewUrlParser: true})
// .then(() => console.log('Connected to MongoDB...'))
// .catch(err => console.error('Could not connect to MongoDB...', err));

mongoose.connect('mongodb://root:rootpassword@103.74.100.29:27017/ftmo?authSource=admin', { useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));
