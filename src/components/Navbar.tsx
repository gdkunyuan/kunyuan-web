import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '产品服务', path: '/services' },
  { name: '客户案例', path: '/cases' },
  { name: '知识分享', path: '/knowledge' },
  { name: '联系我们', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card shadow-glow-sm' : 'bg-primary/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-9 h-9 bg-gradient-to-br from-cta to-accent rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cta to-accent animate-gradient-x opacity-75"></div>
              <span className="relative text-white font-bold text-sm leading-none">坤</span>
            </div>
            <div className="flex flex-col">
              <span className="text-text-main font-semibold text-sm leading-tight hidden sm:block group-hover:text-cta transition-colors">广东坤元企业管理咨询</span>
              <span className="text-text-muted text-xs leading-tight hidden sm:block">有限公司</span>
              <span className="text-text-main font-semibold text-base leading-tight sm:hidden group-hover:text-cta transition-colors">坤元咨询</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer relative group ${
                  location.pathname === link.path
                    ? 'text-cta'
                    : 'text-text-muted hover:text-text-main'
                }`}
              >
                {location.pathname === link.path && (
                  <span className="absolute inset-0 bg-cta/10 rounded-lg"></span>
                )}
                <span className="relative">{link.name}</span>
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-cta to-transparent"></span>
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-cta to-accent-secondary text-white text-sm font-medium rounded-lg hover:shadow-glow transition-all duration-200 cursor-pointer"
            >
              免费咨询
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-white/10 transition-colors duration-200 cursor-pointer"
            aria-label="切换菜单"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-cta/20 px-6 py-4 space-y-1 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                location.pathname === link.path
                  ? 'text-cta bg-cta/10'
                  : 'text-text-muted hover:text-text-main hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full mt-3 px-4 py-3 bg-gradient-to-r from-cta to-accent-secondary text-white text-sm font-medium rounded-lg text-center hover:shadow-glow transition-colors duration-200 cursor-pointer"
          >
            免费咨询
          </Link>
        </div>
      )}
    </nav>
  )
}
