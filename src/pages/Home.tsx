import { Link } from 'react-router-dom'
import {
  ArrowRight,
  TrendingUp,
  Users,
  BarChart3,
  Cpu,
  Shield,
  Award,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: '企业管理咨询',
    desc: '为企业提供战略规划、运营优化、组织变革等全方位管理咨询服务，助力企业提升核心竞争力。',
    color: 'bg-blue-50 text-cta',
  },
  {
    icon: Users,
    title: '人力资源服务',
    desc: '涵盖人才招募、绩效管理、薪酬体系设计、员工培训发展等人力资源全链条服务。',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: BarChart3,
    title: '财务管理咨询',
    desc: '提供财务规划、成本管控、资金管理、财税筹划等专业财务咨询，保障企业财务健康运营。',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Cpu,
    title: 'IT 技术服务',
    desc: '提供企业信息化建设、数字化转型、系统集成及技术运维等 IT 服务，赋能企业数字化升级。',
    color: 'bg-violet-50 text-violet-600',
  },
]

const stats = [
  { value: '500+', label: '服务企业' },
  { value: '50+', label: '行业覆盖' },
  { value: '98%', label: '客户满意度' },
  { value: '10+', label: '年专业经验' },
]

const advantages = [
  { icon: Shield, title: '专业资质', desc: '拥有多项专业资质认证，团队成员均具备丰富行业经验' },
  { icon: Award, title: '行业口碑', desc: '多年深耕企业服务领域，积累了大量标杆客户案例' },
  { icon: CheckCircle2, title: '定制方案', desc: '根据每家企业的实际情况，量身定制最适合的解决方案' },
  { icon: TrendingUp, title: '持续支持', desc: '提供全程跟踪服务，确保方案落地实施及持续优化' },
]

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cta/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-slate-700/20 rounded-full blur-3xl"></div>
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cta/20 border border-cta/30 rounded-full text-xs text-blue-300 font-medium mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              专注企业管理咨询 · 助力企业腾飞
            </div>
            <h1 className="text-4xl lg:text-6xl font-semibold text-white leading-tight mb-6 animate-fade-up">
              赋能企业发展
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                专业咨询 · 精准落地
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              广东坤元企业管理咨询有限公司，专注为企业提供管理咨询、人力服务、财务管理及 IT 技术服务，
              以专业团队和丰富经验，为您的企业构建核心竞争优势。
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-cta text-white font-medium rounded-xl hover:bg-cta-hover transition-all duration-200 shadow-lg shadow-blue-900/30 cursor-pointer"
              >
                免费咨询
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20 cursor-pointer"
              >
                了解服务
                <ChevronRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="relative h-12 bg-primary">
          <svg
            className="absolute bottom-0 left-0 right-0 w-full"
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 48L1440 48L1440 0C1200 32 960 48 720 48C480 48 240 32 0 0L0 48Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-bg-light py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-3xl lg:text-4xl font-semibold text-cta mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">核心服务</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">四大专业服务领域</h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              整合企业管理、人力、财务及IT四大服务体系，为企业提供一站式专业解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 ${svc.color} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-primary font-semibold text-lg mb-3">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-cta text-sm font-medium hover:gap-2 transition-all duration-200 cursor-pointer"
                  >
                    了解详情
                    <ArrowRight size={15} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">我们的优势</p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-6">
                为什么选择坤元咨询
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                坤元企业管理咨询以深厚的行业积淀和专业的服务团队，为数百家企业提供了切实有效的管理提升方案，
                帮助企业实现组织效率提升、运营成本优化和持续健康发展。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {advantages.map((adv, i) => {
                  const Icon = adv.icon
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-50 text-cta rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-primary text-sm mb-1">{adv.title}</div>
                        <div className="text-slate-500 text-xs leading-relaxed">{adv.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-secondary transition-colors duration-200 cursor-pointer"
              >
                了解更多
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cta/10 to-blue-100/30 rounded-3xl transform rotate-2"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 bg-cta rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">坤</span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">坤元咨询服务承诺</div>
                    <div className="text-slate-400 text-sm">Enterprise Management</div>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    '深度调研，精准诊断企业问题',
                    '量身定制，提供个性化解决方案',
                    '专家团队，全程陪跑落地实施',
                    '持续跟踪，确保长期效果达成',
                    '保密协议，严格保护商业信息',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={13} className="text-emerald-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-400">已服务客户</div>
                    <div className="text-cta font-semibold text-lg">500+</div>
                  </div>
                  <div className="mt-2 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-cta to-cyan-500 rounded-full"></div>
                  </div>
                  <div className="mt-1 text-xs text-slate-400 text-right">满意度 98%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-cta py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">准备好提升您的企业竞争力了吗？</h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            立即联系我们的专业顾问，获取免费企业诊断报告和定制化解决方案
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-cta font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg cursor-pointer"
            >
              立即免费咨询
              <ArrowRight size={17} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/15 text-white font-medium rounded-xl hover:bg-white/25 transition-colors duration-200 border border-white/30 cursor-pointer"
            >
              查看服务详情
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
