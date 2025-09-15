import React, { useEffect, useState } from "react";
import Header from "../layouts/partials/header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Content() {
  const [editorHtml, setEditorHtml] = useState("");
  const [activeContent, setActiveContent] = useState("privacy");

  const privacyContent = `<h2><strong>Privacy Policy for</strong> <span style="color: #04AAB9;">Fuzzish</span></h2>
   <p><strong>Effective Date: 10/05/2025</strong></p>
   <p>Welcome to <span style="color: #04AAB9;">Fuzzish</span> Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application. By using our App, you agree to the collection and use of information as described in this policy.</p>`

  const TermCondition = `<h2><strong>Terms & Conditions for</strong> <span style="color: #04AAB9;">Fuzzish</span></h2>
   <p><strong>Effective Date: 10/05/2025</strong></p>
   <p>Welcome to <span style="color: #04AAB9;">Fuzzish</span> Our Terms and conditions. explains how we collect, use, and protect your personal information when you use our mobile application. By using our App, you agree to the collection and use of information as described in this Terms.</p>`

  const handleEditorChange = (value) => {
    setEditorHtml(value);
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: { container: toolbarOptions },
  };

  useEffect(() => {
    fetchContent();
  }, [activeContent]);

  const fetchContent = async () => {
    try {
      let content;
      if (activeContent === "privacy") {
        content = privacyContent;
        console.log("content =>", content);
      } else {
        content = TermCondition;
      }
      setEditorHtml(content || "");
    } catch (err) {
      console.error(`Error fetching ${activeContent} content:`, err);
    }
  };
  return (
    <div>
      <Header header={"Manage content"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="flex flex-wrap gap-4 justify-start bg-white px-4 py-2">
            <button
              onClick={() => setActiveContent("privacy")}
              className={`rounded-md w-full sm:w-auto text-sm px-6 py-2 font-medium capitalize ${activeContent === "privacy"
                ? "bg-gray-150 text-white"
                : "border text-gray-150"
                }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveContent("terms")}
              className={`rounded-md w-full sm:w-auto text-sm px-6 py-2 font-medium capitalize ${activeContent === "terms"
                ? "bg-gray-150 text-white"
                : "border text-gray-150"
                }`}
            >
              Terms and Conditions
            </button>
          </div>
          <div className="space-y-2 my-3">
            <div className="bg-white">
              <ReactQuill
                theme="snow"
                value={editorHtml}
                onChange={handleEditorChange}
                modules={modules}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}