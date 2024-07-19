import { useNavigate } from "react-router-dom";
import "./index.scss";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0"
          alt="logo"
          className="header__logo"
          width={80}
          onClick={()=>navigate("/")}
        />
        <ul>
          <li>Thực đơn</li>
          <li>khuyến mãi</li>
          <li>Dịch vụ</li>
          <li>Hệ thống nhà hàng</li>
        </ul>
      </div>
      <div className="header__right">
        <div className="header__user" onClick={() => navigate("/login")}>
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="header__cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>0</span>
        </div>
        <div className="header__list">
          <i className="fa-solid fa-list"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
