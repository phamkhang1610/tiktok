
//import axios from 'axios';
import { useRef } from 'react';
import { useState, useEffect  } from 'react';
import classNames from 'classnames/bind';
import { BiXCircle, BiSearch, BiLoader } from "react-icons/bi";
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import Accountitem from '~/components/Accountitem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hook';
import * as searchServices from '~/apiServices/searchServices';


const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loadding, setLoading] = useState(false);
    const inputRef = useRef();
    const debounce = useDebounce(searchValue,600);

    useEffect(() => {
        if(!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounce);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    },[debounce]);


    //hàm
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();// đọc lại phần này của DOM element
    };
    const handleHideResult = () => {
        setShowResult(false)
    };
    const handleChange = (e) =>{
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ')) {//fix lỗi tìm kiếm có dấu cách.
            setSearchValue(searchValue);
        }
    }
    return (
        <div> 
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
                       onChange={handleChange}
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
        </div>
    );
}

export default Search;