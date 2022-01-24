// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const data = [
    {
      id: 1,
      contentHTML: `<h1>Hello Static</h1>`,
      ssr: true
    },
    {
      id: 2,
      contentHTML: `<div x-data="{ open: false }">
      <button @click="open = !open">Expand</button>
      
      <span x-show="open">
        Content...
      </span>
      </div>`,
      ssr: false
    }
  ]
  res.status(200).json(data);
}
