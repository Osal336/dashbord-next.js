import { Poppins, Lusitana } from 'next/font/google'

export const poppins = Poppins({
    weight: ['800', '700'], // Select font weights
    subsets: ['latin'], // Choose subsets
  });

  export const lusitana = Lusitana({
    weight: ['400','700'],
    subsets: ['latin']
  });