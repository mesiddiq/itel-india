import React from 'react'
import FeatureRich from '../../components/common/feature_phone_common/FeatureRich'


const FeatureRichData = {
    heading: 'Super Guru 600: Stylish and Durable Keypad Phones',
    description: 'Introducing India ka Super Guru—a collection of stylish keypad mobile phones that are the perfect blend of premium design and durability. Featuring a 2.8" large display, 1900 mAh battery, and 1.3 MP camera, itel SG600 offers sleek metal finish design paired with a long-lasting battery.Introducing India ka Super Guru—a collection of stylish keypad mobile phones that are the perfect blend of premium design and durability. Perfect for a busy lifestyle, this phone supports 4G and UPI payments, ensuring you stay connected and efficient. With Kingmedia, access YouTube, YouTube Shorts, news, cricket updates, and weather information effortlessly. The Kingvoice feature lets your phone speak out loud for you. ',
    cards: [
        { id: 1, title: 'Compact Elegance: 2.8” Display', description: 'Discover the perfect blend of compact design and clear visuals with our 2.8" display keypad phone.', icon: '/featurephone/superguru4g/wifi-square.svg' },
        { id: 2, title: 'Longevity & Reliability: 1900 mAh Battery ', description: `Designed to keep you connected all day, this robust battery ensures you have ample power for calls, messages, and entertainment.`, icon: '/featurephone/superguru4g/music-playlist.svg' },
        { id: 3, title: 'UPI Payments', description: `Make payment without internet. No Internet required, payment can be done through GS Pay.`, icon: '/featurephone/superguru4g/upi.svg' },
    ]
}

const SuperGuru400 = () => {
    return (
        <div>
            <FeatureRich {...FeatureRichData} />
        </div>
    )
}

export default SuperGuru400