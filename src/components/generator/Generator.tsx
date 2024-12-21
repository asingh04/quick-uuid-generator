import { useCallback, useState } from "react";
import {
    Button,
    Flex,
    Input,
    Radio,
    RadioChangeEvent,
    Space
} from "antd";
import { generateUUID } from "../../logic/uuid";
import { SUPPORTED_VERSIONS } from "../../constants";
import "./generator.css";

const UUID_OPTIONS = [
    {label: "v1", value: SUPPORTED_VERSIONS.v1}, 
    {label: "v4", value: SUPPORTED_VERSIONS.v4}, 
    {label: "v7", value: SUPPORTED_VERSIONS.v7}
]
export function Generator() {
    const [selectedValue, setValue] = useState(SUPPORTED_VERSIONS.v4);
    const [uuidValue, setUuidValue] = useState<string|undefined>();
    // const uuidInputRef = useRef<InputRef>();

    const updateVersion = useCallback((e: RadioChangeEvent) => {
        debugger;
        setValue(e.target.value)
    }, [setValue]);


    const handleGenerateClick = useCallback(() => {
        setUuidValue(generateUUID(selectedValue));

    }, [setUuidValue, selectedValue]);

    const handleCopyClick = useCallback( async () => {
        debugger;
        if (uuidValue) {
            try {
                await navigator.clipboard.writeText(uuidValue);
            } catch (err) {
                console.error(err);
            }
            
        }
    }, [uuidValue])

    return (
        <div className="generator">
            <Flex vertical gap="middle">
                <Radio.Group
                    block
                    optionType="button"
                    buttonStyle="solid"
                    options={UUID_OPTIONS}
                    value={selectedValue}
                    onChange={updateVersion}
                />
            </Flex>
            <Space.Compact className="text-box">
                <Input disabled placeholder="Click generate" value={uuidValue} />
                <Button type="primary" onClick={handleGenerateClick}>Generate</Button>
                <Button type="primary" onClick={handleCopyClick}>Copy</Button>
            </Space.Compact>
        </div>
    );
}

export default Generator;
