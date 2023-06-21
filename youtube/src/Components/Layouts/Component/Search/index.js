import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; //

import HeadLessTippy from "@tippyjs/react/headless";
import * as SearchServices from "../../../../services/SearchServices";
import { Wrapper as PopperWrapper } from "../../Popper";
import AccountItem from "../../../AccountItem";
import styles from "./Search.module.scss";

import { SearchIcon, MicroIcon, EraseIcon } from "../../Icons";

const cx = classNames.bind(styles);

function SearchHeader() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchShow, setSearchShow] = useState(true);

  const inputRef = useRef();

  const handleClearSearch = () => {
    setSearchValue("");
    setSearchResult([]);
    setSearchShow(false);
    inputRef.current.focus();
  };

  useEffect(() => {
    if (!searchValue.trim()) {
      return;
    }

    const fetchApi = async () => {
      const result = await SearchServices.search(searchValue);

      setSearchResult(result);
    };

    fetchApi();
  }, [searchValue]);

  return (
    // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
    <div className={cx("search__main")}>
      <HeadLessTippy
        visible={searchShow && searchResult.length > 0}
        interactive
        render={(attrs) => (
          <div className={cx("search_result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
              <a className={cx("search__cough")} href="/#">
                Report inappropriate search suggestions
              </a>
            </PopperWrapper>
          </div>
        )}
        onClickOutside={() => setSearchShow(false)}
      >
        <div className={cx("search")}>
          <div className={cx("search__block")}>
            <div className={cx("search__input")}>
              <SearchIcon className={cx("searchIcon__mini")} />
              <input
                ref={inputRef}
                value={searchValue}
                className={cx("search__input__header")}
                placeholder="Search ..."
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setSearchShow(true)}
              />

              {!!searchValue && (
                <button
                  className={cx("search__Erase")}
                  onClick={handleClearSearch}
                >
                  <EraseIcon />
                </button>
              )}

              <Tippy
                delay={[0, 200]}
                content="KeyBoard"
                placement="bottom"
                hideOnClick={false}
              >
                <span className={cx("search__input__key")}>
                  <img
                    alt="KeyBoard"
                    src="//www.gstatic.com/inputtools/images/tia.png"
                  />
                </span>
              </Tippy>
            </div>
            <Tippy
              delay={[0, 200]}
              placement="bottom"
              content="Search"
              hideOnClick={false}
            >
              <button className={cx("search_btn")}>
                <SearchIcon className={cx("icon_search")} />
              </button>
            </Tippy>
          </div>
          <Tippy
            delay={[0, 200]}
            placement="bottom"
            content="Voice search"
            hideOnClick={false}
          >
            <button className={cx("icon_micro")}>
              <MicroIcon />
            </button>
          </Tippy>
        </div>
      </HeadLessTippy>
    </div>
  );
}

export default SearchHeader;
