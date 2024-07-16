export const Quotes = ({
  comment,
  author,
  designation,
}: {
  comment: string;
  author: string;
  designation: string;
}) => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="max-w-lg ">
          <div className="text-3xl font-bold"> {comment}</div>
          <div className="mt-4 font-semibold">
            <div className="  text-xl max-w-md">{author}</div>
            <div className=" text-sm text-slate-400  max-w-md">{designation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
