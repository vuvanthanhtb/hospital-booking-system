import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="search-books">
          Trang chủ
        </Link>
      </div>
      <div className="header-right">
        {
          props.isSearch && (
            <Link to="/booking-list" className="search-books">
            🔍 Tra cứu lịch hẹn
          </Link>
          )
        }
        {
          !props.isSearch && (
            <Link to="/booking" className="search-books">
            🔍 Đặt lịch hẹn
          </Link>
          )
        }
      </div>
    </header>
  );
};

export default Header;
