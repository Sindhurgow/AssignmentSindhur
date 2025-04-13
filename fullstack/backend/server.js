const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const config = require('./config');
const storeRoutes = require('./routes/stores');
const ratingRoutes = require('./routes/ratings');
const userRoutes = require('./routes/users');



const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/ratings', ratingRoutes);

sequelize.sync().then(() => {
  app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));
});
