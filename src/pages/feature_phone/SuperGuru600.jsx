import React from 'react'
import FeatureRich from '../../components/common/feature_phone_common/FeatureRich'


const FeatureRichData = {
    heading: 'Super Guru 600: Stylish and Durable Keypad Phones',
    description: 'Introducing India ka Super Guru—a collection of stylish keypad mobile phones that are the perfect blend of premium design and durability. Featuring a 2.4" display, 1200 mAh battery, crystal clear audio, and 1.3 MP camera, all in a 9.8 mm ultra-thin itel SG400 keypad phone.',
    cards: [
        { id: 1, title: 'Compact Elegance: 2.4” Display', description: 'Discover the perfect blend of compact design and clear visuals with our 2.4" display keypad phone.', icon: '/featurephone/superguru4g/wifi-square.svg' },
        { id: 2, title: 'Longevity & Reliability: 1200 mAh Battery ', description: `Designed to keep you connected all day, this robust battery ensures you have ample power for calls, messages, and entertainment.`, icon: '/featurephone/superguru4g/music-playlist.svg' },
        { id: 3, title: 'Unmatched Clarity: Crystal Clear Audio ', description: `Experience unparalleled audio quality with the Crystal Clear Audio feature on our keypad phones.`, icon: '/featurephone/superguru4g/upi.svg' },
    ]
}

const SuperGuru600 = () => {
    return (
        <div>
            <FeatureRich {...FeatureRichData} />
        </div>
    )
}

export default SuperGuru600