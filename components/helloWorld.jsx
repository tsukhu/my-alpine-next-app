export default function HelloWorld({ data }) {
    return (
        <div className="flex flex-col w-full items-center">
            {data.map((d) => {
                return (<div key={d.key} className="bg-purple-700 text-white m-2 p-2 w-full rounded"> 
                    {d.name}
                </div>)
            })
            }
        </div>
    )
}