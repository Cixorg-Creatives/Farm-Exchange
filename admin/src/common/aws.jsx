import toast from "react-hot-toast";

const generateURL = async (image) => {
    let loadingToast = toast.loading("Uploading...")

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "myCloud");
    data.append("cloud_name", "dmszykwlh");

    const res = await fetch(`https://api.cloudinary.com/v1_1/dmszykwlh/image/upload`, {
        method: "POST",
        body: data
    })

    const cloudData = await res.json();
    toast.dismiss(loadingToast)
    return cloudData.url;
}

export default generateURL;