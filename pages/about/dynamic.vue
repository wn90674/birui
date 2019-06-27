<template>
  <!-- 企业动态 -->
  <div class="dynamic-news">
    <h2 class="title br__primary">管理会计实践教学探索与创新”研讨会</h2>
    <img src="/img/about/dynamic-1.jpg" width="100%" alt="研讨会">
    <p
      class="br__text"
    >为推动管理会计实践教学应用与创新的发展，加强管理会计理论教学与实践教学的深度融合，切实提高管理会计的教学效果。彼瑞教育通过请专家实践演讲，实践操作，教让教师了解先进的管理会计教育教学理念，掌握“管理会计”课程实施与传统课程的区别以及课程设计的方案，熟悉通过教学案例中的项目任务映射出管理会计工具和方法的具体应用，掌握如何通过典型多行业案例提升学生管理会计工具和方法的灵活运用能力。同时，针对性地推荐对应的教学策略，更加个性化和更快普及，带来教学效果和学习绩效的整体提升。</p>
    <article class="meetting">
      <h3 class="subtitle">会议内容</h3>
      <ul class="meeting-list">
        <li>坚持管理会计基础能力培养，理念融入</li>
        <li>理清管理会计工具和方法的一般应用场景、步骤</li>
        <li>拓展相同工具和方法在不同行业案例中的应用</li>
      </ul>
    </article>
    <article class="position">
      <h3 class="subtitle">会议时间与地点</h3>
      <p>会议在1-3月份，分别在北京、江苏和河北等地</p>
      <!-- 活动图片 -->
      <img src="/img/about/dynamic-2.jpg" width="100%" alt="活动图片1">
      <img src="/img/about/dynamic-3.jpg" width="100%" alt="活动图片2">
    </article>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dynamic-news {
  h2.title {
    padding: 15px 0;
    border-bottom: 1px solid;
    & + img {
      margin: 15px 0;
    }
  }
  h3.subtitle {
    padding: 7px 0;
  }
  .meeting-list {
    padding-left: 40px;
    list-style: decimal;
    li {
      padding: 5px 0;
      font-size: 13px;
    }
  }
  .position p {
    text-indent: 25px;
    font-size: 13px;
    margin-bottom: 15px;
  }
}
</style>
