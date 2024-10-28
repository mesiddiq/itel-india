/* eslint-disable react/prop-types */
const SeriesTags = ({ activeSeries, onSeriesChange }) => {
  return (
    <div className="overflowHidden overflow-scroll text-nowrap tags flex flex-row gap-8 font-bold text-base leading-[19.2px] tracking-[-0.01em]">
      <button 
        className={`p-[10px] ${activeSeries === 'ALL' ? 'text-white border-b-4 border-red-600 ' : 'border-b-4 border-b-transparent text-gray-400 hover:text-white'}`}
        onClick={() => onSeriesChange('ALL')}
      >
        ALL
      </button>
      <button 
        className={`p-[10px] ${activeSeries === 'S Series' ? 'text-white border-b-4 border-red-600' : 'border-b-4 border-b-transparent text-gray-400 hover:text-white'}`}
        onClick={() => onSeriesChange('S Series')}
      >
        S SERIES
      </button>
      <button 
        className={`p-[10px] ${activeSeries === 'P Series' ? 'text-white border-b-4 border-red-600' : 'border-b-4 border-b-transparent text-gray-400 hover:text-white'}`}
        onClick={() => onSeriesChange('P Series')}
      >
        P SERIES
      </button>
      <button 
        className={`p-[10px] ${activeSeries === 'A Series' ? 'text-white border-b-4 border-red-600' : 'border-b-4 border-b-transparent text-gray-400 hover:text-white'}`}
        onClick={() => onSeriesChange('A Series')}
      >
        A SERIES
      </button>
    </div>
  );
};

export default SeriesTags;