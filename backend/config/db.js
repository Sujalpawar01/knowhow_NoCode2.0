import mongoose from 'mongoose';

const connectDB = async () => {
  const env = process.env.NODE_ENV || 'development';
  const MONGO_URI = process.env[`MONGO_URI_${env.toUpperCase()}`];
  console.log('MONGO_URI:', process.env.MONGO_URI);

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`${env.toUpperCase()} Database connected`);
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;