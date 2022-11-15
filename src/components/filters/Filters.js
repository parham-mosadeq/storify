import React from 'react';

const Filters = () => {
  return (
    <div>
      {/* filters start */}

      {/* cheapest start */}
      <div>
        <label>low prices</label>
        <input type='checkbox' />
      </div>
      {/* cheapest end */}

      {/* highest start */}
      <div>
        <label>high prices</label>
        <input type='checkbox' />
      </div>
      {/* highest end */}

      {/* cat starts */}
      <div>
        <label>men's clothing</label>
        <input type='checkbox' />
      </div>
      <div>
        <label>jewelery</label>
        <input type='checkbox' />
      </div>
      <div>
        <label>electronics</label>
        <input type='checkbox' />
      </div>
      <div>
        <label>women's clothing</label>
        <input type='checkbox' />
      </div>
      {/* cat end */}

      {/* filters end */}
    </div>
  );
};

export default Filters;
