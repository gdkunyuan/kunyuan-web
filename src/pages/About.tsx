import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  CheckCircle2,
} from 'lucide-react'

const timeline = [
  { year: '2022', event: '公司成立，专注企业管理咨询服务' },
  { year: '2023', event: '业务扩展至人力资源与财务咨询领域' },
  { year: '2024', event: '推出企业IT信息化建设服务，完善服务体系' },
  { year: '2025', event: '服务客户突破15家，建立行业标杆案例' },
  { year: '2026', event: '深化数字化服务能力，持续扩大服务版图' },
]

const team = [
  { name: '管理咨询团队', count: '5+', desc: '具备丰富管理咨询经验的资深顾问' },
  { name: '人力资源团队', count: '3+', desc: '人力资源专业从业者' },
  { name: '财务咨询团队', count: '3+', desc: '财务管理与税务规划专家' },
  { name: 'IT技术团队', count: '4+', desc: '软件工程师及信息化建设专家' },
]

const values = [
  { icon: Target, title: '使命', content: '帮助企业发现潜力、突破瓶颈，实现可持续健康增长' },
  { icon: Eye, title: '愿景', content: '成为华南地区最受信赖的一站式企业综合服务机构' },
  { icon: Heart, title: '价值观', content: '专业、诚信、创新、共赢 — 客户的成功是我们最大的荣誉' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 tech-bg opacity-30 animate-grid-move"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cta/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-xs text-cta font-medium mb-6 neon-border">
            <span className="font-mono">// ABOUT US</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5">
            值得信赖的企业服务伙伴
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            广东坤元企业管理咨询有限公司，深耕企业服务领域，以专业赋能企业成长
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="bg-bg-light py-24 relative">
        <div className="absolute inset-0 tech-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full text-xs text-cta font-medium mb-6">
                <span className="font-mono">// COMPANY PROFILE</span>
              </div>
              <h2 className="text-4xl font-bold text-text-main mb-6">
                专业团队，精益求精
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed text-lg">
                <p>
                  广东坤元企业管理咨询有限公司成立于 2022 年，总部位于广东省，是一家专业从事企业管理咨询、
                  人力资源服务、财务管理咨询及 IT 技术服务的综合性咨询机构。
                </p>
                <p>
                  公司拥有一支由资深管理顾问、人力资源专家、财务管理专家及信息化技术专家组成的专业团队，
                  团队成员具备丰富的实战经验，服务客户遍及制造业、贸易、零售、互联网等多个行业。
                </p>
                <p>
                  坚持以客户为中心，坤元咨询为每位客户提供深度调研、定制化方案及全程落地支持服务，
                  累计服务企业客户超过 20 家，客户满意度持续保持在 98% 以上。
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: '20+', label: '服务客户' },
                  { value: '3+', label: '年经验' },
                  { value: '98%', label: '满意度' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-6 glass-card rounded-xl hover:shadow-glow transition-all duration-300 cursor-default">
                    <div className="text-3xl font-bold text-cta glow-text">{s.value}</div>
                    <div className="text-text-muted text-xs mt-2 font-mono">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Mission Values */}
            <div className="space-y-5">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <div
                    key={i}
                    className="flex gap-5 p-6 glass-card rounded-2xl hover:shadow-glow transition-all duration-300 neon-border"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cta/20 to-accent/20 text-cta rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={26} />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-main mb-1.5">{v.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed">{v.content}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary/30 py-24 relative">
        <div className="absolute inset-0 tech-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full text-xs text-cta font-medium mb-6">
              <span className="font-mono">// PROFESSIONAL TEAM</span>
            </div>
            <h2 className="text-4xl font-bold text-text-main mb-4">经验丰富的专家团队</h2>
            <p className="text-text-muted max-w-xl mx-auto text-lg">
              我们的四大专业团队协同作战，为企业提供覆盖管理、人力、财务和 IT 的全方位服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <div
                key={i}
                className="group text-center p-8 glass-card rounded-2xl hover:shadow-glow transition-all duration-300 hover:-translate-y-1 neon-border"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cta/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users size={28} className="text-cta" />
                </div>
                <div className="text-3xl font-bold text-cta mb-2 glow-text">{t.count}</div>
                <h3 className="font-bold text-text-main mb-2">{t.name}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-bg-light py-24 relative">
        <div className="absolute inset-0 tech-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full text-xs text-cta font-medium mb-6">
              <span className="font-mono">// TIMELINE</span>
            </div>
            <h2 className="text-4xl font-bold text-text-main mb-4">稳步发展，持续精进</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cta via-accent to-accent-secondary lg:-translate-x-0.5"></div>

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="glass-card rounded-xl p-5 hover:shadow-glow transition-all duration-300 neon-border">
                      <div className="text-cta font-bold text-lg mb-1 font-mono">{item.year}</div>
                      <p className="text-text-muted text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 top-5 w-3 h-3 rounded-full bg-cta border-2 border-white shadow-glow lg:-translate-x-1.5 -translate-x-1.5"></div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-secondary/30 py-20 relative">
        <div className="absolute inset-0 tech-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full text-xs text-cta font-medium mb-6">
              <span className="font-mono">// QUALIFICATIONS</span>
            </div>
            <h2 className="text-4xl font-bold text-text-main">专业资质，实力保障</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Award, label: '企业管理咨询资质' },
              { icon: Award, label: '人力资源服务许可' },
              { icon: Award, label: '财务咨询专业认证' },
              { icon: Award, label: 'ISO 9001质量认证' },
            ].map((q, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-3 p-6 glass-card rounded-2xl hover:shadow-glow transition-all duration-300 neon-border"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <q.icon size={22} className="text-accent" />
                </div>
                <span className="text-text-main text-sm font-medium text-center">{q.label}</span>
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-success" />
                  <span className="text-success text-xs font-mono">已认证</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cta via-accent-secondary to-accent"></div>
        <div className="absolute inset-0 tech-bg opacity-20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-glow"></div>

        <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 font-medium mb-6">
            <span className="font-mono">PARTNER WITH US</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">与坤元携手，共创企业未来</h2>
          <p className="text-blue-100 mb-8 text-lg">联系我们，获取专属企业服务方案</p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-10 py-4 bg-white text-cta font-bold rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            立即联系
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
