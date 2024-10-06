'use client';

import Link from 'next/link';
import { ModeToggle } from './modetoogle';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

export default function Header() {
    const pathname = usePathname();
    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Skills', path: '/skills' },
    ];

    const handleDownloadCV = async () => {
        try {
            const pdfUrl = '../assets/curriculoantigo.pdf';
            const response = await fetch(pdfUrl);
            if (!response.ok) {
                throw new Error('Arquivo não encontrado');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'curriculo.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading CV:', error);
            toast({
                variant: "default",
                title: "Error downloading CV",
                description: "Failed to download CV. Please try again later.",
            });
        }
    };

    return (
        <div className='h-16 z-40'>
            <div className="h-16 z-50 bg-background fixed top-0 border-b w-full flex justify-center items-center">
                <div className="w-full max-w-[1500px] h-full flex justify-between items-center px-4 xl:px-0">
                    <nav className="hidden xl:block">
                        {navItems.map((item) => (
                            <Link key={item.path} href={item.path}>
                                <Button
                                    variant="ghost"
                                    className={`h-16 rounded-none text-muted-foreground hover:bg-transparent ${pathname === item.path ? 'border-b-2 text-secundary border-primary2/60' : ''}`}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </nav>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="xl:hidden">
                            <Button variant="ghost" className='text-muted-foreground' size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="flex flex-col gap-4 mt-8">
                                {navItems.map((item) => (
                                    <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                                        <Button
                                            variant="ghost"
                                            className={`w-full hover:bg-transparent justify-start text-muted-foreground border-transparent ${pathname === item.path ? 'border-l-primary2 dark:text-white text-black border-2 rounded-none' : ''}`}
                                        >
                                            {item.label}
                                        </Button>
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className='flex items-center gap-3'>
                        <ModeToggle />
                        <Link href="https://github.com/trickqz">
                            <svg className='dark:fill-muted-foreground cursor-pointer fill-black' width="27" height="25" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2296 3.84229C7.61749 3.84229 3.87891 7.58671 3.87891 12.2071C3.87891 15.9023 6.27137 19.038 9.58992 20.1435C10.0074 20.2203 10.1594 19.9624 10.1594 19.7402C10.1594 19.5423 10.1527 19.0154 10.1486 18.3181C7.82542 18.8234 7.33524 17.1966 7.33524 17.1966C6.95612 16.2296 6.40832 15.9725 6.40832 15.9725C5.65008 15.4546 6.46594 15.4647 6.46594 15.4647C7.30351 15.5231 7.74442 16.3265 7.74442 16.3265C8.48929 17.6042 9.6993 17.235 10.1745 17.0213C10.2513 16.481 10.4667 16.1127 10.7056 15.904C8.85172 15.6927 6.90185 14.9745 6.90185 11.7696C6.90185 10.8568 7.22751 10.1094 7.76112 9.52489C7.67511 9.31362 7.38868 8.46269 7.84296 7.31198C7.84296 7.31198 8.54441 7.08651 10.1394 8.16875C10.8206 7.98296 11.5235 7.88833 12.2296 7.88733C12.9394 7.89068 13.6533 7.98337 14.3206 8.16875C15.9147 7.08651 16.6145 7.31115 16.6145 7.31115C17.0704 8.46269 16.7832 9.31362 16.6979 9.52489C17.2324 10.1094 17.5564 10.8568 17.5564 11.7696C17.5564 14.9828 15.6032 15.6901 13.7435 15.8972C14.0433 16.1553 14.3097 16.6655 14.3097 17.4464C14.3097 18.5636 14.2997 19.4663 14.2997 19.7402C14.2997 19.9641 14.45 20.2246 14.8742 20.1427C16.5371 19.585 17.9826 18.5187 19.0064 17.0948C20.0304 15.6708 20.5808 13.961 20.5801 12.2071C20.5801 7.58671 16.8408 3.84229 12.2296 3.84229Z" fill="" />
                            </svg>
                        </Link>
                        <Link href="/contact" className="hidden sm:inline-block">
                            <Button className='h-8 bg-button border dark:border-border border-black/20 hover:bg-primary/20 dark:hover:bg-muted text-black dark:text-white'>Contact</Button>
                        </Link>
                        <Button 
                            className='h-8 bg-button-primary hover:bg-button-primary/80 border-buttonborder border text-black dark:text-white'
                            onClick={handleDownloadCV}
                        >
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}