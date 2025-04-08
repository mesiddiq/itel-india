import { smartPhoneCategories } from '../../../data/AllPhoneData'
import { useFilterStore } from '../../../zustandstore/store'

export default function SeriesTags() {

    const { setSmartPhoneActiveCategory,smartPhoneActiveCategory } = useFilterStore()

    return (
        <div className="overflowHidden overflow-scroll font-markot text-nowrap tags flex flex-row gap-8 font-bold text-base leading-[19.2px] tracking-[-0.01em]">
            {smartPhoneCategories.map(s => (
                <button
                    key={s}
                    className={`uppercase p-[10px] ${smartPhoneActiveCategory=== s ? 'text-white border-b-4 border-red-600' : 'border-b-4 border-b-transparent text-gray-400 hover:text-white'}`}
                    onClick={() => setSmartPhoneActiveCategory(s)}
                >
                    {s}
                </button>
            ))}
        </div>
    )
}