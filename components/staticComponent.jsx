const review = `<h1>Hello Static</h1>`


export default function StaticComponent () {
    return (
        <div dangerouslySetInnerHTML={{ __html: review }}></div>
    )
}