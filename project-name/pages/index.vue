<template>
  <div>
    <Navbar></Navbar>
    <b-container class="border border-5 rounded mt-4">
      <!-- Header -->
      <b-row class="bg-secondary mb-4">
        <CustomHeader class="p-2 pl-3 pt-3"/>
      </b-row>
      <!-- Total Data -->
      <b-row align-h="center mb-4">
        <summarydata/>
      </b-row>
      <!-- buttons -->
      <b-row align-h="around" class="mb-4 mx-5">
        <b-col cols="3" class="m-0 p-0"><PlusKreditor/></b-col>
        <b-col cols="3"></b-col>
        <b-col cols="3"></b-col>
      </b-row>
      <!-- Table -->
      <b-row>
        <MainTable/>
      </b-row>
      
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Summarydata from '../components/Summarydata.vue';
import Navbar from '../components/Navbar.vue';
import CustomHeader from '../components/CustomHeader.vue';
import PlusKreditor from '../components/PlusKreditor.vue';
import MainTable from '../components/MainTable.vue';

export default Vue.extend({
    name: "IndexPage",
    components: {
      Summarydata,
      Navbar,
      CustomHeader,
      PlusKreditor,
      MainTable
},

})
</script>

<style scoped>
b-container {
  background-color: blue;
}
</style>
