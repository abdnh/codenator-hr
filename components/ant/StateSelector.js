import { Form, AutoComplete} from 'antd';


export default function StateSelector({ value, states, onChange }) {
    let options = [];
    if (states) {
        options = Object.values(states).map((state) => {
            return { label: state.name, value: state.name }
        });
    }
    return <Form.Item name="state" label="State" labelCol={{ span: 24 }} rules={[{ required: true }]}>
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
