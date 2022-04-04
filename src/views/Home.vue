<template>
  <div class="home">
    <button @click="updateArr">修改操作</button>
    <span @click="handledetail">我是home页面</span>
    <span>{{ obj.a }}</span>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <hello-world :msg="title"></hello-world>
    <bootstrap-date-input
      data-date-picker="activated"
      type="text"
      attr="ssss"
      class="date-picker-theme-dark"
    ></bootstrap-date-input>
    <base-input
      label="Username:"
      v-model="username"
      required
      v-on:focus="onFocus"
      v-on:input="onInput"
      placeholder="Enter your username"
    ></base-input>
    <base-checkbox v-model="lovingVue"></base-checkbox>
    <div style="margin-top: 30px">
      <el-select v-model="value" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div id="main" style="width:300px;height:400px;margin-top:160px;"></div>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import BootstrapDateInput from "../components/bootstrap-date-input";
import BaseInput from "../components/base-input";
import BaseCheckbox from "../components/base-checkbox";
export default {
  name: "Home",
  data() {
    return {
      title: "世界",
      username: "",
      lovingVue: "",
      arr: [1, 2, 3, 4, 5, 6],
      myoption: {
         title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      obj: {},
    };
  },
  components: {
    HelloWorld,
    BootstrapDateInput,
    BaseInput,
    BaseCheckbox,
  },
  mounted() {
    console.log(this.$root.foo);
    const chartDom = document.querySelector('#main')
    this.$echarts.init(chartDom).setOption(this.myoption);
    console.log(chartDom)
  },
  methods: {
    updateArr() {
      this.$set(this.arr, 2, "999999");
      this.$set(this.obj, "a", "第三方公司的发生大幅度");
      // this.arr.splice(3)
    },
    replica(copy) {
      return JSON.parse(JSON.stringify(copy));
    },
    onFocus() {
      console.log("000");
    },
    onInput(value) {
      console.log(value);
    },
    handledetail() {
      let age = 5;
      this.$router.push(`/home/${age}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  background-color: lightgray;
}
</style>
