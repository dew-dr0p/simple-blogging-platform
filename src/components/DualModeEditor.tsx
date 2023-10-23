'use client'
import React, { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Quill from 'quill'; // Import the quill module
import DOMPurify from 'dompurify';

function DualModeEditor({initialContent, onChange}: {initialContent: string, onChange: (content: string) => void}) {
  
  useEffect(() => {
    Quill.register('modules/customSelect', function(quill: any) {
      const toolbar = quill.getModule('toolbar');
    
      // Create a new select element and populate it with options
      const select = document.createElement('select');
      select.innerHTML = `<option value="text">Text</option>
                          <option value="html">HTML</option>`;
      
      // Create a new span to act as the container and add Quill classes
      if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        const container = document.createElement('span');
        container.className = 'ql-formats';
        
        // Append the select element to the span container
        container.appendChild(select);
      
        // Append the container to the toolbar
        toolbar.container.appendChild(container);
      }
    
      // Initialize a variable to store the HTML content
      let originalHtmlContent = quill.root.innerHTML;
    
    
      select.addEventListener('change', function() {
        let format = select.value;
    
        if (format === "text") {
          // Convert HTML to plain text
          let temporaryDiv = document.createElement("div");
          temporaryDiv.innerHTML = quill.root.innerHTML;
          let plainText = temporaryDiv.innerText;
    
          // Save the current HTML content, but sanitize it first
          originalHtmlContent = DOMPurify.sanitize(quill.root.innerHTML);
    
    
          // Clear the editor and insert as plain text
          quill.setContents([]);
          quill.clipboard.dangerouslyPasteHTML(plainText); 
        }
    
        if (format === "html") {
          // Restore the original HTML content
          quill.setContents([]);
          quill.clipboard.dangerouslyPasteHTML(DOMPurify.sanitize(originalHtmlContent), 'html')
        }
      });
    
    });
  }, [])

  // const quillRef = useRef<ReactQuill | null>(null);

  // useEffect(() => {
  //   if (quillRef.current) {
  //     // Create a new select element and populate it with options
  //     const select = document.createElement('select');
  //     select.innerHTML = `<option value="text">Text</option>
  //                         <option value="html">HTML</option>`;

  //     // Create a new span to act as the container and add Quill classes
  //     const container = document.createElement('span');
  //     container.className = 'ql-formats';

  //     // Append the select element to the span container
  //     container.appendChild(select);

  //     // Append the container to the toolbar
  //     const toolbar = quillRef.current.getEditor().getModule('toolbar');
  //     toolbar.container.appendChild(container);

  //     // Initialize a variable to store the HTML content
  //     let originalHtmlContent = quillRef.current.getEditor().root.innerHTML;

  //     select.addEventListener('change', function () {
  //       const format = select.value;
  //       const delta = new Delta();

  //       if (format === 'text') {
  //         // Convert HTML to plain text
  //         const temporaryDiv = document.createElement('div');
  //         temporaryDiv.innerHTML = (quillRef.current?.getEditor().root.innerHTML as string);
  //         const plainText = temporaryDiv.innerText;

  //         // Save the current HTML content, but sanitize it first
  //         originalHtmlContent = DOMPurify.sanitize((quillRef.current?.getEditor().root.innerHTML as string));

  //         // Clear the editor and insert as plain text
  //         quillRef.current?.getEditor().setContents(delta); // Use new Delta() to clear the editor
  //         quillRef.current?.getEditor().clipboard.dangerouslyPasteHTML(plainText);
  //       }

  //       if (format === 'html') {
  //         // Restore the original HTML content
  //         quillRef.current?.getEditor().setContents(delta); // Use new Delta() to clear the editor
  //         quillRef.current?.getEditor().clipboard.dangerouslyPasteHTML(DOMPurify.sanitize(originalHtmlContent), 'html');
  //       }
  //     });
  //   }
  // }, [quillRef]);

  const handleContentChange = (value: string) => {
    onChange(value)
}

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        [{ 'align': [] }],
        ['clean'],
      ],
    },
    customSelect: true,
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align',
    'clean',
  ]

  return (
    <div>
      {(typeof document !== 'undefined' && typeof window !== 'undefined') && <ReactQuill value={initialContent} placeholder='Let your creativity kick in. Write a post.' onChange={handleContentChange} modules={modules} formats={formats} />}
    </div>
  );
}

export default DualModeEditor;
