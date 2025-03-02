"use client";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

interface IFilter {
    children: ReactNode,
    title:string
}

function Filter(props:IFilter) {
    const [filterOpen, setFilterOpen] = useState<boolean>(false);

    return (
        <div className="w-full border-b">
            <p onClick={() => setFilterOpen(!filterOpen)} className={`flex items-center justify-between p-4 hover:bg-slate-100 duration-300 transition-all cursor-pointer ${filterOpen ? "bg-slate-100" : "initial"}`}>
                {props.title}
                {filterOpen ? <FaAngleUp /> : <FaAngleDown />}
            </p>
            <div
                className={`w-full   px-3 overflow-hidden transition-all duration-300 ease-in-out ${
                    filterOpen ? "max-h-screen  opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                {props.children}
            </div>
        </div>
    );
}

export default Filter;
