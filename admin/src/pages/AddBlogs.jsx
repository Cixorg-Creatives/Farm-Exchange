import { createContext, useContext, useEffect, useState } from "react"
import { UserContext } from "../App"
import { Navigate, useParams } from "react-router-dom"
import { Loader } from "lucide-react"
import axios from "axios"
import BlogEditor from "@/components/blogs/BlogEditor"
import PublishForm from "@/components/blogs/PublishForm"

const blogStructure = {
  title: '',
  banner: '',
  content: [],
  tags: [],
  des: '',
  author: { personal_info: {} }
}

export const EditorContext = createContext({});

const AddBlogs = () => {

  let { blogId } = useParams();

  const [blog, setBlog] = useState(blogStructure)

  const [editorState, setEditorState] = useState("editor")

  const [textEditor, setTextEditor] = useState({ isReady: false })
  const [loading, setLoading] = useState(true)

  let { userAuth: { access_token, isAdmin } } = useContext(UserContext)

  useEffect(() => {
    if (!blogId) {
      return setLoading(false);
    }

    axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/get-blog", { blog_id: blogId, draft: true, mode: 'edit' })
      .then(({ data: { blog } }) => {
        setBlog(blog);
        setLoading(false);
      })
      .catch(err => {
        setBlog(null);
        setLoading(false)
        console.log("Failed")
      })

  }, [])


  return (
    <EditorContext.Provider value={{ blog, setBlog, editorState, setEditorState, textEditor, setTextEditor }}>
      {
        !isAdmin ? <Navigate to="/" /> :
          access_token === null ? <Navigate to="/signin" />
            :
            loading ? <Loader /> :
              editorState == "editor" ? <BlogEditor /> : <PublishForm />
      }
    </EditorContext.Provider>
  )
}

export default AddBlogs