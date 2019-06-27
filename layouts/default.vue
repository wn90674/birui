<template>
  <div>
    <br-head></br-head>
    <nuxt class="br_section"/>
    <foot/>
  </div>
</template>


<script>
import BrHead from './brhead'
import Foot from './foot'
export default {
  components: {
    BrHead,
    Foot,
  }
}
</script>

<style lang="scss">
$primary-color: #0967b6 !global;
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

body,
 div,
 dl,
 dt,
 dd,
 ul,
 ol,
 li,
 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 pre,
 code,
 form,
 fieldset,
 legend,
 input,
 button,
 textarea,
 p,
 blockquote,
 table,
 th,
 td {
  margin: 0;
  padding: 0;
}
.br_section {
  font-size: 0;
  /* background-color: rgba(200, 150, 100, 0.5); */
}
.br_section .title {
  margin: 0;
}
.br__container {
  width: 1100px;
  margin: 0 auto;
}
@media screen and (min-width: 800px) {
  .br__container {
    width: 840px;
  }
}
@media screen and (min-width: 1440px) {
  .br__container {
    width: 1000px;
  }
}
a {
  text-decoration: none;
  color: #333;
  &:hover {
    cursor: pointer;
    color: $primary-color;
  }
}
.br__primary {
  color: #0967b6;
}
.br__text {
  text-indent: 30px;
  font-size: 14px;
  line-height: 24px;
}

// iconfont
.br {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
