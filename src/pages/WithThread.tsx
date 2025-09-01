import { Code } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

const WithThread = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState<number | null>(null);
  const workerRef = useRef<Worker | null>(null);
  console.log(import.meta.url);
  useEffect(() => {
    // Dynamically import worker script
    if (!workerRef.current) {
      workerRef.current = new Worker(new URL('./withThreadWorker.js', import.meta.url));
    }
    const worker = workerRef.current;
    worker.onmessage = (e) => {
      if (e.data && e.data.type === 'RESULT') {
        setCalculation(e.data.calculation);
      }
    };
    worker.postMessage({ type: 'CALCULATE' });
    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  return (
    <div>
      <h3 className="font-semibold  text-2xl">Multi threaded example</h3>
      <p className="text-gray-400 my-5">
        WithThread: {calculation !== null ? calculation : 'Calculating...'}
      </p>
      <div>
        Count :{' '}
        <input
          className="border border-gray-300 rounded-md p-2"
          type="number"
          value={count}
          onChange={handleChange}
        />
      </div>

      <div className="bg-yellow-50 border border-yellow-300 p-4 rounded my-6 text-sm text-gray-800 leading-relaxed">
        <h3 className="font-semibold text-lg mb-2">
          📝 <strong>Note:</strong> This component demonstrates a heavy calculation offloaded to a{' '}
          <span className="font-semibold text-blue-700">Web Worker</span> (background thread).
        </h3>
        <p>Web Worker (background thread)</p>
        <ul className="list-disc pl-5 mt-2">
          <li>The UI remains responsive while the calculation runs.</li>
          <li>
            Compare this with the{' '}
            <span className="font-semibold text-blue-700">WithoutThread</span>{' '}
          </li>
          <li>component, which blocks the UI during calculation.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Component Source Code:</h4>
        <Code block>{codeString}</Code>
      </div>

      <div className="bg-yellow-50 border border-yellow-300 p-4 rounded mb-6 text-sm text-gray-800 leading-relaxed">
        <h3 className="font-semibold text-lg mb-2">📝 What is a Web Worker?</h3>
        <p>
          A <strong>Web Worker</strong> allows JavaScript to run in a <em>background thread</em>{' '}
          separate from the main UI. This helps keep your app smooth and responsive, especially
          during heavy tasks like loops or data processing.
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            The main thread sends data to the worker using <code>postMessage()</code>
          </li>
          <li>
            The worker receives it via <code>onmessage</code> and processes it
          </li>
          <li>
            It sends back the result using <code>postMessage()</code> again
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-2">👨‍💻 Worker Source Code:</h4>
        <Code block>{workerCode.trim()}</Code>
      </div>
    </div>
  );
};

export default WithThread;

// The code string to display
const codeString = `
import React, { useEffect, useRef, useState } from 'react';

const WithThread = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState<number | null>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    if (!workerRef.current) {
      workerRef.current = new Worker(new URL('./withThreadWorker.js', import.meta.url));
    }
    const worker = workerRef.current;
    worker.onmessage = (e) => {
      if (e.data && e.data.type === 'RESULT') {
        setCalculation(e.data.calculation);
      }
    };
    worker.postMessage({ type: 'CALCULATE' });
    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  return (
    <div>
      <h3>Multi threaded example</h3>
      <p>WithThread: {calculation !== null ? calculation : 'Calculating...'}</p>
      <div>
        Count :{' '}
        <input
          type="number"
          value={count}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default WithThread;
`.trim();

const workerCode = `
self.onmessage = function (e) {
  const { type, count } = e.data;
  if (type === 'CALCULATE') {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i * count;
    }
    self.postMessage({ type: 'RESULT', calculation: result });
  }
};
`;
