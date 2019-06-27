<template>
  <div>
    <section>
      <h2 class="title br__primary">彼瑞iMAP - 教学</h2>
      <p
        class="br__text"
      >管理会计教学云平台(彼瑞iMAP-教学)，以企业真实管理会计任务为蓝本，按照资金管理、成本管理、营运管理和绩效管理的典型岗位工作任务，结合管理会计应用指引中的工具和方法进行教学案例的设计，从企业的预测、决策、规划（预算）、控制、评价过程中训练、检验学生在企业环境下应用管理会计工具和方法解决具体问题的职业 能力，是一款全面支持管理会计教学内涵创新，提升学生管理会计实践能力的创新型教学平台系统。</p>
    </section>
    <section class="content">
      <ul>
        <li v-for="(item,index) in contentList" :key="index">
          <i class="icon">{{index+1}}</i>
          <h3 class="subtitle br__primary">{{item.title}}</h3>
          <p></p>
          <div>
            <p class="teach-text">{{item.contents}}</p>
            <img :src="item.url" width="100%" alt="图例">
          </div>
        </li>
      </ul>
    </section>
    <section class="intro">
      <h3 class="br__primary">产品案例——轻工食品</h3>
      <img src="/img/product/teach/chocolate.jpg" width="80%" alt="巧克力案例">
      <p class="br__text">
        管理会计实践教学课程主要面向高等院校会计及财务相关专业。旨在深入探究知识，实践运用知识，以课程实践学习为核心，未来将在企业的经营管理中充分发挥预测、决策、
        预算、控制、考核与评价的职能，培养的是直面实际问题时所具备的分析力、判断力和决策力，能够为企业提供综合管理能力的新型会计人才。
      </p>
      <ul class="intro-list">
        <li v-for="(item,index) in caseList" :key="index">
          <span>{{index+1}}</span>
          <p>{{item.contents}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      contentList: [
        {
          title: '典型行业 典型岗位 典型任务',
          contents: '以制造业为原型企业——食品制造业具备较强的代表性，对标大纲和应用指引设计典型任务，针对性强。',
          url: '/img/product/teach/1.jpg',
        },
        {
          title: '理论教学支撑实践任务',
          contents: '课程根据最新主流管理会计教材的知识点分布情况，将案例的设计与知识点相结合，同时匹配了大量的高质量的教学资源。',
          url: '/img/product/teach/2.jpg',
        },
        {
          title: '案例任务紧贴最新管理会计应用指引',
          contents: '案例任务的设计与最新管理会计应用指引工具和方法的应用深度融合；教学资源匹配全套最新财政部《管理会计应用指引》。',
          url: '/img/product/teach/3.jpg',
        },
      ],
      caseList: [
        {
          contents: '与《管理会计应用指引》相一致\n与企业管理会计实际应用工具方法相结合\n与院校《管理会计》理论课程相配套',
        },
        {
          contents: '一套紧扣能力培养目标的案例库，将“本利量分析、短期经营决策、长期投资决策、标准成本方法、全面预算和责任会计”等内容均纳入案例。',
        },
        {
          contents: '在案例导学和知识学习阶段。合作学习，角色分工，学生以个体和小组成员的双重身份参与进来，在教师的指导下，分析所研究案例的背景、行业环境、经营状况、拟解决的问题、解决问题需要应用的管理会计卢纶知识和分析方法。',
        },
        {
          contents: '充分发挥案例教学的主导作用，并能对案例教学的成效进行检验，注重对学生能力培养，全过程计策+分析，加强对学生学习过程中的监控管理。',
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
ul {
  padding-left: 0;
}
.teach-text {
  font-size: 12px;
}
.content {
  ul {
  list-style: none;
  li {
    margin: 15px 0;
    display: grid;
    grid-template-rows: 32px auto;
    grid-template-columns: 48px auto;
    text-align: left;
  }
}
}
.content li .icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
  font-size: 16px;
  font-style: normal;
  color: #fff;
  background-color: #234978;
}
.content li .subtitle {
  line-height: 32px;
}
.content li img {
  margin-top: 10px;
  width: 80%;
}
.intro img {
  margin: 10px auto;
}
.intro .intro-list {
  list-style: none;
}
.intro .intro-list li {
  margin: 20px auto;
  display: grid;
  align-items: center;
  grid-template-columns: 60px auto;
}
.intro .intro-list span {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  color: #fff;
  background-color: #234978;
}
.intro .intro-list span::before {
  position: absolute;
  top: -8px;
  left: 0px;
  content: '';
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 8px solid #234978;
}
.intro .intro-list span::after {
  position: absolute;
  bottom: -8px;
  left: 0px;
  content: '';
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 8px solid #234978;
}
.intro .intro-list p {
  font-size: 12px;
  line-height: 20px;
}
</style>
