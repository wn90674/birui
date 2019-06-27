<template>
  <!-- 训练（题库） -->
  <div class="exercise">
    <section>
      <h2 class="title br__primary">彼瑞iMAP - 题库</h2>
      <p class="br__text">
        智能题库云平台面向院校各专业开展强化理论基础训练与考试教学活动而设计开发的智能化、开放式题库云平台，进一步提高学生的应用能力，拓展学生的多行业视野，
        全面提升学生的管理会计综合素养。
      </p>
    </section>
    <section class="content">
      <h3 class="subtitle br__primary">产品特色</h3>
      <ul>
        <li v-for="(item,index) in contentList" :key="index">
          <!-- <i class="icon">{{index+1}}</i> -->
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#br-${iconList[index]}`"></use>
          </svg>
          <h4>{{item.title}}</h4>
          <p></p>
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
      iconList: ['tiku', 'qushi', 'shezhi', 'suiji', 'lianghua', 'miaozhun'],
      contentList: [
        {
          title: '自带配套理论题库',
          contents: '课程根据主流管理会计教材的知识点分布情况，匹配了1000多道高质量的知识点考题',
          url: '',
        },
        {
          title: '支持全时学情分析',
          contents: '全时记录，分析学生完成的时间、频率、时长等行为',
          url: '',
        },
        {
          title: '支持教师自主命题',
          contents: '系统支持教师根据教学安排及授课目标、自主导入知识点题库、自主组卷',
          url: '',
        },
        {
          title: '支持随机组合抽题',
          contents: '系统可以对学生的考题自动随机组卷，支持固定、无序、随机多种组卷方式，实现一人一套个性化试卷',
          url: '',
        },
        {
          title: '支持量化自动评价',
          contents: '对实践教学及理论知识点的考核，系统可以自动进行数据化评价',
          url: '',
        },
        {
          title: '支持全题型组卷',
          contents: '单选、多选、判断及主观题任意组卷',
          url: '',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.exercise {
  h2.title {
    margin-bottom: 20px;
    padding: 15px 0;
    border-bottom: 1px solid;
  }

  h3.subtitle {
    margin-top: 15px;
    padding: 5px 0;
    font-size: 16px;
  }
  .content ul {
    padding-left: 0;
    list-style: none;
    display: grid;
    grid-template-rows: repeat(3, 33.3%);
    grid-template-columns: 50% 50%;
    grid-gap: 0 15px;
    li {
      margin: 20px 0;
      display: grid;
      grid-template-rows: 50px auto;
      grid-template-columns: 60px auto;
      text-align: left;
      .icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        padding: 5px;
        border: 1.5px solid #0967b6;
        fill: #0967b6;
      }
      h4 {
        font-size: 14px;
        line-height: 40px;
      }
      p {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>
