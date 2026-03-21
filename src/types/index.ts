export interface KnowledgeArticle {
  id: number
  title: string
  category: '管理咨询' | '财务咨询' | '人力资源' | 'IT服务'
  date: string
  readTime: string
  summary: string
  content: string
}
