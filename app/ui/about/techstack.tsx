import Html from '@/public/html.png';
import Css from '@/public/css.png';
import Javascript from '@/public/js.png';
import Git from '@/public/git.png';
import GitHub from '@/public/github.png';
import React from '@/public/react.png';
import NextJS from '@/public/next.png'
import TailwindCSS from '@/public/tailwind-css.png'
import Firebase from '@/public/firebase.png';
import Image from 'next/image';

export default function TechstackLogos() {
    return (
        <div className='lg:flex gap-[16px] grid grid-cols-3'>
            <Image
                src={Html}
                width={100}
                height={760}
                className='rounded-3xl mx-auto my-auto'
                alt='Screenshots of the dashboard project showing desktop version'
            />
            <Image
                src={Css}
                width={100}
                height={760}
                className='rounded-3xl mx-auto my-auto'
                alt='Screenshots of the dashboard project showing desktop version'
            />
            <Image
                src={Javascript}
                width={100}
                height={760}
                className='rounded-3xl mx-auto my-auto'
                alt='Screenshots of the dashboard project showing desktop version'
            />
            <Image
                src={Git}
                width={100}
                height={760}
                className='rounded-3xl mx-auto my-auto'
                alt='Screenshots of the dashboard project showing desktop version'
            />
            <Image
                src={GitHub}
                width={100}
                height={760}
                className='rounded-3xl mx-auto my-auto'
                alt='Screenshots of the dashboard project showing desktop version'
            />
            <Image
                src={React}
                width={100}
                height={760}
                className='rounded-3xl mx-auto my-auto'
                alt='Screenshots of the dashboard project showing desktop version'
            />
            <Image
                src={NextJS}
                width={100}
                height={760}
                className='rounded-3xl mx-auto my-auto'
                alt='Screenshots of the dashboard project showing desktop version'
            />
            <Image
                src={TailwindCSS}
                width={100}
                height={760}
                className='rounded-3xl mx-auto my-auto'
                alt='Screenshots of the dashboard project showing desktop version'
            />
            <Image
                src={Firebase}
                width={100}
                height={760}
                className='rounded-3xl mx-auto my-auto'
                alt='Screenshots of the dashboard project showing desktop version'
            />
        </div>
    )
}