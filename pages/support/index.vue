<template>
  <!-- 产品操作手册 -->
  <section class="help-document">
    <h2 class="title br__primary">产品操作手册</h2>
    <ul class="filelist">
      <li v-for="file in helpDocList">
        <a class="filename" :href="file.url" target="_blank">{{file.filename}}</a>
        <div class="bottom">
          <div class="left">
            <span>
              <i class="el-icon-view"></i>
              260
            </span>
            <span>
              <i class="el-icon-download"></i>
              215
            </span>
            <span>{{file.date}}</span>
            <span>{{file.size}}</span>
            <span>{{file.version}}</span>
          </div>
          <div class="right">
            <a class="download" :href="file.url" :download="file.filename">下载</a>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      helpDocList: [
        { filename: '智能云平台操作手册', size: '1.25M', date: '2019-06-27', version: 'v1.0', url: 'http://wn90674.cn/%E6%99%BA%E8%83%BD%E4%BA%91%E5%B9%B3%E5%8F%B0%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C.pdf' },
        { filename: '管理员平台说明书', size: '1.09M', date: '2019-06-27', version: 'v.10', url: 'http://wn90674.cn/%E7%AE%A1%E7%90%86%E5%91%98%E5%B9%B3%E5%8F%B0%E8%AF%B4%E6%98%8E%E4%B9%A6.pdf' },
        { filename: '学生端平台说明书', size: '5.86M', date: '2019-06-27', version: 'v1.0', url: 'http://wn90674.cn/%E5%AD%A6%E7%94%9F%E7%AB%AF%E5%B9%B3%E5%8F%B0%E8%AF%B4%E6%98%8E%E4%B9%A6.pdf' },
        { filename: '教师端平台说明书', size: '4.96M', date: '2019-06-28', version: 'v1.0', url: 'http://wn90674.cn/%E6%95%99%E5%B8%88%E7%AB%AF%E5%B9%B3%E5%8F%B0%E8%AF%B4%E6%98%8E%E4%B9%A6.pdf' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.help-document {
  h2.title {
    margin: 20px 0 20px;
    padding: 15px 0;
    font-size: 20px;
    border-bottom: 1px solid;
  }
  .filelist {
    list-style: none;
    font-size: 14px;
    li {
      margin: 10px 0;
      .filename {
        padding: 5px 0;
        &:hover {
          color: #0967b6;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        font-family: "Microsoft YaHei,Arial";
        .left {
          padding: 5px;
          display: flex;
          justify-content: flex-start;
          span {
            padding: 0 10px;
            height: 15px;
            color: #999;
            & + span {
              border-left: 1px solid;
            }
          }
        }
      }
    }
  }
}
</style>
