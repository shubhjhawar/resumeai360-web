import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Stack } from "@mui/material";
import Navbar from "../Components/Common/Navbar";
import "../Styles/PredictCareerComponent.css";
import { Hourglass } from 'react-loader-spinner';

const Skills = [
    'Database Fundamentals', 'Computer Architecture', 'Distributed Computing Systems',
    'Cyber Security', 'Networking', 'Software Development', 'Programming Skills',
    'Project Management', 'Computer Forensics Fundamentals', 'Technical Communication',
    'AI ML', 'Software Engineering', 'Business Analysis', 'Communication skills',
    'Data Science', 'Troubleshooting skills', 'Graphics Designing'
];

const ratingOptions = {
    'Poor': 0, 'Beginner': 1, 'Average': 2, 'Intermediate': 3,
    'Professional': 4, 'Excellent': 6, 'Not Interested': 5,
};

const defaultRatings = Skills.reduce((acc, skill) => {
    acc[skill] = 0;
    return acc;
}, {});

const PredictCareer = () => {
    const [ratings, setRatings] = useState(defaultRatings);
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [prediction, setPrediction] = useState([]);

    const handleRatingChange = (feature, value) => {
        setRatings(prevRatings => ({ ...prevRatings, [feature]: value }));
    };

    const handleSubmit = async () => {
        setLoading(true);
        setOpenModal(true);

        try {
            const response = await fetch('https://resumeai360-backend.onrender.com/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ratings),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            await new Promise(resolve => setTimeout(resolve, 3500));

            const data = await response.json();
            console.log(data.predictions)
            setPrediction(data.predictions);
        } catch (error) {
            console.error('Error:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Navbar />
            <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    minHeight="100vh"
                    gap="20px"
                    paddingTop="20px"
                    paddingBottom="20px"
                >
                    <div className='desc-text'>
                        <h2 className="heading">Career Pathfinder: Uncover Your Best Fit</h2>
                        <p className='para'>Experience our career prediction tool that instantly reveals your top three most suitable careers based on your skills and interests. A single input opens the door to personalized insights, helping you discover promising professional paths with ease.</p>
                        <p className='para-2'>Say goodbye to uncertainty and hello to a clearer vision of your future success!</p>
                    </div>

                    {Skills.map((feature, index) => (
                        <FormControl key={index} className='form-field'>
                            <InputLabel className="form-label">{feature}</InputLabel>
                            <Select
                                value={ratings[feature] || ''}
                                onChange={(e) => handleRatingChange(feature, e.target.value)}
                            >
                                {Object.entries(ratingOptions).map(([label, value]) => (
                                    <MenuItem key={value} value={value}>{label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ))}

                    <Button variant="contained" color="primary" onClick={handleSubmit} className='form-field'>
                        Generate
                    </Button>

                    <Dialog open={openModal} onClose={handleCloseModal}>
                        {loading ? (
                            <DialogTitle  className='dialog-content'>Predicting Careers</DialogTitle>
                        ) : (
                        <DialogTitle  className='dialog-content'>Your skills and interests align well with the following promising Careers:</DialogTitle>
                        )}
                        <DialogContent className='dialog-content'>
                            {loading ? (
                                // <CircularProgress />
                                <Hourglass
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="hourglass-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                colors={['#306cce', '#72a1ed']}
                                />
                            ) : (
                                <div>
                                    <p className="jobs">{prediction[0]}</p>
                                    <p className="jobs">{prediction[1]}</p>
                                    <p className="jobs">{prediction[2]}</p>
                                </div>
                            )}
                        </DialogContent>
                    </Dialog>
                </Box>
            </Stack>
        </>
    );
};

export default PredictCareer;
