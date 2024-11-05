import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSeriesFilter } from '../../../redux/reducers/actions'

export default function Tabs() {
    const dispatch = useDispatch()
    const selectedSeries = useSelector(state => state.filters.filters.series)

    console.log(selectedSeries)

    const series = ['All', 'A Series', 'S Series', 'P Series']

    return (
        <div className="flex space-x-4 mb-8">
            {series.map(s => (
                <button
                    key={s}
                    className={`px-4 py-2 rounded ${selectedSeries.includes(s) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => dispatch(toggleSeriesFilter(s))}
                >
                    {s}
                </button>
            ))}
        </div>
    )
}