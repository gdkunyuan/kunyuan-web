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
  Zap,
  Rocket,
  Target,
} from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: '企业管理咨询',
    desc: '为企业提供战略规划、运营优化、组织变革等全方位管理咨询服务，助力企业提升核心竞争力。',
    color: 'text-cta',
    bgColor: 'bg-gradient-to-br from-cta/20 to-cta/5',
  },
  {
    icon: Users,
    title: '人力资源服务',
    desc: '涵盖人才招募、绩效管理、薪酬体系设计、员工培训发展等人力资源全链条服务。',
    color: 'text-accent',
    bgColor: 'bg-gradient-to-br from-accent/20 to-accent/5',
  },
  {
    icon: BarChart3,
    title: '财务管理咨询',
    desc: '提供财务规划、成本管控、资金管理、财税筹划等专业财务咨询，保障企业财务健康运营。',
    color: 'text-success',
    bgColor: 'bg-gradient-to-br from-success/20 to-success/5',
  },
  {
    icon: Cpu,
    title: 'IT 技术服务',
    desc: '提供企业信息化建设、数字化转型、系统集成及技术运维等 IT 服务，赋能企业数字化升级。',
    color: 'text-accent-secondary',
    bgColor: 'bg-gradient-to-br from-accent-secondary/20 to-accent-secondary/5',
  },
]

const stats = [
  { value: '500+', label: '服务企业', icon: Zap },
  { value: '50+', label: '行业覆盖', icon: Target },
  { value: '98%', label: '客户满意度', icon: Award },
  { value: '10+', label: '年专业经验', icon: Rocket },
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
        {/* Animated Background */}
        <div className="absolute inset-0 tech-bg animate-grid-move opacity-30"></div>

        {/* Glowing orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cta/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cta/10 via-transparent to-accent/10 rounded-full blur-3xl"></div>

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cta to-transparent"></div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-xs text-cta font-medium mb-8 animate-fade-in neon-border">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse"></span>
              <span className="font-mono">SYSTEM READY // 专注企业管理咨询 · 助力企业腾飞</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
              赋能企业发展
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cta via-accent to-accent-secondary animate-gradient-x bg-[length:200%_auto]">
                专业咨询 · 精准落地
              </span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              广东坤元企业管理咨询有限公司，专注为企业提供管理咨询、人力服务、财务管理及 IT 技术服务，
              以专业团队和丰富经验，为您的企业构建核心竞争优势。
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cta to-accent-secondary text-white font-semibold rounded-xl hover:shadow-neon transition-all duration-300 cursor-pointer"
              >
                免费咨询
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-8 py-4 glass-card text-text-main font-medium rounded-xl hover:bg-cta/20 hover:border-cta/50 transition-all duration-300 cursor-pointer"
              >
                了解服务
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-secondary/30 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="group text-center p-6 glass-card rounded-2xl hover:shadow-glow transition-all duration-300 cursor-default"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cta/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-cta" />
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-text-main mb-1 glow-text">{stat.value}</div>
                  <div className="text-text-muted text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-bg-light py-24 relative overflow-hidden">
        <div className="absolute inset-0 tech-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full text-xs text-cta font-medium mb-6">
              <span className="font-mono">// CORE SERVICES</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-main mb-4">四大专业服务领域</h2>
            <p className="text-text-muted max-w-2xl mx-auto leading-relaxed text-lg">
              整合企业管理、人力、财务及IT四大服务体系，为企业提供一站式专业解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon
              return (
                <div
                  key={i}
                  className="group glass-card rounded-2xl p-8 hover:shadow-glow hover:-translate-y-2 transition-all duration-300 cursor-pointer neon-border"
                >
                  <div className={`w-14 h-14 ${svc.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={svc.color} />
                  </div>
                  <h3 className="text-text-main font-bold text-xl mb-3 group-hover:text-cta transition-colors">{svc.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-cta text-sm font-medium group-hover:gap-3 transition-all duration-200 cursor-pointer"
                  >
                    了解详情
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-secondary/20 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full tech-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full text-xs text-cta font-medium mb-6">
                <span className="font-mono">// WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-main mb-6">
                为什么选择坤元咨询
              </h2>
              <p className="text-text-muted leading-relaxed mb-8 text-lg">
                坤元企业管理咨询以深厚的行业积淀和专业的服务团队，为数百家企业提供了切实有效的管理提升方案，
                帮助企业实现组织效率提升、运营成本优化和持续健康发展。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {advantages.map((adv, i) => {
                  const Icon = adv.icon
                  return (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-cta/20 to-accent/20 text-cta rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-text-main text-sm mb-1">{adv.title}</div>
                        <div className="text-text-muted text-xs leading-relaxed">{adv.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cta to-accent-secondary text-white font-medium rounded-xl hover:shadow-neon transition-all duration-300 cursor-pointer"
              >
                了解更多
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Visual Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cta/30 via-accent/20 to-accent-secondary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative glass-card rounded-3xl p-8 shadow-2xl neon-border">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-cta/20">
                  <div className="relative w-14 h-14 bg-gradient-to-br from-cta to-accent rounded-xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cta to-accent animate-gradient-x opacity-75"></div>
                    <span className="relative text-white font-bold text-xl">坤</span>
                  </div>
                  <div>
                    <div className="font-bold text-text-main">坤元咨询服务承诺</div>
                    <div className="text-text-muted text-sm font-mono">Enterprise Management</div>
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
                    <li key={i} className="flex items-center gap-3 text-sm text-text-muted">
                      <div className="w-6 h-6 bg-gradient-to-br from-success/20 to-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-success" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-cta/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs text-text-muted font-mono">SERVED CLIENTS</div>
                    <div className="text-cta font-bold text-2xl glow-text">500+</div>
                  </div>
                  <div className="h-3 bg-secondary/50 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-to-r from-cta via-accent to-accent-secondary rounded-full animate-gradient-x"></div>
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-success font-mono text-sm">98%</span>
                    <span className="text-text-muted text-xs ml-1">满意度</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cta via-accent-secondary to-accent"></div>
        <div className="absolute inset-0 tech-bg opacity-20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 font-medium mb-6">
            <span className="font-mono">START YOUR JOURNEY</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">准备好提升您的企业竞争力了吗？</h2>
          <p className="text-blue-100 mb-10 leading-relaxed text-lg">
            立即联系我们的专业顾问，获取免费企业诊断报告和定制化解决方案
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-white text-cta font-bold rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              立即免费咨询
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-white/15 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-white/25 transition-all duration-300 border border-white/30 cursor-pointer"
            >
              查看服务详情
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
