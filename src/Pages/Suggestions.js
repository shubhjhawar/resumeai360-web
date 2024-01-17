import React, {useState} from 'react';
import Navbar from '../Components/Common/Navbar';
import { Box, Stack, FormControl, InputLabel, MenuItem, Select, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import "../Styles/SuggestionsComponent.css";
import { Comment } from 'react-loader-spinner';



const Suggestions = () => {
    const [career, setCareer] = useState('')
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dataAi, setDataAi] = useState(null)

    const [closingStatements] = useState([
        'Hope these suggestions help you on your career path.',
        'Best of luck in your future endeavors!',
        'Wishing you success and fulfillment in your chosen path!',
        'May these AI-driven insights be a valuable guide for you.',
        'AI has been honored to assist you today. Wishing you the very best!',
        'Embrace the guidance AI has provided for a brighter tomorrow.',
        'May your journey be enriched by the thoughtful suggestions from our AI system.',
        'Your future looks promising with the help of AI-driven insights.',
        'Grateful to have been part of your career exploration. Good luck!',
        'Hope our AI system has been a helpful companion on your journey.',
    ]);
    const [randomClosingStatement, setRandomClosingStatement] = useState('');

    const handleChange = (e) => {
        setCareer(e.target.value)
    }

    const handleSubmit = async () => {
        try{
            setDialogOpen(true);
            setDataAi(null);
            const response = await fetch('http://127.0.0.1:5000/suggest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_career: career}),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            await new Promise(resolve => setTimeout(resolve, 3500));

            const data = await response.json();
            console.log(data)
            setDataAi({
                'skills':data.skills,
                'certifications':data.certifications,
                'career_advice':data.career_advice,
            })

            const randomIndex = Math.floor(Math.random() * closingStatements.length);
            setRandomClosingStatement(closingStatements[randomIndex]);

        } catch(error) {
            console.log("something went wrong while calling openAI API - ",error)
        } finally {
            setDialogOpen(false);
        }
    }

  return (
    <>
        <Navbar />
        <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px"}}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap="20px"
                paddingTop="20px"
                paddingBottom="20px"
            >
                <div className='desc-text'>
                    <h2 className="aiheading">AI-Driven Career Insights: Elevate Your Future with Skill and Certificate Recommendations</h2>
                    <p className='aipara-2'>Unlock the power of AI-driven guidance as we provide personalized career advice, suggest essential skills, and recommend certifications tailored just for you.</p>
                </div>

                <Box className="aiform">
                    <FormControl>
                        <InputLabel className="aiform-label"></InputLabel>
                        <TextField
                            className="aicareerfield"
                            placeholder='Enter your Career Choice'
                            variant="outlined"
                            fullWidth
                            value={career}
                            onChange={handleChange} 
                        />
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Generate AI Suggestions
                    </Button>
                </Box>

                {dataAi && (
                    <Box >
                    <h2 className='aisuggestionheading'>Career Advice</h2>
                    <p className='aisuggestionpara' style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: dataAi.career_advice }}></p>
                    </Box>
                )}

                {dataAi && (
                    <Box >
                    <h2 className='aisuggestionheading'>Skills you should possess</h2>
                    <p className='aisuggestionpara' style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: dataAi.skills }}></p>
                    </Box>
                )}

                {dataAi && (
                    <Box >
                    <h2 className='aisuggestionheading'>Certificates you should get</h2>
                    <p className='aisuggestionpara' style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: dataAi.certifications }}></p>
                    </Box>
                )}

                {dataAi && (
                    <Box >
                    <h2 className='aisuggestionfooter'>{randomClosingStatement}</h2>
                    </Box>
                )}

                <Dialog open={dialogOpen}>
                    {!dataAi && (
                        <DialogTitle  className='dialog-content'>Our AI system is crafting personalized career insights just for you.</DialogTitle>
                    )}
                    <DialogContent className='dialog-content'>
                        {!dataAi && (
                            // <CircularProgress />
                            <Comment
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="comment-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            color="#fff"
                            backgroundColor="#006CD8"
                            />
                        )}
                    </DialogContent>
                </Dialog>
            </Box>
        </Stack>
    </>
  )
}

export default Suggestions