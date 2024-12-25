const express = require('express');
const app = express();
// Simulate a database operation (replace with your actual database code)
const getUserData = async (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === '1') {
        resolve({ id: '1', name: 'John Doe' });
      } else {
        reject(new Error('User not found'));
      }
    }, 500);
  });
};
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const userData = await getUserData(userId);
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Error fetching user data');
  }
});
module.exports = app;