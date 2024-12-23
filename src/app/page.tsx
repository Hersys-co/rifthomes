// import Link from 'next/link'
// import Hero from '@/components/home/hero'

// export default function Home() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-center">
//         Welcome to RiftHomes
//       </h1>
//       <div className="mt-8">
//         <Hero />
//         {/* Other sections will go here */}
//       </div>
//     </div>
//   )
// }

import Hero from '@/components/home/hero'

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Other sections will go here */}
    </main>
  )
}
