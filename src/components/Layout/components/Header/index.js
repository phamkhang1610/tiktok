//bên ngoài
import classNames from 'classnames/bind';
import { BiPlus,BiLogOut } from "react-icons/bi";
import { BsCoin,BsFillPersonFill } from "react-icons/bs";
import { BsTranslate,BsQuestionCircle,BsKeyboard,BsMoon,BsThreeDotsVertical } from "react-icons/bs";
import { MdSettings } from "react-icons/md"

// thư viện tippy

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


// Thư viện rong src
import styles from './Header.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images';
import Menu from '~/components/Layout/Popper/Menu';
import Image from '~/components/Images';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ITEM =[
    {
        icon: <BsTranslate />,
        title:'English',
        children: {
            title: 'Language',
            data: [
                {
                    code:'en',
                    title:'English'
                }, 
                {
                    code:'vi',
                    title:'Tiếng Việt'
                },
                {
                    code:'ch',
                    title:'China'
                }
            ]
        }
    },
    {
        icon: <BsQuestionCircle />,
        title:'Feedback and help',
        to: './feedback'
        
    },
    {
        icon: <BsKeyboard />,
        title:'Keybroad shortcut'
    },
    {
        icon: <BsMoon />,
        title:'Moon'
    }

];
const userMenu = [
    {
        icon: <BsFillPersonFill />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <BsCoin />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <MdSettings />,
        title: 'Settings',
        to: '/settings',
    },
     ...MENU_ITEM,
    {
         icon: <BiLogOut />,
         title: 'Log out',
         to: '/logout',
         separate: true,
     },
];

const currentUser = true;

function Header() {
    

    const handleMenuChange = (menuItem) => {
        console.log (menuItem);
    }

    return ( <header className= {cx('wrapper')}> 
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img 
                    src={images.logo}
                    alt="Tiktok"
                > 
                </img>
            </div>
            <Search />
            <div className={cx('action')}>
                {currentUser ? (
                    <div className={cx('current-user')}>
                        <Tippy content = "Upload" trigger='click' placement='bottom'>
                            <button className={cx('action-but')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy content ="Message">
                            <buttun className={cx('action-but')}>
                                <MessageIcon />
                            </buttun>
                        </Tippy>
                        <Tippy content ="Inbox">
                            <button className={cx('action-but')}>
                                <InboxIcon />
                            </button>
                        </Tippy>
                    </div>
                ) : (
                    <>
                        <Button 
                            text 
                            leftIcon={<BiPlus />}
                        >
                            Upload
                        </Button>
                        <Button 
                            primary 
                            className={cx('custom-log')}
                        >Log in
                        </Button>
                    </>
                )} 
                <Menu items={currentUser ? userMenu : MENU_ITEM} onChange = {handleMenuChange}>
                    {currentUser ? (
                        <button className={cx('more-btn')}>
                            <Image
                                className={cx('action-avatar')}
                                src ="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/6cc0badd10117384094ff503c0fca9d9~c5_100x100.jpeg?x-expires=1679169600&x-signature=zCDvwMpNuu%2Fi8ra%2FgAt0iNiBg90%3D"
                            />
                        </button>
                    ) : ( 
                        <BsThreeDotsVertical />
                    )}
                </Menu>
            </div>
        </div>
    </header>
    );
}

export default Header;