"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Hardcoded user credentials
const hardcodedUser = {
    name: 'Brian Kimathi',
    password: '@254',
};
// Route to handle login
app.post('/login', (req, res) => {
    const { name, password } = req.body;
    if (name === hardcodedUser.name && password === hardcodedUser.password) {
        res.json({ success: true });
    }
    else {
        res.json({ success: false });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
