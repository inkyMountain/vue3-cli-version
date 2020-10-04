<template>
  <Jsx v-model="inputValue" />
  <input type="text" v-model="inputValue">
  {{ person.name.value.firstName }}{{ person.age.value }}
  <button @click="person.name.value.firstName = 'chen'">change first name</button>
  <button @click="weather = 'xxx'">change weather</button>
  <div class="weather">{{ weather }}</div>
  <!-- <component :is="dynamicComponentName" v-model="inputValue" /> -->
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch, watchEffect } from 'vue'
import Jsx from './components/Jsx.vue'

export default defineComponent({
  name: 'App',
  components: {
    Jsx,
  },

  setup() {
    const person = reactive({
      name: {
        firstName: 'c',
        lastName: 'yitao',
      },
      age: 24,
    })

    const inputValue = ref('init input value')

    const dynamicComponentName = ref('Jsx')

    const weather = ref('sunny')

    setTimeout(() => {
      person.age++
    }, 2000)

    watch(
      () => person.name.firstName + person.age.toString(),
      () => {},
      {
        immediate: true,
        deep: true,
        onTrack() {},
        onTrigger() {},
      }
    )

    // setTimeout(() => {
    //   dynamicComponentName.value = 'Jsx'
    // }, 3000)

    const { name, age } = toRefs(person)

    watchEffect(() => {
      console.log('inputValue', inputValue.value)
    })

    return {
      person: {
        name,
        age,
      },
      weather,
      dynamicComponentName,
      inputValue,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
