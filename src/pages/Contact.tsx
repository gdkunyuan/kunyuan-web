import { useState } from 'react'
import {
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
} from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: '公司地址',
    lines: ['广东省中山市三乡镇雍陌村教育路6号', '雍泉度假山庄领秀山1幢502房'],
  },
  {
    icon: Mail,
    title: '电子邮箱',
    lines: ['gdkunyuan@163.com'],
  },
  {
    icon: Clock,
    title: '服务时间',
    lines: ['周一至周五 9:00 – 18:00', '周末及节假日可预约'],
  },
]

const services = ['企业管理咨询', '人力资源服务', '财务管理咨询', 'IT 技术服务', '其他']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submit
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 tech-bg opacity-30 animate-grid-move"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cta/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-xs text-cta font-medium mb-6 neon-border">
            <span className="font-mono">// CONTACT US</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5">随时随地，联系我们</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            填写下方表单，专业顾问将在 24 小时内与您联系
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-bg opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-full text-xs text-cta font-medium mb-4">
                  <span className="font-mono">// INFO</span>
                </div>
                <h2 className="text-2xl font-semibold text-text-main mb-3">我们期待与您联系</h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  无论您有任何关于企业管理、人力资源、财务或 IT 方面的问题,我们的专业团队都乐于为您解答。
                </p>
              </div>

              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <div
                    key={i}
                    className="flex gap-4 p-5 glass-card rounded-xl hover:shadow-glow transition-all duration-300 neon-border"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-cta to-cta/80 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-main text-sm mb-1.5 glow-text">{info.title}</h3>
                      {info.lines.map((line, j) => (
                        <p key={j} className="text-text-muted text-sm leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}

              {/* Map placeholder */}
              <div className="glass-card rounded-xl overflow-hidden neon-border">
                <div className="h-40 bg-gradient-to-br from-cta/10 to-accent/10 flex flex-col items-center justify-center gap-2">
                  <Building2 size={32} className="text-cta/60" />
                  <span className="text-text-muted text-sm">广东省中山市三乡镇</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-3xl p-8 lg:p-10 neon-border">
                {!submitted ? (
                  <>
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-full text-xs text-cta font-medium mb-4">
                        <span className="font-mono">// SUBMIT</span>
                      </div>
                      <h2 className="text-2xl font-semibold text-text-main mb-2 glow-text">发送咨询信息</h2>
                      <p className="text-text-muted text-sm">填写以下信息，我们将尽快与您取得联系</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-text-main mb-1.5" htmlFor="name">
                            您的姓名 <span className="text-cta">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="请输入您的姓名"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-bg-light/50 border border-cta/20 rounded-xl text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-main mb-1.5" htmlFor="company">
                            公司名称
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="请输入公司名称"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-bg-light/50 border border-cta/20 rounded-xl text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-text-main mb-1.5" htmlFor="phone">
                            联系电话 <span className="text-cta">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="请输入联系电话"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-bg-light/50 border border-cta/20 rounded-xl text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-main mb-1.5" htmlFor="email">
                            电子邮箱
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="请输入电子邮箱"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-bg-light/50 border border-cta/20 rounded-xl text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-main mb-1.5" htmlFor="service">
                          咨询服务类型
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-light/50 border border-cta/20 rounded-xl text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200 cursor-pointer"
                        >
                          <option value="">请选择服务类型</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-main mb-1.5" htmlFor="message">
                          咨询内容 <span className="text-cta">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="请描述您的需求或问题，我们的顾问将为您提供专业建议..."
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg-light/50 border border-cta/20 rounded-xl text-sm text-text-main placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200 resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex items-center gap-2 text-xs text-text-muted mt-0.5">
                          <CheckCircle2 size={13} className="text-success flex-shrink-0" />
                          <span>您的信息将严格保密，仅用于业务联系</span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cta to-accent-secondary text-white font-semibold rounded-xl hover:shadow-neon transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            提交中...
                          </>
                        ) : (
                          <>
                            <Send size={17} />
                            提交咨询
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mb-6 neon-border">
                      <CheckCircle2 size={32} className="text-success" />
                    </div>
                    <h3 className="text-2xl font-semibold text-text-main mb-3 glow-text">提交成功！</h3>
                    <p className="text-text-muted max-w-sm leading-relaxed mb-6">
                      感谢您的咨询，我们的专业顾问将在 24 小时内与您联系。
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', service: '', message: '' }) }}
                      className="px-6 py-3 border border-cta/30 text-text-main text-sm font-medium rounded-xl hover:bg-cta/10 transition-colors duration-200 cursor-pointer"
                    >
                      再次提交
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-bg opacity-10"></div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-full text-xs text-cta font-medium mb-4">
              <span className="font-mono">// FAQ</span>
            </div>
            <h2 className="text-3xl font-semibold text-text-main glow-text">您可能想了解的问题</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: '初次合作如何开始？',
                a: '您只需通过邮件或本页面表单联系我们，我们的顾问将安排免费的初步沟通，了解您的需求后提供相应方案。',
              },
              {
                q: '服务费用如何计算？',
                a: '我们根据项目类型、规模和周期灵活定价。建议您先联系我们进行需求评估，我们将提供透明详细的报价方案。',
              },
              {
                q: '如何保证服务质量？',
                a: '我们有成熟的质量管控流程、专业资质认证，以及大量标杆案例。每个项目均配有专属顾问团队全程负责，并提供售后跟踪服务。',
              },
              {
                q: '是否提供远程服务？',
                a: '是的，我们提供线上线下双重服务模式。大多数咨询和辅导服务均可通过远程方式高效开展。',
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card rounded-xl p-6 neon-border hover:shadow-glow transition-all duration-300">
                <h3 className="font-semibold text-text-main mb-2 flex items-start gap-2">
                  <span className="text-cta flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
