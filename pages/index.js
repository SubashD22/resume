import Head from 'next/head'
import Page1 from '@/components/firstPage/Page1'
import Page2 from '@/components/secondPage/Page2'
import Page3 from '@/components/thirdPage/Page3'


export default function Home() {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="description" content="Resume Created using React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"></link>
	     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	     <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nerko+One&family=Ubuntu:wght@500&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/girl_image.png" />
      </Head>
      <main>
        <Page1/>
        <Page2/>
        <Page3/>
      </main>
    </>
  )
}
