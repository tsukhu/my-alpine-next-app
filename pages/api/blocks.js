// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    const data = [
        {
            id: 1,
            ssr: true,
            name: 'demo1'
        },
        {
            id: 2,
            name: 'demo2',
            ssr: false
        }, {
            id: 3,
            name: 'demo3',
            ssr: false
        },

        {
            id: 4,
            name: 'demo4',
            ssr: false
        }, {
            id: 5,
            name: 'demo5',
            ssr: true
        }
    ]
    res.status(200).json(data);
}
