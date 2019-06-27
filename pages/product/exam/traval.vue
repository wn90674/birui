<template>
<!-- 旅游案例 -->
  <section class="br__container">
    <header class="header">
      <img src="/img/logo2.jpg" width="100px" alt="在线旅游">
      <hgroup class="title-group">
        <h1 class="title br__primary">管理会计竞赛实训案例</h1>
        <h2 class="subtitle">在线旅游</h2>
      </hgroup>
    </header>
    <section class="content">
      <h3 class="subtitle br__primary">案例概况</h3>
      <p class="br__text">
        通过在线旅游行业管理会计实践案例，使学生体会到新时代下新的企业运营模式，了解“互联网+旅游”
        并不是简单的旅游信息数字化, 是能够有效应用物联网、移动互联网等技术对旅游信息进行高效获取、存
        储、处理，实现资源与社会资源共享的集约化。理解这不仅是对在线旅游行业人才提出了新挑战，更多地
        强调专业相关理论知识和技术兼具的复合型人才，深刻思考财务人员的更新性、时代性，以适应时代发展
        的要求。
      </p>
      <ul>
        <li v-for="(item,index) in contentList" :key="index">
          <i class="icon">{{index+1}}</i>
          <h4 class="subtitle br__primary">{{item.title}}</h4>
          <p></p>
          <p class="br__text">{{item.contents}}</p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>

export default {
  data: function () {
    return {
      contentList: [
        {
          title: '人才的跨学科性',
          contents: '在人才培养上不仅重视管理会计相关基本理论知识的获取, 而且注重信息化的专业知识；能有效地分析、利用社会和企业信息达到既定目的。',
          url: '',
        },
        {
          title: '人才接受和学习新事物的能力',
          contents: '相对于传统旅游而言, 在线旅游公司对人才接受和学习新事物的能力要求更为注重,尤其是应用新媒体的能力。通过实践案例，让学生了解企业未来发展趋势, 关注行业发展动态, 关注网络经济背景下的人才需求特征。根据时代的发展和行业发展做出适时的更新, 努力培养适合未来行业发展需要的新型人才。',
          url: '',
        },
        {
          title: '真实的职业体验',
          contents: '通过在线旅游企业的经营模式和经营业务，了解在线旅游企业的经营管理，让学生能开阔眼界、拓展思路，让学生获得真实的职业体验, 再结合自身的认知提高其创新、创业能力。',
          url: '',
        }
      ]
    }
  }
}
</script>

<style scoped>
section.content {
  margin-top: 15px;
}
.header {
  margin-top: 20px;
  display: flex;
}
.header .title-group {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.header .title-group h1 {
  margin: 0;
}
h2.subtitle {
  color: #999;
}
h3.subtitle {
  margin-bottom: 10px;
}
.content ul {
  padding-left: 0;
}

.content li {
  margin: 15px 0;
  display: grid;
  grid-template-rows: 40px auto;
  grid-template-columns: 60px auto;
  text-align: left;
}
.content li .icon {
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
.content li .subtitle {
  line-height: 40px;
}
</style>
