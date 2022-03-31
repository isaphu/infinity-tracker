const express = require('express');

const router = express.Router();

const records = [
    {
        _id: 'record-1',
        activityName: 'Running',
        timestamp: new Date(),
        duration: 4000,
        description: ''
    },
    {
        _id: 'record-2',
        activityName: 'Swimming',
        timestamp: new Date(),
        duration: 300,
        description: ''
    },
    {
        _id: 'record-3',
        activityName: 'Hike',
        timestamp: new Date(),
        duration: 18000,
        description: ''
    },

]

router.get('/:recordId', (req,res,next) => {});
router.get('/', (req,res,next) => {});
router.post('/', (req,res,next) => {});
router.put('/:recordId', (req,res,next) => {});
router.delete(':recordId', (req,res,next) => {});

module.exports = router;