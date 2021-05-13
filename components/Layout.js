import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout(props) {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-2 flex-grow bg-gradient-to-r from-green-400 to-blue-500">
        {props.children}
      </main>

      <Footer />
    </div>
  )
}
