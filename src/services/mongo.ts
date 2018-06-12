import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';

// Connect to MongoDB
(<any>mongoose).Promise = bluebird;

const connectopt: mongoose.ConnectionOptions = {
    auth: {
        user: 'some username',
        password: 'some password string'
    }
}
const mongoURL = 'some mongo conenction URL';

mongoose.connect(mongoURL, connectopt)
.then(() => { 
    console.log('MongoDB ready');
})
.catch((err: any) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
});


export = mongoose;