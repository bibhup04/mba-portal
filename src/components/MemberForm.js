import React, { useState } from 'react';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './MemberForm.css';

const MemberForm = () => {
    const [member, setMember] = useState({
        name: '',
        age: '',
        achievements: '',
        profession: '',
        occupation: ''
    });
    const [photo, setPhoto] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMember({ ...member, [name]: value });
    };

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('member', new Blob([JSON.stringify(member)], { type: 'application/json' }));
        formData.append('photo', photo);

        try {
            const response = await axios.post('http://localhost:8080/api/members/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // toast.success('Member added successfully!');
            alert('Member added successfully!');
            console.log(response.data);
        } catch (error) {
            // toast.error('Error uploading member details!');
            alert('Error uploading member details!');
            console.error('Error uploading member details:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='Member'>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={member.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={member.age}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Achievements:
                        <input
                            type="text"
                            name="achievements"
                            value={member.achievements}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Profession:
                        <input
                            type="text"
                            name="profession"
                            value={member.profession}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Occupation:
                        <input
                            type="text"
                            name="occupation"
                            value={member.occupation}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Photo:
                        <input
                            type="file"
                            onChange={handleFileChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            {/* <ToastContainer /> */}
        </>
    );
};

export default MemberForm;
