import { useContext } from "react";
import { EditorContext } from "@/pages/AddBlogs";
import { X } from "lucide-react";

const Tag = ({ tag, tagIndex }) => {

    let { blog, blog: { tags }, setBlog } = useContext(EditorContext);

    const addEditable = (e) => {
        e.target.setAttribute("contentEditable", true);
        e.target.focus();
    }

    const handleTagEdit = (e) => {
        if (e.keyCode == 13 || e.keyCode == 188) {

            e.preventDefault();

            let currentTag = e.target.innerText;

            tags[tagIndex] = currentTag;

            setBlog({ ...blog, tags });

            e.target.setAttribute("contentEditable", false);
        }
    }

    const handleTagDelete = () => {
        tags = tags.filter(t => t != tag);
        setBlog({ ...blog, tags })
    }

    return (
        <div className="relative p-2 mt-2 mr-2 px-5 w-fit bg-[#D9E2C3] rounded-full inline-block hover:opacity-50 pr-10">
            <p className="outline-none" onKeyDown={handleTagEdit} onClick={addEditable}>{tag}</p>
            <button className="rounded-full absolute right-3 top-1/2 -translate-y-1/2" onClick={handleTagDelete}>
                <X />
            </button>
        </div>
    )
}

export default Tag;