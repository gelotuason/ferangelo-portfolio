import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

interface SocialLinksProps {
    linkedin_url: string,
    github_url: string
}

export function SocialLinks({ linkedin_url, github_url }: SocialLinksProps) {
    return (
        <div className='flex gap-[12px]'>
            <Link href={linkedin_url} target="_blank" className='w-5 h-5'>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>

            <Link href={github_url} target="_blank" className='w-5 h-5'>
                <FontAwesomeIcon icon={faGithub} />
            </Link>
        </div>
    )
}