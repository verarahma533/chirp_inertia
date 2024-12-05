import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function WYSIWYG({ value, onChange }) {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = new Quill(editorRef.current, {
            theme: 'snow',
            placeholder: 'Write your chirp here...',
        });

        editor.on('text-change', () => {
            onChange(editor.root.innerHTML);
        });

        return () => {
            editor.off('text-change');
        };
    }, [onChange]);

    return <div ref={editorRef} />;
}
