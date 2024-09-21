interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  
  return (
    <div  className="border-b border-slate-200 p-4">
      <div className="flex  items-center">
        <Avatar name = {authorName}></Avatar> 
        <div className="font-light pl-2 pr-2 text-sm"> {authorName} </div> 
        <div>
          &middot;
        </div>
        <div className="font-thin text-gray-400 pl-2 text-sm"> {publishedDate} </div>
      </div>
      <div className="pt-2 text-lg font-bold">{title}</div>
      <div className="pt-2 text-md font-thin">
        {content.length > 100 ? content.slice(0, 100) + "..." : content}
      </div>
      <div className=" pt-4 w-full text-slate-500 text-sm font-thin">{Math.ceil(content.length / 100) + " min(s) read"}</div>
    </div>
  );
};

function Avatar({name} : {name: string}) {
    return <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-light font- text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
    
}
