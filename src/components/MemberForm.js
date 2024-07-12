import React, { useState } from 'react';
import axios from 'axios';
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
        
            alert('Member added successfully!');
            console.log(response.data);
        } catch (error) {
            if (error.response && error.response.data) {
                alert(`Error: ${error.response.data}`);
            } else {
                alert('Error uploading member details!');
            }
            console.error('Error uploading member details:', error);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('member', new Blob([JSON.stringify(member)], { type: 'application/json' }));
        formData.append('photo', photo);

        try {
            const response = await axios.put('http://localhost:8080/api/members/update', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        
            alert('Member updated successfully!');
            console.log(response.data);
        } catch (error) {
            if (error.response && error.response.data) {
                alert(`Error: ${error.response.data}`);
            } else {
                alert('Error updating member details!');
            }
            console.error('Error updating member details:', error);
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
                <button type="button" onClick={handleUpdate}>Update</button>
            </form>
        </>
    );
};

export default MemberForm;
