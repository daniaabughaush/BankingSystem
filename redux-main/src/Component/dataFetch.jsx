import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movies } from '../Reducer/reducer';

const DataComponent = () => {
  const dispatch = useDispatch();
//   const { loading, data, error } = useSelector((state) => state.data);
console.log(data)
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
 
  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Data:</h2>
      <ul>
        {movies.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        
      </ul>
    </div>
  );
};

export default DataComponent;