import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Award, Target, TrendingUp, Users, BarChart3, Cpu, Quote } from 'lucide-react'

// 四大服务类型对应的客户案例
const cases = [
  {
    id: 'management',
    icon: TrendingUp,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    title: '企业管理咨询',
    cases: [
      {
        companyName: '华南电子科技有限公司',
        industry: '电子制造',
        logo: '华南电子',
        tags: ['战略规划', '组织变革', '绩效管理'],
        challenge: '公司在快速扩张期面临组织架构混乱、跨部门协作效率低下、绩效考核体系缺失等问题，导致管理层级冗余，决策链条过长，市场响应速度跟不上竞争对手。',
        solution: '坤元咨询团队通过深度访谈、流程梳理和数据诊断，协助客户完成三层变革：① 制定"三年五步走"战略规划，明确业务重心和扩张路径；② 重构组织架构，由6层压缩至3层，成立跨部门产品委员会；③ 设计OKR+KPI双轨绩效体系，建立月度复盘机制。',
        result: '项目实施6个月后，组织决策效率提升60%，跨部门协作时间缩短40%，员工满意度从65%提升至82%。公司当年营收同比增长35%，净利润率提升8个百分点，成功完成B轮融资，估值翻倍。',
        timeframe: '2024年3月 - 2024年9月',
        quote: '坤元团队不仅帮我们设计了方案，更重要的是教我们如何持续优化。现在我们已经建立了自我迭代的管理体系。',
        quoteBy: '总经理 张总'
      },
      {
        companyName: '广东智慧供应链集团',
        industry: '供应链服务',
        logo: '智慧供应',
        tags: ['运营优化', '流程再造', '企业文化'],
        challenge: '传统物流企业向数字化供应链转型过程中，业务流程割裂，数据孤岛严重，员工对变革抵触情绪强烈，导致数字化项目多次上线失败，投入产出不成正比。',
        solution: '坤元咨询采用"文化先行+流程重塑"双驱动策略：① 开展"数字化认知升级"全员培训，建立变革共识；② 梳理端到端业务流程，打通仓储、运输、结算三大系统数据；③ 建立数字化运营指标看板，推行"每日晨会+周度复盘"机制。',
        result: '转型12个月后，仓储周转率提升50%，运输准点率从75%提升至95%，运营成本下降28%。员工数字化技能测评通过率达92%，成功打造为行业数字化转型标杆案例。',
        timeframe: '2023年8月 - 2024年8月',
        quote: '最打动我们的是坤元真正理解传统企业的痛点，不是一上来就讲数字化，而是先解决人的问题。',
        quoteBy: '董事长 李先生'
      }
    ]
  },
  {
    id: 'hr',
    icon: Users,
    color: 'bg-indigo-500',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    title: '人力资源服务',
    cases: [
      {
        companyName: '创新生物制药股份有限公司',
        industry: '生物医药',
        logo: '创新生物',
        tags: ['人才招募', '薪酬设计', '人才发展'],
        challenge: '公司处于研发攻坚期，急需引进高端技术人才，但存在薪酬竞争力不足、职业发展通道不清晰、人才培养体系缺失等问题，导致关键技术岗位空置率高达30%，人才流失率达25%。',
        solution: '坤元人力资源团队实施"人才生态体系建设"项目：① 开展行业薪酬对标，调整研发序列薪酬结构，设置技术股权激励池；② 设计"专业技术+项目管理"双通道职业发展路径；③ 建立"导师制+项目历练"培养机制，与知名高校联合成立研发实验室。',
        result: '项目实施8个月，成功引进博士级技术人才12人，关键岗位空置率降至8%，人才流失率降至12%。员工培训满意度达95%，2024年成功申请3项国家级科研项目，技术团队战斗力显著提升。',
        timeframe: '2024年1月 - 2024年9月',
        quote: '坤元不只是帮我们招人，更是帮我们搭建了一套能持续吸引和留住人才的机制，这是最宝贵的。',
        quoteBy: '人力资源总监 陈女士'
      },
      {
        companyName: '大湾区教育培训集团',
        industry: '教育培训',
        logo: '大湾区教育',
        tags: ['劳动合规', '岗位职级', '员工培训'],
        challenge: '集团在全国拥有50家校区，面临师资管理混乱、薪酬标准不统一、劳动用工合规风险高、教师培训体系缺失等问题，导致品牌声誉受损，扩张受阻。',
        solution: '坤元HR团队推进"标准化人力管理体系"建设：① 制定统一的岗位职级体系和薪酬宽带，消除校区间薪酬差异；② 全面梳理劳动用工合同，规避合规风险；③ 建立"线上+线下"教师培训体系，打造三级师资认证标准；④ 推行校长绩效考核与股权激励。',
        result: '项目推进1年，师资标准化率从40%提升至95%，劳动仲裁案件同比下降80%，教师满意度提升30%。集团顺利新增20家校区，营收增长60%，获评"年度最佳雇主"。',
        timeframe: '2023年6月 - 2024年6月',
        quote: '坤元帮我们解决了最头疼的标准化问题，现在新校区复制变得非常简单，扩张速度快了很多。',
        quoteBy: '集团CEO 王总'
      }
    ]
  },
  {
    id: 'finance',
    icon: BarChart3,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    title: '财务管理咨询',
    cases: [
      {
        companyName: '先进智能制造集团',
        industry: '高端制造',
        logo: '先进智造',
        tags: ['财务诊断', '成本管控', '资金管理'],
        challenge: '公司营收规模突破10亿元，但财务管理体系滞后，存在预算管控不力、成本核算粗放、资金周转效率低等问题，导致毛利率持续下滑，现金流紧张，影响正常生产运营。',
        solution: '坤元财务咨询团队实施"财务精细化管控"项目：① 建立预算-执行-分析闭环管理体系，推行月度预算检视会；② 重构成本核算体系，按产品线、工序、车间进行精细化成本归集；③ 优化应收应付流程，建立客户信用评级和供应商分级管理；④ 设计现金流预警模型，保障资金安全。',
        result: '项目实施9个月，毛利率从22%提升至29%，应收账款周转天数从90天缩短至55天，资金占用成本下降40%。公司成功获得银行授信增加2亿元，支撑了新一轮产能扩张。',
        timeframe: '2024年2月 - 2024年11月',
        quote: '坤元的财务诊断非常精准，不仅指出了问题，还给出了可落地的解决方案，效果立竿见影。',
        quoteBy: 'CFO 刘先生'
      },
      {
        companyName: '绿色能源科技股份公司',
        industry: '新能源',
        logo: '绿色能源',
        tags: ['税务筹划', '财务流程', '上市准备'],
        challenge: '公司计划在科创板上市，但面临财务核算不规范、税务筹划不足、内控体系缺失等问题，距离上市要求存在较大差距，急需专业辅导。',
        solution: '坤元财务团队提供"上市前财务规范"全案服务：① 按照IPO要求重构财务核算体系，规范收入确认和成本计量；② 开展税务健康体检，优化研发费用加计扣除、高新技术企业所得税优惠等税务筹划；③ 建立内控制度和财务流程，通过第三方审计；④ 协助完成财务尽调资料准备，对接券商和会计师。',
        result: '项目历时15个月，公司顺利通过上市辅导验收，财务内控符合科创板要求，税务筹划为公司节省税负约1500万元。2024年成功登陆科创板，募资20亿元。',
        timeframe: '2023年5月 - 2024年8月',
        quote: '上市辅导这条路很艰辛，但坤元团队专业、敬业，帮我们规避了很多坑，非常感谢。',
        quoteBy: '董事长 周先生'
      }
    ]
  },
  {
    id: 'it',
    icon: Cpu,
    color: 'bg-violet-500',
    lightColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    title: 'IT 技术服务',
    cases: [
      {
        companyName: '智慧城市科技有限公司',
        industry: '智慧城市',
        logo: '智慧城市',
        tags: ['数字化转型', '系统开发', '系统集成'],
        challenge: '公司为多个城市提供智慧城市解决方案，但存在系统架构不统一、数据标准不互通、定制开发效率低等问题，导致交付周期长、运维成本高、客户满意度下降。',
        solution: '坤元IT团队实施"中台化技术架构升级"项目：① 设计统一的技术中台和数据中台架构，标准化接口和数据交换协议；② 开发低代码开发平台，提升定制开发效率；③ 构建DevOps运维体系，实现自动化部署和监控；④ 建立数据安全和网络安全防护体系。',
        result: '项目实施1年，系统开发周期缩短60%，复用率提升至70%，运维成本下降50%。成功交付8个城市级智慧项目，客户满意度从70%提升至92%，获评"智慧城市解决方案提供商TOP10"。',
        timeframe: '2023年7月 - 2024年7月',
        quote: '坤元帮我们搭建的技术中台，让我们的开发效率提升了数倍，现在我们能快速响应客户需求。',
        quoteBy: 'CTO 赵先生'
      },
      {
        companyName: '现代连锁零售集团',
        industry: '零售连锁',
        logo: '现代连锁',
        tags: ['信息化规划', 'ERP开发', '数据安全'],
        challenge: '集团拥有300+门店，但信息系统割裂（ERP、CRM、WMS各自独立），数据无法打通，无法实现统一库存管理和精准营销，严重制约业务扩张和运营效率提升。',
        solution: '坤元IT团队提供"零售数字化转型"全案：① 设计全渠道信息化架构，规划ERP、CRM、WMS、POS系统集成方案；② 定制开发集团级ERP系统，实现财务、采购、库存一体化管理；③ 建设客户数据平台(CDP)，整合线上线下会员数据，支持精准营销；④ 部署数据安全防护体系，保障客户隐私和交易安全。',
        result: '项目推进18个月，实现300+门店数据全打通，库存周转率提升40%，客单价提升25%，会员复购率提升35%。数字化运营降本增效显著，年度节省运营成本超5000万元。',
        timeframe: '2023年3月 - 2024年9月',
        quote: '数字化转型是必经之路，坤元不仅懂技术，更懂零售业务，这是我们选择他们的关键。',
        quoteBy: '运营总裁 吴女士'
      }
    ]
  }
]

export default function Cases() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">客户案例</p>
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-5">精选成功案例</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            深入各行各业，用专业服务助力企业实现突破性增长
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '500+', label: '服务企业' },
              { num: '98%', label: '客户满意度' },
              { num: '35%', label: '平均营收增长' },
              { num: '28%', label: '平均成本降低' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-cta mb-2">{stat.num}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases by Category */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {cases.map((category, catIdx) => {
            const CategoryIcon = category.icon
            return (
              <div key={category.id} className="mb-16">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                    <CategoryIcon size={22} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-primary">{category.title}</h2>
                    <p className="text-slate-500 text-sm">精选案例</p>
                  </div>
                </div>

                {/* Cases Grid */}
                <div className="grid grid-cols-1 gap-8">
                  {category.cases.map((case_, caseIdx) => (
                    <div
                      key={`${category.id}-${caseIdx}`}
                      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Left: Company Info */}
                        <div className={`${category.lightColor} p-8 lg:col-span-1`}>
                          <div className="flex items-center gap-3 mb-6">
                            <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center`}>
                              <Building2 size={24} className="text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-primary">{case_.companyName}</h3>
                              <p className={`text-sm ${category.textColor} font-medium`}>{case_.industry}</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <div className="text-xs text-slate-500 mb-2">服务标签</div>
                              <div className="flex flex-wrap gap-2">
                                {case_.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className={`px-2.5 py-1 ${category.lightColor} ${category.textColor} text-xs font-medium rounded-full`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-500 mb-2">服务周期</div>
                              <div className="text-sm text-slate-600">{case_.timeframe}</div>
                            </div>
                          </div>
                        </div>

                        {/* Right: Case Details */}
                        <div className="p-8 lg:col-span-2">
                          <div className="space-y-6">
                            {/* Challenge */}
                            <div>
                              <h4 className="flex items-center gap-2 font-semibold text-primary mb-3">
                                <Target size={18} className={category.textColor} />
                                面临挑战
                              </h4>
                              <p className="text-slate-600 text-sm leading-relaxed">{case_.challenge}</p>
                            </div>

                            {/* Solution */}
                            <div>
                              <h4 className="flex items-center gap-2 font-semibold text-primary mb-3">
                                <Award size={18} className={category.textColor} />
                                解决方案
                              </h4>
                              <p className="text-slate-600 text-sm leading-relaxed">{case_.solution}</p>
                            </div>

                            {/* Results */}
                            <div>
                              <h4 className="flex items-center gap-2 font-semibold text-primary mb-3">
                                <TrendingUp size={18} className={category.textColor} />
                                实施效果
                              </h4>
                              <p className="text-slate-600 text-sm leading-relaxed">{case_.result}</p>
                            </div>

                            {/* Quote */}
                            <div className={`${category.lightColor} rounded-xl p-5 border-l-4 ${category.color}`}>
                              <Quote size={16} className={category.textColor} />
                              <p className="text-slate-700 text-sm italic mb-3 mt-2">"{case_.quote}"</p>
                              <p className={`text-xs ${category.textColor} font-medium`}>— {case_.quoteBy}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cta text-sm font-medium uppercase tracking-widest mb-3">为什么选择我们</p>
            <h2 className="text-3xl font-semibold text-primary mb-4">专业值得信赖</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              我们深耕企业管理咨询领域多年，积累了丰富的实战经验和成功案例
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Target, title: '精准诊断', desc: '深入调研，精准识别核心问题' },
              { icon: Award, title: '定制方案', desc: '量身定制，避免千篇一律' },
              { icon: Users, title: '全程陪跑', desc: '专业团队，全程跟踪落地' },
              { icon: TrendingUp, title: '持续优化', desc: '定期复盘，持续迭代改进' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-cta/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-cta" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">让坤元助您实现突破</h2>
          <p className="text-blue-100 mb-8">
            无论您处于哪个行业，无论您面临什么挑战，我们都能为您提供专业的解决方案
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-cta font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
          >
            免费咨询评估
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  )
}
