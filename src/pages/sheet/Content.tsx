import { useEffect, useState } from "react";

export default function Content({ data }: any) {
  const [content, setContent] = useState<null | any>(null);
  const [active, setActive] = useState<null | string>(null);
  const [activeAudio, setActiveAudio] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(true);
  const [dataSheet, setdataSheet] = useState(null);

  function transformArray(inputArray: any) {
    useEffect(() => {}, []);

    const resultArray = [];
    let currentTitle = null;
    let currentItems = [];

    for (const row of inputArray) {
      const firstCell = row[0];

      if (firstCell === "$") {
        // If the row starts with '$', it is a title row
        if (currentTitle !== null) {
          // Save the previous title and items
          resultArray.push({
            title: currentTitle,
            items: currentItems,
          });
        }

        // Set the new title
        currentTitle = row[1];
        // Reset the items array
        currentItems = [];
      } else {
        // If the row doesn't start with '$', it is an item row
        const item = {
          subtitle: row[1],
          description: row[2],
          code: row[3],
        };

        // Add the item to the current items array
        currentItems.push(item);
      }
    }

    // Add the last title and items
    if (currentTitle !== null) {
      resultArray.push({
        title: currentTitle,
        items: currentItems,
      });
    }

    return resultArray;
  }

  function handleActive(index: string, contentCode: any) {
    setActive(index);
    // setActiveChild(indexChild);
    setContent(contentCode);
  }

  function onStartAudio() {
    if (activeAudio) {
      return;
    }
    setActiveAudio(true);
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(content?.description);
    utterThis.onend = function (_) {
      setActiveAudio(false);
    };
    synth.speak(utterThis);
  }

  const outputArray = transformArray(data);

  return (
    <div className="mb-5">
      <div className="md:columns-2 lg:columns-4 text-sm gap-4 mb-14">
        {outputArray.map(({ title, items }: any, index: number) => {
          return (
            <div key={index} className="break-inside-avoid mb-6">
              <div className="border-b-4 border-primary-600">
                <span className="text-white pb-1 pt-2 px-4 font-bold bg-primary-600 rounded-t-md  rounded-sm">
                  {title}
                </span>
              </div>
              <ul className=" [&>*:nth-child(even)]:bg-primary-200">
                {items.map(
                  (
                    { subtitle, description, code }: any,
                    indexChild: number
                  ) => {
                    return (
                      <li
                        key={indexChild}
                        className={
                          active === index.toString() + indexChild.toString()
                            ? "text-white font-bold px-3 py-1 !bg-primary-700 cursor-pointer text-shadow  rounded-sm"
                            : "" + "font-bold px-3 py-1 cursor-pointer"
                        }
                        onClick={() =>
                          handleActive(
                            index.toString() + indexChild.toString(),
                            {
                              subtitle,
                              description,
                              code,
                            }
                          )
                        }
                      >
                        {subtitle}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          );
        })}
      </div>

      {content && (
        <div className="border-2 relative border-primary-200 rounded-xl p-6">
          {/* absolute top-[-120px] opacity-30 z-[-1] */}

          <svg
            width="1247"
            height="513"
            viewBox="0 0 1247 513"
            fill="none"
            className="absolute top-[-120px] opacity-30 z-[-1]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" filter="url(#filter0_f_8979_5)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1080.47 264.172C1057.98 285.716 1006.49 302.197 959.86 319.766C919.683 334.903 876.866 348.397 825.851 360.103C769.027 373.142 715.437 391.289 644.403 392.152C573.14 393.018 513.294 376.903 454.421 364.615C399.068 353.063 359.654 337.144 311.939 322.763C246.633 303.08 133.928 291.913 121.154 264.172C108.804 237.354 198.452 216.539 253.21 195.231C301.741 176.346 355.911 159.619 422.562 146.884C491.003 133.808 564.518 116.905 644.403 120.488C724.157 124.064 758.069 155.11 831.551 165.227C917.218 177.021 1044.89 160.753 1102.13 183.505C1156.9 205.274 1107.77 238.021 1080.47 264.172Z"
                fill="#8873EF"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_8979_5"
                x="0"
                y="0"
                width="1246.93"
                height="512.186"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="60"
                  result="effect1_foregroundBlur_8979_5"
                />
              </filter>
            </defs>
          </svg>

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-secondary-950 ">
              {content?.subtitle}
            </h3>
            {content.description && (
              <div
                onClick={onStartAudio}
                className={
                  activeAudio
                    ? "opacity-50 border rounded-full p-2"
                    : "border rounded-full p-2 cursor-pointer"
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9218 3.00001C12.7635 3.00615 12.6125 3.06774 12.495 3.17401L6.79502 7.91401C6.70196 8.00643 6.58917 8.07658 6.46512 8.11919C6.34107 8.16179 6.20898 8.17575 6.07877 8.16001H2.40602C2.28682 8.15921 2.16865 8.1821 2.05837 8.22735C1.94809 8.2726 1.84789 8.3393 1.7636 8.42359C1.67931 8.50788 1.61261 8.60807 1.56736 8.71835C1.52211 8.82864 1.49922 8.94681 1.50002 9.06601V14.9355C1.49942 15.0546 1.52246 15.1726 1.5678 15.2827C1.61313 15.3928 1.67987 15.4928 1.76414 15.577C1.84841 15.6611 1.94854 15.7276 2.05872 15.7728C2.1689 15.818 2.28695 15.8408 2.40602 15.84H6.07502C6.20523 15.8243 6.33732 15.8382 6.46137 15.8808C6.58542 15.9234 6.69821 15.9936 6.79127 16.086L12.4913 20.826C12.882 21.1508 13.302 20.994 13.302 20.6093V3.39151C13.3049 3.34028 13.2972 3.28901 13.2793 3.24093C13.2614 3.19286 13.2336 3.14903 13.1979 3.11223C13.1622 3.07542 13.1191 3.04644 13.0716 3.02712C13.0241 3.00781 12.9731 2.99857 12.9218 3.00001ZM20.25 4.72501L18.9068 6.06976C20.0409 7.84389 20.6436 9.90558 20.6436 12.0113C20.6436 14.1169 20.0409 16.1786 18.9068 17.9528L20.2455 19.2848C21.7132 17.1409 22.499 14.6037 22.4998 12.0056C22.5006 9.40747 21.7164 6.86974 20.25 4.72501ZM17.0003 7.96726L15.6788 9.30001C16.2655 10.0831 16.5826 11.0353 16.5826 12.0139C16.5826 12.9924 16.2655 13.9446 15.6788 14.7278L16.9958 16.0448C17.9223 14.9032 18.4287 13.478 18.43 12.0077C18.4314 10.5374 17.9277 9.1113 17.0033 7.96801L17.0003 7.96726Z"
                    fill="#8873EF"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="grid gap-8 grid-cols-10">
            <div className="w-100 col-span-7 border bg-white border-gray-100 rounded p-4 overflow-x-auto">
              <pre>{content?.code}</pre>
            </div>
            <div className="col-span-3 whitespace-pre-line text-secondary-950">
              {content?.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
