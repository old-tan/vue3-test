<template>
  <div>
    <h1>Home Page</h1>
    <h2>home counter: {{ sCounter }}</h2>
    <h2>home name: {{ sName }}</h2>
    <h2>home age: {{ sAge }}</h2>
  </div>
</template>

<script setup>
import { useState } from '../hooks'
const {
  counter: sCounter,
  name: sName,
  age: sAge
} = useState(['counter', 'name', 'age'])
// const {
//   counter: sCounter,
//   name: sName,
//   age: sAge
// } = useState({
//   counter: state => state.counter,
//   name: state => state.name,
//   age: state => state.age,
// })
</script>

<style lang="scss" scoped></style>
