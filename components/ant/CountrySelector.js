import { Form, AutoComplete, } from 'antd';

export default function CountrySelector({ countries, onChange, ...rest }) {
    const options = Object.values(countries).map((country) => {
        return { label: country.name, value: country.name }
    });
    return <Form.Item name="country" label="Country" labelCol={{ span: 24 }} rules={[{ required: true }]} {...rest}>
        <AutoComplete
            // style={{ minWidth: 100 }}
            options={options}
            filterOption={(inputValue, option) =>
                option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 ||
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            onChange={onChange || (() => { })}
        />
    </Form.Item>
};
