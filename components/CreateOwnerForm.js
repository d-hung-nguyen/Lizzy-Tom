import { useState } from 'react';

function CreateOwnerForm() {
  const [ownerData, setOwnerData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    telephone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOwnerData({
      ...ownerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/owners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ownerData),
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
    <>
    <h2>Create Owner Profile</h2> 
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={ownerData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={ownerData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={ownerData.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={ownerData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="telephone"
        placeholder="Telephone"
        value={ownerData.telephone}
        onChange={handleChange}
      />
      <button type="submit">Create Owner Profile</button>
    </form>
    </> 
  );
}

export default CreateOwnerForm;