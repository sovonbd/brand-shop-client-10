import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const FoodMenuPage = () => {
  const data = useLoaderData();

  const {path} = useParams()

  
  return (
    <div>
      
    </div>
  );
};

export default FoodMenuPage;