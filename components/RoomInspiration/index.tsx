"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import {ChevronRight2} from "@/components/vectors/chevron-right";
import "./style.css"

const roomData = [
    {
        id: "01",
        type: "Bed Room",
        title: "Inner Peace",
        image: "/images/inner-peace-2.png",
    },
    {
        id: "02",
        type: "Dining Room",
        title: "Bright & Airy",
        image: "/images/inner-peace.png",
    },
    {
        id: "03",
        type: "Living Room",
        title: "Cozy Corner",
        image: "/images/inner-peace-2.png",
    },
    {
        id: "04",
        type: "Kitchen",
        title: "Culinary Haven",
        image: "/images/inner-peace.png",
    },
]

export default function RoomInspiration() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (isAnimating) return;

        const next = (currentIndex + 1) % roomData.length;
        setNextIndex(next);
        setIsAnimating(true);
    };

    useEffect(() => {
        if (isAnimating && nextIndex !== null) {
            const timer = setTimeout(() => {
                setCurrentIndex(nextIndex);
                setNextIndex(null);
                setIsAnimating(false);
            }, 600); // Match with animation duration

            return () => clearTimeout(timer);
        }
    }, [isAnimating, nextIndex]);

    const currentItem = roomData[currentIndex];
    const nextItem = nextIndex !== null ? roomData[nextIndex] : null;

    const getThumbnails = (index: number) => {
        return [
            ...roomData.slice(index + 1),
            ...roomData.slice(0, index)
        ];
    };

    const currentThumbnails = getThumbnails(currentIndex);
    const nextThumbnails = nextIndex !== null ? getThumbnails(nextIndex) : [];

    return <section className="py-11 bg-cream-2 flex flex-col max-md:gap-y-8 md:flex-row md:items-center md:gap-x-[42px] relative">
        <div className="md:w-1/3 pl-8 lg:pl-[100px] flex flex-col">
            <h4 className="text-gray-1 font-bold text-[40px] leading-[120%] mb-[7px]">
                50+ Beautiful rooms inspiration
            </h4>
            <p className="font-medium leading-[150%] text-[#616161] mb-[37px]">
                Our designer already made a lot of beautiful prototype of rooms that
                inspire you
            </p>
            <button className="font-semibold leading-[150%] text-white bg-primary py-3 px-9 max-w-[176px] hover:bg-primary/90 transition-all">
                Explore More
            </button>
        </div>
        <div className="md:w-2/3 flex gap-x-3 md:gap-x-6 overflow-hidden">
            <div className="relative w-[404px] h-[582px] shrink-0 main-container">
                {/* Current Image */}
                <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    width={404}
                    height={582}
                    className={`object-cover absolute w-[404px] h-[582px] ${isAnimating ? "current-exit" : ""}`}
                />

                {/* Next Image (only shown during animation) */}
                {nextItem && (
                    <Image
                        src={nextItem.image}
                        alt={nextItem.title}
                        width={404}
                        height={582}
                        className="object-cover absolute w-[404px] h-[582px] next-enter"
                    />
                )}

                <div className="absolute left-6 bottom-6 flex items-end">
                    {/* Current Content */}
                    <div className={`flex flex-col p-8 pr-4 bg-white/70 w-[240px] backdrop-blur-sm gap-y-2 absolute ${isAnimating ? "content-exit" : ""}`}>
                        <p className="text-[#616161] font-medium">{currentItem.id} —— {currentItem.type}</p>
                        <p className="font-semibold text-[28px] leading-[120%] text-gray-1 text-nowrap">
                            {currentItem.title}
                        </p>
                    </div>

                    {/* Next Content */}
                    {nextItem && (
                        <div className="flex flex-col p-8 bg-white/70 w-[240px] backdrop-blur-sm gap-y-2 absolute content-enter">
                            <p className="text-[#616161] font-medium">{nextItem.id} —— {nextItem.type}</p>
                            <p className="font-semibold text-[28px] leading-[120%] text-gray-1 text-nowrap">
                                {nextItem.title}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="relative flex flex-col gap-y-10 shrink-0 overflow-hidden flex-1">
                <div className="relative overflow-x-hidden h-[486px] flex gap-x-6">
                    {/* Current Thumbnails */}
                    <div className={`flex gap-x-6 absolute ${isAnimating ? "thumbnails-exit" : ""}`}>
                        {currentThumbnails.map((item) => (
                            <Image
                                key={item.id}
                                src={item.image}
                                alt={item.title}
                                width={372}
                                height={486}
                                className="object-cover w-[372px] h-[486px]"
                            />
                        ))}
                    </div>

                    {/* Next Thumbnails */}
                    {nextItem && (
                        <div className="flex gap-x-6 absolute thumbnails-enter">
                            {nextThumbnails.map((item) => (
                                <Image
                                    key={item.id}
                                    src={item.image}
                                    alt={item.title}
                                    width={372}
                                    height={486}
                                    className="object-cover w-[372px] h-[486px]"
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-x-5 relative ml-2">
                    {roomData.map((_, index) => (
                        <div
                            key={index}
                            className={`rounded-full size-[11px] ${
                                index === currentIndex ? "bg-primary relative before:content-[''] before:size-[27px] before:absolute before:-top-2 before:-left-2 before:rounded-full before:border before:border-primary before:p-2" : "bg-[#D8D8D8]"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div className="absolute z-10 max-md:bottom-80 md:top-1/2 md:-translate-y-1/2 right-2.5 md:right-10 lg:right-20">
            <button onClick={handleNext} className="flex items-center justify-center size-12 bg-white rounded-full shadow-xl">
                <ChevronRight2 />
            </button>
        </div>
    </section>
}