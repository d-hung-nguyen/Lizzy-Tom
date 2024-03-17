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

  return (
    <div>
      <h2>List of Cats</h2>
      <ul>
        {cats.map((cat) => (
          <li key={cat._id}>
            <strong>{cat.name}</strong><br />
            Breed: {cat.breed}<br />
            Gender: {cat.gender}<br />
            Color: {cat.color}<br />
            Date of Birth: {cat.dateOfBirth ? new Date(cat.dateOfBirth).toLocaleDateString() : 'N/A'}<br />
            Identity Number: {cat.identityNumber}<br />
            Transponder Code: {cat.transponderCode}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatsList;