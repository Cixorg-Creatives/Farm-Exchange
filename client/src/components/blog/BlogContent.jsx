const Img = ({ url, caption }) => {
    return (
        <div>
            <div className="w-full flex items-center justify-center"><img src={url} className="w-3/4 h-auto " /></div>
            {caption.length ? <p className="w-full text-center my-3 md:mb-12 text-base text-[#6b6b6b]">{caption}</p> : ""}
        </div>
    )
}

const Quote = ({ quote, caption }) => {
    return (
        <div className="bg-[#c7d3a7] p-3 pl-5 border-l-4 border-[#073D2C] flex flex-col gap-2 md:gap-3 lg:gap-4">
            <p className="font-normal text-xs md:text-base lg:text-xl leading-tight" dangerouslySetInnerHTML={{ __html: quote }}></p>
            {caption.length ? <p className="w-full text-[#073D2C] font-medium text-lg md:text-2xl lg:text-4xl leading-tight">{caption}</p> : ""}
        </div>
    )
}

const List = ({ style, items }) => {
    return (
        <ol className={`pl-5 ${style == "ordered" ? " list-decimal" : " list-disc"}`}>

            {
                items.map((listItem, i) => {
                    return <li key={i} className="my-4 text-[#747474] text-xs md:text-base lg:text-xl font-normal clashdisplay" dangerouslySetInnerHTML={{ __html: listItem }}></li>
                })
            }

        </ol>
    )
}

const BlogContent = ({ block }) => {
    let { type, data } = block;

    if (type == "paragraph") {
        return <p className="text-[#747474] text-base md:text-lg lg:text-2xl font-normal leading-tight" dangerouslySetInnerHTML={{ __html: data.text }}></p>
    }
    if (type == "header") {
        if (data.level == 3) {
            return <h3 className="text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl leading-tight" dangerouslySetInnerHTML={{ __html: data.text }}></h3>
        }
        return <h2 className="text-[#859F3E] font-bold text-lg md:text-2xl lg:text-4xl leading-snug text-center" dangerouslySetInnerHTML={{ __html: data.text }}></h2>
    }
    if (type == "image") {
        return <Img url={data.file.url} caption={data.caption} />
    }
    if (type == "quote") {
        return <Quote quote={data.text} caption={data.caption} />
    }
    if (type == "list") {
        return <List style={data.style} items={data.items} />
    }
}

export default BlogContent;