import React from "react";
import Link from "next/link"

const GetLink = (props) => {
    return (
        <div>
            <div className={props.Class}>
                <Link href={`/secondPage?content=${props.title}`} as={props.Disp}>
                <a>{props.title}</a>
                </Link> 
            </div>
        </div>
    );
};

export default GetLink;