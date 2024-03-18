import React, { useState, useEffect } from 'react';

function CatsList() {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCats = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/cats');
        if (!response.ok) {
          throw new Error('Something went wrong while fetching the cats');
        }
        const data = await response.json();
        setCats(data.data); // Adjust depending on the structure of your response
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCats();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!cats.length) {
    return <p>No cats found.</p>;
  }

  const handleEdit = (id) => {
    // Navigate to the edit page
    history.push(`/edit-cat/${id}`);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!cats.length) {
    return <p>No cats found.</p>;
  }

   const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/cats/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the cat from the state to update the UI
        setCats(cats.filter(cat => cat._id !== id));
      } else {
        throw new Error('Failed to delete the cat.');
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>List of Cats</h2>
     <ul>
        {cats.map((cat) => (
          <li key={cat._id}>
            <strong>{cat.name}</strong><br />
            Status: {cat.status}<br />
            Breed: {cat.breed}<br />
            Gender: {cat.gender}<br />
            Color: {cat.color}<br />
            Date of Birth: {cat.dateOfBirth ? new Date(cat.dateOfBirth).toLocaleDateString() : 'N/A'}<br />
            Identity Number: {cat.identityNumber}<br />
            Transponder Code: {cat.transponderCode}<br />
            <button onClick={() => handleEdit(cat._id)}>Edit</button>
            <button onClick={() => handleDelete(cat._id)}>Delete</button>
          </li> 
        ))}
      </ul>
    </div>
  );
}

export default CatsList;