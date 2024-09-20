
import { Container, TextField, Box, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
import Grid from '@mui/material/Grid2';
import css from './Home.module.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "../../services/Service";



function HomePage() {

    const navigate = useNavigate();

    const service = new Service();

    const [name, setName] = useState('');
    const [nick_name, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [lineId, setLineId] = useState('');
    const [university, setUniversity] = useState('');
    const [qualification, setQualification] = useState('');
    const [major, setMajor] = useState('');
    const [gpa, setGpa] = useState('');
    const [resume, setResume] = useState<File | null>(null);


    async function navigateToSendEmailPage() {
        console.log(blood_type);
        if (
            name && nick_name && email && mobile && address && date_of_birth &&
            blood_type && lineId && university && qualification && major && gpa && resume
        ) {

            const response = await service.sendEmail(name, email);
            console.log(response);

            navigate("/sendemail");
        } else {
            confirm("กรุณาระบุข้อมูล ให้ครบทุกช่อง");
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setResume(file);
    }
    

    return (
        <>
            <Container fixed>
                <h2 className={css.h2}>Internship Program</h2>
                <Box component="form" sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <TextField 
                                label="Name" 
                                variant="filled" 
                                color="success" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                focused 
                            />
                        </Grid>
                        <Grid size={6}>
                            <TextField 
                                label="Nick Name" 
                                variant="filled" 
                                color="warning" 
                                value={nick_name} 
                                onChange={(e) => setNickName(e.target.value)} 
                                focused 
                            />
                        </Grid>

                        <Grid size={6}>
                            <TextField 
                                label="Email" 
                                variant="filled" 
                                color="success" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                focused 
                            />
                        </Grid>
                        <Grid size={6}>
                            <TextField 
                                label="Mobile No" 
                                variant="filled" 
                                color="warning" 
                                value={mobile} 
                                onChange={(e) => setMobile(e.target.value)} 
                                focused 
                            />
                        </Grid>

                        <Grid size={6}>
                            <TextField 
                                label="Address" 
                                variant="filled" 
                                color="success" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                                focused 
                            />
                        </Grid>
                        <Grid size={6}>
                            <FormControl>
                                <FormLabel sx={{ fontFamily: "Nunito Sans" }}>Date of birth</FormLabel>

                                <input 
                                    type="date" 
                                    value={date_of_birth} 
                                    onChange={(e) => setDateOfBirth(e.target.value)} 
                                />
                            </FormControl>
                            
                        </Grid>

                        <Grid size={6}>
                            <FormControl>
                                <FormLabel sx={{ fontFamily: "Nunito Sans" }}>Blood Type</FormLabel>
                                <RadioGroup
                                  aria-labelledby="blood-type-group-label"
                                  name="blood-type-group"
                                  value={blood_type}
                                  onChange={(e) => setBloodType(e.target.value)}
                                >
                                    <FormControlLabel value="A" control={<Radio />} label="A" />
                                    <FormControlLabel value="B" control={<Radio />} label="B" />
                                    <FormControlLabel value="AB" control={<Radio />} label="AB" />
                                    <FormControlLabel value="O" control={<Radio />} label="O" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid size={6}>
                            <TextField 
                                label="Line ID" 
                                variant="filled" 
                                color="warning" 
                                value={lineId} 
                                onChange={(e) => setLineId(e.target.value)} 
                                focused 
                            />
                        </Grid>

                        <Grid size={6}>
                            <TextField 
                                label="University" 
                                variant="filled" 
                                color="success" 
                                value={university} 
                                onChange={(e) => setUniversity(e.target.value)} 
                                focused 
                            />
                        </Grid>
                        <Grid size={6}>
                            <TextField 
                                label="Qualification" 
                                variant="filled" 
                                color="warning" 
                                value={qualification} 
                                onChange={(e) => setQualification(e.target.value)} 
                                focused 
                            />
                        </Grid>

                        <Grid size={6}>
                            <TextField 
                                label="Major" 
                                variant="filled" 
                                color="success" 
                                value={major} 
                                onChange={(e) => setMajor(e.target.value)} 
                                focused 
                            />
                        </Grid>
                        <Grid size={6}>
                            <TextField 
                                label="GPA" 
                                variant="filled" 
                                color="warning" 
                                value={gpa} 
                                onChange={(e) => setGpa(e.target.value)} 
                                focused 
                            />
                        </Grid>

                        <Grid size={6}>
                            <FormControl>
                                <FormLabel sx={{ fontFamily: "Nunito Sans" }}>Resume</FormLabel>
                                <input 
                                    type="file" 
                                    onChange={handleFileChange} 
                                />
                            </FormControl>
                        </Grid>

                        <Grid size={6}>
                            <Button 
                                variant="contained" 
                                sx={{ fontFamily: "Nunito Sans" }} 
                                color="success" 
                                endIcon={<SendIcon />} 
                                onClick={navigateToSendEmailPage}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default HomePage;