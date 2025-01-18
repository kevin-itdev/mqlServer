export default async function handler(req, res) {


    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'GET') {
        return res.status(200).json({ message: 'Welcome to my Vercel server!' });
    }

    if (req.method === 'POST') {
        const { message, path } = req.body;
        if (message) console.log('Received message:', message);
        if (path) console.log('Received path:', path);

        return res.status(200).send('Message received.');
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
