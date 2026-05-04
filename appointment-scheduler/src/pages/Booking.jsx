import { useState, useEffect } from "react";
import { Button, Form, Input, Select, DatePicker, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import { toast } from "react-toastify";
import Header from "../components/Header";
import {
  hospitalDepartments,
  serviceTypes,
  locations,
  genders,
  API_DOMAIN
} from '../utils';
import "../styles/Booking.css";

const { Option } = Select;
const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Booking = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  const initialValues = {
    address: null,
    type: null,
    patientName: null,
    doctorId: "",
    gender: null,
    bookingDate: dayjs(),
    note: "",
    cusName: "",
    phone: "",
    email: "",
  };

  useEffect(() => {
    fetch(`${API_DOMAIN}/doctor/get-all`)
      .then((res) => res.json())
      .then((data) => {
        const dataCustom = data.map((item) => ({
          ...item,
          name: `${item.name} - ${item.title}`
        }))
        setDoctors([{ id: null, name: null }, ...dataCustom]);
      });
  }, [])

  const onFinish = (values) => {
    console.log(values);
    fetch(
      `${API_DOMAIN}/appointments/create`,
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          bookingDate: dayjs(values.bookingDate).format('YYYY-MM-DD HH:mm')
        })
      }
    )
      .then((_) => {
        toast.success("Đăng ký lịch hẹn thành công.");
        navigate(`/booking-list?phone=${values.phone}`);
      }).catch(() => {
        toast.error('Đăng ký không thành công. Vui lòng thử lại.')
      });
  };

  return (
    <>
      <Header isSearch={true} />
      <div className="booking-section">
        <Form
          {...layout}
          form={form}
          initialValues={initialValues}
          name="control-hooks"
          onFinish={onFinish}
          className="booking-form-wrapper"
        >
          <div className="booking-container">
            <h2>ĐĂNG KÝ KHÁM BỆNH</h2>
            <Form.Item
              name="cusName"
              label="Họ tên"
              rules={[
                {
                  required: true,
                  message: "Họ tên không được để trống"
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Điện thoại"
              rules={[
                {
                  required: true,
                  message: "Điện thoại không được để trống"
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Email không được để trống"
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Giới tính"
              rules={[
                {
                  required: true,
                  message: "Giới tính không được để trống"
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <Select
                placeholder="Chọn giới tính"
                allowClear
              >
                {
                  genders.map((item) => <Option key={item.id} value={item.name}>{item.name}</Option>)
                }
              </Select>
            </Form.Item>
            <Form.Item
              name="address"
              label="Địa điểm khám"
              rules={[
                {
                  required: true,
                  message: "Địa điểm khác không được để trống"
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <Select
                placeholder="Chọn địa điểm khám"
                allowClear
              >
                {
                  locations.map((item) => <Option key={item.id} value={item.name}>{item.name}</Option>)
                }
              </Select>
            </Form.Item>
            <Form.Item
              name="type"
              label="Dịch vụ khám"
              rules={[
                {
                  required: true,
                  message: "Dịch vụ khám không được để trống"
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <Select
                placeholder="Chọn dịch vụ khám"
                allowClear
              >
                {
                  serviceTypes.map((item) => <Option key={item.id} value={item.name}>{item.name}</Option>)
                }
              </Select>
            </Form.Item>
            <Form.Item
              name="patientName"
              label="Khoa"
              rules={[
                {
                  required: true,
                  message: "Khoa không được để trống"
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <Select
                placeholder="Chọn khoa"
                allowClear
              >
                {
                  hospitalDepartments.map((item) => <Option key={item.id} value={item.name}>{item.name}</Option>)
                }
              </Select>
            </Form.Item>
            <Form.Item
              name="doctorId"
              label="Bác sĩ"
              rules={[
                {
                  required: true,
                  message: "Bác sĩ không được để trống"
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <Select
                placeholder="Chọn bác sĩ"
                allowClear
              >
                {
                  doctors.map((item) => <Option key={item.id} value={item.id}>{item.name}</Option>)
                }
              </Select>
            </Form.Item>
            <Form.Item
              name="bookingDate"
              label="Ngày giờ khám"
              rules={[
                {
                  type: 'object',
                  required: true,
                  message: "Ngày giờ khám không được để trống"
                },
              ]}
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >

              <DatePicker
                style={{
                  width: '100%',
                }}
                showTime
                format="YYYY-MM-DD HH:mm"
                placeholder="Chọn ngày giờ khám"
              />
            </Form.Item>

            <Form.Item
              name="note"
              label="Vấn đề sức khỏe cần khám"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <TextArea rows={3} />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: 200,
                    height: 40,
                    fontSize: 15,
                    textTransform: 'uppercase'
                  }}
                >
                  Đăng ký
                </Button>
              </Space>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Booking;
