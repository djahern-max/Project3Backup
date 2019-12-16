const mongoose = require('mongoose');

const adminProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AdminUser'
    },
    name: {
        type: String
    },
    Location: {
        type: String
    },
    yearsOfService: {
        type: String
    },
    hospital: {
        type: String
    },
    education: {
        type: String
    },
    status: {
        type: String
        // required: true
    },
    specialty: {
        type: [String]
        // required: true
    },
    goals: {
        type: String
    },
    isPatient: {
        type: Boolean
    },
    isDoctor: {
        type: Boolean
    },
    experience: [
        {
            patientName: {
                type: String
                // required: true
            },
            symptoms: {
                type: String
                // required: true
            },
            location: {
                type: String
            },
            from: {
                type: Date
                // required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    progress: [
        {
            patientName: {
                type: String
            },
            game: {
                type: String
                // required: true
            },
            observations: {
                type: String
                // required: true
            },
            treatmentgoals: {
                type: String
                // required: true
            },
            from: {
                type: Date
                // required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = AdminProfile = mongoose.model('adminProfile', adminProfileSchema);