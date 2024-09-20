import axios from "axios";


const HOST : string = "https://intern-app-docker.onrender.com";


export class Service {

    async upload_file(resume : File) {
        const url = HOST + "/upload";
        
        const formData = new FormData();
        formData.append("file", resume);

        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        const downloadURL = response.data;
        return downloadURL.downloadURL;
    }


    async addInternshipData(name: string, email: string, mobile: string, nick_name: string, address: string, date_of_birth: string, blood_type: string, lineId: string, university: string, qualification: string,major: string, gpa: string, URL: string) {

        const body = {
            "name": name,
            "email": email,
            "mobile": mobile,
            "nickname": nick_name,
            "address": address,
            "date_of_birth": date_of_birth,
            "blood_type": blood_type,
            "line_id": lineId,
            "university": university,
            "qualification": qualification,
            "major": major,
            "gpa": gpa,
            "resume": URL,
        }

        console.log(body);

        const url = HOST + "/internshipSubmission";
        const response = await axios.post(url, body);

        return response.data;
        
    }

    async sendEmail(name: string, email: string) {
        const url = HOST + "/internshipSubmission/send/email";

        const body = {
            "name": name,
            "email": email
        }
        const response = await axios.post(url, body);
        return response.data;
        
    }
}