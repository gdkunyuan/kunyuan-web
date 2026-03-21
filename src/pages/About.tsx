import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
} from 'lucide-react'

const timeline = [
  { year: '2010', event: '公司成立，专注广东地区企业管理咨询服务' },
  { year: '2013', event: '业务扩展至人力资源与财务咨询领域' },
  { year: '2016', event: '推出企业IT信息化建设服务，完成数字化转型布局' },
  { year: '2019', event: '服务客户突破300家，建立行业标杆案例库' },
  { year: '2022', event: '深化数字化服务能力，推出企业数字化转型解决方案' },
  { year: '2026', event: '服务客户超500家，持续扩大专业服务版图' },
]

const team = [
  { name: '管理咨询团队', count: '20+', desc: '具备10年以上管理咨询经验的资深顾问' },
  { name: '人力资源团队', count: '15+', desc: '持证人力资源专业从业者' },
  { name: '财务咨询团队', count: '12+', desc: '注册会计师及财税规划专家' },
  { name: 'IT技术团队', count: '18+', desc: '软件工程师及信息化建设专家' },
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
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">关于我们</p>
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-5">
            值得信赖的企业服务伙伴
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            广东坤元企业管理咨询有限公司，深耕企业服务领域逾十年，以专业赋能企业成长
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">公司简介</p>
              <h2 className="text-3xl font-semibold text-primary mb-6">
                专注企业服务，十年匠心沉淀
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  广东坤元企业管理咨询有限公司成立于 2010 年，总部位于广东省，是一家专业从事企业管理咨询、
                  人力资源服务、财务管理咨询及 IT 技术服务的综合性咨询机构。
                </p>
                <p>
                  公司拥有一支由资深管理顾问、人力资源专家、注册会计师及信息化技术专家组成的专业团队，
                  团队成员平均从业年限超过 10 年，服务客户遍及制造业、贸易、零售、互联网等多个行业。
                </p>
                <p>
                  坚持以客户为中心，坤元咨询为每位客户提供深度调研、定制化方案及全程落地支持服务，
                  累计服务企业客户超过 500 家，客户满意度持续保持在 98% 以上。
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: '500+', label: '服务客户' },
                  { value: '10+', label: '年经验' },
                  { value: '98%', label: '满意度' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-2xl font-semibold text-cta">{s.value}</div>
                    <div className="text-slate-400 text-xs mt-1">{s.label}</div>
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
                    className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-12 h-12 bg-blue-50 text-cta rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1.5">{v.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{v.content}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">专业团队</p>
            <h2 className="text-3xl font-semibold text-primary mb-4">经验丰富的专家团队</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              我们的四大专业团队协同作战，为企业提供覆盖管理、人力、财务和 IT 的全方位服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <div
                key={i}
                className="text-center p-8 bg-bg-light rounded-2xl border border-slate-100 hover:border-cta/30 hover:shadow-md transition-all duration-200"
              >
                <div className="w-16 h-16 bg-cta/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users size={28} className="text-cta" />
                </div>
                <div className="text-3xl font-semibold text-cta mb-2">{t.count}</div>
                <h3 className="font-semibold text-primary mb-2">{t.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-bg-light py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">发展历程</p>
            <h2 className="text-3xl font-semibold text-primary mb-4">十年奋进，步履不停</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 lg:-translate-x-0.5"></div>

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
                      <div className="text-cta font-semibold text-lg mb-1">{item.year}</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 top-5 w-3 h-3 rounded-full bg-cta border-2 border-white shadow-md lg:-translate-x-1.5 -translate-x-1.5"></div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">资质荣誉</p>
            <h2 className="text-3xl font-semibold text-primary">专业资质，实力保障</h2>
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
                className="flex flex-col items-center gap-3 p-6 bg-bg-light rounded-2xl border border-slate-100"
              >
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
                  <q.icon size={22} className="text-yellow-500" />
                </div>
                <span className="text-primary text-sm font-medium text-center">{q.label}</span>
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  <span className="text-emerald-600 text-xs">已认证</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">与坤元携手，共创企业未来</h2>
          <p className="text-slate-300 mb-8">联系我们，获取专属企业服务方案</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-cta text-white font-semibold rounded-xl hover:bg-cta-hover transition-colors duration-200 cursor-pointer"
          >
            立即联系
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  )
}
