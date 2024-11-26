import {
    Button,
    Flex,
    Input,
    Radio,
    Space
} from "antd";

const UUID_OPTIONS = [
    {label: "v1", value: "v1"}, 
    {label: "v4", value: "v4"}, 
    {label: "v7", value: "v7"}
]
export function Generator() {
    return (
        <div>
            <Flex vertical gap="middle">
                <Radio.Group
                    options={UUID_OPTIONS}
                    defaultValue={UUID_OPTIONS[1]}
                    optionType="button"
                    buttonStyle="solid"
                />
            </Flex>
            <Space.Compact style={{width: "100%"}}>
                <Input disabled placeholder="Click generate" value="Lalalala" />
                <Button type="primary">Generate</Button>
                <Button type="primary">Copy</Button>
            </Space.Compact>
        </div>
    );
}

export default Generator;
