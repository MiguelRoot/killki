

export function Response({ dataType }: { dataType: string }) {
    let result = "";
    let badgeColor = "";

    if (dataType === "boolean") {
        result = "b";
        badgeColor = "bg-orange-300 text-yellow-900";
    } else if (dataType === "string") {
        result = "s";
        badgeColor = "bg-blue-300 text-blue-900";
    } else if (dataType === "number") {
        result = "n";
        badgeColor = "bg-green-300 text-green-900";
    } else if( dataType === "object") {
        result = "o";
        badgeColor = "bg-purple-300 text-purple-900";
    } else if( dataType === "array") {
        result = "a";
        badgeColor = "bg-pink-300 text-pink-900";
    }

    return (
        <>
            {result && (
                <span className={`px-1 py-px rounded-md font-bold text-xs ${badgeColor}`}>
                    {result}
                </span>
            )}
        </>
    );
    
}