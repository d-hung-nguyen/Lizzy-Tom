import React, { useState, useEffect } from 'react';

function OwnersList() {
  const [owners, SetOwners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOwners = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/owners');
        if (!response.ok) {
          throw new Error('Something went wrong while fetching the owners');
        }
        const data = await response.json();
        SetOwners(data.data); // Adjust depending on the structure of your response
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOwners();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!owners.length) {
    return <p>No owners found.</p>;
  }

  return (
    <div>
      <h2>List of Owners</h2>
      <ul>
        {owners.map((owner) => (
          <li key={owner._id}>
            <strong>{owner.name}</strong><br />
            Email: {owner.email}<br />
            Address: {owner.address}<br />
            City: {owner.city  }<br />
            Telephone: {owner.telephone}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OwnersList;