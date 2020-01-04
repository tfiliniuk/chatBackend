import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/chat', {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false
});