import RegisterHeader from 'src/components/RegisterHeader'
import Footer from '../../components/Footer'

interface Props {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <>
      <div className=' bg-slate-950  text-white'>
        <div className='px-6 py-2 flex justify-between items-center font-bold text-sm'>
          <div className='flex gap-2.5'>
            <span className='flex gap-1.5 p-2.5'>
              <img src='images/phone-icon.svg' alt='' />
              <a className='text-white' href='tel' title='(225) 555-0118' target='_blank'>
                (225) 555-0118
              </a>
            </span>
            <span className='flex gap-1.5 p-2.5'>
              <img src='images/email-icon.svg' alt='' />
              <a className='text-white' href='mailto:michelle.rivera@example.com' title='michelle.rivera@example.com'>
                michelle.rivera@example.com
              </a>
            </span>
          </div>
          <div>Follow Us and get a chance to win 80% off</div>
          <div className='flex items-center gap-2.5'>
            Follow Us:
            <span className='flex gap-1'>
              <img className='p-1' src='images/instagram-icon.svg' alt='' />
              <img className='p-1' src='images/youtube-icon.svg' alt='' />
              <img className='p-1' src='images/facebook-icon.svg' alt='' />
              <img className='p-1' src='images/twitter-icon.png' alt='' />
            </span>
          </div>
        </div>
      </div>
      <RegisterHeader />
      {children}
      <Footer />
    </>
  )
}
