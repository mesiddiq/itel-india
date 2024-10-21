import { For } from "react-haiku"

const IconCard = [
    { id: 1, icon: '/featurephone/it5330/icons/phonebook.svg', label: '1000 Phonebook' },
    { id: 2, icon: '/featurephone/it5330/icons/sms.svg', label: '200 SMS' },
    { id: 3, icon: '/featurephone/it5330/icons/contact.svg', label: 'Contact Icons' },
    { id: 4, icon: '/featurephone/it5330/icons/languages.svg', label: '9 Lan' },
]

const StorageSuperstar = () => {
    return (
        <div className="lg:bg-[url('/featurephone/it5330/Backgrounds/storage_superstar.jpg')]  bg-[url('/featurephone/it5330/Backgrounds/storage_superstar_mobile.webp')] bg-cover px-4 md:px-0 overflow-hidden">
            <div className="content lg:h-[800px] h-[564px] relative font-markot flex flex-row-reverse lg:items-center lg:justify-between pt-6 lg:pt-0">
                <div className="space-y-5 lg:space-y-[70px] max-w-[550px]">
                    <div className="space-y-3 lg:space-y-4">
                        <h1 className="text-mobile/h4 lg:text-[62px] lg:leading-[74px] lg:-tracking-[1.8px] font-medium text-bg/primary/1">Storage Superstar</h1>
                        <h4 className="text-mobile/body/2 lg:text-desktop/body/large">Unleash your digital life with itel it5330's spacious storage, blending style with functionality. Store up to 1000 phonebook entries, 200 SMS, and switch between 9 languages effortlessly. It's your world, your way!</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <For
                            each={IconCard}
                            render={(item) => (
                                <div className="flex gap-2 items-center">
                                    <img src={item.icon} alt={item.label} className="size-8 lg:size-12" />
                                    <h1 className="text-mobile/h6 lg:text-desktop/h5/medium">{item.label}</h1>
                                </div>
                            )} />
                    </div>
                </div>
                <img src="/featurephone/it5330/Backgrounds/storage_superstar_phone.webp" alt="it5330" className="lg:max-w-[800px] max-w-[400px] absolute left-0 -bottom-10" />
            </div>
        </div>
    )
}

export default StorageSuperstar