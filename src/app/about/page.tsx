import { Metadata } from 'next'
import { generateSeoMetadata } from '@/components/Seo'

export const metadata: Metadata = generateSeoMetadata({
  title: '关于我 - 雪桜さゆ',
  description: '程序员，热爱技术与文学。专注于法律、金融和技术领域的学习与探索。',
})

export default function AboutPage() {
  return (
    <article className="prose prose-zinc mx-auto dark:prose-invert">
      <h1>关于我</h1>
      
      <p className="lead">
        你好，我是雪桜さゆ（ゆきさゆ）。一个热爱技术与文学的程序员，目前在日本生活和工作。
      </p>

      <h2>专业背景</h2>
      <ul>
        <li>程序员</li>
        <li>双学位：理学学士与语言学学士</li>
        <li>前日立公司员工</li>
        <li>年收入：500万日元</li>
      </ul>

      <h2>学习规划</h2>
      <ul>
        <li>
          <strong>当前目标</strong>
          <ul>
            <li>CFA 一级考试备考</li>
            <li>伦敦大学 LLB 法学课程学习</li>
            <li>日语 JLPT N1 和英语 TOEFL 100+ 备考</li>
          </ul>
        </li>
        <li>
          <strong>长期规划</strong>
          <ul>
            <li>五年内完成 CFA 全部考试</li>
            <li>通过日本司法考试和美国纽约 BAR</li>
            <li>申请全奖法学博士（PhD in Law）</li>
            <li>进入日本法学大学院或 LL.M 项目</li>
          </ul>
        </li>
      </ul>

      <h2>兴趣爱好</h2>
      <ul>
        <li>
          <strong>文学创作</strong>
          <ul>
            <li>业余诗人</li>
            <li>专注于诗歌和短篇小说写作</li>
          </ul>
        </li>
        <li>
          <strong>技术开发</strong>
          <ul>
            <li>个人网站开发与维护</li>
            <li>AI 技术研究与应用</li>
          </ul>
        </li>
        <li>
          <strong>其他领域</strong>
          <ul>
            <li>日本居住环境的装修与取暖设计</li>
            <li>法律与金融知识学习</li>
          </ul>
        </li>
      </ul>

      <h2>联系方式</h2>
      <ul>
        <li>
          邮箱：
          <a href="mailto:yukisakuranoyume@gmail.com">
            yukisakuranoyume@gmail.com
          </a>
        </li>
        <li>
          GitHub：
          <a href="https://github.com/hositsuki" target="_blank" rel="noopener noreferrer">
            @hositsuki
          </a>
        </li>
        <li>
          Twitter：
          <a href="https://twitter.com/DawnSayu" target="_blank" rel="noopener noreferrer">
            @DawnSayu
          </a>
        </li>
      </ul>

      <hr />

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        希望能在这里与大家分享知识，交流经验。
      </p>
    </article>
  )
}
