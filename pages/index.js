import { useEffect, useState } from 'react';
import CreateCatForm from '@/components/CreateCatForm.js';  
import CatsList from '../components/CatsList.js'; // Assuming you have this component
import OwnersList from '@/components/OwnersList.js';
import CreateOwnerForm from '@/components/CreateOwnerForm.js';


export default function HomePage() {
  const [cats, setCats] = useState([]);
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const response = await fetch('/api/cats');
      const data = await response.json();
      if (data.success) {
        setCats(data.data);
      }
    };
    const fetchOwners = async () => {
      const response = await fetch('/api/owners');
      const data = await response.json();
      if (data.success) {
        setOwners(data.data);
      }
    }

    fetchCats();
    fetchOwners();
  }, []);
  

  // Function to add a new cat to the list
  const addNewCat = (newCat) => {
    fetchCats();
    setCats((prevCats) => [newCat, ...prevCats]);
  };
  const addNewOwner = (newOwner) => {
        ftechOwners();
       setOwners((prevOwners) => [newOwner, ...prevOwners]);
     };
     
  

  return (
    <div>
      <CreateCatForm onCatCreated={addNewCat} />
      <CatsList />
      <CreateOwnerForm onOwnerCreated={addNewOwner} />  
      <OwnersList />
    </div>
  );
}

