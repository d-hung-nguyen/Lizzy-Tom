import { useEffect, useState } from 'react';
import CreateCatForm from '../components/CreateCatForm';
import CatsList from '../components/CatsList'; // Assuming you have this component

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const response = await fetch('/api/cats');
      const data = await response.json();
      if (data.success) {
        setCats(data.data);
      }
    };

    fetchCats();
  }, []);

  // Function to add a new cat to the list
  const addNewCat = (newCat) => {
 fetchCats();
    setCats((prevCats) => [newCat, ...prevCats]);
  };
  

  return (
    <div>
      <h1>Create New Cat Profile</h1>
      <CreateCatForm onCatCreated={addNewCat} />
      <h2>Existing Cats</h2>
      <CatsList cats={cats} />
    </div>
  );
}