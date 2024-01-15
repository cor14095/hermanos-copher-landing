import localFont from 'next/font/local'

const neoTech = localFont({
  src: [
    {
      path: './fonts/Neo-Tech-Std-Medium-Italic.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Neo-Tech-Std-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Neo-Tech-Std-Bold-Italic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Neo-Tech-Std-Black-Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export { neoTech };