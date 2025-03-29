import { Link, useNavigate, useParams } from "react-router-dom";
import AnimationWrapper from "@/common/page-animation";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import generateURL from "@/common/aws";
import { EditorContext } from "@/pages/AddBlogs";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./Tools";
import axios from "axios";
import { UserContext } from "@/App";
import { assets } from "@/assets/assets";
import Button from "../Button";

const BlogEditor = () => {
    let {
        blog,
        blog: { title, banner, content, tags, des },
        setBlog,
        textEditor,
        setTextEditor,
        setEditorState,
    } = useContext(EditorContext);

    let {
        userAuth: { access_token },
    } = useContext(UserContext);
    let { blogId } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        if (!textEditor.isReady) {
            setTextEditor(
                new EditorJS({
                    holderId: "textEditor",
                    data: Array.isArray(content) ? content[0] : content,
                    tools: tools,
                    placeholder: "Let's write an awesome story",
                })
            );
        }
    }, []);

    const saveImage = async (e) => {
        let image = e.target.files[0];

        if (image) {
            let url = await generateURL(image);
            setBlog({ ...blog, banner: url });
            toast.success("Uploaded 👍");
        } else {
            return toast.error("Please Upload image");
        }
    };

    const handleTitleKeyDown = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    };

    const handleTitleChange = (e) => {
        let input = e.target;

        input.style.height = "auto";
        input.style.height = input.scrollHeight + "px";

        setBlog({ ...blog, title: input.value });
    };

    const handleError = (e) => {
        let img = e.target;

        img.src = defaultBanner;
    };

    const handlePublishEvent = (e) => {
        if (!banner.length) {
            return toast.error("Upload a blog banner to publish it");
        }
        if (!title.length) {
            return toast.error("Write blog title to publish it");
        }
        if (textEditor.isReady) {
            textEditor
                .save()
                .then((data) => {
                    if (data.blocks.length) {
                        setBlog({ ...blog, content: data });
                        setEditorState("publish");
                    } else {
                        return toast.error("Write something in your blog to publish it");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleSaveDraft = (e) => {
        if (e.target.className.includes("disable")) {
            return;
        }
        if (!title.length) {
            return toast.error("Write blog title before saving it as a draft");
        }

        let loadingToast = toast.loading("Saving Draft...");

        e.target.classList.add("disable");

        if (textEditor.isReady) {
            textEditor.save().then((content) => {
                let blogObj = {
                    title,
                    banner,
                    des,
                    content,
                    tags,
                    draft: true,
                };

                axios
                    .post(
                        import.meta.env.VITE_SERVER_DOMAIN + "/create-blog",
                        { ...blogObj, blog_id: blogId  },
                        {
                            headers: {
                                Authorization: `Bearer ${access_token}`,
                            },
                        }
                    )
                    .then(() => {
                        e.target.classList.remove("disable");

                        toast.dismiss(loadingToast);
                        toast.success("Saved 👍");

                        setTimeout(() => {
                            navigate("/dashboard/blogs?tab=draft");
                        }, 500);
                    })
                    .catch(({ response }) => {
                        e.target.classList.remove("disable");

                        toast.dismiss(loadingToast);

                        return toast.error(response.data.error);
                    });
            });
        }
    };

    return (
        <>
            <Toaster />
            <AnimationWrapper>
                <section className="px-5 md:px-8 lg:px-12 clashdisplay">
                    <div className="bg-[#F6FCDF] sticky z-1 top-0 flex w-full items-center justify-end gap-2 md:gap-4 lg:gap-6 py-2 md:py-4 xl:py-6">
                        <Button title='Publish' variant="secondary" onClick={handlePublishEvent} />
                        <Button title='Save to Draft' variant="destructive" onClick={handleSaveDraft} />
                    </div>
                    <div className="w-full my-2 md:my-4 xl:my-6">
                        <div className="relative aspect-video hover:opacity-80 bg-white border-4 border-[#f3f3f3] my-2 md:my-4 xl:my-6">
                            <label
                                htmlFor="uploadBanner"
                                className="cursor-pointer w-full h-full flex justify-center items-center"
                            >
                                <img
                                    src={banner || assets.banner}
                                    className="z-0 w-full h-full object-cover"
                                    onError={handleError}
                                />
                            </label>
                            <input
                                id="uploadBanner"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                className="hidden"
                                onChange={saveImage}
                            />
                        </div>
                        <textarea
                            defaultValue={title}
                            placeholder="Blog Title"
                            className=" text-2xl md:text-4xl lg:text-6xl leading-tight text-[#31511E] font-semibold w-full outline-none resize-none placeholder:opacity-40 my-2 md:my-4 xl:my-6"
                            onKeyDown={handleTitleKeyDown}
                            onChange={handleTitleChange}
                        ></textarea>
                        <hr className="w-full bg-[#31511E]" />
                        <div
                            id="textEditor"
                            className="w-full"
                        ></div>
                    </div>
                </section>
            </AnimationWrapper>
        </>
    );
};

export default BlogEditor;
