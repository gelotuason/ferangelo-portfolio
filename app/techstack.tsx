'use client'

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

const imageProperties = [
    { src: Html, width: 30, height: 30 },
    { src: Css, width: 30, height: 30 },
    { src: Javascript, width: 30, height: 30 },
    { src: Git, width: 30, height: 30 },
    { src: GitHub, width: 30, height: 30 },
    { src: React, width: 30, height: 30 },
    { src: NextJS, width: 30, height: 30 },
    { src: TailwindCSS, width: 30, height: 30 },
    { src: Firebase, width: 30, height: 30 },
]

export default function TechstackLogos() {
    return (
        <figure className='md:flex gap-2 md:gap-8 lg:gap-5 grid grid-cols-5'>
            {
                imageProperties.map((property) => {
                    return (
                        <Image
                            src={property.src}
                            width={property.width}
                            height={property.height}
                            className='rounded-3xl mx-auto my-auto'
                            alt='Tech stack logo'
                            style={{ width: 'auto', height: 'auto' }}
                        >
                        </Image>
                    )

                })
            }
        </figure>
    )

}