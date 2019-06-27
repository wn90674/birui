<template>
  <!-- 产品 -->
  <div>
    <h2 class="title br__primary">智能可视化实践云平台</h2>
    <p
      class="br__text"
    >智能可视化实践教学开发平台是面向高等院校各学科及专业进行实践教学的综合应用平台，以典型企业真实案例为实践教学蓝本，根据各学科及专业特点，通过可视化开发、智能甄别评价的方式快速满足课程开发者对实践教学的设想，实现所见即所得之效果。是业界第一个面向个性化开发，满足个性化人才培养需求，全面支持特色教学改革的创新实践教学平台系统。</p>
    <article class="position">
      <h3 class="br__primary">产品定位</h3>
      <ul>
        <li>以全程定制方式支持院校个性化实践课程开发</li>
        <li>与高校合作打造高阶性、创新性、有挑战的“金课”</li>
        <li>用信息技术为教师教学能力提升提供专业支持</li>
      </ul>
    </article>
    <article class="design">
      <h3 class="br__primary">设计思路</h3>
      <div class="content">
        <ul class="list">
          <li>专门为院校整合教育资源的服务型平台</li>
          <li>校企融合，不设门槛</li>
          <li>用户专属教与学的互联网空间</li>
          <li>实现“三位一体”的混合式教学模式</li>
          <li>助力教学内涵建设</li>
        </ul>
        <img class="demo" src="/img/product/dimension.png" width="250px" height="219px" alt="三维一体">
      </div>
    </article>
    <article class="feature">
      <h3 class="br__primary">产品特色</h3>
      <img class="gear" src="/img/product/chilun.png" width="60%" alt="产品特色">
    </article>
    <article class="advantage">
      <h3 class="br__primary">产品优势</h3>
      <ul>
        <li v-for="(item,index) in contentList" :key="index">
          <i class="icon">{{index+1}}</i>
          <h4 class="subtitle br__primary">{{item.title}}</h4>
          <p class="content">{{item.contents}}</p>
        </li>
      </ul>
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
li {
  padding: 5px 0;
  font-size: 14px;
}
ul {
  padding-left: 30px;
}
.design {
  .content {
    display: flex;
    position: relative;
    ul.list {
      list-style: decimal;
    }
    img.demo {
      position: absolute;
      right: 30px;
      transform: translate(-30px, -100px);
    }
  }
}
.feature {
  margin: 20px 0;
}
.advantage {
  ul {
    padding-left: 0;
    list-style: none;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0 15px;
  }
  li {
    display: grid;
    // grid-template-rows: 50px auto;
    // grid-template-columns: 60px auto;
    grid-template:
      'icon title' auto
      'icon content' auto
      /60px auto;
    text-align: left;
    .icon {
      grid-area: icon;
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      font-style: normal;
      color: #fff;
      background-color: #234978;
    }
    .subtitle {
      grid-area: title;
      line-height: 40px;
    }
    p.content {
      grid-area: content;
      line-height: 20px;
      font-size: 12px;
    }
  }
}
</style>
