export default async function handler(req, res) {

    if(req.body.path != undefined)
        { path = req.body.path; console.log(path); }   

    console.log('Request received:', req.method);
    res.status(200).json({ message: 'Hello, world!' });
}