import React from 'react';
import { connect } from 'react-redux';
import { selectLoading, selectError } from '../Reducer/reducer';

const MyComponent = ({ loading, error, data }) => {
  // Use the data in your component
  // You can access loading, error, and data from the Redux store
  // ...

  return (
    <div>
      <h1>My Component</h1>
      {/* Display loading, error, or data as needed */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && data.map((item) => <p key={item.id}>{item.name}</p>)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: selectLoading(state),
  error: selectError(state),
  data: state.data
});

export default connect(mapStateToProps)(MyComponent);