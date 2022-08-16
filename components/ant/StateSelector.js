import { Form, AutoComplete } from 'antd';


export default function StateSelector({ states, onChange, ...rest }) {
    let options = [];
    if (states) {
        options = Object.values(states).map((state) => {
            return { label: state.name, value: state.name }
        });
    }
    return <Form.Item name="state" label="State" labelCol={{ span: 24 }} rules={[{ required: true }]} {...rest}>
        <AutoComplete
            // style={{ minWidth: 100 }}
            options={options}
            filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            onChange={onChange || (() => { })}
        />
    </Form.Item>
};
