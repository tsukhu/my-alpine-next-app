import { sanitize } from 'isomorphic-dompurify';
import Head from 'next/head'
export default function SanitizedComponent ({contentHTML}) {
  //  console.log(contentHTML);
  //  console.log(sanitize(contentHTML,{ADD_ATTR: ['x-data','@click','x-show']}));
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: contentHTML }}></div>
        </>
    )
}