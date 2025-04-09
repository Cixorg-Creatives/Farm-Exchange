import { UserContext } from "@/App";
import { filterPaginationData } from "@/common/filter-pagination-data";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PieChart from "./PieChart";
import SmallPie from "./SmallPie";
import { motion, AnimatePresence } from "framer-motion";

const Stats = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [request, setRequest] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [drafts, setDrafts] = useState([]);
    const [flipped, setFlipped] = useState(Array(4).fill(false));
    const [animatedValues, setAnimatedValues] = useState(Array(4).fill(true));

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
    console.log(contacts)
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
            published: contacts.filter(c => c.seen === true).length,
            draft: contacts.filter(c => c.seen === false).length,
            link: "/contact"
        },
        {
            title: "Request",
            label1: "Responded",
            label2: "Not Responded",
            total: request.length,
            published: request.filter(r => r.seen === true).length,
            draft: request.filter(r => r.seen === false).length,
            link: "/post-property-request"
        },
    ];

    const toggleFlip = (index) => {
        setFlipped(prev => prev.map((f, i) => (i === index ? !f : f)));
        setAnimatedValues(prev => prev.map((val, i) => (i === index ? false : false)));
    };

    return (
        <div>
            {loading || error ? (
                <Skeleton />
            ) : (
                <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-2 md:gap-3 lg:gap-4">
                    <div className="w-full col-span-1 h-full aspect-square lg:aspect-auto rounded-lg md:rounded-xl bg-[#c7d3a7] shadow-inner  shadow-[#F6FCDF] ">
                        <PieChart properties={properties.length} blogs={(blogs?.totalDocs || 0) + (drafts?.totalDocs || 0)} messages={contacts.length} requests={request.length} />
                    </div>
                    <div className="w-full h-full cols-span-1 grid grid-cols-[1fr_1fr] gap-2 md:gap-3 lg:gap-4">
                        {data.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="relative min-w-max col-span-1 h-auto aspect-square md:aspect-auto rounded-lg md:rounded-xl flex"
                                style={{ perspective: "1000px" }} // Apply perspective to parent
                                onClick={() => toggleFlip(index)}
                            >
                                {/* Flipping Container */}
                                <motion.div
                                    animate={{ rotateY: flipped[index] ? 180 : 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300, // Higher stiffness for a snappier effect
                                        damping: 15, // Lower damping for more bounce
                                        mass: 2.5, // Adjust mass to control weight of the bounce
                                    }}
                                    className="w-full h-full relative bg-[#c7d3a7] shadow-inner shadow-[#F6FCDF] rounded-lg md:rounded-xl"
                                    style={{ transformStyle: "preserve-3d" }} // Ensure 3D transformation
                                >
                                    {/* Front Face */}
                                    <div className="absolute w-full h-full flex flex-col items-center justify-center text-lg font-bold p-2 md:p-8 lg:p-4"
                                        style={{ backfaceVisibility: "hidden" }} // Hide backface properly
                                    >
                                        <p className="text-[#31511E] font-semibold text-base md:text-xl lg:text-2xl">{item.title}</p>
                                        <p className="text-[#859F3E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight">
                                            {animatedValues[index] ? <AnimatedNumber value={item.total} /> : item.total}
                                        </p>
                                        <div className="w-full flex items-center justify-between">
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="font-bold text-base md:text-xl lg:text-3xl">{item.published}</p>
                                                <p className="capitalize font-normal text-[9px] md:text-xs xl:text-sm">{item.label1}</p>
                                            </div>
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="font-bold text-base md:text-xl lg:text-3xl">{item.draft}</p>
                                                <p className="capitalize font-normal text-[9px] md:text-xs xl:text-sm">{item.label2}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back Face */}
                                    <div
                                        className="absolute w-full h-full flex items-center justify-center rounded-lg md:rounded-xl bg-[#c7d3a7] shadow-inner shadow-[#F6FCDF]"
                                        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }} // Ensure backface is hidden
                                    >
                                        <SmallPie label1={item.label1} label2={item.label2} published={item.published} draft={item.draft} />
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            )}
        </div>
    );
};

export default Stats;


const Skeleton = () => {
    return (
        <div className="w-full md:h-96 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-2 md:gap-3 lg:gap-4">
            {/* Pie Chart Skeleton */}
            <div className="w-full col-span-1 h-full aspect-square lg:aspect-auto rounded-lg md:rounded-xl bg-[#c7d3a7] animate-pulse shadow-inner shadow-[#F6FCDF]" />

            {/* Cards Skeleton */}
            <div className="w-full h-full grid grid-cols-[1fr_1fr] gap-2 md:gap-3 lg:gap-4">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="relative min-w-max col-span-1 h-auto aspect-square md:aspect-auto rounded-lg md:rounded-xl flex bg-[#c7d3a7] animate-pulse shadow-inner shadow-[#F6FCDF]" />
                ))}
            </div>
        </div>
    );
};
