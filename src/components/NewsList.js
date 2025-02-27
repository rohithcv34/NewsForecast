import React from "react";

const NewsList = ({articles})=>{      //extract articles prpps 
    return (
        <div className="space-y-6">
{articles.map((article,index)=>(  // iterates over the articles using map function 
<div key={index}className="border-b border-gray-200 mb-4 pb-4">
<h3 className="font-bold text-xl">{article.title}</h3>
<p className="text-gray-600">{article.description}</p>
<a
 href={article.url}
 className="text-blue-600"
 target="_blank"
 rel="noopener noreferrer"
>
    READ MORE
</a>
</div>
))}
</div>
    );
};
export default NewsList;


