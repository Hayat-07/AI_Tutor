"use client";
import React from 'react';
import Editor from '@monaco-editor/react';

const MyMonacoEditor = () => {
    
    const handleEditorDidMount = (editor, monaco) => {
        // You can access the editor instance and monaco object here
        console.log('Editor mounted:', editor);
    };

    return (
        <div className=' bg-black ' style={{ height: `{}`, width: '100vw' }}>
            <Editor
                height="60vh"
                language="javascript" // Set the default language
                defaultValue="// some code here" // Initial code
                onMount={handleEditorDidMount}
            />
        </div>
    );
};

export default MyMonacoEditor;