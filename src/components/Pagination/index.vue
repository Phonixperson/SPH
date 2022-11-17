<template>
  <div class="pagination">
    <button @click="prev" :disabled="pageNo==1">上一页</button>
    <button @click="toFirst" :class="{active:pageNo == 1}">1</button>
    <button v-show="pageNo > parseInt((continues + 1) / 2)">···</button>

    <span v-for="(page,index) in startAndEnd.end" :key="index" >
      <button v-if="page >= startAndEnd.start" @click="toPageClick(page)" :class="{active:pageNo == page}">{{page}}</button>
    </span>

    <button v-show="totalPage - pageNo > parseInt((continues + 1) / 2)">···</button>
    <button @click="$emit('getPageNo',totalPage)" :class="{active:pageNo==totalPage}">{{ totalPage }}</button>
    <button @click="next" :disabled="pageNo==totalPage">下一页</button>

    <button style="margin-left: 30px" >共 {{ total }} 条</button>
  </div>
</template>
  
  <script>
export default {
  name: "Pagination",
  props: ["pageSize", "pageNo", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startAndEnd() {
      let start, end;
      if (this.totalPage < this.continues) {
        start = 1;
        end = this.totalPage;
      } else {
        if (this.pageNo <= parseInt((this.continues + 1) / 2)) {
          start =  2;
          end = this.continues;
        } else if (this.pageNo >= this.totalPage - parseInt((this.continues + 1)/ 2)) {
          start =  this.totalPage - this.continues + 1;
          end = this.totalPage - 1;
        } else {
          start =  this.pageNo - parseInt(this.continues  / 2);
          end =  this.pageNo + parseInt(this.continues / 2);
        }
       
      }
      return {
          start,end
      }
    },
  },
  methods:{
    prev(){
      this.$emit('getPageNo',this.pageNo - 1)
    },
    toFirst(){
      this.$emit('getPageNo',1)
    },
    toPageClick(page){
      this.$emit('getPageNo',page)
    },
    next(){
      this.$emit('getPageNo',this.pageNo + 1)
    }
  }
};
</script>
<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
