import { useParams, Link } from 'react-router-dom'
import { Clock, BookOpen, ArrowLeft, TrendingUp } from 'lucide-react'
import { knowledgeArticles } from '../data/knowledgeArticles'

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>()
  const article = knowledgeArticles.find(a => a.id === Number(id))

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-main mb-4">文章未找到</h2>
          <Link to="/knowledge" className="text-cta hover:underline">
            返回知识分享
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Background Effects */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-5 animate-grid-move"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cta/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <article className="relative max-w-4xl mx-auto px-6 py-32">
        {/* Back Button */}
        <Link
          to="/knowledge"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-text-muted hover:bg-white/10 hover:text-text-main transition-all duration-200 mb-8"
        >
          <ArrowLeft size={16} />
          返回列表
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full text-sm font-medium text-cta mb-6">
            <TrendingUp size={16} />
            {article.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-text-muted">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={16} />
              <span>{article.date}</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-lg text-text-muted leading-relaxed">
              {article.summary}
            </p>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="glass-card border border-white/10 rounded-xl p-8 md:p-12">
            <div className="space-y-6 text-text-muted leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-12 text-center">
          <Link
            to="/knowledge"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-text-muted hover:bg-white/10 hover:text-text-main transition-all duration-200"
          >
            <ArrowLeft size={16} />
            返回知识分享
          </Link>
        </div>
      </article>
    </div>
  )
}
