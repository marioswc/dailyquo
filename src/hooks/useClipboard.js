import { useState, useRef } from "react";

export function useClipboard() {
    const [copied, setCopied] = useState(false);
    const timerRef = useRef(null);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => setCopied(false), 2000);
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    }
    return { copied, copyToClipboard };
}