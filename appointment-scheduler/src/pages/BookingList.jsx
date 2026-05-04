import { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/BookingList.css';
import CusName from '../assets/person-circle.svg';
import CalendarCheck from '../assets/calendar-check.svg';
import Location from '../assets/geo-alt.svg';
import Service from '../assets/activity.svg';
import Type from '../assets/pencil-square.svg';
import Doctor from '../assets/person-heart.svg';
import { toast } from "react-toastify";
import { API_DOMAIN, getUrlParams } from '../utils';

const BookingList = () => {
  const urlParams = getUrlParams();

  const [params, setParams] = useState('');
  const [schedules, setSchedules] = useState([]);

  const searchFn = (phone) => {
    fetch(`${API_DOMAIN}/appointments/find-by-phone?phone=${phone}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSchedules(data);
      })
      .catch(() => {
        toast.error('Tìm kiếm không thành công. Vui lòng thử lại sau.');
        setSchedules([]);
      });


  }

  useEffect(() => {
    if (urlParams?.phone) {
      searchFn(urlParams.phone)
      setParams(urlParams.phone);
    }
  }, [urlParams?.phone])

  const handleSearch = () => {
    if (params) {
      searchFn(params);
    } else {
      setSchedules([]);
      toast.warning('Vui lòng nhập Số điện thoại/Email');
    }
  }

  return (
    <>
      <Header isSearch={false} />
      <section id="BookingList" className="container text-center mb-5">
        <Row>
          <div className="search-label">Tra cứu lịch hẹn</div>
          <div className="bookings-search">
            <input
              placeholder="Nhập số điện thoại/ Email"
              value={params}
              onChange={(event) => setParams(event.target.value)}
            />
            <button onClick={handleSearch}>Tìm kiếm</button>
          </div>
        </Row>
        <Row>
          {
            schedules.map((item) => (
              <Col md={4} className="mb-4" key={item}>
                <Card className="schedule">
                  <Card.Body>
                    <div className="book-title">Lịch hẹn</div>
                    <div className="book-info">
                      <p><img src={CusName} alt="CalendarCheck" /><span>Khách hàng: {item.cusName}</span></p>
                      <p><img src={CalendarCheck} alt="CalendarCheck" /><span>Thời gian hẹn: {item.appointmentTime}</span></p>
                      <p><img src={Location} alt="Location" /><span>Địa điểm: {item.department}</span></p>
                      <p><img src={Service} alt="Service" /><span>Khoa: {item.patientName}</span></p>
                      <p><img src={Doctor} alt="Service" /><span>{item.doctor.title}: {item.doctor.name}</span></p>
                      <p><img src={Type} alt="Service" /><span>Dịch vụ: {item.type}</span></p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </section>
    </>
  );
};

export default BookingList;
