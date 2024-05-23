const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/pincode/:pincode', async (req, res) => {
    const { pincode } = req.params;

    try {
        const response = await axios.get(`http://www.postalpincode.in/api/pincode/${pincode}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching pincode details' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
