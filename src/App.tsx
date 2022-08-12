import DOMPurify from "dompurify";
import { marked } from "marked";
import { useState } from "react";
import { FaBars, FaEye, FaEyeSlash, FaSave, FaTrashAlt } from "react-icons/fa";
import { texteBase } from "./utils";
import "github-markdown-css";

const App = () => {
    const [textMd, setTextMd] = useState(texteBase);
    const [isPreview, setIsPreview] = useState(false);
    return (
        <div className="lg:container mx-auto bg-gray-800 h-screen flex flex-col">
            <nav className="bg-gray-700 flex">
                <button className="bg-gray-600 px-6">
                    <FaBars className="text-lg scale-x-[200%]" />
                </button>
                <div className="py-2 flex items-center">
                    <a href="#" className="px-8 tracking-widest font-bold">
                        MARKDOWN
                    </a>
                    <div className="border h-6"></div>
                </div>
                <div className="ml-auto flex items-center py-4">
                    <button className="mr-8 text-gray-200 text-xl">
                        <FaTrashAlt />
                    </button>
                    <button className="flex items-center gap-x-2 bg-orange-600 px-4 py-2 rounded shadow mr-8">
                        <FaSave />
                        <span className="hidden lg:block">Save changes</span>
                    </button>
                </div>
            </nav>
            <div className="flex-grow lg:flex h-max overflow-y-auto relative overflow-x-hidden">
                <section className="border-r border-gray-600 flex flex-col h-full w-full lg:w-1/2">
                    <p className="bg-[rgb(41,51,65)] px-8 py-2 font-semibold flex items-center">
                        <span>MARKDOWN</span>
                        <button className="ml-auto">
                            <FaEye onClick={() => setIsPreview(true)}/>
                        </button>
                    </p>
                    <textarea
                        className="bg-gray-800 w-full resize-none focus:outline-none p-4 flex-grow"
                        onInput={(e) => setTextMd(e.currentTarget.value)}
                        value={textMd}
                    ></textarea>
                </section>
                <section
                    className={
                        "border-l border-gray-600 h-full w-full transition-all lg:w-1/2 overflow-y-auto flex flex-col absolute lg:relative lg:top-auto lg:left-auto top-0 " +
                        (!isPreview ? "left-full" : "left-0")
                    }
                >
                    <p className="bg-[rgb(41,51,65)] px-8 py-2 font-semibold flex-grow flex items-center">
                        <span>PREVIEW</span>
                        <button className="ml-auto">
                            <FaEyeSlash onClick={() => setIsPreview(false)} />
                        </button>
                    </p>
                    <div
                        className="p-4 markdown-body !bg-gray-800 overflow-y-auto"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(marked.parse(textMd)),
                        }}
                    ></div>
                </section>
            </div>
        </div>
    );
};

export default App;
