import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Reducer/reducer';

const DataComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

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
      <div className="grid grid-cols-3 gap-4">
        {data.results.map((item) => (
          <div className="bg-white rounded-lg shadow-lg p-4 flex" key={item.id}>
            <img className="w-1/3 rounded-l-lg" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
            <div className="flex flex-col justify-center ml-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.overview}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Button</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataComponent;
