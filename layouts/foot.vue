<template>
  <footer class="foot">
    <section class="container">
      <div class="left">
        <h4 class="title">彼瑞教育</h4>
        <p
          class="intro"
        >北京彼瑞教育科技有限公司(简称彼瑞教育)，专注于高效实践教学研究的科技型教育服务机构，坚持搭建院校应用型人才培养与产业人才需求桥梁的发展理念，通过对现代企业人才需求和技术发展方向的理解与把握，利用技术创新和专业研究助力于高校推动实践教学内涵改革、师资能力的提升以及教学成果的创新。</p>
      </div>
      <img src="/img/wechart.png" class="wechart" alt="微信公众号">
      <ul class="right">
        <li v-for="(item,index) in linkList" :key="index">
          <a :href="item.url" target="_blank" class="link">{{item.title}}</a>
        </li>
      </ul>
    </section>
    <section class="copyright">版权所有：北京彼瑞教育科技有限公司 ©2019 京ICP备19025107号</section>
  </footer>
</template>

<script>

export default {
  data: function () {
    return {
      linkList: [
        { title: '财政部', url: 'http://www.mof.gov.cn/index.htm' },
        { title: '中国审计数字在线', url: 'http://www.icnao.cn/' },
        { title: 'CMA', url: 'https://www.imanet.org.cn/cma/' },
        { title: 'ACCA', url: 'https://www.accaglobal.com/africa/en.html' },
        { title: '中国国家数字图书馆', url: 'http://mylib.nlc.cn/web/guest' },
        { title: '中国知网', url: 'http://www.cnki.net/' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.foot {
  margin-top: 30px;
  background-color: #f1eeed;
}
.foot .container {
  display: flex;
  justify-content: space-around;
  max-width: 1100px;
  min-height: 50px;
  overflow: hidden;
  margin: 0 auto;
  padding: 8px 0 20px;
  .left {
    flex: 3;
    h4.title {
      margin-bottom: 10px;
      height: 30px;
      text-align: left;
      line-height: 30px;
      font-weight: bold;
      font-size: 16px;
      border-bottom: 1px dashed #ccc;
    }
    .intro {
      font-size: 12px;
      line-height: 20px;
    }
  }
  img.wechart {
    margin: 0 30px;
    width: 100px;
    height: 100px;
  }
  .right {
    flex: 2;
    list-style: none;
    display: grid;
    grid-template-rows: repeat(4, 25%);
    grid-template-columns: repeat(2, 50%);
    font-size: 12px;
    grid-gap: 10px;
    li {
      display: flex;
      align-items: center;
      border-bottom: 1px dashed #ccc;
    }
  }
}
.copyright {
  text-align: center;
  line-height: 50px;
  border-top: 1px solid;
  background-color: #ccc;
}
</style>



