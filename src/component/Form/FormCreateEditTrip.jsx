import { useState } from 'react'
import {
  Form,
  Button,
  Input,
  DatePicker,
  ConfigProvider,
  CalendarPicker,
} from 'antd-mobile'
import dayjs from 'dayjs'
import enUS from 'antd-mobile/es/locales/en-US'

function FormCreateEditTrip() {
  const today = dayjs()
  const [val, setVal] = useState()
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Form
        layout="horizontal"
        footer={
          <Button block type="submit" color="primary" size="middle">
            Submit
          </Button>
        }
      >
        <Form.Header>Create Trip</Form.Header>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: 'Please specify your name trip.' },
          ]}
        >
          <Input
            onChange={console.log}
            placeholder="Please type the name of the trip."
          />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          trigger="onConfirm"
          onClick={() => {
            setVisible(true)
          }}
          rules={[
            { required: true, message: 'Please specify your date trip.' },
          ]}
        >
          <DatePicker>
            {(value) =>
              value
                ? dayjs(value).format('YYYY-MM-DD')
                : 'Please select a date.'
            }
          </DatePicker>
          <ConfigProvider locale={enUS}>
            <CalendarPicker
              className="calendar-custom"
              selectionMode="range"
              value={val}
              onChange={(val) => {
                setVal(val)
              }}
              visible={visible}
              onClose={() => setVisible(false)}
              onMaskClick={() => setVisible(false)}
            />
          </ConfigProvider>
        </Form.Item>
      </Form>
    </>
  )
}

export default FormCreateEditTrip
