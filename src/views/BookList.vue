<template>
  <div>
    <h2>book------</h2>
    <h2>{{ nameInfo }}</h2>
    <h2>{{ ageInfo }}</h2>
    <h2>Book TotalPrice: {{ totalPrice }}</h2>
    <h2>Book TotalPrice: {{ totalPriceMoreThanThree(3) }}</h2>
  </div>
</template>

<script setup>
import { useGetters } from '../hooks'

const { nameInfo, ageInfo, totalPrice, totalPriceMoreThanThree } = useGetters([
  'nameInfo',
  'ageInfo',
  'totalPrice',
  'totalPriceMoreThanThree'
])
// const {
//   sName,
//   sAge
// }  = useGetters({
//   sName: 'nameInfo',
//   sAge: 'ageInfo'
// })
</script>

<style lang="scss" scoped></style>
