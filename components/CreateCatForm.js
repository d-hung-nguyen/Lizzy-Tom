// components/CreateCatForm.js
import { useState } from 'react';

function CreateCatForm() {
  const [catData, setCatData] = useState({
    name: '',
    breed: '',
    gender: '',
    color: '',
    dateOfBirth: '',
    identityNumber: '',
    transponderCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatData({
      ...catData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/cats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(catData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong with the request.');
      }

      const result = await response.json();
      console.log(result);
      // Reset form or handle success (e.g., show a success message or redirect)
    } catch (error) {
      console.error('Failed to create cat profile:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={catData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="breed"
        placeholder="Breed"
        value={catData.breed}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={catData.gender}
        onChange={handleChange}
      />
      <input
        type="text"
        name="color"
        placeholder="Color"
        value={catData.color}
        onChange={handleChange}
      />
      <input
        type="date"
        name="dateOfBirth"
        placeholder="Date of Birth"
        value={catData.dateOfBirth}
        onChange={handleChange}
      />
      <input
        type="text"
        name="identityNumber"
        placeholder="Identity Number"
        value={catData.identityNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="transponderCode"
        placeholder="Transponder Code"
        value={catData.transponderCode}
        onChange={handleChange}
      />
      <button type="submit">Create Cat Profile</button>
    </form>
  );
}

export default CreateCatForm;