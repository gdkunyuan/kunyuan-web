import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '产品服务', path: '/services' },
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
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 bg-cta rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm leading-none">坤</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-semibold text-sm leading-tight hidden sm:block">广东坤元企业管理咨询</span>
              <span className="text-slate-400 text-xs leading-tight hidden sm:block">有限公司</span>
              <span className="text-primary font-semibold text-base leading-tight sm:hidden">坤元咨询</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  location.pathname === link.path
                    ? 'text-cta bg-blue-50'
                    : 'text-secondary hover:text-cta hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2 bg-cta text-white text-sm font-medium rounded-lg hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
            >
              免费咨询
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-secondary hover:text-primary hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
            aria-label="切换菜单"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                location.pathname === link.path
                  ? 'text-cta bg-blue-50'
                  : 'text-secondary hover:text-cta hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full mt-3 px-4 py-3 bg-cta text-white text-sm font-medium rounded-lg text-center hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
          >
            免费咨询
          </Link>
        </div>
      )}
    </nav>
  )
}
