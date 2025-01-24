import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log('Connecting to database...', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI); // No additional options required
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
