const review = `<div x-data="{ open: false }">
<button @click="open = !open">Expand</button>

<span x-show="open">
  Content...
</span>
</div>`


export default function AlpineComponent () {
    return (
        <div dangerouslySetInnerHTML={{ __html: review }}></div>
    )
}