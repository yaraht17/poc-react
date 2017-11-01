import Login from './container/Login';
import Register from './container/Register';
import Home from './container/Home';
import Gallery from './container/Gallery';
import Image from './container/Image';
import Setting from './container/Setting';
import UserProfile from './container/UserProfile';
import Whatsapp from './container/Whatsapp';
import Shop from './container/Shop';
import Firebase from './container/Firebase';
import Karaoke from './container/Karaoke';
import Camera from './container/Camera';
import Contact from './container/Contact';
import ScrollBar from './container/ScrollBar';
import Shadow from './container/Shadow';
import Switch from './container/Switch';
import Copy from './container/Copy';
import Loading from './container/Loading';
<<<<<<< HEAD
import Share from './container/Share';
=======
import Datepicker from './container/Datepicker';
import Dropdown from './container/Dropdown';
>>>>>>> 0bf1623f489a8e4f661911b23c4db412a953f905
import WebView from './container/WebView';

export default {
  home: {
    title: 'Home',
    Page: Home,
    headerType: 'home',
    cache: true
  },
  gallery: {
    title: 'Gallery',
    Page: Gallery,
    headerType: 'back',
    footerType: 'none',
    cache: true
  },
  image: {
    title: 'Image',
    Page: Image,
    headerType: 'back',
    footerType: 'none',
    cache: true
  },
  whatsapp: {
    title: 'Whatsapp',
    Page: Whatsapp,
    headerType: 'back',
    footerType: 'none',
    cache: true
  },
  shop: {
    title: 'Shop',
    Page: Shop,
    headerType: 'home',
    footerType: 'home',
    cache: true
  },
  setting: {
    title: 'Setting',
    Page: Setting,
    headerType: 'back',
    footerType: 'none',
    cache: true
  },
  'user/profile': {
    title: 'User Profile',
    Page: UserProfile,
    headerType: 'none',
    cache: true
  },
  login: {
    title: 'Login',
    Page: Login,
    headerType: 'none',
    footerType: 'none'
  },
  register: {
    title: 'Register',
    Page: Register,
    headerType: 'none',
    footerType: 'none'
  },
  firebase: {
    title: 'Firebase',
    Page: Firebase,
    headerType: 'back',
    footerType: 'none'
  },
  karaoke: {
    title: 'Karaoke',
    Page: Karaoke,
    headerType: 'back',
    footerType: 'none'
  },
  camera: {
    title: 'Camera',
    Page: Camera,
    headerType: 'back',
    footerType: 'none'
  },
  scrollbar: {
    title: 'ScrollBar',
    Page: ScrollBar,
    headerType: 'back',
    footerType: 'none'
  },
  shadow: {
    title: 'Shadow',
    Page: Shadow,
    headerType: 'back',
    footerType: 'none'
  },
  switch: {
    title: 'Switch',
    Page: Switch,
    headerType: 'back',
    footerType: 'none'
  },
  copy: {
    title: 'Copy',
    Page: Copy,
    headerType: 'back',
    footerType: 'none'
  },
  loading: {
    title: 'Loading',
    Page: Loading,
    headerType: 'back',
    footerType: 'none'
  },
  share: {
    title: 'Share',
    Page: Share,
    headerType: 'back',
    footerType: 'none'
  },
  datepicker: {
    title: 'Datepicker',
    Page: Datepicker,
    headerType: 'back',
    footerType: 'none',
  },
  dropdown: {
    title: 'Dropdown',
    Page: Dropdown,
    headerType: 'back',
    footerType: 'none',
  },
  webview: {
    title: 'WebView',
    Page: WebView,
    headerType: 'back',
    footerType: 'none',
  },
  notFound: {
    title: 'Login',
    Page: Login,
    headerType: 'none',
    footerType: 'none'
  },
  contact: {
    title: 'Contact',
    Page: Contact,
    headerType: 'back',
    footerType: 'none'
  }
};
