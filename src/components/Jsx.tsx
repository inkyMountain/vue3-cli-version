import { onMounted, reactive, ref } from 'vue';

export default {
  setup() {
    const rootRef = ref(null);
    const value = reactive({
      value: 'jsx component value'
    });

    onMounted(() => {
      console.log('rootRef', rootRef);
    });

    return () => <div ref={rootRef}>{value.value}</div>;
  }
};
