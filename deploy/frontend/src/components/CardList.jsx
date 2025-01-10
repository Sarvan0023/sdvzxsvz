import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card.jsx';
import { fetchData } from '../store/dataSlice.js';


const CardList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.items);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card-list">
      {data.map((item) => (
        <Card key={item._id} title={item.name} description={item.price}  />
      ))}
    </div>
  );
};

export default CardList;