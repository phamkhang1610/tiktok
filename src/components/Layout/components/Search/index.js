

import { useState, useEffect  } from 'react';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import Accountitem from '~/components/Accountitem';
import { BiXCircle, BiSearch, BiLoader } from "react-icons/bi";
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';
import { useRef } from 'react';



const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loadding, setLoading] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if(!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(` https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)// encodeURIComponent để nhập các ký tự đặc biệt thì ko bị lỗi
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data);
                setLoading(false); //sau khi load song api
            })  
            .catch(() => {
                setLoading(false)
            })
    },[searchValue]);


    //hàm
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();// đọc lại phần này của DOM element
    };
    const handleHideResult = () => {
        setShowResult(false)
    };
    return (
        <HeadlessTippy 
                interactive // dùng để cho có thể tương tác.
                visible = { showResult && searchResult.length > 0}
                render={(attrs) =>(
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Account
                            </h4>
                            {searchResult.map((result) => (<Accountitem key={result.id} data={result}/>)
                            //  {
                            //     return (
                            //         <Accountitem key={result.id} data={result}/>
                            //     );
                            //  }
                            )}  
                           
                        </PopperWrapper>
                    </div>                  
                )}
                onClickOutside = {handleHideResult}
        >
                <div className={cx('search')}>
                    <input
                       ref = {inputRef} 
                       value={searchValue}
                       placeholder='Seacher account and video' 
                       spellCheck={false} 
                       onChange={(e) => setSearchValue(e.target.value)}
                       onFocus =  {() => setShowResult(true)}
                    >
                    </input>
                    {!!searchValue && !loadding && (
                        <button 
                            className={cx('clear')}
                            onClick = {handleClear} 
                        >
                            <BiXCircle />
                        </button>
                    )}
                    {loadding && <BiLoader className={cx('loading')}/>}
                    <button className={cx('search-btn')}>
                        <BiSearch />
                    </button>

                </div>
            </HeadlessTippy>
    );
}

export default Search;