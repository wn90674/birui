<template>
  <!-- 大数据+财务分析 -->
  <div class="solution">
    <h2 class="title br__primary">财务专业大数据实验中心解决方案</h2>
    <p
      class="br__text"
    >平台培养学生逐步掌握信息技术，掌握大数据分析的专业能力，为将来从事财务工作，适应大数据时代给财务带来的新变化、新特征、新模式、新方法和新手段打下基础。尤其是能够构建起大数据与公司财务价值、财务决策之间的相关关系，能够让大数据变小，将信息提炼成精辟的见解，从而改进决策，帮助实现企业转型。</p>
    <article>
      <h3 class="subtitle br__primary">解决方案特色</h3>
      <p
        class="br__text"
      >不会代码的数据分析——界面直观简洁，操作流程清晰明确，操作便捷，快速实现案例灵活多变的教学对平台需求，尊重用户体验，很好的平衡了学校应用软件需要强大齐全功能和操作简便明确之间的矛盾。</p>
      <ul class="feature">
        <li>灵活的、可扩展的、安全的</li>
        <li>可处理结构化、半结构化和非结构化数据</li>
        <li>针对不同学校需求可定制</li>
        <li>优化的资源利用</li>
        <li>更深刻的思考和学习</li>
      </ul>
      <img class="pic" width="70%" src="/img/product/bigData.png" alt="特色" />
    </article>
    <article>
      <h3 class="subtitle br__primary">大数据财务分析实践教学平台应用框架</h3>
      <img src="/img/product/bigData2.png" width="700px" alt="应用框架">
    </article>
  </div>
</template>

<script>
import content from './file/platform.md'
export default {
  name: 'solution',
}
</script>
<style lang="scss" scoped>
.solution {
  h2.title {
    margin-bottom: 20px;
    padding: 15px 0;
    border-bottom: 1px solid;
  }
  h3.subtitle {
    padding: 10px;
  }
  .feature {
    // padding-inline-start: 45px;
    padding-left: 45px;
    list-style: decimal;
    li {
      line-height: 24px;
      font-size: 13px;
    }
  }
  .pic{
    margin: 15px 90px 30px;
  }
}
</style>
