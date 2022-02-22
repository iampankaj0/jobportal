import React from 'react';
import { FaBook } from 'react-icons/fa';

import '../../assets/css/marquee.css';
const Marquee = () => {
    return (
        <>
            <section className="marquee-section">
                <div className="app_wrapper">
                    <FaBook color='#fff' fontSize={30} />
                    <marquee behavior="" direction="">www.sarkaaripariksha.com का नाम तो आप भी जानते हैं, ये सिर्फ एक वेबसाइट नहीं है बल्कि ये लाखों बेरोजगार युवाओं/अध्ययनरत युवाओं का विश्वास है. Sarkaari Pariksha 01 फरवरी 2022 को स्थापित किया गया था और तब से यह Sarkaari Pariksha वेबसाइट जिसमें करोड़ों युवा सरकारी नौकरी / परीक्षा परिणाम / प्रवेश पत्र / परीक्षा तिथि की जानकारी की तलाश करते हैं।</marquee>
                </div>
            </section>
        </>
    );
}

export default Marquee;