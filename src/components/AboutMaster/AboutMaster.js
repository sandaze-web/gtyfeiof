import React, {useState} from 'react';
import WrapperBlock from "../UI/WrapperBlock/WrapperBlock";
import css from "./AboutMaster.module.scss";
import PropTypes from "prop-types";
import {DevicePhoneMobileIcon} from "@heroicons/react/24/outline";
import VkIcon from "../UI/Icons/SocialIcons/VkIcon";
import TelegramIcon from "../UI/Icons/SocialIcons/TelegramIcon";
import WhatsappIcon from "../UI/Icons/SocialIcons/WhatsappIcon";

const AboutMaster = ({master}) => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const icons = {
        vk: <VkIcon/>,
        whatsapp: <WhatsappIcon/>,
        telegram: <TelegramIcon/>,
    };
    const address = 'калининград володарского 4д'

    // useEffect(() => {
    //     try {
    //         fetchAddresses({query: address}).then(data => {
    //             data.geo_lat && setLatitude(data.geo_lat)
    //             data.geo_lon && setLongitude(data.geo_lon)
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    return (
        <>
            <WrapperBlock>
                <div className={css.about}>
                    <div className={css.title}>{master.name}</div>
                    <div className={css.content}>
                        {master.description}
                    </div>
                    <div className={css.infoBx}>
                        <a href={`tel: ${master.phone}`} className={css.phoneBx}>
                            <div className={css.icon}>
                                <DevicePhoneMobileIcon width={24} height={24}/>
                            </div>
                            <div className={css.phone}>
                                {master.phone}
                            </div>
                        </a>
                        <div className={css.socials}>
                            {Object.entries(master.socials).map(([key, value]) => (
                                <a key={key} href={value.link} target="_blank" rel="noreferrer">
                                    {icons[key] || key}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </WrapperBlock>
        </>
    );
};

AboutMaster.propTypes = {
    master: PropTypes.object.isRequired,
}

export default AboutMaster;