import { useState, useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import { getProfile } from "services/user";
import { clearCookie } from "utils/cookie";

import styles from "./Header.module.css";

const Header = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const queryKey = ["profile"];
  const queryFn = () => getProfile();
  const { data } = useQuery({ queryKey, queryFn });

  const dropdownHandler = () => setDropdown((last) => !last);

  const logoutHandler = (e) => {
    e.preventDefault();
    clearCookie();
    queryClient.invalidateQueries("profile");
    navigate("/", { replace: true });
  };

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <span>
          <img src="profile.svg" />
          <p
            ref={buttonRef}
            className={styles.dropbutton}
            onClick={dropdownHandler}
          >
            دیوار من
          </p>
          {dropdown && (
            <div ref={dropdownRef} className={styles.dropdown}>
              <ul>
                {data && data.data.role === "ADMIN" && (
                  <Link to="/admin">پنل ادمین</Link>
                )}
                {!data && <Link to="/auth">ورود</Link>}
                {data && <a onClick={logoutHandler}>خروج</a>}
              </ul>
            </div>
          )}
        </span>
        <Link to="/dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
};

export default Header;
