<template>
  <!-- 公司概况 -->
  <div>
    <article class="intro">
      <h2 class="title br__primary">企业简介</h2>
      <p
        class="br__text"
      >北京彼瑞教育科技有限公司(简称彼瑞教育)，专注于高效实践教学研究的科技型教育服务机构，坚持搭建院校应用型人才培养与产业人才需求桥梁的发展理念，通过对现代企业人才需求和技术发展方向的理解与把握，利用技术创新和专业研究助力于高校推动实践教学内涵改革、师资能力的提升以及教学成果的创新。</p>
    </article>
    <article class="position">
      <h2 class="title br__primary">公司定位</h2>
      <p
        class="br__text"
      >彼瑞教育致力于与院校合作一同打造富有时代特点和发展趋势的知识、能力、素质有机融合的高阶性创新课程，将传统课堂教学模式转变为以学生为中心，将真正契合时代发展脉搏的知识和课程提供给学生，培养学生解决复杂问题的综合能力和高阶思维。为社会输送优秀的、高质量的人才提供教育产品和相关服务。</p>
      <p class="br__text">彼瑞教育核心研发团队成员均具有硕士以上学历，10年以上丰富的企业工作经验，具备高度的专业水准，对多个行业及产业的人才需求有深刻理解。</p>
      <p class="br__text">彼瑞教育注重技术创新，通过信息技术手段，结合大数据分析工具，将大学理论和社会实践需求相结合，将传统与符合时代潮流的教学方法和教学内涵进行深度融合，研发出完善的评价体系，教师有充足驾驭能力的教学课程。</p>
    </article>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      contentList: [
        {
          title: 'SSM Java、Oracle',
          contents: '从框架选型到开发语言再到数据库均采用业界最先进、最稳定方案，支持多并发的在线web应用为设计出发点，确保院校多用户应用效果',
        },
        {
          title: '所见即所得设计',
          contents: '交互设计采用所见即所得的方式，自适应课程开发者设计思路，实时可见开发成果',
        },
        {
          title: 'Office无缝对接技术',
          contents: '从教师熟悉office应用这一情况出发，系统中的应用在业界首次实现了无缝对接',
        },
        {
          title: '个性化自动化评价技术',
          contents: '支持教师设计的个性化评价需求，简单的操作即可实现自动化、量化的评价',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h2.title {
  margin-bottom: 20px;
  padding: 15px 0;
  border-bottom: 1px solid;
}
h3 {
  padding: 5px 0;
}
p {
  margin-bottom: 20px;
}
</style>
