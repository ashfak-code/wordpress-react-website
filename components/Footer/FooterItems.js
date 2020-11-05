import {faFacebook,faInstagramSquare,faGoogle,faPinterest} from '@fortawesome/free-brands-svg-icons';
import {faLock,faFileContract,faUserSecret} from '@fortawesome/free-solid-svg-icons';
const SocialItems = [
    {
        icon : faFacebook,
        url : "#",
        cName : "fb footer__socialIcon"
    },
    {
        icon : faInstagramSquare,
        url : "#",
        cName : "insta footer__socialIcon"
    },
    {
        icon : faGoogle,
        url : "#",
        cName : "gg footer__socialIcon"
    },
    {
        icon : faPinterest,
        url : "#",
        cName : "pint footer__socialIcon"
    }
];

const FooterItemList = [
       {
            title : "Terms of Service",
            url : "#",
            icon : faFileContract,
            cName : "ts fn_2_li_a"
        },{
            title : "Privacy Policy",
            url : "#",
            icon : faUserSecret,
            cName : "pp fn_2_li_a"
        },{
            title : "DMCA",
            url : "#",
            icon : faLock,
            cName : "dmca fn_2_li_a"
        }

];
export default SocialItems;
export {FooterItemList};