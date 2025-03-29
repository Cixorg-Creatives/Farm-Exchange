import { Toaster, toast } from "react-hot-toast";
import AnimationWrapper from "@/common/page-animation";
import { useContext } from "react";
import { EditorContext } from "@/pages/AddBlogs";
import Tag from "./Tag";
import axios from "axios";
import { UserContext } from "@/App";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button";

const PublishForm = () => {
    const characterLimit = 200;
    const tagLimit = 10;
    const { blog_id } = useParams();
    const { blog, blog: { banner, title, tags, des, content }, setEditorState, setBlog } = useContext(EditorContext);
    const { userAuth: { access_token } } = useContext(UserContext);
    const navigate = useNavigate();

    const handleCloseEvent = () => setEditorState("editor");

    const handleChange = (e, key) => setBlog({ ...blog, [key]: e.target.value });
    
    const handleKeyDone = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            let tag = e.target.value.trim();

            if (tags.length < tagLimit && tag && !tags.includes(tag)) {
                setBlog({ ...blog, tags: [...tags, tag] });
            } else if (tags.length >= tagLimit) {
                toast.error(`You can add max ${tagLimit} Tags`);
            }
            e.target.value = "";
        }
    };

    const publishBlog = async (e) => {
        if (e.target.classList.contains("disable")) return;
        if (!title) return toast.error("Write blog title before publishing");
        if (!des || des.length > characterLimit) return toast.error(`Write a description within ${characterLimit} characters`);
        if (!tags.length) return toast.error("Enter at least 1 tag to help rank your blog");

        const loadingToast = toast.loading("Publishing...");
        e.target.classList.add("disable");
        const blogObj = { title, banner, des, content, tags, draft: false };

        try {
            await axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/create-blog`, { ...blogObj, id: blog_id }, {
                headers: { 'Authorization': `Bearer ${access_token}` }
            });
            toast.dismiss(loadingToast);
            toast.success("Published 👍");
            setTimeout(() => navigate("/dashboard/blogs"), 500);
        } catch ({ response }) {
            toast.dismiss(loadingToast);
            toast.error(response?.data?.error || "Something went wrong");
        }
        e.target.classList.remove("disable");
    };

    return (
        <AnimationWrapper>
            <div className="px-6 md:px-12 lg:px-16 font-sans">
                <section className="w-full grid md:grid-cols-2 gap-6 items-start">
                    <Toaster />
                    <Button onClick={handleCloseEvent} icon="show" symbol="close" className="absolute top-4 right-4" />
                    <div className="flex flex-col gap-4">
                        <p className="text-green-700 text-xs uppercase font-semibold">Preview</p>
                        <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-200">
                            <img src={banner} className="w-full h-full object-cover" alt="Blog Banner" />
                        </div>
                        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 capitalize">{title}</h1>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4">{des}</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                        <p className="text-gray-500 mb-2">Blog Title</p>
                        <input type="text" placeholder="Blog Title" value={title} className="w-full rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-green-500" onChange={(e) => handleChange(e, "title")} />

                        <p className="text-gray-500 mt-6 mb-2">Short description about your blog</p>
                        <textarea maxLength={characterLimit} value={des} className="w-full h-32 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-green-500" onChange={(e) => handleChange(e, "des")} />
                        <p className="text-right text-gray-400 text-sm">{characterLimit - des.length} characters left</p>

                        <p className="text-gray-500 mt-6 mb-2">Topics - (Helps in searching and ranking)</p>
                        <div className="flex flex-wrap gap-2 p-3 bg-gray-100 rounded-lg border border-gray-300">
                            <input type="text" placeholder="Add a topic" className="flex-1 p-2 border-none bg-transparent focus:outline-none" onKeyDown={handleKeyDone} />
                            {tags.map((tag, i) => <Tag key={i} tag={tag} tagIndex={i} />)}
                        </div>
                        <p className="text-right text-gray-400 text-sm">{tagLimit - tags.length} Tags left</p>

                        <button className="w-full bg-green-600 text-white font-medium rounded-lg py-3 mt-6 hover:bg-green-700 transition" onClick={publishBlog}>Publish</button>
                    </div>
                </section>
            </div>
        </AnimationWrapper>
    );
};

export default PublishForm;