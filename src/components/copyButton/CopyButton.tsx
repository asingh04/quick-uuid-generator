/* global window */
import cx from 'classnames'
import { useCallback, useState } from "react";
import { CopyOutlined } from "@ant-design/icons";
import './copybutton.css';
import Button from 'antd/es/button';

type CopyButtonProps = {
    onClick: () => void;
    disable: boolean;
}

export function CopyButton({ onClick, disable }: CopyButtonProps) {
    const [btnState, setBtnState] = useState(false)

    const handleCopyClick = useCallback(async () => {
        try {
            await onClick();
            setBtnState(true)
            setTimeout(() => {
                setBtnState(false)
            }, 1000)
        } catch (err: any) {
            console.error(err);
        }
        
    }, [onClick, setBtnState])

    return (
        <Button 
            className={cx('copy-button', {copied: btnState})}
            type="primary"
            disabled={disable}
            color="primary"
            icon={ btnState ? null : <CopyOutlined />}
            onClick={handleCopyClick}
        >  
            {btnState ? "Copied!" : "Copy"}
        </Button>
    )
}