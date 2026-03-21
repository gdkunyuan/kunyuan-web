import { Link } from 'react-router-dom'
import {
  ArrowRight,
  TrendingUp,
  Users,
  BarChart3,
  Cpu,
  CheckCircle2,
  Clock,
  Shield,
} from 'lucide-react'

const services = [
  {
    id: 'management',
    icon: TrendingUp,
    color: 'bg-gradient-to-br from-cta to-cta/80',
    lightColor: 'bg-cta/10',
    textColor: 'text-cta',
    title: '企业管理咨询',
    subtitle: 'Enterprise Management Consulting',
    overview:
      '坤元管理咨询团队深入企业内部，通过全面诊断与系统性规划，帮助企业识别发展瓶颈，制定切实可行的管理提升方案，实现持续健康增长。',
    items: [
      '企业战略规划与落地辅导',
      '组织架构优化与变革管理',
      '运营效率诊断与流程再造',
      '企业文化建设与落地推行',
      '绩效管理体系设计与实施',
      '内部控制体系建设与优化',
    ],
    tags: ['战略规划', '运营优化', '组织变革', '绩效管理'],
  },
  {
    id: 'hr',
    icon: Users,
    color: 'bg-gradient-to-br from-accent to-accent/80',
    lightColor: 'bg-accent/10',
    textColor: 'text-accent',
    title: '人力资源服务',
    subtitle: 'Human Resources Services',
    overview:
      '坤元人力资源服务团队为企业提供涵盖人才引进、员工发展、薪酬管理、劳动合规等全链条人力资源管理服务，助力企业建立专业高效的人才队伍。',
    items: [
      '人才测评与精准招募',
      '薪酬福利体系设计与优化',
      '员工培训与人才发展规划',
      '劳动关系管理与合规指导',
      '人力资源数字化转型支持',
      '岗位职级与职业发展通道建设',
    ],
    tags: ['人才招募', '薪酬设计', '员工培训', '劳动合规'],
  },
  {
    id: 'finance',
    icon: BarChart3,
    color: 'bg-gradient-to-br from-success to-success/80',
    lightColor: 'bg-success/10',
    textColor: 'text-success',
    title: '财务管理咨询',
    subtitle: 'Financial Management Consulting',
    overview:
      '坤元财务咨询团队由注册会计师及资深财税专家组成，为企业提供全面的财务管理、成本管控及税务筹划服务，保障企业财务健康运营，防范财务风险。',
    items: [
      '财务诊断与健康评估',
      '预算管理与成本管控体系建设',
      '税务筹划与风险防范',
      '资金管理与现金流优化',
      '财务流程标准化与规范化',
      '上市/融资财务准备辅导',
    ],
    tags: ['财务诊断', '税务筹划', '成本管控', '资金管理'],
  },
  {
    id: 'it',
    icon: Cpu,
    color: 'bg-gradient-to-br from-accent-secondary to-accent-secondary/80',
    lightColor: 'bg-accent-secondary/10',
    textColor: 'text-accent-secondary',
    title: 'IT 技术服务',
    subtitle: 'Information Technology Services',
    overview:
      '坤元 IT 服务团队助力企业推进信息化建设与数字化转型，从需求分析、系统规划到开发实施与运营维护，为企业构建安全高效的数字化基础设施。',
    items: [
      '企业信息化规划与咨询',
      '业务系统定制开发（ERP/OA/CRM）',
      '数字化转型方案设计与实施',
      '系统集成与数据互通',
      '网络安全与数据安全保障',
      'IT 系统运营维护与技术支持',
    ],
    tags: ['信息化建设', '系统开发', '数字化转型', '运维支持'],
  },
]

const process = [
  { step: '01', title: '需求调研', desc: '与客户深度沟通，全面了解企业现状与核心诉求' },
  { step: '02', title: '诊断分析', desc: '专家团队进行系统分析，精准识别问题与机会' },
  { step: '03', title: '方案制定', desc: '基于诊断结论，量身定制解决方案与实施计划' },
  { step: '04', title: '落地执行', desc: '专业团队全程陪跑，确保方案有效落地执行' },
  { step: '05', title: '持续优化', desc: '定期跟踪评估效果，根据实际情况持续调整优化' },
]

export default function Services() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 tech-bg opacity-30 animate-grid-move"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cta/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-xs text-cta font-medium mb-6 neon-border">
            <span className="font-mono">// PRODUCTS & SERVICES</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5">四大专业服务体系</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            整合管理、人力、财务、IT四大领域专业能力，为企业提供全链条一站式解决方案
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-bg-light py-24 relative">
        <div className="absolute inset-0 tech-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.id}
                className="group glass-card rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-500 neon-border"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left: Info */}
                  <div className={`p-10 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className={`w-14 h-14 ${svc.color} rounded-xl flex items-center justify-center shadow-lg shadow-cta/20`}>
                        <Icon size={26} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-text-main">{svc.title}</h2>
                        <p className={`text-xs ${svc.textColor} font-medium font-mono mt-1`}>{svc.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-text-muted leading-relaxed mb-7 text-lg">{svc.overview}</p>
                    <div className="flex flex-wrap gap-2 mb-7">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-4 py-1.5 ${svc.lightColor} ${svc.textColor} text-xs font-medium rounded-full border ${svc.textColor}/30`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                        <Clock size={14} className="text-cta" />
                        快速响应
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-text-muted font-mono">
                        <Shield size={14} className="text-cta" />
                        保密承诺
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cta to-accent-secondary text-white text-sm font-medium rounded-xl hover:shadow-neon transition-all duration-300 cursor-pointer"
                    >
                      咨询此服务
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right: Service Items */}
                  <div className={`bg-secondary/30 p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-text-main font-bold text-lg mb-6">服务内容</h3>
                    <ul className="space-y-4">
                      {svc.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 group/item">
                          <div className={`w-6 h-6 ${svc.lightColor} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`}>
                            <CheckCircle2 size={14} className={svc.textColor} />
                          </div>
                          <span className="text-text-muted text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-secondary/30 py-24 relative overflow-hidden">
        <div className="absolute inset-0 tech-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full text-xs text-cta font-medium mb-6">
              <span className="font-mono">// SERVICE PROCESS</span>
            </div>
            <h2 className="text-4xl font-bold text-text-main mb-4">标准化服务流程</h2>
            <p className="text-text-muted max-w-xl mx-auto text-lg">
              每一次服务都经过严谨规范的流程管控，确保为每位客户交付高质量的专业服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div key={i} className="relative group">
                <div className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-default">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cta to-accent-secondary text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-cta/30 group-hover:scale-110 transition-transform">
                      {p.step}
                    </div>
                    <h3 className="font-bold text-text-main mb-2">{p.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                {/* Arrow */}
                {i < process.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-2 w-6 h-6 items-center justify-center z-10">
                    <ArrowRight size={20} className="text-cta group-hover:text-accent transition-colors" />
                  </div>
                )}
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
            <span className="font-mono">GET STARTED</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">找到适合您企业的解决方案</h2>
          <p className="text-blue-100 mb-8 text-lg">我们的专业顾问将为您评估需求，推荐最合适的服务组合</p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-10 py-4 bg-white text-cta font-bold rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            立即预约咨询
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
