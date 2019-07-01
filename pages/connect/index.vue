<template>
  <!-- 联系我们 -->
  <section class="connect-us">
    <!-- 流程 -->
    <article class="process">
      <h2 class="title br__primary">彼瑞教育合作业务流程</h2>
      <div class="flow-chart">
        <div class="step-1">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#br-ren"></use>
          </svg>
          <div class="about">访问biruicloud 了解彼瑞教育</div>
          <span class="line"></span>
        </div>
        <div class="step-2">
          <div class="top">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#br-woshou"></use>
            </svg>
            <span>您的公司已注册，请用公司基本信息申请账户详细了解</span>
          </div>
          <div class="bottom">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#br-kaisuo"></use>
            </svg>
            <span>
              您的公司未注册，请到“
              <a href="/support/apply" class="surrport-link">服务与支持</a>” 申请账户详细了解
            </span>
          </div>
        </div>
        <div class="step-3">
          <span class="line"></span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#br-hezuo"></use>
          </svg>
          <div class="co-operate">开展业务合作</div>
        </div>
      </div>
    </article>
    <!-- 更多资源 -->
    <article class="more-info">
      <h2 class="title br__primary">更多资源</h2>
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#br-yingxiao"></use>
          </svg>
          <a href="http://wn90674.cn/%E4%BA%A7%E5%93%81%E6%89%8B%E5%86%8C.pdf" target="_black">产品手册</a>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#br-huobanzhengze"></use>
          </svg>
          <div>伙伴准则</div>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#br-huobanxieyi"></use>
          </svg>
          <div>伙伴协议</div>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      arr: ['济南工程职业技术学院', '廊坊职业技术学院']
    }
  }
}
</script>

<style lang="scss" scoped>
$bg-color: #f8f9fc;
$border-size: 6px;
.connect-us {
  background-color: $bg-color;
  .title {
    padding-top: 30px;
    text-align: center;
    font-size: 36px;
    line-height: 50px;
  }

  svg {
    width: 40px;
    height: 40px;
  }
  .process {
    .flow-chart {
      margin: 15px auto;
      padding: 45px 0 75px;
      width: 1200px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;

      // 箭头
      .line {
        position: absolute;
        top: 20px;
        left: 40px;
        width: 217px;
        height: 2px;
        background-color: #999;
        &::after {
          position: absolute;
          top: -5px;
          right: -12px;
          content: "";
          border-top: $border-size solid transparent;
          border-right: $border-size solid transparent;
          border-bottom: $border-size solid transparent;
          border-left: $border-size solid #999;
        }
      }

      .step-1 {
        position: relative;
        .about {
          position: absolute;
          z-index: 100;
          top: 50px;
          left: -29px;
          width: 100px;
          line-height: 20px;
        }
      }
      .step-3 {
        position: relative;
        .line {
          left: -223px;
        }
        svg {
          border: 1px solid;
          border-radius: 50%;
        }
        .co-operate {
          position: absolute;
          z-index: 100;
          top: 42px;
          left: -22px;
          width: 100px;
          line-height: 20px;
        }
      }
      .step-2 {
        position: relative;
        width: 450px;
        height: 180px;
        border-radius: 35px;
        border: 1px solid;
        div {
          padding: 0 10px;
          position: absolute;
          left: 50%;
          z-index: 100;
          transform: translateX(-50%);
          width: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          svg {
            margin-bottom: 10px;
            padding: 2px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 1px solid;
            background-color: $bg-color;
          }
          &.top {
            top: -24px;
          }
          &.bottom {
            bottom: -60px;
          }
        }
      }
      .surrport-link {
        font-weight: bold;
      }
    }
  }

  .more-info {
    padding-bottom: 30px;
    font-size: 14px;
    ul {
      list-style: none;
      width: 900px;
      margin: 15px auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        flex: 1;
        border: 1px solid #ccc;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 90px;
        svg {
          margin: 0 20px;
        }
      }
    }
  }
}
</style>
