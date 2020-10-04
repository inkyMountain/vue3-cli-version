<script lang="ts">
import { defineComponent, h, onMounted } from 'vue'
/* eslint-disable-next-line */
import { ConcreteComponent } from 'vue'

export default defineComponent({
  setup(this, props, {emit}) {
    console.log('props.modalValue', props.modelValue)
    onMounted(() => {
      console.log('jsx component on mounted')
      setTimeout(() => {
        emit('update:modelValue', 'xxx')
      }, 2000);
    })
    return () => h('div', [props.modelValue, 'indicator'])
  },

  props: ['modelValue'],
})
</script>

<!-- 单文件组件中使用 jsx 时，不支持 scoped 关键字。 -->
<style lang="less" scoped>
.xxx {
  border: lightskyblue 2px solid;
}
</style>
