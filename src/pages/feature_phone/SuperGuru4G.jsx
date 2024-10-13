import React from 'react'
import {
    EnjoyHIgh,
    FeatureRich,
    KingVoice,
    PayAnywhere,
    TechSpecs
} from '../../components/core/feature_phone/s_guru_4g'
import StickyHeader from '../../components/common/StickyHeader'
import EntireWorld from '../../components/core/feature_phone/s_guru_4g/EntireWorld'
import Hero from '../../components/common/feature_phone_common/Hero'
import FullSpecifications from '../../components/common/FullSpecifications'
import { FullSpecificationsSGuru4g } from '../../data/featurephonedata/SGuru4gData'

const FeatureRichData = {
    heading: 'Feature-Rich Phone with 4G VoLTE Connectivity',
    description: 'Introducing India ka Super Guru—a collection of stylish keypad mobile phones that are the perfect blend of premium design and durability. Perfect for a busy lifestyle, this phone supports 4G and UPI payments, ensuring you stay connected and efficient. With Kingmedia, access YouTube, YouTube Shorts, news, cricket updates, and weather information effortlessly. The Kingvoice feature lets your phone speak out loud for you. ',
    cards: [
        { id: 1, title: 'Top-Tier 4G VoLTE Support', description: 'Choose your speed with the Super Guru 4G- 4G for lightning fast browsing & 2G/3G to save data. Stay connected wherever you are.', icon: '/featurephone/superguru4g/wifi-square.svg' },
        { id: 2, title: 'KingMedia: All in one Entertainment', description: `Dive into the YouTube universe with YouTube & YouTube Shorts & catering to diverse interests, whether it's your interest in news, cricket, weather, or anything else.`, icon: '/featurephone/superguru4g/music-playlist.svg' },
        { id: 3, title: 'UPI Payments', description: `Make payment without internet. No Internet required, payment can be done through GS Pay.`, icon: '/featurephone/superguru4g/upi.svg' },
    ]
}

const SuperGuru4G = () => {
    return (
        <div className=''>
            <Hero/>
            <StickyHeader />
            <FeatureRich {...FeatureRichData} />
            <EnjoyHIgh />
            <EntireWorld/>
            <PayAnywhere />
            <KingVoice />
            <TechSpecs />
            <FullSpecifications FullSpecificationsData={FullSpecificationsSGuru4g} mode={'light'} />
        </div>
    )
}

export default SuperGuru4G