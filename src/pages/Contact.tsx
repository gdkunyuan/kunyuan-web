import { useState } from 'react'
import {
  MapPin,
  Phone,
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
    icon: Phone,
    title: '联系电话',
    lines: ['400-XXX-XXXX（全国热线）', '0XX-XXXX-XXXX（办公室）'],
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
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">联系我们</p>
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-5">随时随地，联系我们</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            填写下方表单或直接拨打我们的咨询热线，专业顾问将在 24 小时内与您联系
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-5">
              <div>
                <p className="text-cta text-sm font-medium uppercase tracking-widest mb-2">联系方式</p>
                <h2 className="text-2xl font-semibold text-primary mb-3">我们期待与您联系</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  无论您有任何关于企业管理、人力资源、财务或 IT 方面的问题，我们的专业团队都乐于为您解答。
                </p>
              </div>

              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <div
                    key={i}
                    className="flex gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-50 text-cta rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-1.5">{info.title}</h3>
                      {info.lines.map((line, j) => (
                        <p key={j} className="text-slate-500 text-sm leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}

              {/* Map placeholder */}
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-slate-100 to-blue-50 flex flex-col items-center justify-center gap-2">
                  <Building2 size={32} className="text-slate-300" />
                  <span className="text-slate-400 text-sm">广东省中山市三乡镇</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 lg:p-10">
                {!submitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-primary mb-2">发送咨询信息</h2>
                      <p className="text-slate-500 text-sm">填写以下信息，我们将尽快与您取得联系</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-primary mb-1.5" htmlFor="name">
                            您的姓名 <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="请输入您的姓名"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary mb-1.5" htmlFor="company">
                            公司名称
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="请输入公司名称"
                            value={form.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-primary mb-1.5" htmlFor="phone">
                            联系电话 <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="请输入联系电话"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary mb-1.5" htmlFor="email">
                            电子邮箱
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="请输入电子邮箱"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-primary mb-1.5" htmlFor="service">
                          咨询服务类型
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-primary focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200 bg-white cursor-pointer"
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
                        <label className="block text-sm font-medium text-primary mb-1.5" htmlFor="message">
                          咨询内容 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="请描述您的需求或问题，我们的顾问将为您提供专业建议..."
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-primary placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cta/30 focus:border-cta transition-all duration-200 resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                          <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                          <span>您的信息将严格保密，仅用于业务联系</span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-cta text-white font-semibold rounded-xl hover:bg-cta-hover transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-blue-100"
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
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">提交成功！</h3>
                    <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
                      感谢您的咨询，我们的专业顾问将在 24 小时内与您联系，请保持电话畅通。
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', service: '', message: '' }) }}
                      className="px-6 py-3 border border-slate-200 text-secondary text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
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
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">常见问题</p>
            <h2 className="text-3xl font-semibold text-primary">您可能想了解的问题</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: '初次合作如何开始？',
                a: '您只需通过电话、邮件或本页面表单联系我们，我们的顾问将安排免费的初步沟通，了解您的需求后提供相应方案。',
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
              <div key={i} className="bg-bg-light rounded-xl p-6 border border-slate-100">
                <h3 className="font-semibold text-primary mb-2 flex items-start gap-2">
                  <span className="text-cta flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
