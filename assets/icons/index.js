import { config, dom, library } from '@fortawesome/fontawesome-svg-core';
import {
  faAdjust,
  faArrowsAltV,
  faBars,
  faBuilding,
  faCheckCircle,
  faChevronDown,
  faChevronCircleDown,
  faCode,
  faCoffee,
  faCog,
  faColumns,
  faComments,
  faCopy,
  faCopyright,
  faEdit,
  faEllipsisH,
  faEnvelope,
  faExclamationTriangle,
  faExpandAlt,
  faExternalLinkSquareAlt,
  faEyeDropper,
  faFileAlt,
  faFileArchive,
  faFolder,
  faFont,
  faHistory,
  faHome,
  faGlobe,
  faInfoCircle,
  faLanguage,
  faLink,
  faList,
  faListAlt,
  faMapMarkerAlt,
  faMoon,
  faPalette,
  faQuestion,
  faQuestionCircle,
  faRedoAlt,
  faRss,
  faSearch,
  faShareAlt,
  faSkullCrossbones,
  faSpinner,
  faSun,
  faTags,
  faThLarge,
  faThumbtack,
  faTimes,
  faTv,
  faUndo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
  faAlipay,
  faArtstation,
  faBitbucket,
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsNd,
  faCreativeCommonsSa,
  faDiscord,
  faDiscourse,
  faDocker,
  faFacebookF,
  faFacebookSquare,
  faGithub,
  faGitlab,
  faInstagram,
  faKaggle,
  faLastfm,
  faLinkedinIn,
  faMastodon,
  faMediumM,
  faPatreon,
  faPaypal,
  faPinterest,
  faQq,
  faQuora,
  faReddit,
  faStackOverflow,
  faTelegramPlane,
  faTiktok,
  faTumblr,
  faTwitter,
  faWeibo,
  faWeixin,
  faXing,
  faYoutube,
  faZhihu,
} from '@fortawesome/free-brands-svg-icons';
import { faBilibili, faLiberapay, faOffline, faTipeee } from './icons';
import { default as customIcons } from './custom';

let icons = [
  // Solid Icons
  faAdjust,
  faArrowsAltV,
  faBars,
  faBuilding,
  faCheckCircle,
  faChevronDown,
  faChevronCircleDown,
  faCode,
  faCoffee,
  faCog,
  faComments,
  faColumns,
  faCopy,
  faCopyright,
  faEdit,
  faEllipsisH,
  faEnvelope,
  faExclamationTriangle,
  faExpandAlt,
  faEyeDropper,
  faFont,
  faFileAlt,
  faFileArchive,
  faFolder,
  faHistory,
  faHome,
  faInfoCircle,
  faLanguage,
  faLink,
  faList,
  faListAlt,
  faMapMarkerAlt,
  faPalette,
  faQuestion,
  faQuestionCircle,
  faRedoAlt,
  faRss,
  faSearch,
  faShareAlt,
  faSkullCrossbones,
  faGlobe,
  faSpinner,
  faTags,
  faThLarge,
  faThumbtack,
  faTimes,
  faTv,
  faUndo,
  faUser,
  faExternalLinkSquareAlt,
  faSun,
  faMoon,

  // Regular Icons
  faStar,

  // Brands
  faAlipay,
  faArtstation,
  faBitbucket,
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsNd,
  faCreativeCommonsSa,
  faDiscord,
  faDiscourse,
  faDocker,
  faFacebookF,
  faFacebookSquare,
  faGithub,
  faGitlab,
  faInstagram,
  faKaggle,
  faLastfm,
  faLinkedinIn,
  faMastodon,
  faMediumM,
  faPaypal,
  faPatreon,
  faPinterest,
  faQq,
  faQuora,
  faReddit,
  faStackOverflow,
  faTelegramPlane,
  faTiktok,
  faTumblr,
  faTwitter,
  faXing,
  faYoutube,
  faWeibo,
  faWeixin,
  faZhihu,

  // Custom Icons
  faBilibili,
  faLiberapay,
  faOffline,
  faTipeee,
];

config.searchPseudoElements = true;
library.add(...icons.concat(customIcons));
dom.watch();
