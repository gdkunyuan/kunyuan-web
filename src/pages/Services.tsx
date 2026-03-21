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
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
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
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
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
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
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
    color: 'bg-violet-500',
    lightColor: 'bg-violet-50',
    textColor: 'text-violet-600',
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
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">产品服务</p>
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-5">四大专业服务体系</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            整合管理、人力、财务、IT四大领域专业能力，为企业提供全链条一站式解决方案
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.id}
                className={`bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 ${
                  i % 2 === 1 ? '' : ''
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left: Info */}
                  <div className={`p-10 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`inline-flex items-center gap-3 mb-5`}>
                      <div className={`w-12 h-12 ${svc.color} rounded-xl flex items-center justify-center`}>
                        <Icon size={22} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-primary">{svc.title}</h2>
                        <p className={`text-xs ${svc.textColor} font-medium`}>{svc.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-500 leading-relaxed mb-7">{svc.overview}</p>
                    <div className="flex flex-wrap gap-2 mb-7">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 ${svc.lightColor} ${svc.textColor} text-xs font-medium rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock size={13} className="text-slate-400" />
                        快速响应
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Shield size={13} className="text-slate-400" />
                        保密承诺
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="mt-7 inline-flex items-center gap-2 px-6 py-3 bg-cta text-white text-sm font-medium rounded-xl hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
                    >
                      咨询此服务
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Right: Service Items */}
                  <div className={`bg-slate-50 p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-primary font-semibold mb-6">服务内容</h3>
                    <ul className="space-y-4">
                      {svc.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`w-5 h-5 ${svc.lightColor} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <CheckCircle2 size={13} className={svc.textColor} />
                          </div>
                          <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">服务流程</p>
            <h2 className="text-3xl font-semibold text-primary mb-4">标准化服务流程</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              每一次服务都经过严谨规范的流程管控，确保为每位客户交付高质量的专业服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-cta text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-blue-200">
                    {p.step}
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
                {/* Arrow */}
                {i < process.length - 1 && (
                  <div className="hidden md:flex absolute top-7 -right-2 w-4 h-4 items-center justify-center z-10">
                    <ArrowRight size={16} className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">找到适合您企业的解决方案</h2>
          <p className="text-blue-100 mb-8">我们的专业顾问将为您评估需求，推荐最合适的服务组合</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-cta font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
          >
            立即预约咨询
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  )
}
