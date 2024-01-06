import { useState } from 'react';



export default function Content({data}: any) {
    const [content, setContent] = useState(null);
    const [active, setActive] = useState<null | number>(null);
    const [activeChild, setActiveChild] = useState<null | number>(null);

    function transformArray(inputArray: any) {
        const resultArray = [];
        let currentTitle = null;
        let currentItems = [];
    
        for (const row of inputArray) {
            const firstCell = row[0];
    
            if (firstCell === '$') {
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

    function handleActive(index: number, indexChild: number, contentCode: any ) {
        setActive(index);
        setActiveChild(indexChild);
        setContent(contentCode);
    }
    
    const outputArray = transformArray(data);
    
    return (
        <div className="mb-5">
            <div className=" md:columns-2 lg:columns-4 text-sm gap-4 mb-14">
            { outputArray.map(({title, items}: any, index: number) => {
            return  (<div key={index} className="break-inside-avoid mb-6">
                <div className="border-b-4 border-primary-600">
                    <span className="text-white pb-1 pt-2 px-4 font-bold bg-primary-600 rounded-t-md">{title}</span>
                </div>
                <ul className=" [&>*:nth-child(even)]:bg-primary-200">
                    {items.map(({subtitle, description, code}: any, indexChild: number) => {
                        return (<li key={indexChild} className={ (activeChild === indexChild && active === index)
                            ? 'text-primary-600'
                            : '' + 'font-bold px-3 py-1 cursor-pointer'} onClick={() => handleActive(indexChild, index, {subtitle, description, code})}>{subtitle}</li>)
                    })}
                </ul>
            </div>)
            })}
        </div>

        <div className="grid grid-cols-2">
        <pre>{content?.code}</pre>
        <div>{content?.description}</div>

        </div>
        </div>
    );
}