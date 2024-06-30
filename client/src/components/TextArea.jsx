import { useState } from "react";

/* eslint-disable react/prop-types */
const TextArea = ({ hadith }) => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="flex justify-center mt-56 space-x-10">
        <div className="bg-white text-black resize-none p-10 w-3/4 h-fit rounded">
          {hadith ? (
            hadith && (
              <>
                <h1 className="text-center text-3xl">Hadith</h1>
                <p className="italic mt-4 text-justify text-lg">
                  {hadith.hadeeth}
                </p>
                <br />
                <button
                  onClick={() => {
                    setClick(!click);
                  }}
                  className="font-bold"
                >
                  Explanation &#8681;
                </button>

                {click && (
                  <p className="text-justify mt-4">{hadith.explanation}</p>
                )}

                <div className="bottom-0 right-0 text-right text-sm p-0">
                  <span className="bottom-0 right-0 p-0">
                    {hadith.attribution}
                  </span>
                </div>
              </>
            )
          ) : (
            <>
              <h1 className="text-center text-3xl">
                Assalamualaikum Wa'Rahmatullahi Wa'Barakatuhu! Please click the
                button below to enlighten yourself with the Hadith of our
                Beloved Prophet (Peace Be Upon Him)
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TextArea;
