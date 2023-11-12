<template>
  <div>
    <div>
      <h1>store counter: {{ sCounter }}</h1>
      <h1>store name: {{ sName }}</h1>
      <h1>store age: {{ sAge }}</h1>
      <el-button type="primary" @click="increment">+1</el-button>
      <el-button type="primary" @click="decrement">-1</el-button>
      <el-button type="primary" @click="increment_n(userInfo)">+10</el-button>

      <!-- <HomePage />
      <BookList /> -->
    </div>
    <div>
      <form style="padding: 20px 0">
        <label>{{ $t("language") }}</label>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="zh">zh</option>
        </select>
      </form>
      <p>{{ $t("hello") }}</p>
      <p>{{ $t("myName", { name: "airy" }) }}</p>
      <p v-t="{ path: 'welcome', args: { name: 'airy' } }"></p>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view />

    <!-- <div id="string-syntax">
      <p v-t="'hello'"></p>
    </div> -->

    <!-- <el-switch v-model="loading" /> -->

    <!-- <el-skeleton
      :loading="loading"
      animated
     >
      <template #template>
        <div>
          <el-skeleton-item variant="text" class="text" />
          <br>
          <el-skeleton-item variant="h1" class="h1" />
          <br>
          <el-skeleton-item variant="button" class="button" />
          <el-skeleton-item variant="button" class="button" />
          <el-skeleton-item variant="button" class="button" />
          <el-skeleton-item variant="button" class="button" />
          <el-skeleton-item variant="button" class="button" />
          <el-skeleton-item variant="button" class="button" />
        </div>
      </template>
      <template #default>
        <HelloWorld />
        <h2>{{ counter }}</h2>
        <el-row class="mb-4">
          <el-button>Default</el-button>
          <el-button @click="addCounter" type="primary">Primary + </el-button>
          <el-button @click="subCounter" type="success">Success - </el-button>
          <el-button type="info">Info</el-button>
          <el-button type="warning">Warning</el-button>
          <el-button type="danger">Danger</el-button>
        </el-row>
      </template>
    </el-skeleton> -->
  </div>
</template>

<script setup>
import { reactive } from "vue"
import { useI18n } from "vue-i18n"
import { INCREMENT_N } from "./store/mutation-types"
import { useState, useMutations } from "./hooks"

const { t, locale } = useI18n()
console.log(t)
const { counter: sCounter, name: sName, age: sAge } = useState(["counter", "name", "age"])
const userInfo = reactive({
  n: 10,
})
const { increment, decrement, increment_n } = useMutations(["increment", "decrement", INCREMENT_N])

// import {
//   useCounter,
//   useSkeleton
// } from './hooks'

// // counter
// const { counter, addCounter, subCounter } = useCounter(1)
// // skeleton
// const { loading } = useSkeleton()
</script>

<style scoped>
.text {
  width: 80px;
}

.h1 {
  width: 20px;
  margin: 20px 0;
}

.button {
  width: 90px;
  height: 34px;
  margin-right: 10px;
}
</style>
