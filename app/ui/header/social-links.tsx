import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export function SocialLinks() {
    return (
        <div className='flex gap-[12px]'>
            <Link href="https://www.linkedin.com/in/ferangelo-tuason/" target="_blank" className='w-5 h-5'>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>

            <Link href="https://github.com/gelotuason" target="_blank" className='w-5 h-5'>
                <FontAwesomeIcon icon={faGithub} />
            </Link>
        </div>
    )
}