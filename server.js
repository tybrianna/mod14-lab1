const express = require("express");
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const app = express();

app.use(express.json());

app.post('/api/users/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'A user with this email already exists' });
    }

    // Create user with hashed password
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User created', userId: user._id });
});


// POST route
const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    role: { type: String, default: 'user' }
});

const User = model('User', userSchema);

// Create user with hashed password
const hashedPassword = await bcrypt.hash(password, 5);
const user = new User({ username, email, password: hashedPassword });
await user.save();

res.status(201).json({ message: 'User created', userId: user._id });
});

