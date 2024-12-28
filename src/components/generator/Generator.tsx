import { useCallback, useState } from "react";
import {
    Button,
    Flex,
    Input,
    Radio,
    RadioChangeEvent,
    Space
} from "antd";
import {CopyButton} from './../copyButton/CopyButton';
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
        setValue(e.target.value);
        e.stopPropagation();
    }, [setValue]);


    const handleGenerateClick = useCallback(() => {
        setUuidValue(generateUUID(selectedValue));

    }, [setUuidValue, selectedValue]);

    const handleCopyClick = useCallback(async () => {
        if (uuidValue){
            await navigator.clipboard.writeText(uuidValue);
        }
        
    }, [uuidValue])
    

    return (
        <div className="generator">
            <Flex justify="flex-end">
                <Radio.Group
                    className="version-checkbox"
                    block
                    optionType="button"
                    buttonStyle="solid"
                    options={UUID_OPTIONS}
                    value={selectedValue}
                    onChange={updateVersion}
                />
            </Flex>
            <Space.Compact className="text-box">
                <Input  
                    placeholder="Click generate" 
                    value={uuidValue}
                    className="uuid-field"
                />
                <Button type="primary" onClick={handleGenerateClick}>Generate</Button>
                <CopyButton onClick={handleCopyClick} disable={!uuidValue}/>
            </Space.Compact>
        </div>
    );
}

export default Generator;
