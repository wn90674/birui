<template>
  <!-- 常见问题&解决对策 -->
  <section class="ques-answer">
    <h2 class="title br__primary">常见问题解答</h2>
    <ul class="content">
      <li v-for="item in QAList">
        <p class="question">Q: {{item.question}}?</p>
        <p class="answer">A: {{item.answer}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      QAList: []
    }
  },
  created() {
    this.getQAList()
  },
  methods: {
    getQAList() {
      axios.get('/data/QA.json').then(res => {
        this.QAList = res.data;
      }).catch(err => {
        
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.ques-answer {
  h2.title {
    margin: 20px 0 20px;
    padding: 15px 0;
    font-size: 20px;
    border-bottom: 1px solid;
  }
  ul.content {
    list-style: decimal;
    font-size: 14px;
    li {
      margin: 10px 0;
      p {
        line-height: 24px;
      }
    }
  }
}
</style>
