import React, { useState } from 'react'

function PostComp({ title, content, date }: { title: string, content: string, date: string }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="bg-white p-3 drop-shadow-md mx-6 md:mx-24 my-4 rounded-lg">
                <div className="mx-6">
                    {/* initial container */}
                    <div>
                        {/* Image container if applicable */}
                    </div>
                    <div>
                        {/* title, date, and preview text */}
                        <div>
                            {/* title and date */}
                            <div className="text-2xl font-semibold px-2">
                                {title}
                                {/* Doggone */}

                            </div>
                            <div className="text-sm text-slate-400 px-2">
                                {date}
                                {/* Jul 16, 2022 */}
                            </div>
                        </div>
                        <div className={`p-2 ${isOpen ? '' : 'max-h-20 overflow-hidden'}`}>
                            {/*  text */}
                            <p> {content}</p>

                        </div>
                    </div>
                </div>
                <div className="px-8">
                    <div className={`${!isOpen ? '' : 'hidden'}`}>
                        <button className="underline text-blue-950 font-semibold" onClick={() => setIsOpen(!isOpen)}> Read more... </button>
                    </div>
                    <div className={`${isOpen ? '' : 'hidden'}`}>
                        <button className="underline text-blue-950 font-semibold" onClick={() => setIsOpen(!isOpen)}> Close </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostComp;