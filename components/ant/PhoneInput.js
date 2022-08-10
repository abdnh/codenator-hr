import { Form, Input, AutoComplete, } from 'antd';

function PrefixSelector({ countries, fieldName }) {
    const options = Object.values(countries).map((country) => {
        return { label: `${country.flag} ${country.phonecode}`, value: country.phonecode }
    });
    const prefixToCountryName = Object.fromEntries(Object.values(countries).map((country) => {
        return [country.phonecode, country.name]
    }));
    let nameList = [];
    if (fieldName !== undefined) {
        nameList.push(fieldName);
    }
    nameList.push("prefix");

    return <Form.Item name={nameList} noStyle>
        <AutoComplete
            style={{ minWidth: 100 }}
            options={options}
            placeholder="Country code"
            filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1 ||
                prefixToCountryName[option.value].toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        />
    </Form.Item>
};

export default function PhoneInput({ countries, name, fieldName, ...rest }) {
    let nameList = [];
    if (fieldName !== undefined) {
        nameList.push(fieldName);
    }
    nameList.push(name ? name : "phone");

    return (
        <Form.Item name={nameList} label="Phone Number" labelCol={{ span: 24 }} rules={[{ required: true, type: "phone" }]} {...rest}>
            <Input addonBefore={<PrefixSelector fieldName={fieldName} countries={countries} />} />
        </Form.Item>
    )
}
