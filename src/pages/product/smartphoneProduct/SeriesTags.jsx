import { useDispatch, useSelector } from 'react-redux'
import { toggleSeriesFilter } from '../../../redux/reducers/actions'

export default function SeriesTags() {
    const dispatch = useDispatch()
    const selectedSeries = useSelector(state => state.filters.filters.series.length ? state.filters.filters.series : ['All'])

    console.log(selectedSeries)

    const series = ['All', 'S Series', 'P Series', 'A Series']

    return (
        <div className="overflowHidden overflow-scroll font-markot text-nowrap tags flex flex-row gap-8 font-bold text-base leading-[19.2px] tracking-[-0.01em]">
            {series.map(s => (
                <button
                    key={s}
                    className={`uppercase p-[10px] ${selectedSeries.includes(s) ? 'text-white border-b-4 border-red-600' : 'border-b-4 border-b-transparent text-gray-400 hover:text-white'}`}
                    onClick={() => dispatch(toggleSeriesFilter(s))}
                >
                    {s}
                </button>
            ))}
        </div>
    )
}