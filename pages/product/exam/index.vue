<template>
  <!-- 竞赛 -->
  <div>
    <section>
      <h2 class="title br__primary">彼瑞iMAP - 竞赛</h2>
      <p
        class="br__text"
      >管理会计竞赛云平台（彼瑞iMAP-竞赛），主要面向院校财会相关专业，按照管理会计理论知识和管理会计应用指引中的工具方法，结合多行业企业案例，进行竞赛案例库的设计开发，支持多岗位分工、团队合作学习，支持学校开展管理会计技能竞赛，有助于提升学生在不同行业企业环境下应用管理会计工具和方法解决实际问题的职业能力。</p>
      <p
        class="br__text"
      >通过管理会计训练平台夯实理论基础，配套管理会计实践教学平台实现理实一体化教学，在此基础上通过管理会计竞赛平台进一步提高学生的应用能力，拓展学生的多行业视野，全面提升学生的管理会计综合素养。</p>
      <article class="feature">
        <h3 class="br__primary">产品特色</h3>
        <div class="content">
          <ul class="list">
            <li>专门为院校整合教育资源的服务型平台</li>
            <li>校企融合，不设门槛</li>
            <li>用户专属教与学的互联网空间</li>
            <li>实现“三位一体”的混合式教学模式</li>
            <li>助力教学内涵建设</li>
          </ul>
        </div>
      </article>
    </section>
    <section class="content">
      <h3 class="title br__primary">管理竞赛云平台特色之 —— 题库内容紧扣管理会计竞赛大纲</h3>
      <ul class="post-list">
        <li class="post" v-for="(item,index) in contentList" :key="index">
          <h4 class="subtitle br__primary">{{item.title}}</h4>
          <ul>
            <li v-for="content in item.list">{{content}}</li>
          </ul>
        </li>
      </ul>
    </section>
    <!-- 
    <section class="case">
      <h3 class="title br__primary">管理竞赛云平台特色之二 —— 题库内容紧扣管理会计竞赛大纲</h3>
      <img src="/img/product/exam/1.png" width="100%" alt>
    </section>
    <section class="case">
      <h3 class="title br__primary">智能竞赛云平台特色之三—— 与国赛平台交互一致</h3>
      <img src="/img/product/exam/2.png" width="100%" alt="甄别">
    </section>
    <section class="case">
      <h3 class="title br__primary">提供面向组织、岗位、任务、学生的多维量化分析，洞察教与学的改进方向</h3>
      <img src="/img/product/exam/3.png" width="100%" alt="维度分析">
    </section> -->
    <section>
      <h2 class="br__primary">行业案例</h2>
      <base-three :list="childLinks"></base-three>
    </section>
  </div>
</template>

<script>

import BaseThree from '~/components/BaseThree/index.vue'
export default {
  components: { BaseThree },
  data: function () {
    return {
      contentList: [
        {
          title: '资金管理岗',
          list: [
            'PEST分析', 'SWOT分析', '资金成本预测', '项目利润预测', '项目现金流量预测', '投融资决策',
            '折现回收期测算', '缩短折现回收期评估', '股利支付预测', '现金预算', '重点产品销售量预测',
            '内涵报酬率测算', '投资成本分析', '波特五力分析',
          ]
        },
        {
          title: '成本管理岗',
          list: [
            '作业类型分析判断', '资源动因与费用性质', '作业中心耗用汇总', '作业成本分配', '单位作业成本预算',
            '成本核算方法比较', '直接材料差异分析', '直接人工差异分析', '作业成本核算程序', '资源成本动因',
            '成本控制措施', '划分作业及作业中心', '归集间接费用并确定', '增值与非增值作业',
          ]
        },
        {
          title: '营运管理岗',
          list: [
            '销售与现金收入计算', '产品生产预算', '直接材料预算', '直接人工预算', '产品成本预算', '销售费用预算',
            '管理费用预算', '税金附加与财务费用预算', '多产品本量利分析', '敏感性分析', '全面预算编制程序',
            '总预算指标计算', '指定总指标预算方案', '经营预算', '资本预算', '投资盈亏平衡点',
          ]
        },
        {
          title: '绩效管理岗',
          list: [
            '平衡计分卡应用环境', '平衡计分卡五项平衡', '战略地图', '平衡计分卡财务层面考核', '平衡积分卡学习与成长层面考核',
            '经营业绩评价报告', '综合业绩评价报告', '公司年度绩效考核', '部门年度绩效考核', '部门年度教学奖金', '财务指标体系',
            '财务指标计算', '绩效考核流程', '高层管理人员绩效考核',
          ]
        },
      ],
      childLinks: [
        { link: '/product/exam/railway', content: '航空高铁配餐', url: '/img/product/exam/rail.jpg' },
        { link: '/product/exam/traval', content: '在线旅游', url: '/img/product/exam/traval.jpg' },
        { link: '/product/exam/redvine', content: '葡萄酒酿造', url: '/img/product/exam/redvine.jpg' },
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
  margin-top: 10px;
  padding: 5px 0;
}
.feature {
  .content {
    display: flex;
    position: relative;
    ul.list li {
      list-style: decimal;
      padding: 5px 0;
      font-size: 14px;
    }
  }
}

img.case {
  margin: 20px auto;
}

// 暂时废弃
section.content {
  margin-top: 15px;
  background-color: rgba(9, 103, 182, 0.1);
  .post-list {
    padding-left: 40px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-gap: 15px;
    .post {
      list-style: none;
      margin: 20px 0;
      .subtitle {
        text-indent: 25px;
        line-height: 40px;
      }
      li {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
h2 {
  margin-top: 20px;
  padding: 10px 0;
}
h3.title {
  padding-top: 20px;
  text-align: center;
}

.case img {
  margin-top: 10px;
}
</style>
