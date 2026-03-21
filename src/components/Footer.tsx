import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-cta rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">坤</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm leading-tight">广东坤元企业管理咨询有限公司</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              专注企业管理咨询、人力资源、财务管理及 IT 服务，为企业提供专业、高效的一站式解决方案，助力企业持续增长。
            </p>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start gap-2 text-slate-400">
                  <MapPin size={15} className="text-cta flex-shrink-0 mt-0.5" />
                  <span>中山市三乡镇雍陌村教育路6号<br />雍泉度假山庄领秀山1幢502房</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Phone size={15} className="text-cta flex-shrink-0" />
                  <span>400-XXX-XXXX</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Mail size={15} className="text-cta flex-shrink-0" />
                  <span>gdkunyuan@163.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">快速导航</h3>
            <ul className="space-y-2.5">
              {[
                { name: '首页', path: '/' },
                { name: '关于我们', path: '/about' },
                { name: '产品服务', path: '/services' },
                { name: '联系我们', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer group"
                  >
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">主营业务</h3>
            <ul className="space-y-2.5">
              {['企业管理咨询', '人力资源服务', '财务管理咨询', 'IT 技术服务'].map((s) => (
                <li key={s}>
                  <span className="flex items-center gap-1.5 text-sm text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-cta inline-block flex-shrink-0"></span>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © 2026 广东坤元企业管理咨询有限公司. 保留所有权利.
          </p>
          <p className="text-slate-600 text-xs">粤ICP备XXXXXX号</p>
        </div>
      </div>
    </footer>
  )
}
