import { useState, useEffect } from 'react';
import SvgIcon from '../components/SvgIcon';

const tokens = {
  CARBON: {
    symbol: 'CARBON',
    name: 'Carbon',
  },
  AVAX: {
    symbol: 'AVAX',
    name: 'Avax',
  },
};
const Swap = () => {
  const fromToken = tokens.CARBON;
  const toToken = tokens.AVAX;
  const [direction, setDirection] = useState(0);
  const [swap, setSwap] = useState([fromToken, toToken]);

  useEffect(() => {
    if (direction === 1) {
      setSwap([toToken, fromToken]);
    } else {
      setSwap([fromToken, toToken]);
    }
  }, [direction, toToken, fromToken]);

  return (
    <form className="p-5">
      <div className="relative mb-5">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SvgIcon icon={swap[0].symbol} className="w-5 h-5" />
        </div>
        <input
          type="text"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0.0"
          required
        />
        <button
          type="button"
          className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2"
        >
          max
        </button>
      </div>
      <div className="flex justify-center mb-5">
        <button
          type="button"
          className="bg-gray-100 p-3 rounded-full text-gray-500 text-sm font-medium"
          onClick={async () => {
            setDirection((direction + 1) % 2);
          }}
        >
          <SvgIcon icon="swap" className="w-8 h-8 text-gray-400" />
        </button>
      </div>
      <div className="relative mb-5">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SvgIcon icon={swap[1].symbol} className="w-5 h-5" />
        </div>
        <input
          type="text"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0.0"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-4 py-3 text-white bg-gray-700 rounded-lg border border-gray-600"
        >
          Swap
        </button>
      </div>
    </form>
  );
};

export default Swap;