import { useDispatch, useSelector } from 'react-redux'
import { toggleFilter } from '../../../redux/slice/featurePhoneSlice'

export default function SeriesTags() {
    const dispatch = useDispatch()
    const selectedSeries = useSelector(state => 
        state.featurePhone.filters.series.length ? state.featurePhone.filters.series : ['All']
    )

    const series = ['All', 'Innovation Series', 'Entry Level', '2.4" Display', '2.8" Display']

    const handleSeriesClick = (series) => {
        // For series, we want to replace the current selection rather than toggle
        dispatch(toggleFilter({ 
            filterType: 'series', 
            value: series,
            replace: true 
        }));
    }

    return (
        <div className="overflowHidden overflow-scroll font-markot text-nowrap tags flex flex-row gap-8 font-bold text-base leading-[19.2px] tracking-[-0.01em]">
            {series.map(s => (
                <button
                    key={s}
                    className={`uppercase p-[10px] ${
                        selectedSeries.includes(s) 
                            ? 'text-white border-b-4 border-red-600' 
                            : 'border-b-4 border-b-transparent text-gray-400 hover:text-white'
                    }`}
                    onClick={() => handleSeriesClick(s)}
                >
                    {s}
                </button>
            ))}
        </div>
    )
}