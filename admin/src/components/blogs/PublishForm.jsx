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
    const { blogId } = useParams();
    const { blog, blog: { banner, title, tags, des, content, author_name }, setEditorState, setBlog } = useContext(EditorContext);
    const { userAuth: { access_token } } = useContext(UserContext);
    const navigate = useNavigate();

    const handleCloseEvent = () => setEditorState("editor");

    const handleChange = (e, key) => setBlog({ ...blog, [key]: e.target.value });

    const handleAuthorChange = (e) => {
        setBlog({ ...blog, author_name: e.target.value });
    };

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
        const blogObj = { title, banner, des, content, tags, draft: false, author_name };

        try {
            await axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/create-blog`, { ...blogObj, id: blogId }, {
                headers: { 'Authorization': `Bearer ${access_token}` }
            });
            toast.dismiss(loadingToast);
            toast.success("Published 👍");
            setTimeout(() => navigate("/blogs"), 500);
        } catch ({ response }) {
            toast.dismiss(loadingToast);
            toast.error(response?.data?.error || "Something went wrong");
        }
        e.target.classList.remove("disable");
    };

    return (
        <AnimationWrapper>
            <div className="px-6 md:px-12 lg:px-16 clashdisplay">
                <section className="w-full grid md:grid-cols-2 gap-6 items-start">
                    <Toaster />
                    <Button onClick={handleCloseEvent} icon="show" symbol="close" className="absolute top-4 right-4" />
                    <div className="flex flex-col gap-4">
                        <p className="col-span-1 capitalize text-black font-normal text-base md:text-xl lg:text-2xl">Preview</p>
                        <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-200">
                            <img src={banner} className="w-full h-full object-cover" alt="Blog Banner" />
                        </div>
                        <h1 className="capitalize text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl">{title}</h1>
                        <p className="capitalize text-[#758A68] font-normal text-xs md:text-sm lg:text-base line-clamp-3">{des}</p>
                    </div>
                    <div className="col-span-1 rounded-xl p-6 border border-[#31511E]/50 flex flex-col gap-2 md:gap-4 lg:gap-6">
                        <p className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">Blog Title</p>
                        <input type="text" placeholder="Blog Title" value={title} className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg" onChange={(e) => handleChange(e, "title")} />

                        <p className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">Short description about your blog</p>
                        <textarea maxLength={characterLimit} value={des} className="w-full h-24 md:h-28 lg:h-32 bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight rounded-md lg:rounded-lg" onChange={(e) => handleChange(e, "des")} />
                        <p className="uppercase text-[#859F3E] font-semibold text-[8px] md:text-[10px] lg:text-xs">{characterLimit - des.length} characters left</p>

                        <p className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">Blog Author</p>
                        <input type="text" placeholder="Blog Author" value={author_name || ''} onChange={handleAuthorChange} className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg" />

                        <p className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">Topics - (Helps in searching and ranking)</p>
                        <div className="flex flex-col gap-2 rounded-lg">
                            <input type="text" placeholder="Add a topic" className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg" onKeyDown={handleKeyDone} />
                            <div className="flex flex-wrap items-center gap-0.5 md:gap-1 lg:gap-2">
                                {tags.map((tag, i) => <Tag key={i} tag={tag} tagIndex={i} />)}
                            </div>
                        </div>
                        <p className="uppercase text-[#859F3E] font-semibold text-[8px] md:text-[10px] lg:text-xs">{tagLimit - tags.length} Tags left</p>
                        <Button onClick={publishBlog} title={'Publish'} variant="ternary" />
                    </div>
                </section>
            </div>
        </AnimationWrapper>
    );
};

export default PublishForm;