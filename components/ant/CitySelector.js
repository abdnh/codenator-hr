
import { Form, AutoComplete, } from 'antd';


export default function CitySelector({ value, cities, onChange }) {
    cities = cities ? cities : [];
    const options = cities.map((cityName) => {
        return { label: cityName, value: cityName }
    });

    return <Form.Item name="city" label="City" labelCol={{ span: 24 }} rules={[{ required: true }]}>
        <AutoComplete
            // style={{ minWidth: 100 }}
            defaultValue={value}
            options={options}
            filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            onChange={onChange || (() => { })}
        />
    </Form.Item>
};
