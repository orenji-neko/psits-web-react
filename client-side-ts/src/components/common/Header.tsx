import { Link } from 'react-router';
import logo from '@/assets/logo.png';
import { Button } from '../ui/button';

export const Header = () => {
  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Events', href: '/events' },
    { title: 'Organizations', href: '/organizations' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img
            src={logo}
            alt="PSITS Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none tracking-tight text-primary">
              PSITS
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1">
              Student Chapter
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button size="sm" asChild className="rounded-full px-6">
            <Link to="/auth/signup">Join Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
