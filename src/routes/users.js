import express from 'express';
var router = express.Router();

router.get('/', async (req, res) => {
    return res.status(200).json({ somevariable: "somevalue" });
})

export default router;