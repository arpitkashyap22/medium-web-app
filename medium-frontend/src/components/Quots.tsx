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
    <div className="bg-slate-400 h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div >
          <div className="text-3xl font-extrabold"> {comment}</div>
          <div>
            <div className="font-bold  text-xl">{author}</div>
            <div className="font-bold text-sm text-gray-700">{designation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
