import { UserContext } from "@/App";
import { filterPaginationData } from "@/common/filter-pagination-data";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Stats = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [request, setRequest] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [drafts, setDrafts] = useState([]);

    const fetchProperties = async () => {
        try {
            const response = await fetch("http://localhost:3000/list-properties");
            if (!response.ok) throw new Error("Failed to fetch properties");
            const data = await response.json();
            setProperties(data.data || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    console.log(blogs)

    const { userAuth: { access_token } } = useContext(UserContext);

    const getBlogs = async ({ draft, reset }) => {
        setLoading(true);
        try {
            const { data } = await axios.post(
                import.meta.env.VITE_SERVER_DOMAIN + "/user-written-blogs",
                { draft },
                { headers: { 'Authorization': `Bearer ${access_token}` } }
            );

            const formattedData = await filterPaginationData({
                state: reset ? null : (draft ? drafts : blogs),
                data: data.blogs,
                user: access_token,
                countRoute: "/user-written-blogs-count",
                data_to_send: { draft }
            });

            draft ? setDrafts(formattedData) : setBlogs(formattedData);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchContacts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/get-contact");
            setContacts(response.data);
        } catch (err) {
            console.error("Error fetching contacts:", err);
            setError("Failed to load contacts.");
        } finally {
            setLoading(false);
        }
    };

    const fetchRequest = async () => {
        try {
            const response = await axios.get("http://localhost:3000/get-post-property");
            if (Array.isArray(response.data.posts)) {
                setRequest(response.data.posts);
            } else {
                setRequest([]);
                console.error("Error: API did not return an array");
            }
        } catch (error) {
            console.error("Error fetching properties:", error);
            setError("Failed to load properties");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!access_token) return;
        getBlogs({ draft: false, reset: true });
        getBlogs({ draft: true, reset: true });
        fetchContacts();
        fetchRequest();
        fetchProperties();
    }, []);

    const AnimatedNumber = ({ value }) => {
        const [displayValue, setDisplayValue] = useState(0);
        useEffect(() => {
            let start = 0;
            const end = value;
            if (start === end) return;
            const duration = 1000;
            const stepTime = duration / end;
            const timer = setInterval(() => {
                start += 1;
                setDisplayValue(start);
                if (start === end) clearInterval(timer);
            }, stepTime);
            return () => clearInterval(timer);
        }, [value]);
        return <span>{displayValue}</span>;
    };

    const data = [
        {
            title: "Properties",
            label1: "Listed",
            label2: "Draft",
            total: properties.length,
            published: properties.filter(p => p.status === "published").length,
            draft: properties.filter(p => p.status === "draft").length,
            link: "/properties"
        },
        {
            title: "Blogs",
            label1: "Published",
            label2: "Draft",
            total: (blogs?.totalDocs || 0) + (drafts?.totalDocs || 0),
            published: (blogs?.totalDocs || 0),
            draft: (drafts?.totalDocs || 0),
            link: "/blogs"
        },
        {
            title: "Messages",
            label1: "Responded",
            label2: "Not Responded",
            total: contacts.length,
            published: 0,
            draft: 0,
            link: "/contact"
        },
        {
            title: "Request",
            label1: "Responded",
            label2: "Not Responded",
            total: request.length,
            published: 0,
            draft: 0,
            link: "/post-property-request"
        },
    ];

    return (
        <div>
            {error && <p className="text-red-500">{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-2 md:gap-3 lg:gap-4">
                    <div className="w-full col-span-1 h-full aspect-square lg:aspect-auto rounded-lg md:rounded-xl bg-[#c7d3a7] shadow-inner hover:shadow-lg hover:scale-102 shadow-[#F6FCDF] hover:shadow-gray-500 duration-300 ease-in-out"></div>
                    <div className="w-full cols-span-1 grid grid-cols-[1fr_1fr] gap-2 md:gap-3 lg:gap-4">
                        {data.map((item, index) => (
                            <Link to={item.link} key={index} className="w-full col-span-1 bg-[#c7d3a7] shadow-inner hover:shadow-lg hover:scale-102 shadow-[#F6FCDF] hover:shadow-gray-500 duration-300 ease-in-out h-auto aspect-square md:aspect-auto rounded-lg md:rounded-xl flex flex-col items-center justify-center text-lg font-bold p-2 md:p-8 lg:p-4">
                                <p className="text-[#31511E] font-semibold text-base md:text-xl lg:text-2xl">{item.title}</p>
                                <p className="text-[#859F3E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight">
                                    <AnimatedNumber value={item.total} />
                                </p>
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="font-bold text-base md:text-xl lg:text-3xl">
                                            {item.published}
                                        </p>
                                        <p className="capitalize font-normal text-[9px] md:text-xs xl:text-sm">{item.label1}</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="font-bold text-base md:text-xl lg:text-3xl">
                                            {item.draft}
                                        </p>
                                        <p className="capitalize font-normal text-[9px] md:text-xs xl:text-sm">{item.label2}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stats;
