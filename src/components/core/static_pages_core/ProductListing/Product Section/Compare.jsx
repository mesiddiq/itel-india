import compare from '/product-listing/compare.svg'

const Compare = () => {
  return (
    <div className="text-white lg:mb-4 flex flex-row justify-start items-center gap-2 md:rounded-none">
        <img src={compare}/>
        <span className='font-base FFMarkMediun underline'>Compare</span>
    </div>
  )
}

export default Compare