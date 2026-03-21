import { useState } from 'react'
import { Clock, BookOpen, TrendingUp, ChevronRight, Filter } from 'lucide-react'
import { knowledgeArticles } from '../data/knowledgeArticles'

export default function Knowledge() {
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const categories = ['全部', '管理咨询', '财务咨询', '人力资源', 'IT服务']

  const filteredArticles = selectedCategory === '全部'
    ? knowledgeArticles
    : knowledgeArticles.filter(article => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-5 animate-grid-move"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cta/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full mb-6 animate-fade-up">
              <BookOpen size={16} className="text-cta" />
              <span className="text-sm text-cta">行业洞察与专业知识</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="bg-gradient-to-r from-cta via-accent to-accent-secondary bg-clip-text text-transparent">
                知识分享
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              探索管理咨询、财务咨询、人力资源服务和IT服务领域的深度洞察与专业见解,助力企业成长
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cta to-accent text-white shadow-glow'
                    : 'bg-white/5 border border-white/10 text-text-muted hover:bg-white/10 hover:text-text-main'
                }`}
              >
                {selectedCategory === category && <Filter size={16} />}
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <article
                key={article.id}
                className="glass-card border border-white/10 rounded-xl p-6 hover:border-cta/50 transition-all duration-300 group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cta/10 border border-cta/20 rounded-full text-xs font-medium text-cta">
                    <TrendingUp size={12} />
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-text-muted text-xs">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-cta transition-colors">
                  {article.title}
                </h3>

                {/* Article Summary */}
                <p className="text-text-muted text-sm mb-4 line-clamp-3">
                  {article.summary}
                </p>

                {/* Article Content Preview */}
                <div className="bg-white/5 rounded-lg p-4 mb-4 border border-white/10">
                  <p className="text-text-muted/80 text-xs leading-relaxed line-clamp-4">
                    {article.content.substring(0, 200)}...
                  </p>
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-text-muted text-xs">
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2 text-cta text-sm font-medium group-hover:gap-3 transition-all">
                    阅读全文
                    <ChevronRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '1.5s' }}>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-text-muted hover:bg-white/10 hover:text-text-main transition-all duration-200 font-medium">
              加载更多文章
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative glass-card rounded-2xl p-8 md:p-12 overflow-hidden border border-cta/30">
            <div className="absolute inset-0 bg-gradient-to-r from-cta/10 to-accent/10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-4">
                  需要专业的咨询服务?
                </h3>
                <p className="text-text-muted">
                  我们的专业团队随时为您提供量身定制的解决方案
                </p>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-cta to-accent text-white font-medium rounded-lg hover:shadow-glow transition-all duration-200 whitespace-nowrap">
                免费咨询
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
