const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/adminAuth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/AdminProfile');
const User = require('../../models/AdminUser');
const Post = require('../../models/Post');


// @route    POST api/adminProfile
// @desc     Create or update user profile
// @access   Private
router.post(
    '/',
    [
        auth,
        [
            // check('status', 'Status is required')
            //   .not()
            //   .isEmpty(),
            // check('skills', 'Skills is required')
            //   .not()
            //   .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            name,
            Location,
            yearsOfService,
            hospital,
            education,
            specialty,
            goals
        } = req.body;

        // Build profile object
        const profileFields = {};
        profileFields.user = req.user.id;
        if (name) profileFields.name = name;
        if (Location) profileFields.Location = Location;
        if (yearsOfService) profileFields.yearsOfService = yearsOfService;
        if (hospital) profileFields.hospital = hospital;
        if (education) profileFields.education = education;
        if (specialty) profileFields.specialty = specialty;
        if (goals) profileFields.goals = goals;

        try {
            // Using upsert option (creates new doc if no match is found):
            let profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true, upsert: true }
            );
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);