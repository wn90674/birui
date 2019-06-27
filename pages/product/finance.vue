<template>
  <!-- 大数据+分析 -->
  <div>
    <!-- <hgroup class="title-group">
      <h1>探索大数据世界</h1>
      <h2>BIG DATA</h2>
      <h4>大数据+财务分析，为企业创造价值!</h4>
    </hgroup>-->

    <h2 class="title br__primary">大数据+财务分析</h2>
    <p
      class="br__text"
    >大数据时代, 从数量庞大、形式多样的数据信息中挖掘对企业有价值的商业数据, 关系企业的发展与未来。大数据服务将是企业整体发展战略的主旨, 快速准确制定收集和整理数据，作出详尽策略规划, 让有用的数据服务于企业发展, 让有用的数据拉开企业与竞争对手的差距, 进而实现企业价值的最大化。大数据工具和先进的分析技术, 可以提高企业财务数据处理的效率与准确性, 降低人工成本, 同时，在财务管理中融入大数据的理念和高端的技术, 为企业提供有价值的数据信息, 为企业的决策提供强大的数据支撑。</p>
    <p
      class="br__text"
    >通过本实践课程培养学生逐步掌握信息分析技术, 掌握大数据分析的专业能力，为将来从事财务管理工作, 适应大数据时代给财务管理带来的新变化、新特征、新模式、新方法和新手段打下基础。</p>
    <section class="content">
      <article>
        <h3 class="subtitle">基础知识</h3>
        <ul class="base-knowlege">
          <li>拥抱“大数据”：大数据概述；大数据时代的思维变革等；</li>
          <li>财务分析体系：财务分析概述；财务分析要做什么；如何设计业绩评价指标等</li>
        </ul>
      </article>
      <article>
        <h3 class="subtitle">实践内容(部分)</h3>
        <ul class="practice-content">
          <li>大数据分析工具运用</li>
          <li>数据呈现</li>
          <li>财务报表之间的关系</li>
          <li>数据可视化</li>
          <li>财务指标分析</li>
          <li>财务决策分析</li>
        </ul>
      </article>
      <article>
        <h3 class="subtitle">方法能力</h3>
        <ul class="method-ability">
          <li>团队合作能力：真实的工作场景，全程小组形式完成；</li>
          <li>团队考核：规定时间内，完成工作任务</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'finance',
}
</script>
<style lang="scss" scoped>
// .title-group {
//   position: relative;
//   height: 300px;
//   background: url('/img/bigData_finance.jpg') no-repeat;
//   background-size: cover;
//   color: #fff;
// }
// .title-group h1 {
//   position: absolute;
//   top: 10%;
//   left: 45%;
//   font-size: 48px;
// }
// .title-group h2 {
//   position: absolute;
//   top: 50%;
//   left: 45%;
//   font-size: 40px;
// }
// .title-group h4 {
//   position: absolute;
//   top: 50%;
//   left: 65%;
//   font-size: 24px;
// }
// .list {
//   margin: 30px auto;
//   padding-left: 0;
//   list-style: none;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
// .list p {
//   line-height: 22px;
// }
// .list li {
//   margin-top: 20px;
//   padding: 20px;
//   flex: 1;
//   display: flex;
//   justify-content: space-around;
//   flex-direction: column;
//   align-items: center;
//   height: 280px;
//   background-color: #f8f8f8;
// }
// .list li .icon {
//   display: inline-block;
//   width: 50px;
//   height: 50px;
//   background: url('/img/product/icon1.png');
//   background-size: contain;
//   .icon2 {
//     background: url('/img/product/icon2.png');
//   }
//   .icon3 {
//     background: url('/img/product/icon3.png');
//   }
// }
// .list li.center {
//   position: relative;
//   flex: 1.25;
//   height: 320px;
//   background-color: #214878;
// }
// .list li.center .grid {
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(2, 50%);
//   grid-template-rows: repeat(3, 33.33%);
// }
// .list li.center::before {
//   position: absolute;
//   z-index: -1;
//   top: 8.5px;
//   right: -20px;
//   content: '';
//   display: block;
//   border-top: 20px solid #214878;
//   border-right: 20px solid #214878;
//   border-bottom: 20px solid transparent;
//   border-left: 20px solid transparent;
//   transform: rotate(-45deg);
// }
// .list li.center h3 {
//   color: #fff;
// }
// .list li.center p {
//   color: #fff;
// }

h2.title {
  margin-bottom: 20px;
  padding: 15px 0;
  border-bottom: 1px solid;
}
h3.subtitle {
  padding: 10px;
  letter-spacing: 3px;
  color: #fff;
  background: linear-gradient(0deg, #529ede, #a5ccec);
}
.content {
  margin-top: 30px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #e2e2e2;
  ul {
    padding-left: 30px;
  }
  li {
    padding: 5px 0;
  }
  .practice-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(3, 33.33%);
  }
}
</style>
