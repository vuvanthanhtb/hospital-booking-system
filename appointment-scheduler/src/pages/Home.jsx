import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-overlay"></div>
      <div className="home-content">
        <div className="home-badge">Y tế trực tuyến</div>
        <h1 className="home-title">Đặt lịch khám bệnh</h1>
        <p className="home-subtitle">Nhanh chóng · Tiện lợi · An toàn</p>
        <Link to="/booking" className="booking-btn">Đặt lịch ngay</Link>
        <Link to="/booking-list" className="lookup-btn">Tra cứu lịch hẹn</Link>
      </div>
    </div>
  );
};

export default Home;
