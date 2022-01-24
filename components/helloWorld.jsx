export default function HelloWorld({ data }) {
    return (
        <>
            {data.map((d) => {
                return (<div key={d.key}>
                    {d.name}
                </div>)
            })
            }
        </>
    )
}