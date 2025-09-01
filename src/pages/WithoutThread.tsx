import { Code } from '@mantine/core';
import React from 'react';

const WithoutThread = () => {
  const [count, setCount] = React.useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };
  let calculation = 0;
  for (let i = 0; i < 1000000000; i++) {
    calculation += i;
  }

  return (
    <div>
      <h3 className='font-semibold  text-2xl'>Single threaded example</h3>
      <p className='text-gray-400 my-5'>A calculation: {calculation}</p>
      <div>
        Count :{' '}
        <input
          className="border border-gray-300 rounded-md p-2"
          type="number"
          value={count}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4 text-sm bg-gray-200 p-5 flex flex-col gap-3">
        <p>This component demonstrates a heavy calculation running directly on the main UI thread.</p>
        <p>When the calculation runs, the UI will freeze until it completes.</p>
        <p>This is for comparison with the WithThread component, which offloads the calculation to a Web Worker (background thread)</p>
        <p>to keep the UI responsive. Use this to see the impact of blocking the main thread in React apps.</p>
      </div>
      <div className="mt-6">
        <h4 className="font-semibold mb-2">Component Source Code:</h4>
        <Code block>{codeString}</Code>
      </div>
    </div>
  );
};

export default WithoutThread;



  // The code string to display
  const codeString = `
import React from 'react';

const WithoutThread = () => {
  const [count, setCount] = React.useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };
  let calculation = 0;
  for (let i = 0; i < 1000000000; i++) {
    calculation += i;
  }
  return (
    <div>
      <h3 className='font-semibold  text-2xl'>Single threaded example</h3>
      <p className='text-gray-400 my-5'>A calculation: {calculation}</p>
      <div>
        Count :{' '}
        <input
          className="border border-gray-300 rounded-md p-2"
          type="number"
          value={count}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4 text-sm bg-gray-200 p-5 flex flex-col gap-3">
        <p>This component demonstrates a heavy calculation running directly on the main UI thread.</p>
        <p>When the calculation runs, the UI will freeze until it completes.</p>
        <p>This is for comparison with the WithThread component, which offloads the calculation to a Web Worker (background thread)</p>
        <p>to keep the UI responsive. Use this to see the impact of blocking the main thread in React apps.</p>
      </div>
    </div>
  );
};

export default WithoutThread;
`.trim();
