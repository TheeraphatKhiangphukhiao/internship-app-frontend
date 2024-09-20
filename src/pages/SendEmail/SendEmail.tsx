import { Container, Typography, Box, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

function SendEmailPage() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                textAlign: "center",
                marginTop: "50px",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f5f5f5"
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 80, color: "green", marginBottom: "20px" }} />
                <Typography sx={{ fontFamily: "Nunito Sans" }} variant="h4" gutterBottom>
                    ข้อมูลของคุณถูกบันทึกเรียบร้อยแล้ว!
                </Typography>
                <Typography sx={{ fontFamily: "Nunito Sans" }} variant="body1" color="textSecondary" gutterBottom>
                    ระบบได้ทำการบันทึกข้อมูลของคุณและส่งอีเมลแจ้งเตือนไปยังอีเมลที่ระบุแล้ว
                </Typography>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleGoBack}
                    sx={{ marginTop: "20px", fontFamily: "Nunito Sans" }}
                >
                    กลับไปหน้าหลัก
                </Button>
            </Box>
        </Container>
    );
}

export default SendEmailPage;
