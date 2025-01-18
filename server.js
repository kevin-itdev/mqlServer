export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'GET') {
        return res.status(200).json({ message: 'Welcome to my Vercel server!' });
    }

    if (req.method === 'POST') {
        // Handle POST request
        const { message, path } = req.body;

        // Process the message
        if (message) {
            console.log('Received message:', message);
            // Replace `getString(message)` with your logic
        }

        if (path) {
            console.log('Received path:', path);
        }

        return res.status(200).send('Message received.');
    }

    // Method not allowed
    return res.status(405).send('Method Not Allowed');
}